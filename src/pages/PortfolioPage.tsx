// // // // import { useState } from 'react';
// // // // import { useAuthStore } from '@/stores/authStore';
// // // // import { Header } from '@/components/Header';
// // // // import { Sidebar } from '@/components/Sidebar';
// // // // import { Button } from '@/components/ui/button';
// // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// // // // import { Upload, FileImage, FileText } from 'lucide-react';
// // // // import { toast } from 'sonner';
// // // // import { mockApi } from '@/api/mockApi';

// // // // export default function PortfolioPage() {
// // // //   const { user } = useAuthStore();
// // // //   const [uploading, setUploading] = useState(false);

// // // //   const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //     const files = e.target.files;
// // // //     if (!files || files.length === 0) return;

// // // //     setUploading(true);
// // // //     try {
// // // //       const formData = new FormData();
// // // //       Array.from(files).forEach(file => {
// // // //         if (file.type.startsWith('image/')) {
// // // //           formData.append('images[]', file);
// // // //         } else if (file.type === 'application/pdf') {
// // // //           formData.append('files[]', file);
// // // //         }
// // // //       });

// // // //       const response = await mockApi.users.uploadPortfolio(formData);
// // // //       if (response.success) {
// // // //         toast.success('Portfolio files uploaded successfully!');
// // // //       }
// // // //     } catch (error) {
// // // //       toast.error('Failed to upload files');
// // // //     } finally {
// // // //       setUploading(false);
// // // //     }
// // // //   };

// // // //   if (user?.role !== 'freelancer') {
// // // //     return (
// // // //       <div className="min-h-screen flex flex-col">
// // // //         <Header />
// // // //         <div className="flex flex-1">
// // // //           <Sidebar />
// // // //           <main className="flex-1 p-6 flex items-center justify-center">
// // // //             <div className="text-center text-muted-foreground">
// // // //               Portfolio is only available for freelancers
// // // //             </div>
// // // //           </main>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen flex flex-col">
// // // //       <Header />
// // // //       <div className="flex flex-1">
// // // //         <Sidebar />
// // // //         <main className="flex-1 p-6 overflow-auto">
// // // //           <div className="max-w-5xl mx-auto space-y-6">
// // // //             <div>
// // // //               <h1 className="text-3xl font-bold">Portfolio</h1>
// // // //               <p className="text-muted-foreground mt-2">
// // // //                 Showcase your best work to attract clients
// // // //               </p>
// // // //             </div>

// // // //             <Card>
// // // //               <CardHeader>
// // // //                 <CardTitle>Upload Files</CardTitle>
// // // //                 <CardDescription>
// // // //                   Upload images (up to 5) and PDFs (up to 2) to showcase your work
// // // //                 </CardDescription>
// // // //               </CardHeader>
// // // //               <CardContent>
// // // //                 <div className="border-2 border-dashed rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
// // // //                   <input
// // // //                     type="file"
// // // //                     multiple
// // // //                     accept="image/*,.pdf"
// // // //                     onChange={handleFileUpload}
// // // //                     className="hidden"
// // // //                     id="file-upload"
// // // //                     disabled={uploading}
// // // //                   />
// // // //                   <label htmlFor="file-upload" className="cursor-pointer">
// // // //                     <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
// // // //                     <p className="text-lg font-medium mb-2">
// // // //                       {uploading ? 'Uploading...' : 'Click to upload files'}
// // // //                     </p>
// // // //                     <p className="text-sm text-muted-foreground">
// // // //                       Images (JPG, PNG) and PDFs accepted
// // // //                     </p>
// // // //                   </label>
// // // //                 </div>
// // // //               </CardContent>
// // // //             </Card>

// // // //             <div>
// // // //               <h2 className="text-xl font-semibold mb-4">Your Portfolio</h2>
// // // //               {user.portfolio && user.portfolio.length > 0 ? (
// // // //                 <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
// // // //                   {user.portfolio.map((item: any, index: number) => (
// // // //                     <Card key={index}>
// // // //                       <CardContent className="p-4">
// // // //                         {item.type === 'image' ? (
// // // //                           <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
// // // //                             <FileImage className="w-12 h-12 text-muted-foreground" />
// // // //                           </div>
// // // //                         ) : (
// // // //                           <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
// // // //                             <FileText className="w-12 h-12 text-muted-foreground" />
// // // //                           </div>
// // // //                         )}
// // // //                         <p className="text-sm text-muted-foreground mt-2">
// // // //                           {item.name || `Portfolio item ${index + 1}`}
// // // //                         </p>
// // // //                       </CardContent>
// // // //                     </Card>
// // // //                   ))}
// // // //                 </div>
// // // //               ) : (
// // // //                 <Card>
// // // //                   <CardContent className="py-12 text-center text-muted-foreground">
// // // //                     No portfolio items yet. Upload your work to get started!
// // // //                   </CardContent>
// // // //                 </Card>
// // // //               )}
// // // //             </div>
// // // //           </div>
// // // //         </main>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // src/pages/ProfilePage.tsx
// // // import { useEffect } from 'react';
// // // import { useForm } from 'react-hook-form';
// // // import { zodResolver } from '@hookform/resolvers/zod';
// // // import * as z from 'zod';
// // // import { getProfile, updateProfile } from '@/lib/api';
// // // import { useAuthStore } from '@/stores/authStore';
// // // import { Header } from '@/components/Header';
// // // import { Sidebar } from '@/components/Sidebar';
// // // import { Button } from '@/components/ui/button';
// // // import { Input } from '@/components/ui/input';
// // // import { Textarea } from '@/components/ui/textarea';
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// // // import {
// // //   Form,
// // //   FormControl,
// // //   FormField,
// // //   FormItem,
// // //   FormLabel,
// // //   FormMessage,
// // //   FormDescription,
// // // } from '@/components/ui/form';
// // // import { toast } from 'sonner';

// // // const profileSchema = z.object({
// // //   name: z.string().min(2, 'Name must be at least 2 characters'),
// // //   bio: z.string().optional(),
// // //   location: z.string().optional(),
// // //   hourlyRate: z.coerce.number().min(0).optional(),
// // //   skills: z.string().optional(),
// // //   experience: z.string().optional(),
// // // });

// // // export default function ProfilePage() {
// // //   const { user, updateUser } = useAuthStore();

// // //   const form = useForm<z.infer<typeof profileSchema>>({
// // //     resolver: zodResolver(profileSchema),
// // //     defaultValues: {
// // //       name: user?.name || '',
// // //       bio: user?.bio || '',
// // //       location: user?.location || '',
// // //       hourlyRate: user?.hourlyRate || 0,
// // //       skills: user?.skills?.join(', ') || '',
// // //       experience: user?.experience || '',
// // //     },
// // //   });

// // //   useEffect(() => {
// // //     if (!user) {
// // //       const fetchUserProfile = async () => {
// // //         try {
// // //           const response = await getProfile();
// // //           if (response.data.success && response.data.data) {
// // //             updateUser(response.data.data.user);
// // //           }
// // //         } catch (error) {
// // //           toast.error('Failed to fetch profile');
// // //         }
// // //       };
// // //       fetchUserProfile();
// // //     } else {
// // //       form.reset({
// // //         name: user.name,
// // //         bio: user.bio || '',
// // //         location: user.location || '',
// // //         hourlyRate: user.hourlyRate || 0,
// // //         skills: user.skills?.join(', ') || '',
// // //         experience: user.experience || '',
// // //       });
// // //     }
// // //   }, [user, form, updateUser]);

// // //   const onSubmit = async (data: z.infer<typeof profileSchema>) => {
// // //     try {
// // //       const skillsArray = data.skills?.split(',').map(s => s.trim()).filter(Boolean) || [];
// // //       const response = await updateProfile({
// // //         ...data,
// // //         skills: skillsArray,
// // //       });

// // //       if (response.data.success && response.data.data) {
// // //         updateUser(response.data.data.user);
// // //         toast.success('Profile updated successfully!');
// // //       } else {
// // //         toast.error(response.data.message || 'Failed to update profile');
// // //       }
// // //     } catch (error: any) {
// // //       toast.error(error.response?.data?.message || 'An error occurred while updating profile');
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex flex-col">
// // //       <Header />
// // //       <div className="flex flex-1">
// // //         <Sidebar />
// // //         <main className="flex-1 p-6 overflow-auto">
// // //           <div className="max-w-3xl mx-auto">
// // //             <Card>
// // //               <CardHeader>
// // //                 <CardTitle>Edit Profile</CardTitle>
// // //                 <CardDescription>
// // //                   Update your profile information
// // //                 </CardDescription>
// // //               </CardHeader>
// // //               <CardContent>
// // //                 <Form {...form}>
// // //                   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
// // //                     <FormField
// // //                       control={form.control}
// // //                       name="name"
// // //                       render={({ field }) => (
// // //                         <FormItem>
// // //                           <FormLabel>Full Name</FormLabel>
// // //                           <FormControl>
// // //                             <Input {...field} />
// // //                           </FormControl>
// // //                           <FormMessage />
// // //                         </FormItem>
// // //                       )}
// // //                     />

// // //                     <FormField
// // //                       control={form.control}
// // //                       name="bio"
// // //                       render={({ field }) => (
// // //                         <FormItem>
// // //                           <FormLabel>Bio</FormLabel>
// // //                           <FormControl>
// // //                             <Textarea
// // //                               placeholder="Tell us about yourself..."
// // //                               className="min-h-[100px]"
// // //                               {...field}
// // //                             />
// // //                           </FormControl>
// // //                           <FormMessage />
// // //                         </FormItem>
// // //                       )}
// // //                     />

// // //                     <FormField
// // //                       control={form.control}
// // //                       name="location"
// // //                       render={({ field }) => (
// // //                         <FormItem>
// // //                           <FormLabel>Location</FormLabel>
// // //                           <FormControl>
// // //                             <Input placeholder="City, Country" {...field} />
// // //                           </FormControl>
// // //                           <FormMessage />
// // //                         </FormItem>
// // //                       )}
// // //                     />

// // //                     {user?.role === 'freelancer' && (
// // //                       <>
// // //                         <FormField
// // //                           control={form.control}
// // //                           name="hourlyRate"
// // //                           render={({ field }) => (
// // //                             <FormItem>
// // //                               <FormLabel>Hourly Rate ($)</FormLabel>
// // //                               <FormControl>
// // //                                 <Input type="number" placeholder="75" {...field} />
// // //                               </FormControl>
// // //                               <FormMessage />
// // //                             </FormItem>
// // //                           )}
// // //                         />

// // //                         <FormField
// // //                           control={form.control}
// // //                           name="skills"
// // //                           render={({ field }) => (
// // //                             <FormItem>
// // //                               <FormLabel>Skills</FormLabel>
// // //                               <FormControl>
// // //                                 <Input placeholder="React, Node.js, TypeScript" {...field} />
// // //                               </FormControl>
// // //                               <FormDescription>
// // //                                 Comma-separated list of skills
// // //                               </FormDescription>
// // //                               <FormMessage />
// // //                             </FormItem>
// // //                           )}
// // //                         />

// // //                         <FormField
// // //                           control={form.control}
// // //                           name="experience"
// // //                           render={({ field }) => (
// // //                             <FormItem>
// // //                               <FormLabel>Experience</FormLabel>
// // //                               <FormControl>
// // //                                 <Textarea
// // //                                   placeholder="Describe your professional experience..."
// // //                                   className="min-h-[120px]"
// // //                                   {...field}
// // //                                 />
// // //                               </FormControl>
// // //                               <FormMessage />
// // //                             </FormItem>
// // //                           )}
// // //                         />
// // //                       </>
// // //                     )}

// // //                     <Button type="submit" className="w-full">
// // //                       Save Changes
// // //                     </Button>
// // //                   </form>
// // //                 </Form>
// // //               </CardContent>
// // //             </Card>
// // //           </div>
// // //         </main>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // src/pages/PortfolioPage.tsx
// // import { useState } from 'react';
// // import { uploadPortfolio } from '@/lib/api';
// // import { useAuthStore } from '@/stores/authStore';
// // import { Header } from '@/components/Header';
// // import { Sidebar } from '@/components/Sidebar';
// // import { Button } from '@/components/ui/button';
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Upload, FileImage, FileText } from 'lucide-react';
// // import { toast } from 'sonner';

// // export default function PortfolioPage() {
// //   const { user } = useAuthStore();
// //   const [uploading, setUploading] = useState(false);

// //   const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const files = e.target.files;
// //     if (!files || files.length === 0) return;

// //     setUploading(true);
// //     try {
// //       const formData = new FormData();
// //       Array.from(files).forEach(file => {
// //         if (file.type.startsWith('image/')) {
// //           formData.append('images', file);
// //         } else if (file.type === 'application/pdf') {
// //           formData.append('files', file);
// //         }
// //       });

// //       const response = await uploadPortfolio(formData);
// //       if (response.data.success) {
// //         toast.success('Portfolio files uploaded successfully!');
// //         // Optionally refetch profile to update portfolio
// //       } else {
// //         toast.error(response.data.message || 'Failed to upload files');
// //       }
// //     } catch (error: any) {
// //       toast.error(error.response?.data?.message || 'Failed to upload files');
// //     } finally {
// //       setUploading(false);
// //     }
// //   };

// //   if (user?.role !== 'freelancer') {
// //     return (
// //       <div className="min-h-screen flex flex-col">
// //         <Header />
// //         <div className="flex flex-1">
// //           <Sidebar />
// //           <main className="flex-1 p-6 flex items-center justify-center">
// //             <div className="text-center text-muted-foreground">
// //               Portfolio is only available for freelancers
// //             </div>
// //           </main>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen flex flex-col">
// //       <Header />
// //       <div className="flex flex-1">
// //         <Sidebar />
// //         <main className="flex-1 p-6 overflow-auto">
// //           <div className="max-w-5xl mx-auto space-y-6">
// //             <div>
// //               <h1 className="text-3xl font-bold">Portfolio</h1>
// //               <p className="text-muted-foreground mt-2">
// //                 Showcase your best work to attract clients
// //               </p>
// //             </div>

// //             <Card>
// //               <CardHeader>
// //                 <CardTitle>Upload Files</CardTitle>
// //                 <CardDescription>
// //                   Upload images (up to 5) and PDFs (up to 2) to showcase your work
// //                 </CardDescription>
// //               </CardHeader>
// //               <CardContent>
// //                 <div className="border-2 border-dashed rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
// //                   <input
// //                     type="file"
// //                     multiple
// //                     accept="image/*,.pdf"
// //                     onChange={handleFileUpload}
// //                     className="hidden"
// //                     id="file-upload"
// //                     disabled={uploading}
// //                   />
// //                   <label htmlFor="file-upload" className="cursor-pointer">
// //                     <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
// //                     <p className="text-lg font-medium mb-2">
// //                       {uploading ? 'Uploading...' : 'Click to upload files'}
// //                     </p>
// //                     <p className="text-sm text-muted-foreground">
// //                       Images (JPG, PNG) and PDFs accepted
// //                     </p>
// //                   </label>
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             <div>
// //               <h2 className="text-xl font-semibold mb-4">Your Portfolio</h2>
// //               {user.portfolio && user.portfolio.length > 0 ? (
// //                 <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
// //                   {user.portfolio.map((item: any, index: number) => (
// //                     <Card key={index}>
// //                       <CardContent className="p-4">
// //                         {item.images && item.images.length > 0 ? (
// //                           <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
// //                             <img src={item.images[0]} alt="Portfolio" className="w-full h-full object-cover rounded" />
// //                           </div>
// //                         ) : item.files && item.files.length > 0 ? (
// //                           <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
// //                             <FileText className="w-12 h-12 text-muted-foreground" />
// //                           </div>
// //                         ) : (
// //                           <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
// //                             <FileImage className="w-12 h-12 text-muted-foreground" />
// //                           </div>
// //                         )}
// //                         <p className="text-sm text-muted-foreground mt-2">
// //                           {`Portfolio item ${index + 1}`}
// //                         </p>
// //                       </CardContent>
// //                     </Card>
// //                   ))}
// //                 </div>
// //               ) : (
// //                 <Card>
// //                   <CardContent className="py-12 text-center text-muted-foreground">
// //                     No portfolio items yet. Upload your work to get started!
// //                   </CardContent>
// //                 </Card>
// //               )}
// //             </div>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState, useEffect } from "react";
// import { uploadPortfolio, getProfile } from "@/lib/api";
// import { useAuthStore } from "@/stores/authStore";
// import { Header } from "@/components/Header";
// import { Sidebar } from "@/components/Sidebar";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Upload, FileImage, FileText } from "lucide-react";
// import { toast } from "sonner";

// export default function PortfolioPage() {
//   const { user, updateUser } = useAuthStore();
//   const [uploading, setUploading] = useState(false);

//   // Refresh user after upload to show new portfolio
//   const refreshUser = async () => {
//     try {
//       const response = await getProfile();
//       if (response.data.success && response.data.data) {
//         updateUser(response.data.data.user);
//       }
//     } catch (error) {
//       console.error("Refresh user error:", error);
//     }
//   };

//   const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;
//     if (!files || files.length === 0) return;

//     setUploading(true);
//     try {
//       const formData = new FormData();
//       Array.from(files).forEach((file, index) => {
//         if (file.type.startsWith("image/")) {
//           formData.append("images", file);
//         } else if (file.type === "application/pdf") {
//           formData.append("files", file);
//         }
//       });

//       const response = await uploadPortfolio(formData);
//       if (response.data.success) {
//         toast.success("Portfolio files uploaded successfully!");
//         await refreshUser(); // Update UI with new portfolio
//       } else {
//         toast.error(response.data.message || "Failed to upload files");
//       }
//     } catch (error: any) {
//       toast.error(error.response?.data?.message || "Failed to upload files");
//     } finally {
//       setUploading(false);
//     }
//   };

//   if (user?.role !== "freelancer") {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Header />
//         <div className="flex flex-1">
//           <Sidebar />
//           <main className="flex-1 p-6 flex items-center justify-center">
//             <div className="text-center text-muted-foreground">
//               Portfolio is only available for freelancers
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <div className="flex flex-1">
//         <Sidebar />
//         <main className="flex-1 p-6 overflow-auto">
//           <div className="max-w-5xl mx-auto space-y-6">
//             <div>
//               <h1 className="text-3xl font-bold">Portfolio</h1>
//               <p className="text-muted-foreground mt-2">
//                 Showcase your best work to attract clients
//               </p>
//             </div>

//             <Card>
//               <CardHeader>
//                 <CardTitle>Upload Files</CardTitle>
//                 <CardDescription>
//                   Upload images (up to 5) and PDFs (up to 2) to showcase your
//                   work
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="border-2 border-dashed rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
//                   <input
//                     type="file"
//                     multiple
//                     accept="image/*,.pdf"
//                     onChange={handleFileUpload}
//                     className="hidden"
//                     id="file-upload"
//                     disabled={uploading}
//                   />
//                   <label htmlFor="file-upload" className="cursor-pointer">
//                     <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
//                     <p className="text-lg font-medium mb-2">
//                       {uploading ? "Uploading..." : "Click to upload files"}
//                     </p>
//                     <p className="text-sm text-muted-foreground">
//                       Images (JPG, PNG) and PDFs accepted
//                     </p>
//                   </label>
//                 </div>
//               </CardContent>
//             </Card>

//             <div>
//               <h2 className="text-xl font-semibold mb-4">Your Portfolio</h2>
//               {user.portfolio && user.portfolio.length > 0 ? (
//                 <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//                   {user.portfolio.map((item: any, index: number) => (
//                     <Card key={index}>
//                       <CardContent className="p-4">
//                         {item.images && item.images.length > 0 ? (
//                           <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
//                             <img
//                               src={item.images[0]}
//                               alt="Portfolio"
//                               className="w-full h-full object-cover rounded"
//                             />
//                           </div>
//                         ) : item.files && item.files.length > 0 ? (
//                           <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
//                             <FileText className="w-12 h-12 text-muted-foreground" />
//                           </div>
//                         ) : (
//                           <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
//                             <FileImage className="w-12 h-12 text-muted-foreground" />
//                           </div>
//                         )}
//                         <p className="text-sm text-muted-foreground mt-2">
//                           {`Portfolio item ${index + 1}`}
//                         </p>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               ) : (
//                 <Card>
//                   <CardContent className="py-12 text-center text-muted-foreground">
//                     No portfolio items yet. Upload your work to get started!
//                   </CardContent>
//                 </Card>
//               )}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { uploadPortfolio, getProfile, deletePortfolio } from "@/lib/api";
import { useAuthStore } from "@/stores/authStore";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Upload, FileImage, FileText, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function PortfolioPage() {
  const { user, updateUser } = useAuthStore();
  const [uploading, setUploading] = useState(false);

  // Fetch profile on mount to ensure fresh data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        if (response.data.success && response.data.data) {
          updateUser(response.data.data);
        }
      } catch (error) {
        console.error("Fetch profile error:", error);
        toast.error("Failed to load profile");
      }
    };
    fetchProfile();
  }, [updateUser]);

  // Refresh user after upload to show new portfolio
  const refreshUser = async () => {
    try {
      const response = await getProfile();
      if (response.data.success && response.data.data) {
        updateUser(response.data.data); // Fixed: no nested .user
      }
    } catch (error) {
      console.error("Refresh user error:", error);
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
        await refreshUser(); // Refresh to update UI
      } else {
        toast.error(response.data.message || "Failed to delete portfolio item");
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Failed to delete portfolio item"
      );
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Validate limits: up to 5 images, 2 PDFs
    const imageFiles = Array.from(files).filter((file) =>
      file.type.startsWith("image/")
    );
    const pdfFiles = Array.from(files).filter(
      (file) => file.type === "application/pdf"
    );

    if (imageFiles.length > 5) {
      toast.error("Maximum 5 images allowed.");
      return;
    }
    if (pdfFiles.length > 2) {
      toast.error("Maximum 2 PDFs allowed.");
      return;
    }
    if (
      user.portfolio &&
      imageFiles.length + pdfFiles.length + user.portfolio.length > 10 // Optional total limit
    ) {
      toast.error("Portfolio limit reached. Delete items to add more.");
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      Array.from(files).forEach((file) => {
        if (file.type.startsWith("image/")) {
          formData.append("images", file);
        } else if (file.type === "application/pdf") {
          formData.append("files", file);
        }
      });

      const response = await uploadPortfolio(formData);
      if (response.data.success) {
        toast.success("Portfolio files uploaded successfully!");
        await refreshUser(); // Update UI with new portfolio
        // Reset input
        e.target.value = "";
      } else {
        toast.error(response.data.message || "Failed to upload files");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to upload files");
    } finally {
      setUploading(false);
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
          <div className="max-w-5xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Portfolio</h1>
              <p className="text-muted-foreground mt-2">
                Showcase your best work to attract clients
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Upload Files</CardTitle>
                <CardDescription>
                  Upload images (up to 5) and PDFs (up to 2) to showcase your
                  work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
                  <input
                    type="file"
                    multiple
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    disabled={uploading}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg font-medium mb-2">
                      {uploading ? "Uploading..." : "Click to upload files"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Images (JPG, PNG) and PDFs accepted
                    </p>
                  </label>
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-xl font-semibold mb-4">Your Portfolio</h2>
              {user.portfolio && user.portfolio.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {user.portfolio.map((item: any, index: number) => (
                    <Card key={item._id || index}>
                      <CardContent className="p-4 space-y-3">
                        {item.images && item.images.length > 0 ? (
                          <div className="space-y-2">
                            {item.images.map(
                              (
                                img: { url: string; originalName?: string },
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
                                file: { url: string; originalName?: string },
                                i: number
                              ) => (
                                <a
                                  key={i}
                                  href={file.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block p-3 bg-muted rounded text-center hover:bg-muted-foreground/50 transition-colors"
                                  title={file.originalName || `PDF ${i + 1}`}
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
                <Card>
                  <CardContent className="py-12 text-center text-muted-foreground">
                    No portfolio items yet. Upload your work to get started!
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
