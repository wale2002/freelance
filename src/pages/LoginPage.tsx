// // // // import { useForm } from 'react-hook-form';
// // // // import { zodResolver } from '@hookform/resolvers/zod';
// // // // import * as z from 'zod';
// // // // import { Link, useNavigate } from 'react-router-dom';
// // // // import { mockApi } from '@/api/mockApi';
// // // // import { useAuthStore } from '@/stores/authStore';
// // // // import { AuthLayout } from '@/components/AuthLayout';
// // // // import { Button } from '@/components/ui/button';
// // // // import { Input } from '@/components/ui/input';
// // // // import { Card, CardContent, CardFooter } from '@/components/ui/card';
// // // // import {
// // // //   Form,
// // // //   FormControl,
// // // //   FormField,
// // // //   FormItem,
// // // //   FormLabel,
// // // //   FormMessage,
// // // // } from '@/components/ui/form';
// // // // import { toast } from 'sonner';
// // // // import { Chatbot } from '@/components/chatbot'; // Import Chatbot

// // // // const loginSchema = z.object({
// // // //   email: z.string().email('Invalid email address'),
// // // //   password: z.string().min(6, 'Password must be at least 6 characters'),
// // // // });

// // // // export default function LoginPage() {
// // // //   const navigate = useNavigate();
// // // //   const { login } = useAuthStore();

// // // //   const form = useForm<z.infer<typeof loginSchema>>({
// // // //     resolver: zodResolver(loginSchema),
// // // //     defaultValues: {
// // // //       email: '',
// // // //       password: '',
// // // //     },
// // // //   });

// // // //   const onSubmit = async (data: z.infer<typeof loginSchema>) => {
// // // //     try {
// // // //       const response = await mockApi.auth.login({ email: data.email, password: data.password });
// // // //       if (response.success && response.data) {
// // // //         login(response.data);
// // // //         toast.success('Logged in successfully!');
// // // //         navigate('/dashboard');
// // // //       } else {
// // // //         toast.error(response.error || 'Login failed');
// // // //       }
// // // //     } catch (error) {
// // // //       toast.error('An error occurred during login');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-900 text-white"> {/* Dark background wrapper */}
// // // //       <AuthLayout className="bg-gray-900"> {/* Pass dark class to AuthLayout if it accepts it */}
// // // //         <Card className="bg-gray-800 border-gray-700 text-white"> {/* Dark card */}
// // // //           <CardContent className="pt-6">
// // // //             <Form {...form}>
// // // //               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
// // // //                 <FormField
// // // //                   control={form.control}
// // // //                   name="email"
// // // //                   render={({ field }) => (
// // // //                     <FormItem>
// // // //                       <FormLabel className="text-white">Email</FormLabel>
// // // //                       <FormControl>
// // // //                         <Input
// // // //                           placeholder="you@example.com"
// // // //                           {...field}
// // // //                           className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-primary"
// // // //                         />
// // // //                       </FormControl>
// // // //                       <FormMessage className="text-red-400" />
// // // //                     </FormItem>
// // // //                   )}
// // // //                 />

// // // //                 <FormField
// // // //                   control={form.control}
// // // //                   name="password"
// // // //                   render={({ field }) => (
// // // //                     <FormItem>
// // // //                       <FormLabel className="text-white">Password</FormLabel>
// // // //                       <FormControl>
// // // //                         <Input
// // // //                           type="password"
// // // //                           placeholder="••••••••"
// // // //                           {...field}
// // // //                           className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-primary"
// // // //                         />
// // // //                       </FormControl>
// // // //                       <FormMessage className="text-red-400" />
// // // //                     </FormItem>
// // // //                   )}
// // // //                 />

// // // //                 <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
// // // //                   Sign In
// // // //                 </Button>
// // // //               </form>
// // // //             </Form>

// // // //             <div className="mt-4 text-sm text-gray-300">
// // // //               <p>Demo accounts:</p>
// // // //               <p className="mt-1">Client: client@test.com</p>
// // // //               <p>Freelancer: freelancer@test.com</p>
// // // //               <p className="mt-1 text-xs">Password: any password works</p>
// // // //             </div>
// // // //           </CardContent>
// // // //           <CardFooter className="flex justify-center border-t border-gray-700 pt-6 bg-gray-800">
// // // //             <p className="text-sm text-gray-300">
// // // //               Don't have an account?{' '}
// // // //               <Link to="/register" className="text-primary hover:underline font-medium">
// // // //                 Sign up
// // // //               </Link>
// // // //             </p>
// // // //           </CardFooter>
// // // //         </Card>

// // // //         <Chatbot /> {/* Added: Render the Chatbot component (floating button will position itself) */}
// // // //       </AuthLayout>
// // // //     </div>
// // // //   );
// // // // }

// // // // src/pages/LoginPage.tsx
// // // import { useForm } from 'react-hook-form';
// // // import { zodResolver } from '@hookform/resolvers/zod';
// // // import * as z from 'zod';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import { loginUser } from '@/lib/api';
// // // import { useAuthStore } from '@/stores/authStore';
// // // import { setAuthToken } from '@/lib/api';
// // // import { AuthLayout } from '@/components/AuthLayout';
// // // import { Button } from '@/components/ui/button';
// // // import { Input } from '@/components/ui/input';
// // // import { Card, CardContent, CardFooter } from '@/components/ui/card';
// // // import {
// // //   Form,
// // //   FormControl,
// // //   FormField,
// // //   FormItem,
// // //   FormLabel,
// // //   FormMessage,
// // // } from '@/components/ui/form';
// // // import { toast } from 'sonner';
// // // import { Chatbot } from '@/components/chatbot'; // Import Chatbot

// // // const loginSchema = z.object({
// // //   email: z.string().email('Invalid email address'),
// // //   password: z.string().min(6, 'Password must be at least 6 characters'),
// // // });

// // // export default function LoginPage() {
// // //   const navigate = useNavigate();
// // //   const { login } = useAuthStore();

// // //   const form = useForm<z.infer<typeof loginSchema>>({
// // //     resolver: zodResolver(loginSchema),
// // //     defaultValues: {
// // //       email: '',
// // //       password: '',
// // //     },
// // //   });

// // //   const onSubmit = async (data: z.infer<typeof loginSchema>) => {
// // //     try {
// // //       const response = await loginUser({ email: data.email, password: data.password });
// // //       if (response.data.success && response.data.data) {
// // //         setAuthToken(response.data.data.token);
// // //         login(response.data.data.user);
// // //         toast.success('Logged in successfully!');
// // //         navigate('/dashboard');
// // //       } else {
// // //         toast.error(response.data.message || 'Login failed');
// // //       }
// // //     } catch (error: any) {
// // //       toast.error(error.response?.data?.message || 'An error occurred during login');
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-900 text-white"> {/* Dark background wrapper */}
// // //       <AuthLayout className="bg-gray-900"> {/* Pass dark class to AuthLayout if it accepts it */}
// // //         <Card className="bg-gray-800 border-gray-700 text-white"> {/* Dark card */}
// // //           <CardContent className="pt-6">
// // //             <Form {...form}>
// // //               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
// // //                 <FormField
// // //                   control={form.control}
// // //                   name="email"
// // //                   render={({ field }) => (
// // //                     <FormItem>
// // //                       <FormLabel className="text-white">Email</FormLabel>
// // //                       <FormControl>
// // //                         <Input
// // //                           placeholder="you@example.com"
// // //                           {...field}
// // //                           className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-primary"
// // //                         />
// // //                       </FormControl>
// // //                       <FormMessage className="text-red-400" />
// // //                     </FormItem>
// // //                   )}
// // //                 />

// // //                 <FormField
// // //                   control={form.control}
// // //                   name="password"
// // //                   render={({ field }) => (
// // //                     <FormItem>
// // //                       <FormLabel className="text-white">Password</FormLabel>
// // //                       <FormControl>
// // //                         <Input
// // //                           type="password"
// // //                           placeholder="••••••••"
// // //                           {...field}
// // //                           className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-primary"
// // //                         />
// // //                       </FormControl>
// // //                       <FormMessage className="text-red-400" />
// // //                     </FormItem>
// // //                   )}
// // //                 />

// // //                 <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
// // //                   Sign In
// // //                 </Button>
// // //               </form>
// // //             </Form>

// // //             <div className="mt-4 text-sm text-gray-300">
// // //               <p>Demo accounts:</p>
// // //               <p className="mt-1">Client: client@test.com</p>
// // //               <p>Freelancer: freelancer@test.com</p>
// // //               <p className="mt-1 text-xs">Password: any password works</p>
// // //             </div>
// // //           </CardContent>
// // //           <CardFooter className="flex justify-center border-t border-gray-700 pt-6 bg-gray-800">
// // //             <p className="text-sm text-gray-300">
// // //               Don't have an account?{' '}
// // //               <Link to="/register" className="text-primary hover:underline font-medium">
// // //                 Sign up
// // //               </Link>
// // //             </p>
// // //           </CardFooter>
// // //         </Card>

// // //         <Chatbot /> {/* Added: Render the Chatbot component (floating button will position itself) */}
// // //       </AuthLayout>
// // //     </div>
// // //   );
// // // }

// // // src/pages/LoginPage.tsx (Fixed: Added post-set logging + navigation delay for storage flush)
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import * as z from "zod";
// // import { Link, useNavigate } from "react-router-dom";
// // import { loginUser } from "@/lib/api";
// // import { useAuthStore } from "@/stores/authStore";
// // import { setAuthToken } from "@/lib/api";
// // import { AuthLayout } from "@/components/AuthLayout";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Card, CardContent, CardFooter } from "@/components/ui/card";
// // import {
// //   Form,
// //   FormControl,
// //   FormField,
// //   FormItem,
// //   FormLabel,
// //   FormMessage,
// // } from "@/components/ui/form";
// // import { toast } from "sonner";
// // import { Chatbot } from "@/components/chatbot";

// // const loginSchema = z.object({
// //   email: z.string().email("Invalid email address"),
// //   password: z.string().min(6, "Password must be at least 6 characters"),
// // });

// // export default function LoginPage() {
// //   const navigate = useNavigate();
// //   const { login } = useAuthStore();

// //   const form = useForm<z.infer<typeof loginSchema>>({
// //     resolver: zodResolver(loginSchema),
// //     defaultValues: {
// //       email: "",
// //       password: "",
// //     },
// //   });

// //   const onSubmit = async (data: z.infer<typeof loginSchema>) => {
// //     try {
// //       const response = await loginUser({
// //         email: data.email,
// //         password: data.password,
// //       });
// //       if (response.data.success && response.data.data) {
// //         const token = response.data.data.token;
// //         const user = response.data.data.user;
// //         setAuthToken(token);
// //         login({ user, token }); // Pass full { user, token } to match store sig
// //         // Debug: Confirm storage post-set
// //         console.log(
// //           "Post-login storage - token exists:",
// //           !!localStorage.getItem("token")
// //         );
// //         console.log("Post-login storage - user:", localStorage.getItem("user"));
// //         toast.success("Logged in successfully!");
// //         // Delay navigation to ensure storage persists across route change
// //         setTimeout(() => navigate("/dashboard"), 100);
// //       } else {
// //         toast.error(response.data.message || "Login failed");
// //       }
// //     } catch (error: any) {
// //       toast.error(
// //         error.response?.data?.message || "An error occurred during login"
// //       );
// //     }
// //   };

// //   // Rest of component unchanged...
// //   return (
// //     <div className="min-h-screen bg-gray-900 text-white">
// //       <AuthLayout className="bg-gray-900">
// //         <Card className="bg-gray-800 border-gray-700 text-white">
// //           <CardContent className="pt-6">
// //             <Form {...form}>
// //               <form
// //                 onSubmit={form.handleSubmit(onSubmit)}
// //                 className="space-y-4"
// //               >
// //                 <FormField
// //                   control={form.control}
// //                   name="email"
// //                   render={({ field }) => (
// //                     <FormItem>
// //                       <FormLabel className="text-white">Email</FormLabel>
// //                       <FormControl>
// //                         <Input
// //                           placeholder="you@example.com"
// //                           {...field}
// //                           className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-primary"
// //                         />
// //                       </FormControl>
// //                       <FormMessage className="text-red-400" />
// //                     </FormItem>
// //                   )}
// //                 />

// //                 <FormField
// //                   control={form.control}
// //                   name="password"
// //                   render={({ field }) => (
// //                     <FormItem>
// //                       <FormLabel className="text-white">Password</FormLabel>
// //                       <FormControl>
// //                         <Input
// //                           type="password"
// //                           placeholder="••••••••"
// //                           {...field}
// //                           className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-primary"
// //                         />
// //                       </FormControl>
// //                       <FormMessage className="text-red-400" />
// //                     </FormItem>
// //                   )}
// //                 />

// //                 <Button
// //                   type="submit"
// //                   className="w-full bg-primary hover:bg-primary/90"
// //                 >
// //                   Sign In
// //                 </Button>
// //               </form>
// //             </Form>

// //             <div className="mt-4 text-sm text-gray-300">
// //               <p>Demo accounts:</p>
// //               <p className="mt-1">Client: client@test.com</p>
// //               <p>Freelancer: freelancer@test.com</p>
// //               <p className="mt-1 text-xs">Password: any password works</p>
// //             </div>
// //           </CardContent>
// //           <CardFooter className="flex justify-center border-t border-gray-700 pt-6 bg-gray-800">
// //             <p className="text-sm text-gray-300">
// //               Don't have an account?{" "}
// //               <Link
// //                 to="/register"
// //                 className="text-primary hover:underline font-medium"
// //               >
// //                 Sign up
// //               </Link>
// //             </p>
// //           </CardFooter>
// //         </Card>

// //         <Chatbot />
// //       </AuthLayout>
// //     </div>
// //   );
// // }

// // src/pages/LoginPage.tsx (Updated: Hero with imported hero-bg.jpg from src/assets, no overlay or text content)
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Link, useNavigate } from "react-router-dom";
// import { loginUser } from "@/lib/api";
// import { useAuthStore } from "@/stores/authStore";
// import { setAuthToken } from "@/lib/api";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { toast } from "sonner";
// import { Chatbot } from "@/components/chatbot";
// import heroBg from "@/assets/hero-bg.jpg"; // Import hero background from src/assets

// const loginSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
// });

// export default function LoginPage() {
//   const navigate = useNavigate();
//   const { login } = useAuthStore();

//   const form = useForm<z.infer<typeof loginSchema>>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = async (data: z.infer<typeof loginSchema>) => {
//     try {
//       const response = await loginUser({
//         email: data.email,
//         password: data.password,
//       });
//       if (response.data.success && response.data.data) {
//         const token = response.data.data.token;
//         const user = response.data.data.user;
//         setAuthToken(token);
//         login({ user, token }); // Pass full { user, token } to match store sig
//         // Debug: Confirm storage post-set
//         console.log(
//           "Post-login storage - token exists:",
//           !!localStorage.getItem("token")
//         );
//         console.log("Post-login storage - user:", localStorage.getItem("user"));
//         toast.success("Logged in successfully!");
//         // Delay navigation to ensure storage persists across route change
//         setTimeout(() => navigate("/dashboard"), 100);
//       } else {
//         toast.error(response.data.message || "Login failed");
//       }
//     } catch (error: any) {
//       toast.error(
//         error.response?.data?.message || "An error occurred during login"
//       );
//     }
//   };

//   return (
//     <>
//       <div className="min-h-screen flex overflow-hidden relative">
//         {/* Left side: Login form (dark background, centered card) */}
//         <div className="flex-1 bg-gray-900 flex items-center justify-center p-8">
//           <Card className="w-full max-w-md bg-gray-800 border-gray-700 text-white">
//             <CardContent className="pt-6">
//               <Form {...form}>
//                 <form
//                   onSubmit={form.handleSubmit(onSubmit)}
//                   className="space-y-4"
//                 >
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-white">Email</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="you@example.com"
//                             {...field}
//                             className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
//                           />
//                         </FormControl>
//                         <FormMessage className="text-red-400" />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-white">Password</FormLabel>
//                         <FormControl>
//                           <Input
//                             type="password"
//                             placeholder="••••••••"
//                             {...field}
//                             className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
//                           />
//                         </FormControl>
//                         <FormMessage className="text-red-400" />
//                       </FormItem>
//                     )}
//                   />

//                   <Button
//                     type="submit"
//                     className="w-full bg-green-600 hover:bg-green-700"
//                   >
//                     Sign In
//                   </Button>
//                 </form>
//               </Form>

//               {/* <div className="mt-4 text-sm text-gray-300">
//                 <p>Demo accounts:</p>
//                 <p className="mt-1">Client: client@test.com</p>
//                 <p>Freelancer: freelancer@test.com</p>
//                 <p className="mt-1 text-xs">Password: any password works</p>
//               </div> */}
//             </CardContent>
//             <CardFooter className="flex justify-center border-t border-gray-700 pt-6 bg-gray-800">
//               <p className="text-sm text-gray-300">
//                 Don't have an account?{" "}
//                 <Link
//                   to="/register"
//                   className="text-green-400 hover:underline font-medium"
//                 >
//                   Sign up
//                 </Link>
//               </p>
//             </CardFooter>
//           </Card>
//         </div>

//         {/* Right side: Hero section with hero-bg.jpg background (no overlay or text) */}
//         <div
//           className="flex-1 bg-cover bg-center bg-no-repeat flex items-center justify-center p-8"
//           style={{
//             backgroundImage: `url(${heroBg})`,
//           }}
//         />
//       </div>

//       <Chatbot />
//     </>
//   );
// }

// src/pages/LoginPage.tsx (Refined: Custom icon on login side; subtler jumping/pulsing lettering on hero)
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "@/lib/api";
import { useAuthStore } from "@/stores/authStore";
import { setAuthToken } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Chatbot } from "@/components/chatbot";
import heroBg from "@/assets/hero-bg.jpg"; // Import hero background from src/assets
import { BadgeCheck, Users } from "lucide-react"; // Lucide icons; using BadgeCheck for platform

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const response = await loginUser({
        email: data.email,
        password: data.password,
      });
      if (response.data.success && response.data.data) {
        const token = response.data.data.token;
        const user = response.data.data.user;
        setAuthToken(token);
        login({ user, token }); // Pass full { user, token } to match store sig
        // Debug: Confirm storage post-set
        console.log(
          "Post-login storage - token exists:",
          !!localStorage.getItem("token")
        );
        console.log("Post-login storage - user:", localStorage.getItem("user"));
        toast.success("Logged in successfully!");
        // Delay navigation to ensure storage persists across route change
        setTimeout(() => navigate("/dashboard"), 100);
      } else {
        toast.error(response.data.message || "Login failed");
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "An error occurred during login"
      );
    }
  };

  return (
    <>
      <div className="min-h-screen flex overflow-hidden relative">
        {/* Left side: Login form (dark background, centered card with platform name & icon above) */}
        <div className="flex-1 bg-gray-900 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-6">
            {/* Platform name and icon */}
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <BadgeCheck className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-1">
                Freelance Match
              </h2>
              <p className="text-sm text-gray-400">
                Global Tech Talent Platform
              </p>
            </div>

            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardContent className="pt-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="you@example.com"
                              {...field}
                              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="••••••••"
                              {...field}
                              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      Sign In
                    </Button>
                  </form>
                </Form>

                <div className="mt-4 text-sm text-gray-300">
                  <p>Demo accounts:</p>
                  <p className="mt-1">Client: client@test.com</p>
                  <p>Freelancer: freelancer@test.com</p>
                  <p className="mt-1 text-xs">Password: any password works</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center border-t border-gray-700 pt-6 bg-gray-800">
                <p className="text-sm text-gray-300">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-green-400 hover:underline font-medium"
                  >
                    Sign up
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Right side: Hero section with hero-bg.jpg background, subtle lettering with jumping animation */}
        <div
          className="flex-1 bg-cover bg-center bg-no-repeat flex items-center justify-center p-8 relative"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        >
          {/* Subtle overlay for readability */}
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative text-center max-w-lg z-10 text-white">
            <h1 className="text-4xl font-bold mb-4 animate-bounce [animation-duration:2s]">
              Freelance Match
            </h1>
            <p className="text-lg opacity-90 animate-pulse [animation-duration:3s]">
              Connect & Build Faster
            </p>
          </div>
        </div>
      </div>

      <Chatbot />
    </>
  );
}
