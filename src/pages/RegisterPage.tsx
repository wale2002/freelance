// // src/pages/AuthPage.tsx (New: Combined Login/Register page with toggle; split layout, dark theme, role modal for register)
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Link, useNavigate } from "react-router-dom";
// import { loginUser, registerUser } from "@/lib/api";
// import { useAuthStore } from "@/stores/authStore";
// import { setAuthToken } from "@/lib/api";
// import Lottie from "lottie-react";
// import Animation from "../assets/team.json";
// import RocketAnimation from "../assets/rocket.json"; // Import rocket animation for loading
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
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { toast } from "sonner";
// import { Chatbot } from "@/components/chatbot";
// import heroBg from "@/assets/hero-bg.jpg"; // Import hero background from src/assets
// import { BadgeCheck } from "lucide-react"; // Lucide icon for platform
// import { useState } from "react";
// import { X } from "lucide-react"; // X icon for modal close

// // Schemas
// const loginSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
// });

// const registerSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
//   role: z.enum(["client", "freelancer"]),
// });

// type LoginFormData = z.infer<typeof loginSchema>;
// type RegisterFormData = z.infer<typeof registerSchema>;

// export default function AuthPage() {
//   const navigate = useNavigate();
//   const { login } = useAuthStore();
//   const [mode, setMode] = useState<"login" | "register">("login");
//   const [showRoleModal, setShowRoleModal] = useState(false);
//   const [registerFormData, setRegisterFormData] =
//     useState<RegisterFormData | null>(null);
//   const [isLoggingIn, setIsLoggingIn] = useState(false); // Loading state for login

//   // Dynamic form based on mode
//   const form = useForm<LoginFormData & RegisterFormData>({
//     resolver: zodResolver(mode === "login" ? loginSchema : registerSchema),
//     defaultValues:
//       mode === "login"
//         ? { email: "", password: "" }
//         : { name: "", email: "", password: "", role: "freelancer" },
//   });

//   const onSubmit = async (data: LoginFormData & RegisterFormData) => {
//     if (mode === "login") {
//       setIsLoggingIn(true); // Start loading
//       // Login logic
//       try {
//         const response = await loginUser({
//           email: data.email,
//           password: data.password,
//         });
//         if (response.data.success && response.data.data) {
//           const token = response.data.data.token;
//           const user = response.data.data.user;
//           setAuthToken(token);
//           login({ user, token });
//           console.log(
//             "Post-login storage - token exists:",
//             !!localStorage.getItem("token")
//           );
//           console.log(
//             "Post-login storage - user:",
//             localStorage.getItem("user")
//           );
//           toast.success("Logged in successfully!");
//           setTimeout(() => navigate("/dashboard"), 100);
//         } else {
//           toast.error(response.data.message || "Login failed");
//         }
//       } catch (error: any) {
//         toast.error(
//           error.response?.data?.message || "An error occurred during login"
//         );
//       } finally {
//         setIsLoggingIn(false); // Stop loading
//       }
//     } else {
//       // Register: Validate and show modal
//       const isValid = await form.trigger();
//       if (isValid) {
//         setRegisterFormData(data);
//         setShowRoleModal(true);
//       }
//     }
//   };

//   const confirmRegister = async () => {
//     if (!registerFormData) return;
//     try {
//       const response = await registerUser({
//         name: registerFormData.name,
//         email: registerFormData.email,
//         password: registerFormData.password,
//         role: registerFormData.role,
//       });
//       if (response.data.success && response.data.data) {
//         setAuthToken(response.data.data.token);
//         login(response.data.data.user);
//         toast.success("Account created successfully!");
//         navigate("/dashboard");
//       } else {
//         toast.error(response.data.message || "Registration failed");
//       }
//     } catch (error: any) {
//       toast.error(
//         error.response?.data?.message || "An error occurred during registration"
//       );
//     }
//     setShowRoleModal(false);
//     setRegisterFormData(null);
//     form.reset();
//   };

//   const closeModal = () => {
//     setShowRoleModal(false);
//     setRegisterFormData(null);
//   };

//   const switchMode = (newMode: "login" | "register") => {
//     setMode(newMode);
//     form.reset();
//     setShowRoleModal(false);
//     setRegisterFormData(null);
//     setIsLoggingIn(false); // Reset loading on mode switch
//   };

//   return (
//     <>
//       <div className="min-h-screen flex overflow-hidden relative">
//         {/* Left side: Auth form (dark background, centered card with platform name & icon above, toggle for login/register) */}
//         <div className="flex-1 bg-gray-900 flex items-center justify-center p-8">
//           <div className="w-full max-w-md space-y-6">
//             {/* Platform name and icon */}
//             <div className="text-center">
//               <div className="mx-auto w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
//                 <BadgeCheck className="w-8 h-8 text-white" />
//               </div>
//               <h2 className="text-3xl font-bold text-white mb-1">
//                 Freelance Match
//               </h2>
//               <p className="text-sm text-gray-400">
//                 Global Tech Talent Platform
//               </p>
//             </div>

//             <Card className="bg-gray-800 border-gray-700 text-white">
//               <CardContent className="pt-6">
//                 {/* Mode header */}
//                 <div className="text-center mb-6">
//                   <h3 className="text-2xl font-semibold text-white">
//                     {mode === "login" ? "Sign In" : "Sign Up"}
//                   </h3>
//                   <p className="text-sm text-gray-400 mt-1">
//                     {mode === "login"
//                       ? "Welcome back! Please sign in to your account."
//                       : "Join us today and get started."}
//                   </p>
//                 </div>

//                 <Form {...form}>
//                   <form
//                     onSubmit={form.handleSubmit(onSubmit)}
//                     className="space-y-4"
//                   >
//                     {mode === "register" && (
//                       <FormField
//                         control={form.control}
//                         name="name"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel className="text-white">
//                               Full Name
//                             </FormLabel>
//                             <FormControl>
//                               <Input
//                                 placeholder="John Doe"
//                                 {...field}
//                                 className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
//                               />
//                             </FormControl>
//                             <FormMessage className="text-red-400" />
//                           </FormItem>
//                         )}
//                       />
//                     )}

//                     <FormField
//                       control={form.control}
//                       name="email"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel className="text-white">Email</FormLabel>
//                           <FormControl>
//                             <Input
//                               placeholder="you@example.com"
//                               {...field}
//                               className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
//                             />
//                           </FormControl>
//                           <FormMessage className="text-red-400" />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={form.control}
//                       name="password"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel className="text-white">Password</FormLabel>
//                           <FormControl>
//                             <Input
//                               type="password"
//                               placeholder="••••••••"
//                               {...field}
//                               className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
//                             />
//                           </FormControl>
//                           <FormMessage className="text-red-400" />
//                         </FormItem>
//                       )}
//                     />

//                     {mode === "register" && (
//                       <FormField
//                         control={form.control}
//                         name="role"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel className="text-white">
//                               I want to
//                             </FormLabel>
//                             <Select
//                               onValueChange={field.onChange}
//                               defaultValue={field.value}
//                             >
//                               <FormControl>
//                                 <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
//                                   <SelectValue />
//                                 </SelectTrigger>
//                               </FormControl>
//                               <SelectContent className="bg-gray-800 border-gray-600 text-white">
//                                 <SelectItem
//                                   value="freelancer"
//                                   className="text-white"
//                                 >
//                                   Find work as a Freelancer
//                                 </SelectItem>
//                                 <SelectItem
//                                   value="client"
//                                   className="text-white"
//                                 >
//                                   Hire talent as a Client
//                                 </SelectItem>
//                               </SelectContent>
//                             </Select>
//                             <FormMessage className="text-red-400" />
//                           </FormItem>
//                         )}
//                       />
//                     )}

//                     <Button
//                       type="submit"
//                       disabled={isLoggingIn}
//                       className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       {mode === "login" && isLoggingIn ? (
//                         <div className="flex items-center justify-center space-x-2">
//                           <div className="w-6 h-6 flex-shrink-0">
//                             <Lottie
//                               animationData={RocketAnimation}
//                               loop
//                               autoplay
//                               renderer="svg"
//                               style={{ width: "100%", height: "100%" }}
//                             />
//                           </div>
//                           <span className="text-sm">Signing In...</span>
//                         </div>
//                       ) : mode === "login" ? (
//                         "Sign In"
//                       ) : (
//                         "Create Account"
//                       )}
//                     </Button>
//                   </form>
//                 </Form>

//                 {mode === "register" && (
//                   <div className="mt-4 text-sm text-gray-300">
//                     <p>Demo accounts:</p>
//                     <p className="mt-1">Client: client@test.com</p>
//                     <p>Freelancer: freelancer@test.com</p>
//                     <p className="mt-1 text-xs">Password: any password works</p>
//                   </div>
//                 )}
//               </CardContent>
//               <CardFooter className="flex justify-center border-t border-gray-700 pt-6 bg-gray-800">
//                 <p className="text-sm text-gray-300">
//                   {mode === "login"
//                     ? "Don't have an account?"
//                     : "Already have an account?"}
//                   <button
//                     onClick={() =>
//                       switchMode(mode === "login" ? "register" : "login")
//                     }
//                     className="text-green-400 hover:underline font-medium ml-1"
//                   >
//                     {mode === "login" ? "Sign up" : "Sign in"}
//                   </button>
//                 </p>
//               </CardFooter>
//             </Card>
//           </div>
//         </div>

//         {/* Right side: Hero section with hero-bg.jpg background, subtle lettering with jumping animation */}
//         <div
//           className="flex-1 bg-cover bg-center bg-no-repeat flex items-center justify-center p-8 relative"
//           style={{
//             backgroundImage: `url(${heroBg})`,
//           }}
//         >
//           {/* Darker overlay for a duller image effect */}
//           <div className="absolute inset-0 bg-black/60"></div>

//           {/* Card-like container for the text */}
//           <div className="relative text-center max-w-lg z-10 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
//             {/* Lottie Animation */}
//             <div className="w-32 h-32 mx-auto mb-6">
//               <Lottie animationData={Animation} loop autoplay />
//             </div>
//             <h1 className="text-4xl font-bold mb-4 animate-bounce [animation-duration:2s] text-white">
//               Freelance Match
//             </h1>
//             <p className="text-lg text-white opacity-95 animate-pulse [animation-duration:3s] mb-6">
//               Connect & Build Faster
//             </p>
//             <p className="text-base text-white opacity-95 mb-6">
//               Discover top freelance talent and accelerate your projects with
//               seamless matching. Join thousands of creators and clients thriving
//               in a collaborative ecosystem.
//             </p>
//             <div className="space-y-2">
//               <div className="text-center text-sm opacity-75">
//                 <p className="text-white">Powered by FifthLab</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Role Explanation Modal - Only for register */}
//       {showRoleModal && registerFormData && (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-end bg-black/50 backdrop-blur-sm p-4">
//           <div className="w-full max-w-md bg-gray-800 border border-gray-700 shadow-2xl rounded-lg animate-in slide-in-from-right duration-1000 ease-out text-white">
//             <div className="p-6 space-y-4 h-[80vh] flex flex-col overflow-hidden">
//               <div className="flex items-center justify-between sticky top-0 bg-gray-800 z-10 pb-2">
//                 <h2 className="text-xl font-semibold text-white">
//                   Choose Your Role
//                 </h2>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={closeModal}
//                   className="h-8 w-8 p-0 text-white hover:bg-gray-700"
//                 >
//                   <X className="h-4 w-4" />
//                 </Button>
//               </div>
//               <div className="space-y-4 flex-1 overflow-y-auto pr-2">
//                 <div className="space-y-2">
//                   <h3 className="font-medium text-white">Freelancer</h3>
//                   <p className="text-sm text-gray-300">
//                     As a freelancer, you can browse projects, submit bids, and
//                     collaborate on gigs in DevOps, Data, and AI. Use AI tools to
//                     craft winning proposals and get matched faster.
//                   </p>
//                   <ul className="text-sm space-y-1 list-disc list-inside text-gray-300">
//                     <li>Browse open projects and submit bids</li>
//                     <li>Generate AI-powered proposals</li>
//                     <li>Real-time chat with clients</li>
//                     <li>Build your portfolio and earn ratings</li>
//                   </ul>
//                 </div>
//                 <div className="space-y-2 pt-4 border-t border-gray-600">
//                   <h3 className="font-medium text-white">Client</h3>
//                   <p className="text-sm text-gray-300">
//                     As a client, post projects, review proposals, and hire from
//                     our 150k+ vetted talent pool. Enjoy 66% faster hiring and up
//                     to $80k savings per talent.
//                   </p>
//                   <ul className="text-sm space-y-1 list-disc list-inside text-gray-300">
//                     <li>Post projects and attract top talent</li>
//                     <li>Review bids and select freelancers</li>
//                     <li>Adaptive hiring with AI matching</li>
//                     <li>Secure payments and project tracking</li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="flex gap-2 pt-4 border-t border-gray-600 sticky bottom-0 bg-gray-800 p-2">
//                 <Button
//                   variant="outline"
//                   onClick={closeModal}
//                   className="flex-1 border-gray-600 text-white hover:bg-gray-700"
//                 >
//                   Back
//                 </Button>
//                 <Button
//                   onClick={confirmRegister}
//                   className="flex-1 bg-green-600 hover:bg-green-700"
//                 >
//                   Confirm & Create Account
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <Chatbot />
//     </>
//   );
// }

// src/pages/AuthPage.tsx (New: Combined Login/Register page with toggle; split layout, dark theme, role modal for register)
// Updated: Reduced white in hero (darker overlay), full-screen rocket transition with welcome message
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "@/lib/api";
import { useAuthStore } from "@/stores/authStore";
import { setAuthToken } from "@/lib/api";
import Lottie from "lottie-react";
import Animation from "../assets/team.json";
import RocketAnimation from "../assets/rocket.json"; // Import rocket animation for loading & transition
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Chatbot } from "@/components/chatbot";
import heroBg from "@/assets/hero-bg.jpg"; // Import hero background from src/assets
import { BadgeCheck } from "lucide-react"; // Lucide icon for platform
import { useState } from "react";
import { X } from "lucide-react"; // X icon for modal close

// Schemas
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["client", "freelancer"]),
});

type LoginFormData = z.infer<typeof loginSchema>;
type RegisterFormData = z.infer<typeof registerSchema>;

export default function AuthPage() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [registerFormData, setRegisterFormData] =
    useState<RegisterFormData | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false); // Loading state for login
  const [isTransitioning, setIsTransitioning] = useState(false); // Transition state for smooth navigation

  // Dynamic form based on mode
  const form = useForm<LoginFormData & RegisterFormData>({
    resolver: zodResolver(mode === "login" ? loginSchema : registerSchema),
    defaultValues:
      mode === "login"
        ? { email: "", password: "" }
        : { name: "", email: "", password: "", role: "freelancer" },
  });

  const onSubmit = async (data: LoginFormData & RegisterFormData) => {
    if (mode === "login") {
      setIsLoggingIn(true); // Start loading
      // Login logic
      try {
        const response = await loginUser({
          email: data.email,
          password: data.password,
        });
        if (response.data.success && response.data.data) {
          const token = response.data.data.token;
          const user = response.data.data.user;
          setAuthToken(token);
          login({ user, token });
          console.log(
            "Post-login storage - token exists:",
            !!localStorage.getItem("token")
          );
          console.log(
            "Post-login storage - user:",
            localStorage.getItem("user")
          );
          toast.success("Logged in successfully!", { duration: 1500 });
          setTimeout(() => {
            setIsTransitioning(true); // Trigger transition overlay
          }, 500); // Short delay after toast for feedback
          setTimeout(() => {
            navigate("/dashboard", { replace: true }); // Navigate after rocket show
          }, 2500); // Total ~2.5s: toast + fade + rocket
        } else {
          toast.error(response.data.message || "Login failed");
        }
      } catch (error: any) {
        toast.error(
          error.response?.data?.message || "An error occurred during login"
        );
      } finally {
        setIsLoggingIn(false); // Stop loading
      }
    } else {
      // Register: Validate and show modal
      const isValid = await form.trigger();
      if (isValid) {
        setRegisterFormData(data);
        setShowRoleModal(true);
      }
    }
  };

  const confirmRegister = async () => {
    if (!registerFormData) return;
    try {
      const response = await registerUser({
        name: registerFormData.name,
        email: registerFormData.email,
        password: registerFormData.password,
        role: registerFormData.role,
      });
      if (response.data.success && response.data.data) {
        const token = response.data.data.token;
        const user = response.data.data.user;
        setAuthToken(token);
        login({ user, token }); // Pass both user and token to login
        toast.success("Account created successfully!", { duration: 1500 });
        setTimeout(() => {
          setIsTransitioning(true); // Trigger transition overlay
        }, 500);
        setTimeout(() => {
          navigate("/dashboard", { replace: true });
        }, 2500);
      } else {
        toast.error(response.data.message || "Registration failed");
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "An error occurred during registration"
      );
    }
    setShowRoleModal(false);
    setRegisterFormData(null);
    form.reset();
  };

  const closeModal = () => {
    setShowRoleModal(false);
    setRegisterFormData(null);
  };

  const switchMode = (newMode: "login" | "register") => {
    setMode(newMode);
    form.reset();
    setShowRoleModal(false);
    setRegisterFormData(null);
    setIsLoggingIn(false); // Reset loading on mode switch
    setIsTransitioning(false); // Reset transition
  };

  return (
    <>
      <div
        className={`min-h-screen flex overflow-hidden relative transition-opacity duration-1000 ease-in-out ${
          isTransitioning ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Left side: Auth form (dark background, centered card with platform name & icon above, toggle for login/register) */}
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
                {/* Mode header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-white">
                    {mode === "login" ? "Sign In" : "Sign Up"}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {mode === "login"
                      ? "Welcome back! Please sign in to your account."
                      : "Join us today and get started."}
                  </p>
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    {mode === "register" && (
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                {...field}
                                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                    )}

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

                    {mode === "register" && (
                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              I want to
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-gray-800 border-gray-600 text-white">
                                <SelectItem
                                  value="freelancer"
                                  className="text-white"
                                >
                                  Find work as a Freelancer
                                </SelectItem>
                                <SelectItem
                                  value="client"
                                  className="text-white"
                                >
                                  Hire talent as a Client
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                    )}

                    <Button
                      type="submit"
                      disabled={isLoggingIn || isTransitioning}
                      className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {mode === "login" && isLoggingIn ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-6 h-6 flex-shrink-0">
                            <Lottie
                              animationData={RocketAnimation}
                              loop
                              autoplay
                              renderer="svg"
                              style={{ width: "100%", height: "100%" }}
                            />
                          </div>
                          <span className="text-sm">Signing In...</span>
                        </div>
                      ) : mode === "login" ? (
                        "Sign In"
                      ) : (
                        "Create Account"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="flex justify-center border-t border-gray-700 pt-6 bg-gray-800">
                <p className="text-sm text-gray-300">
                  {mode === "login"
                    ? "Don't have an account?"
                    : "Already have an account?"}
                  <button
                    onClick={() =>
                      switchMode(mode === "login" ? "register" : "login")
                    }
                    disabled={isTransitioning}
                    className="text-green-400 hover:underline font-medium ml-1 disabled:opacity-50"
                  >
                    {mode === "login" ? "Sign up" : "Sign in"}
                  </button>
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
          {/* Darker overlay for a duller image effect */}
          <div className="absolute inset-0 bg-black/70"></div>{" "}
          {/* Increased opacity to reduce white bleed */}
          {/* Card-like container for the text - darker bg to minimize white */}
          <div className="relative text-center max-w-lg z-10 bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-600/50">
            {" "}
            {/* Changed to gray-900/50 for less white */}
            {/* Lottie Animation */}
            <div className="w-32 h-32 mx-auto mb-6">
              <Lottie animationData={Animation} loop autoplay />
            </div>
            <h1 className="text-4xl font-bold mb-4 animate-bounce [animation-duration:2s] text-white">
              Freelance Match
            </h1>
            <p className="text-lg text-white opacity-95 animate-pulse [animation-duration:3s] mb-6">
              Connect & Build Faster
            </p>
            <p className="text-base text-white opacity-95 mb-6">
              Discover top freelance talent and accelerate your projects with
              seamless matching. Join thousands of creators and clients thriving
              in a collaborative ecosystem.
            </p>
            <div className="space-y-2">
              <div className="text-center text-sm opacity-75">
                <p className="text-white">Powered by FifthLab</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transition Overlay: Full-screen rocket with welcome during easing */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-gray-900/90 backdrop-blur-sm animate-in fade-in duration-500">
          <div className="w-32 h-32 mb-6">
            <Lottie
              animationData={RocketAnimation}
              loop
              autoplay
              renderer="svg"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2 text-center">
            Welcome to Freelance Match!
          </h2>
          <p className="text-lg text-gray-300 text-center max-w-md">
            Launching your dashboard...
          </p>
        </div>
      )}

      {/* Role Explanation Modal - Only for register */}
      {showRoleModal && registerFormData && !isTransitioning && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-end bg-black/50 backdrop-blur-sm p-4 transition-opacity duration-1000 ease-in-out">
          <div className="w-full max-w-md bg-gray-800 border border-gray-700 shadow-2xl rounded-lg animate-in slide-in-from-right duration-1000 ease-out text-white">
            <div className="p-6 space-y-4 h-[80vh] flex flex-col overflow-hidden">
              <div className="flex items-center justify-between sticky top-0 bg-gray-800 z-10 pb-2">
                <h2 className="text-xl font-semibold text-white">
                  Choose Your Role
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeModal}
                  className="h-8 w-8 p-0 text-white hover:bg-gray-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-4 flex-1 overflow-y-auto pr-2">
                <div className="space-y-2">
                  <h3 className="font-medium text-white">Freelancer</h3>
                  <p className="text-sm text-gray-300">
                    As a freelancer, you can browse projects, submit bids, and
                    collaborate on gigs in DevOps, Data, and AI. Use AI tools to
                    craft winning proposals and get matched faster.
                  </p>
                  <ul className="text-sm space-y-1 list-disc list-inside text-gray-300">
                    <li>Browse open projects and submit bids</li>
                    <li>Generate AI-powered proposals</li>
                    <li>Real-time chat with clients</li>
                    <li>Build your portfolio and earn ratings</li>
                  </ul>
                </div>
                <div className="space-y-2 pt-4 border-t border-gray-600">
                  <h3 className="font-medium text-white">Client</h3>
                  <p className="text-sm text-gray-300">
                    As a client, post projects, review proposals, and hire from
                    our 150k+ vetted talent pool. Enjoy 66% faster hiring and up
                    to $80k savings per talent.
                  </p>
                  <ul className="text-sm space-y-1 list-disc list-inside text-gray-300">
                    <li>Post projects and attract top talent</li>
                    <li>Review bids and select freelancers</li>
                    <li>Adaptive hiring with AI matching</li>
                    <li>Secure payments and project tracking</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-2 pt-4 border-t border-gray-600 sticky bottom-0 bg-gray-800 p-2">
                <Button
                  variant="outline"
                  onClick={closeModal}
                  className="flex-1 border-gray-600 text-white hover:bg-gray-700"
                >
                  Back
                </Button>
                <Button
                  onClick={confirmRegister}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  Confirm & Create Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Chatbot />
    </>
  );
}
