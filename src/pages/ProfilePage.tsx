import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { mockApi } from '@/api/mockApi';
import { useAuthStore } from '@/stores/authStore';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { toast } from 'sonner';

const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  bio: z.string().optional(),
  location: z.string().optional(),
  hourlyRate: z.coerce.number().min(0).optional(),
  skills: z.string().optional(),
  experience: z.string().optional(),
});

export default function ProfilePage() {
  const { user, updateUser } = useAuthStore();
  
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || '',
      bio: user?.bio || '',
      location: user?.location || '',
      hourlyRate: user?.hourlyRate || 0,
      skills: user?.skills?.join(', ') || '',
      experience: user?.experience || '',
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name,
        bio: user.bio || '',
        location: user.location || '',
        hourlyRate: user.hourlyRate || 0,
        skills: user.skills?.join(', ') || '',
        experience: user.experience || '',
      });
    }
  }, [user, form]);

  const onSubmit = async (data: z.infer<typeof profileSchema>) => {
    try {
      const skillsArray = data.skills?.split(',').map(s => s.trim()).filter(Boolean) || [];
      const response = await mockApi.users.updateProfile({
        ...data,
        skills: skillsArray,
      });
      
      if (response.success && response.data) {
        updateUser(response.data.user);
        toast.success('Profile updated successfully!');
      } else {
        toast.error(response.error || 'Failed to update profile');
      }
    } catch (error) {
      toast.error('An error occurred while updating profile');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
                <CardDescription>
                  Update your profile information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bio</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about yourself..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input placeholder="City, Country" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {user?.role === 'freelancer' && (
                      <>
                        <FormField
                          control={form.control}
                          name="hourlyRate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Hourly Rate ($)</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="75" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="skills"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Skills</FormLabel>
                              <FormControl>
                                <Input placeholder="React, Node.js, TypeScript" {...field} />
                              </FormControl>
                              <FormDescription>
                                Comma-separated list of skills
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="experience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Experience</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Describe your professional experience..."
                                  className="min-h-[120px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </>
                    )}

                    <Button type="submit" className="w-full">
                      Save Changes
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
