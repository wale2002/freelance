// // src/pages/FreelancerProfilePage.tsx (new page for viewing freelancer profiles)
// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getUserProfile } from "@/lib/api";
// import { Header } from "@/components/Header";
// import { Sidebar } from "@/components/Sidebar";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { FileImage, FileText, Download } from "lucide-react";
// import { toast } from "sonner";
// import { formatDistanceToNow } from "date-fns";

// interface PortfolioItem {
//   _id: string;
//   images: Array<{ url: string; originalName?: string }>;
//   files: Array<{ url: string; originalName?: string }>;
//   createdAt: string;
// }

// interface UserProfile {
//   _id: string;
//   name: string;
//   bio?: string;
//   experience?: string;
//   hourlyRate?: number;
//   location?: string;
//   skills: string[];
//   portfolio: PortfolioItem[];
//   profileImage?: string;
//   createdAt: string;
// }

// export default function FreelancerProfilePage() {
//   const { userId } = useParams<{ userId: string }>();
//   const navigate = useNavigate();
//   const [profile, setProfile] = useState<UserProfile | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!userId) {
//       navigate("/chats");
//       return;
//     }

//     const fetchProfile = async () => {
//       try {
//         setLoading(true);
//         const response = await getUserProfile(userId);
//         if (response.data.success && response.data.data) {
//           setProfile(response.data.data);
//         } else {
//           setError("Failed to load profile");
//         }
//       } catch (err) {
//         setError("Failed to load profile");
//         toast.error("Failed to load freelancer profile");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [userId, navigate]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Header />
//         <div className="flex flex-1 items-center justify-center">
//           <p>Loading profile...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error || !profile) {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Header />
//         <div className="flex flex-1 items-center justify-center">
//           <p className="text-destructive">{error || "Profile not found"}</p>
//         </div>
//       </div>
//     );
//   }

//   const handleBackToChats = () => {
//     navigate("/chats");
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <div className="flex flex-1">
//         <Sidebar />
//         <main className="flex-1 p-6 overflow-auto">
//           <div className="max-w-4xl mx-auto">
//             <Button
//               variant="ghost"
//               onClick={handleBackToChats}
//               className="mb-6"
//             >
//               ← Back to Chats
//             </Button>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {/* Profile Information */}
//               <Card>
//                 <CardHeader className="flex-row items-center space-y-0">
//                   <Avatar className="w-16 h-16">
//                     <AvatarImage src={profile.profileImage} />
//                     <AvatarFallback className="w-16 h-16 text-primary-foreground bg-primary text-2xl">
//                       {profile.name.charAt(0).toUpperCase()}
//                     </AvatarFallback>
//                   </Avatar>
//                   <div className="ml-4">
//                     <CardTitle className="text-2xl">{profile.name}</CardTitle>
//                     <CardDescription>Freelancer Profile</CardDescription>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   {profile.bio && (
//                     <div className="space-y-1">
//                       <span className="font-medium">Bio</span>
//                       <p className="text-sm text-muted-foreground">
//                         {profile.bio}
//                       </p>
//                     </div>
//                   )}
//                   {profile.location && (
//                     <div className="space-y-1">
//                       <span className="font-medium">Location</span>
//                       <p className="text-sm">{profile.location}</p>
//                     </div>
//                   )}
//                   {profile.hourlyRate && (
//                     <div className="space-y-1">
//                       <span className="font-medium">Hourly Rate</span>
//                       <p className="text-sm">${profile.hourlyRate}/hr</p>
//                     </div>
//                   )}
//                   {profile.skills.length > 0 && (
//                     <div className="space-y-1">
//                       <span className="font-medium">Skills</span>
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         {profile.skills.map((skill) => (
//                           <Badge
//                             key={skill}
//                             variant="secondary"
//                             className="text-xs"
//                           >
//                             {skill}
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                   {profile.experience && (
//                     <div className="space-y-1">
//                       <span className="font-medium">Experience</span>
//                       <p className="text-sm text-muted-foreground">
//                         {profile.experience}
//                       </p>
//                     </div>
//                   )}
//                   <div className="text-xs text-muted-foreground pt-4 border-t">
//                     Joined{" "}
//                     {formatDistanceToNow(new Date(profile.createdAt), {
//                       addSuffix: true,
//                     })}
//                   </div>
//                 </CardContent>
//                 <CardFooter className="pt-0">
//                   <Button className="w-full" onClick={handleBackToChats}>
//                     Start Conversation
//                   </Button>
//                 </CardFooter>
//               </Card>

//               {/* Portfolio */}
//               <div>
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Portfolio</CardTitle>
//                     <CardDescription>Showcase of work</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     {profile.portfolio && profile.portfolio.length > 0 ? (
//                       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//                         {profile.portfolio.map((item) => (
//                           <Card key={item._id}>
//                             <CardContent className="p-4 space-y-3">
//                               {item.images && item.images.length > 0 ? (
//                                 <div className="space-y-2">
//                                   {item.images.map((img, i) => (
//                                     <div key={i} className="space-y-1">
//                                       <img
//                                         src={img.url}
//                                         alt={
//                                           img.originalName ||
//                                           `Portfolio image ${i + 1}`
//                                         }
//                                         className="w-full h-32 object-cover rounded"
//                                       />
//                                       <p className="text-xs text-muted-foreground truncate">
//                                         {img.originalName || `Image ${i + 1}`}
//                                       </p>
//                                     </div>
//                                   ))}
//                                 </div>
//                               ) : item.files && item.files.length > 0 ? (
//                                 <div className="space-y-2">
//                                   {item.files.map((file, i) => (
//                                     <a
//                                       key={i}
//                                       href={file.url}
//                                       target="_blank"
//                                       rel="noopener noreferrer"
//                                       download={file.originalName}
//                                       className="block p-3 bg-muted rounded text-center hover:bg-muted-foreground/50 transition-colors flex items-center justify-center gap-2"
//                                     >
//                                       <FileText className="w-5 h-5 text-muted-foreground" />
//                                       <span className="text-sm truncate max-w-[150px]">
//                                         {file.originalName || `File ${i + 1}`}
//                                       </span>
//                                       <Download className="w-4 h-4" />
//                                     </a>
//                                   ))}
//                                 </div>
//                               ) : (
//                                 <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
//                                   <FileImage className="w-12 h-12 text-muted-foreground" />
//                                 </div>
//                               )}
//                               <p className="text-xs text-muted-foreground">
//                                 Added{" "}
//                                 {formatDistanceToNow(new Date(item.createdAt), {
//                                   addSuffix: true,
//                                 })}
//                               </p>
//                             </CardContent>
//                           </Card>
//                         ))}
//                       </div>
//                     ) : (
//                       <div className="py-12 text-center text-muted-foreground">
//                         No portfolio items yet.
//                       </div>
//                     )}
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// src/pages/FreelancerProfilePage.tsx (Updated: Added safeguards for portfolio array and createdAt to prevent runtime errors)
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserProfile } from "@/lib/api";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileImage, FileText, Download } from "lucide-react";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";

interface PortfolioItem {
  _id: string;
  images?: Array<{ url: string; originalName?: string }>; // Made optional
  files?: Array<{ url: string; originalName?: string }>; // Made optional
  createdAt?: string; // Made optional
}

interface UserProfile {
  _id: string;
  name: string;
  bio?: string;
  experience?: string;
  hourlyRate?: number;
  location?: string;
  skills: string[];
  portfolio?: PortfolioItem[]; // Made optional
  profileImage?: string;
  createdAt?: string; // Made optional
  role?: string;
}

export default function FreelancerProfilePage() {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      navigate("/chats");
      return;
    }

    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getUserProfile(userId);
        if (response.data.success && response.data.data) {
          setProfile(response.data.data);
        } else {
          setError(response.data.message || "Failed to load profile");
        }
      } catch (err: any) {
        const errorMessage =
          err.response?.data?.message || "Failed to load profile";
        setError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 items-center justify-center">
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <p className="text-destructive mb-2">
              {error || "Profile not found"}
            </p>
            <Button onClick={() => navigate(-1)} variant="outline">
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const handleBackToChats = () => {
    navigate("/chats");
  };

  // Safeguard for portfolio: Ensure it's an array
  const safePortfolio = Array.isArray(profile.portfolio)
    ? profile.portfolio
    : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={handleBackToChats}
              className="mb-6"
            >
              ← Back to Chats
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Profile Information */}
              <Card>
                <CardHeader className="flex flex-row items-center space-y-0">
                  {" "}
                  {/* Explicit flex-row */}
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={profile.profileImage} />
                    <AvatarFallback className="w-16 h-16 text-primary-foreground bg-primary text-2xl">
                      {profile.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <CardTitle className="text-2xl">{profile.name}</CardTitle>
                    <CardDescription>Freelancer Profile</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {profile.bio && (
                    <div className="space-y-1">
                      <span className="font-medium">Bio</span>
                      <p className="text-sm text-muted-foreground">
                        {profile.bio}
                      </p>
                    </div>
                  )}
                  {profile.location && (
                    <div className="space-y-1">
                      <span className="font-medium">Location</span>
                      <p className="text-sm">{profile.location}</p>
                    </div>
                  )}
                  {profile.hourlyRate && (
                    <div className="space-y-1">
                      <span className="font-medium">Hourly Rate</span>
                      <p className="text-sm">${profile.hourlyRate}/hr</p>
                    </div>
                  )}
                  {Array.isArray(profile.skills) &&
                    profile.skills.length > 0 && (
                      <div className="space-y-1">
                        <span className="font-medium">Skills</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {profile.skills.map((skill) => (
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
                    )}
                  {profile.experience && (
                    <div className="space-y-1">
                      <span className="font-medium">Experience</span>
                      <p className="text-sm text-muted-foreground">
                        {profile.experience}
                      </p>
                    </div>
                  )}
                  {profile.createdAt && (
                    <div className="text-xs text-muted-foreground pt-4 border-t">
                      Joined{" "}
                      {formatDistanceToNow(new Date(profile.createdAt), {
                        addSuffix: true,
                      })}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full" onClick={handleBackToChats}>
                    Start Conversation
                  </Button>
                </CardFooter>
              </Card>

              {/* Portfolio */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Portfolio</CardTitle>
                    <CardDescription>Showcase of work</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {safePortfolio.length > 0 ? (
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {safePortfolio.map((item) => (
                          <Card key={item._id || Math.random()}>
                            {" "}
                            {/* Fallback key if _id missing */}
                            <CardContent className="p-4 space-y-3">
                              {item.images &&
                              Array.isArray(item.images) &&
                              item.images.length > 0 ? (
                                <div className="space-y-2">
                                  {item.images.map((img, i) => (
                                    <div key={i} className="space-y-1">
                                      <img
                                        src={img.url || ""}
                                        alt={
                                          img.originalName ||
                                          `Portfolio image ${i + 1}`
                                        }
                                        className="w-full h-32 object-cover rounded"
                                      />
                                      <p className="text-xs text-muted-foreground truncate">
                                        {img.originalName || `Image ${i + 1}`}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              ) : item.files &&
                                Array.isArray(item.files) &&
                                item.files.length > 0 ? (
                                <div className="space-y-2">
                                  {item.files.map((file, i) => (
                                    <a
                                      key={i}
                                      href={file.url || "#"}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      download={file.originalName}
                                      className="block p-3 bg-muted rounded text-center hover:bg-muted-foreground/50 transition-colors flex items-center justify-center gap-2"
                                    >
                                      <FileText className="w-5 h-5 text-muted-foreground" />
                                      <span className="text-sm truncate max-w-[150px]">
                                        {file.originalName || `File ${i + 1}`}
                                      </span>
                                      <Download className="w-4 h-4" />
                                    </a>
                                  ))}
                                </div>
                              ) : (
                                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                                  <FileImage className="w-12 h-12 text-muted-foreground" />
                                </div>
                              )}
                              {item.createdAt ? (
                                <p className="text-xs text-muted-foreground">
                                  Added{" "}
                                  {formatDistanceToNow(
                                    new Date(item.createdAt),
                                    { addSuffix: true }
                                  )}
                                </p>
                              ) : (
                                <p className="text-xs text-muted-foreground">
                                  Date not available
                                </p>
                              )}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="py-12 text-center text-muted-foreground">
                        No portfolio items yet.
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
