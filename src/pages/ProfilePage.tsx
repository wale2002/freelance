// // // src/pages/ProfilePage.tsx (updated)
// // import { useEffect } from "react";
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import * as z from "zod";
// // import { updateProfile, getProfile } from "@/lib/api"; // Replace mockApi
// // import { useAuthStore } from "@/stores/authStore";
// // import { Header } from "@/components/Header";
// // import { Sidebar } from "@/components/Sidebar";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import {
// //   Form,
// //   FormControl,
// //   FormField,
// //   FormItem,
// //   FormLabel,
// //   FormMessage,
// //   FormDescription,
// // } from "@/components/ui/form";
// // import { toast } from "sonner";

// // const profileSchema = z.object({
// //   name: z.string().min(2, "Name must be at least 2 characters"),
// //   bio: z.string().optional(),
// //   location: z.string().optional(),
// //   hourlyRate: z.coerce.number().min(0).optional(),
// //   skills: z.string().optional(),
// //   experience: z.string().optional(),
// //   // Add other fields like portfolioWebsite if needed
// // });

// // export default function ProfilePage() {
// //   const { user, updateUser } = useAuthStore();

// //   const form = useForm<z.infer<typeof profileSchema>>({
// //     resolver: zodResolver(profileSchema),
// //     defaultValues: {
// //       name: user?.name || "",
// //       bio: user?.bio || "",
// //       location: user?.location || "",
// //       hourlyRate: user?.hourlyRate || 0,
// //       skills: user?.skills?.join(", ") || "",
// //       experience: user?.experience || "",
// //     },
// //   });

// //   // Re-fetch profile on mount if token exists (in case store is stale)
// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       const token = localStorage.getItem("token");
// //       if (token && token !== "undefined") {
// //         try {
// //           const response = await getProfile();
// //           if (response.data.success && response.data.data) {
// //             updateUser(response.data.data);
// //             form.reset({
// //               name: response.data.data.name,
// //               bio: response.data.data.bio || "",
// //               location: response.data.data.location || "",
// //               hourlyRate: response.data.data.hourlyRate || 0,
// //               skills: response.data.data.skills?.join(", ") || "",
// //               experience: response.data.data.experience || "",
// //             });
// //           }
// //         } catch (error) {
// //           toast.error("Failed to refresh profile");
// //         }
// //       }
// //     };
// //     fetchProfile();
// //   }, [form, updateUser]);

// //   const onSubmit = async (data: z.infer<typeof profileSchema>) => {
// //     try {
// //       const skillsArray =
// //         data.skills
// //           ?.split(",")
// //           .map((s) => s.trim())
// //           .filter(Boolean) || [];
// //       const response = await updateProfile({
// //         ...data, // Includes name, even if not in type (backend may handle)
// //         skills: skillsArray,
// //       });

// //       if (response.data.success && response.data.data) {
// //         updateUser(response.data.data);
// //         toast.success("Profile updated successfully!");
// //       } else {
// //         toast.error("Failed to update profile");
// //       }
// //     } catch (error) {
// //       toast.error("An error occurred while updating profile");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col">
// //       <Header />
// //       <div className="flex flex-1">
// //         <Sidebar />
// //         <main className="flex-1 p-6 overflow-auto">
// //           <div className="max-w-3xl mx-auto">
// //             <Card>
// //               <CardHeader>
// //                 <CardTitle>Edit Profile</CardTitle>
// //                 <CardDescription>
// //                   Update your profile information
// //                 </CardDescription>
// //               </CardHeader>
// //               <CardContent>
// //                 <Form {...form}>
// //                   <form
// //                     onSubmit={form.handleSubmit(onSubmit)}
// //                     className="space-y-6"
// //                   >
// //                     <FormField
// //                       control={form.control}
// //                       name="name"
// //                       render={({ field }) => (
// //                         <FormItem>
// //                           <FormLabel>Full Name</FormLabel>
// //                           <FormControl>
// //                             <Input {...field} />
// //                           </FormControl>
// //                           <FormMessage />
// //                         </FormItem>
// //                       )}
// //                     />

// //                     <FormField
// //                       control={form.control}
// //                       name="bio"
// //                       render={({ field }) => (
// //                         <FormItem>
// //                           <FormLabel>Bio</FormLabel>
// //                           <FormControl>
// //                             <Textarea
// //                               placeholder="Tell us about yourself..."
// //                               className="min-h-[100px]"
// //                               {...field}
// //                             />
// //                           </FormControl>
// //                           <FormMessage />
// //                         </FormItem>
// //                       )}
// //                     />

// //                     <FormField
// //                       control={form.control}
// //                       name="location"
// //                       render={({ field }) => (
// //                         <FormItem>
// //                           <FormLabel>Location</FormLabel>
// //                           <FormControl>
// //                             <Input placeholder="City, Country" {...field} />
// //                           </FormControl>
// //                           <FormMessage />
// //                         </FormItem>
// //                       )}
// //                     />

// //                     {user?.role === "freelancer" && (
// //                       <>
// //                         <FormField
// //                           control={form.control}
// //                           name="hourlyRate"
// //                           render={({ field }) => (
// //                             <FormItem>
// //                               <FormLabel>Hourly Rate ($)</FormLabel>
// //                               <FormControl>
// //                                 <Input
// //                                   type="number"
// //                                   placeholder="75"
// //                                   {...field}
// //                                 />
// //                               </FormControl>
// //                               <FormMessage />
// //                             </FormItem>
// //                           )}
// //                         />

// //                         <FormField
// //                           control={form.control}
// //                           name="skills"
// //                           render={({ field }) => (
// //                             <FormItem>
// //                               <FormLabel>Skills</FormLabel>
// //                               <FormControl>
// //                                 <Input
// //                                   placeholder="React, Node.js, TypeScript"
// //                                   {...field}
// //                                 />
// //                               </FormControl>
// //                               <FormDescription>
// //                                 Comma-separated list of skills
// //                               </FormDescription>
// //                               <FormMessage />
// //                             </FormItem>
// //                           )}
// //                         />

// //                         <FormField
// //                           control={form.control}
// //                           name="experience"
// //                           render={({ field }) => (
// //                             <FormItem>
// //                               <FormLabel>Experience</FormLabel>
// //                               <FormControl>
// //                                 <Textarea
// //                                   placeholder="Describe your professional experience..."
// //                                   className="min-h-[120px]"
// //                                   {...field}
// //                                 />
// //                               </FormControl>
// //                               <FormMessage />
// //                             </FormItem>
// //                           )}
// //                         />
// //                       </>
// //                     )}

// //                     <Button type="submit" className="w-full">
// //                       Save Changes
// //                     </Button>
// //                   </form>
// //                 </Form>
// //               </CardContent>
// //             </Card>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// // src/pages/ProfilePage.tsx (updated)
// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { updateProfile, getProfile } from "@/lib/api"; // Replace mockApi
// import { useAuthStore } from "@/stores/authStore";
// import { Header } from "@/components/Header";
// import { Sidebar } from "@/components/Sidebar";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
//   FormDescription,
// } from "@/components/ui/form";
// import { toast } from "sonner";
// import { FileImage, FileText } from "lucide-react";

// const profileSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   bio: z.string().optional(),
//   location: z.string().optional(),
//   hourlyRate: z.coerce.number().min(0).optional(),
//   skills: z.string().optional(),
//   experience: z.string().optional(),
//   // Add other fields like portfolioWebsite if needed
// });

// export default function ProfilePage() {
//   const { user, updateUser } = useAuthStore();

//   const form = useForm<z.infer<typeof profileSchema>>({
//     resolver: zodResolver(profileSchema),
//     defaultValues: {
//       name: user?.name || "",
//       bio: user?.bio || "",
//       location: user?.location || "",
//       hourlyRate: user?.hourlyRate || 0,
//       skills: user?.skills?.join(", ") || "",
//       experience: user?.experience || "",
//     },
//   });

//   // Re-fetch profile on mount if token exists (in case store is stale)
//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = localStorage.getItem("token");
//       if (token && token !== "undefined") {
//         try {
//           const response = await getProfile();
//           if (response.data.success && response.data.data) {
//             updateUser(response.data.data);
//             form.reset({
//               name: response.data.data.name,
//               bio: response.data.data.bio || "",
//               location: response.data.data.location || "",
//               hourlyRate: response.data.data.hourlyRate || 0,
//               skills: response.data.data.skills?.join(", ") || "",
//               experience: response.data.data.experience || "",
//             });
//           }
//         } catch (error) {
//           toast.error("Failed to refresh profile");
//         }
//       }
//     };
//     fetchProfile();
//   }, [form, updateUser]);

//   const onSubmit = async (data: z.infer<typeof profileSchema>) => {
//     try {
//       const skillsArray =
//         data.skills
//           ?.split(",")
//           .map((s) => s.trim())
//           .filter(Boolean) || [];
//       const response = await updateProfile({
//         ...data, // Includes name, even if not in type (backend may handle)
//         skills: skillsArray,
//       });

//       if (response.data.success && response.data.data) {
//         updateUser(response.data.data);
//         toast.success("Profile updated successfully!");
//       } else {
//         toast.error("Failed to update profile");
//       }
//     } catch (error) {
//       toast.error("An error occurred while updating profile");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <div className="flex flex-1">
//         <Sidebar />
//         <main className="flex-1 p-6 overflow-auto">
//           <div className="max-w-3xl mx-auto space-y-8">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Edit Profile</CardTitle>
//                 <CardDescription>
//                   Update your profile information
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Form {...form}>
//                   <form
//                     onSubmit={form.handleSubmit(onSubmit)}
//                     className="space-y-6"
//                   >
//                     <FormField
//                       control={form.control}
//                       name="name"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Full Name</FormLabel>
//                           <FormControl>
//                             <Input {...field} />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={form.control}
//                       name="bio"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Bio</FormLabel>
//                           <FormControl>
//                             <Textarea
//                               placeholder="Tell us about yourself..."
//                               className="min-h-[100px]"
//                               {...field}
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={form.control}
//                       name="location"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Location</FormLabel>
//                           <FormControl>
//                             <Input placeholder="City, Country" {...field} />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     {user?.role === "freelancer" && (
//                       <>
//                         <FormField
//                           control={form.control}
//                           name="hourlyRate"
//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel>Hourly Rate ($)</FormLabel>
//                               <FormControl>
//                                 <Input
//                                   type="number"
//                                   placeholder="75"
//                                   {...field}
//                                 />
//                               </FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />

//                         <FormField
//                           control={form.control}
//                           name="skills"
//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel>Skills</FormLabel>
//                               <FormControl>
//                                 <Input
//                                   placeholder="React, Node.js, TypeScript"
//                                   {...field}
//                                 />
//                               </FormControl>
//                               <FormDescription>
//                                 Comma-separated list of skills
//                               </FormDescription>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />

//                         <FormField
//                           control={form.control}
//                           name="experience"
//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel>Experience</FormLabel>
//                               <FormControl>
//                                 <Textarea
//                                   placeholder="Describe your professional experience..."
//                                   className="min-h-[120px]"
//                                   {...field}
//                                 />
//                               </FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />
//                       </>
//                     )}

//                     <Button type="submit" className="w-full">
//                       Save Changes
//                     </Button>
//                   </form>
//                 </Form>
//               </CardContent>
//             </Card>

//             {user?.role === "freelancer" && (
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Your Portfolio</CardTitle>
//                   <CardDescription>
//                     View your uploaded portfolio items. To add more, visit the
//                     Portfolio page.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   {user.portfolio && user.portfolio.length > 0 ? (
//                     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//                       {user.portfolio.map((item: any, index: number) => (
//                         <Card key={index}>
//                           <CardContent className="p-4">
//                             {item.images && item.images.length > 0 ? (
//                               <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
//                                 <img
//                                   src={item.images[0]}
//                                   alt="Portfolio"
//                                   className="w-full h-full object-cover rounded"
//                                 />
//                               </div>
//                             ) : item.files && item.files.length > 0 ? (
//                               <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
//                                 <FileText className="w-12 h-12 text-muted-foreground" />
//                               </div>
//                             ) : (
//                               <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
//                                 <FileImage className="w-12 h-12 text-muted-foreground" />
//                               </div>
//                             )}
//                             <p className="text-sm text-muted-foreground mt-2">
//                               {`Portfolio item ${index + 1}`}
//                             </p>
//                           </CardContent>
//                         </Card>
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="py-12 text-center text-muted-foreground">
//                       No portfolio items yet. Upload your work in the Portfolio
//                       page to get started!
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// src/pages/ProfilePage.tsx (updated)
import { useEffect, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { updateProfile, getProfile, deletePortfolio } from "@/lib/api";
import { useAuthStore } from "@/stores/authStore";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription as DialogDesc,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { FileImage, FileText, Trash2 } from "lucide-react";

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  bio: z.string().optional(),
  location: z.string().optional(),
  hourlyRate: z.coerce.number().min(0).optional(),
  skills: z.string().optional(),
  experience: z.string().optional(),
  // Add other fields like portfolioWebsite if needed
});

export default function ProfilePage() {
  const { user, updateUser } = useAuthStore();
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || "",
      bio: user?.bio || "",
      location: user?.location || "",
      hourlyRate: user?.hourlyRate || 0,
      skills: user?.skills?.join(", ") || "",
      experience: user?.experience || "",
    },
  });

  // Fetch/refresh profile
  const fetchProfile = useCallback(async () => {
    try {
      const response = await getProfile();
      if (response.data.success && response.data.data) {
        updateUser(response.data.data);
        form.reset({
          name: response.data.data.name,
          bio: response.data.data.bio || "",
          location: response.data.data.location || "",
          hourlyRate: response.data.data.hourlyRate || 0,
          skills: response.data.data.skills?.join(", ") || "",
          experience: response.data.data.experience || "",
        });
      }
    } catch (error) {
      toast.error("Failed to refresh profile");
    }
  }, [updateUser, form]);

  // Re-fetch profile on mount
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const onSubmit = async (data: z.infer<typeof profileSchema>) => {
    try {
      const skillsArray =
        data.skills
          ?.split(",")
          .map((s) => s.trim())
          .filter(Boolean) || [];
      const response = await updateProfile({
        ...data,
        skills: skillsArray,
      });

      if (response.data.success && response.data.data) {
        updateUser(response.data.data);
        toast.success("Profile updated successfully!");
        setOpen(false);
      } else {
        toast.error("Failed to update profile");
      }
    } catch (error) {
      toast.error("An error occurred while updating profile");
    }
  };

  const handleDelete = async (itemId: string) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this portfolio item? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      const response = await deletePortfolio(itemId);
      if (response.data.success) {
        toast.success("Portfolio item deleted successfully!");
        await fetchProfile(); // Refresh to update UI
      } else {
        toast.error(response.data.message || "Failed to delete portfolio item");
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Failed to delete portfolio item"
      );
    }
  };

  if (user?.role !== "freelancer") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              Portfolio is only available for freelancers
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Profile Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      View and manage your details
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {user?.name && (
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Full Name</span>
                        <span>{user.name}</span>
                      </div>
                    )}
                    {user?.bio && (
                      <div className="flex justify-between items-start">
                        <span className="font-medium">Bio</span>
                        <p className="text-right max-w-xs">{user.bio}</p>
                      </div>
                    )}
                    {user?.location && (
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Location</span>
                        <span>{user.location}</span>
                      </div>
                    )}
                    {user?.role === "freelancer" && (
                      <>
                        {user?.hourlyRate && (
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Hourly Rate</span>
                            <span>${user.hourlyRate}</span>
                          </div>
                        )}
                        <div className="flex justify-between items-start">
                          <span className="font-medium">Skills</span>
                          <div className="flex flex-wrap gap-1 justify-end">
                            {user.skills?.map((skill: string) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {user?.experience && (
                          <div className="flex justify-between items-start">
                            <span className="font-medium">Experience</span>
                            <p className="text-right max-w-xs">
                              {user.experience}
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Dialog open={open} onOpenChange={setOpen}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                          Edit Profile
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[350px] max-h-[80vh]">
                        <DialogHeader>
                          <DialogTitle>Edit Profile</DialogTitle>
                          <DialogDesc>
                            Make changes to your profile here. Click save when
                            you're done.
                          </DialogDesc>
                        </DialogHeader>
                        <div className="overflow-y-auto max-h-[60vh] p-1">
                          <Form {...form}>
                            <form
                              onSubmit={form.handleSubmit(onSubmit)}
                              className="space-y-4"
                            >
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
                                        className="min-h-[80px]"
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
                                      <Input
                                        placeholder="City, Country"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              {user?.role === "freelancer" && (
                                <>
                                  <FormField
                                    control={form.control}
                                    name="hourlyRate"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Hourly Rate ($)</FormLabel>
                                        <FormControl>
                                          <Input
                                            type="number"
                                            placeholder="75"
                                            {...field}
                                          />
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
                                          <Input
                                            placeholder="React, Node.js, TypeScript"
                                            {...field}
                                          />
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
                                            className="min-h-[100px]"
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
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              </div>

              {/* Portfolio */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Your Portfolio</CardTitle>
                    <CardDescription>
                      View your uploaded portfolio items. To add more, visit the
                      Portfolio page.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {user.portfolio && user.portfolio.length > 0 ? (
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {user.portfolio.map((item: any, index: number) => (
                          <Card key={item._id || index}>
                            <CardContent className="p-4 space-y-3">
                              {item.images && item.images.length > 0 ? (
                                <div className="space-y-2">
                                  {item.images.map(
                                    (
                                      img: {
                                        url: string;
                                        originalName?: string;
                                      },
                                      i: number
                                    ) => (
                                      <div key={i} className="space-y-1">
                                        <img
                                          src={img.url}
                                          alt={
                                            img.originalName ||
                                            `Portfolio image ${i + 1}`
                                          }
                                          title={
                                            img.originalName ||
                                            `Portfolio image ${i + 1}`
                                          }
                                          className="w-full h-32 object-cover rounded"
                                        />
                                        <p className="text-xs text-muted-foreground truncate">
                                          {img.originalName || `Image ${i + 1}`}
                                        </p>
                                      </div>
                                    )
                                  )}
                                </div>
                              ) : item.files && item.files.length > 0 ? (
                                <div className="space-y-2">
                                  {item.files.map(
                                    (
                                      file: {
                                        url: string;
                                        originalName?: string;
                                      },
                                      i: number
                                    ) => (
                                      <a
                                        key={i}
                                        href={file.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-3 bg-muted rounded text-center hover:bg-muted-foreground/50 transition-colors"
                                        title={
                                          file.originalName || `PDF ${i + 1}`
                                        }
                                      >
                                        <FileText className="w-6 h-6 mx-auto mb-1 text-muted-foreground" />
                                        <span className="text-sm block truncate max-w-[150px] mx-auto">
                                          {file.originalName || `PDF ${i + 1}`}
                                        </span>
                                      </a>
                                    )
                                  )}
                                </div>
                              ) : (
                                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                                  <FileImage className="w-12 h-12 text-muted-foreground" />
                                </div>
                              )}
                              <p className="text-sm text-muted-foreground">
                                {`Portfolio item ${index + 1}`}
                              </p>
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => handleDelete(item._id)}
                                className="w-full flex items-center gap-2"
                              >
                                <Trash2 className="w-4 h-4" />
                                Delete
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="py-12 text-center text-muted-foreground">
                        No portfolio items yet. Upload your work in the
                        Portfolio page to get started!
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
