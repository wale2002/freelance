// // import { Navigation } from "@/components/Navigation";
// // import { Hero } from "@/components/Hero";
// // import { TrustedBy } from "@/components/TrustedBy";
// // import { Features } from "@/components/Features";
// // import { Footer } from "@/components/Footer";
// // import { Chatbot } from "@/components/chatbot";

// // const Index = () => {
// //   return (
// //     <div className="min-h-screen">
// //       <Navigation />
// //       <Hero />
// //       <TrustedBy />
// //       <Features />
// //       <Footer />
// //       <Chatbot />
// //     </div>
// //   );
// // };

// // export default Index;

// // pages/Index.tsx (Updated - No changes needed here, as Chatbot is already positioned and animated via its internal logic)
// import { useEffect, useState, useRef } from 'react';
// import { Navigation } from "@/components/Navigation";
// import { Hero } from "@/components/Hero";
// import { TrustedBy } from "@/components/TrustedBy";
// import { Features } from "@/components/Features";
// import { Footer } from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { X } from "lucide-react";
// import { Chatbot } from "@/components/chatbot"; // Import Chatbot

// const Index = () => {
//   const [showIntroCard, setShowIntroCard] = useState(false);
//   const chatbotRef = useRef<{ open: () => void }>(null); // Ref to control chatbot

//   useEffect(() => {
//     // Show intro card after 5 seconds
//     const timer = setTimeout(() => {
//       setShowIntroCard(true);
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

//   const closeCard = () => {
//     setShowIntroCard(false);
//   };

//   const openChatbot = () => {
//     if (chatbotRef.current) {
//       chatbotRef.current.open();
//     }
//     closeCard(); // Close card and open chatbot
//   };

//   return (
//     <div className="min-h-screen">
//       <Navigation />
//       <Hero />
//       <TrustedBy />
//       <Features />
//       <Footer />
//       <Chatbot ref={chatbotRef} /> {/* Pass ref to Chatbot */}

//       {/* Intro Card - Positioned in bottom-right corner with slide-in animation */}
//       {showIntroCard && (
//         <div className="fixed bottom-6 right-6 z-40 w-full max-w-sm"> {/* z-40 to be below chatbot z-50 */}
//           <Card className="animate-in slide-in-from-right duration-500 ease-out">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-xl flex items-center gap-2">
//                 👋 Meet Feranmi
//               </CardTitle>
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 onClick={closeCard}
//                 className="h-6 w-6 p-0"
//               >
//                 <X className="h-4 w-4" />
//               </Button>
//             </CardHeader>
//             <CardContent className="space-y-4 pt-0">
//               <p className="text-sm text-muted-foreground">
//                 Hi there! I'm Feranmi, your friendly AI assistant here at <strong>Freelance Match</strong>.
//               </p>
//               <div className="space-y-2">
//                 <p className="text-sm font-medium">What we're about:</p>
//                 <ul className="text-sm space-y-1 list-disc list-inside">
//                   <li>Connecting companies with 150k+ top-rated tech talent in <strong>DevOps, Data, and AI</strong></li>
//                   <li><strong>Adaptive Hiring:</strong> 66% faster hires, 33% quicker project delivery, and up to $80k savings per talent</li>
//                   <li>AI-powered tools for proposals, bidding, and real-time collaboration</li>
//                 </ul>
//               </div>
//               <div className="flex gap-2 pt-4">
//                 <Button onClick={closeCard} className="flex-1">Got it!</Button>
//                 <Button variant="outline" onClick={openChatbot} className="flex-1">Chat with me</Button> {/* Fixed: Now opens chatbot */}
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Index;

// pages/Index.tsx (Kept with welcome intro card)
import { useEffect, useState, useRef } from 'react';
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
import { Chatbot } from "@/components/chatbot"; // Import Chatbot

const Index = () => {
  const [showIntroCard, setShowIntroCard] = useState(false);
  const chatbotRef = useRef<{ open: () => void }>(null); // Ref to control chatbot

  useEffect(() => {
    // Show intro card after 5 seconds
    const timer = setTimeout(() => {
      setShowIntroCard(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closeCard = () => {
    setShowIntroCard(false);
  };

  const openChatbot = () => {
    if (chatbotRef.current) {
      chatbotRef.current.open();
    }
    closeCard(); // Close card and open chatbot
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustedBy />
      <Features />
      <Footer />
      <Chatbot ref={chatbotRef} /> {/* Pass ref to Chatbot */}

      {/* Intro Card - Positioned in bottom-right corner with slide-in animation */}
      {showIntroCard && (
        <div className="fixed bottom-6 right-6 z-40 w-full max-w-sm"> {/* z-40 to be below chatbot z-50 */}
          <Card className="animate-in slide-in-from-right duration-500 ease-out">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl flex items-center gap-2">
                👋 Meet Feranmi
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeCard}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <p className="text-sm text-muted-foreground">
                Hi there! I'm Feranmi, your friendly AI assistant here at <strong>Freelance Match</strong>.
              </p>
              <div className="space-y-2">
                <p className="text-sm font-medium">What we're about:</p>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Connecting companies with 150k+ top-rated tech talent in <strong>DevOps, Data, and AI</strong></li>
                  <li><strong>Adaptive Hiring:</strong> 66% faster hires, 33% quicker project delivery, and up to $80k savings per talent</li>
                  <li>AI-powered tools for proposals, bidding, and real-time collaboration</li>
                </ul>
              </div>
              <div className="flex gap-2 pt-4">
                <Button onClick={closeCard} className="flex-1">Got it!</Button>
                <Button variant="outline" onClick={openChatbot} className="flex-1">Chat with me</Button> {/* Fixed: Now opens chatbot */}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;