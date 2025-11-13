// // src/components/Hero.tsx
// import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { Link } from "react-router-dom";
// import heroBg from "@/assets/hero-bg.jpg"; // Adjust path if needed; fallback to gradient if image fails

// export const Hero = () => {
//   const [typewriterVisible, setTypewriterVisible] = useState(false);
//   const controls = useAnimation();

//   useEffect(() => {
//     setTypewriterVisible(true);
//     controls.start("visible");
//   }, [controls]);

//   const tagline =
//     "Build better DevOps, Data, and AI solutions faster with Freelance Match's adaptive hiring platform.";

//   const headlineWords = [
//     "Build",
//     "better",
//     "DevOps,",
//     "Data,",
//     "and",
//     "AI",
//     "solutions",
//     "—",
//     "faster",
//   ];

//   const headlineVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const taglineVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.05,
//       },
//     },
//   };

//   const charVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   };

//   return (
//     <motion.section
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={{
//         hidden: { opacity: 0 },
//         visible: { opacity: 1, transition: { duration: 0.8 } },
//       }}
//     >
//       {/* Enhanced Background: Image with fallback gradient + subtle parallax */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-fixed transition-all duration-500"
//         style={{
//           backgroundImage: `url(${heroBg})`,
//         }}
//         aria-hidden="true"
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-primary/80 transition-opacity duration-500" />
//       </div>

//       {/* Optional: Overlay particles or subtle SVG animation for depth */}
//       <div className="absolute inset-0 opacity-20 pointer-events-none">
//         <svg
//           className="w-full h-full"
//           viewBox="0 0 100 100"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <pattern
//               id="grain"
//               width="100"
//               height="100"
//               patternUnits="userSpaceOnUse"
//             >
//               <circle cx="50" cy="50" r="1" fill="white" opacity="0.1">
//                 <animate
//                   attributeName="r"
//                   values="1;2;1"
//                   dur="3s"
//                   repeatCount="indefinite"
//                 />
//               </circle>
//             </pattern>
//           </defs>
//           <rect width="100" height="100" fill="url(#grain)" />
//         </svg>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 py-24">
//         <div className="max-w-3xl">
//           {/* Headline with Framer Motion */}
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
//             {headlineWords.map((word, index) => (
//               <motion.span
//                 key={word}
//                 variants={headlineVariants}
//                 initial="hidden"
//                 animate={controls}
//                 transition={{
//                   delay: index * 0.1,
//                   duration: 0.5,
//                   ease: "easeOut",
//                 }}
//               >
//                 {word}{" "}
//               </motion.span>
//             ))}
//           </h1>

//           {/* Subheadline: Fade up with scale */}
//           <motion.p
//             className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
//           >
//             There are more than 150,000 highly skilled tech professionals on our
//             roster. Most in largely untapped markets. Ready to be placed quickly
//             and effectively.
//           </motion.p>

//           {/* Upgraded Tagline: Typewriter effect */}
//           <motion.div
//             className="text-base md:text-lg text-white/80 mb-12 max-w-2xl"
//             variants={taglineVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {tagline.split("").map((char, index) => (
//               <motion.span key={index} variants={charVariants}>
//                 {char}
//               </motion.span>
//             ))}
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: tagline.length * 0.05 + 0.5 }}
//               className="inline-block ml-2 animate-pulse text-white/80"
//             >
//               — Discover Adaptive Hiring
//             </motion.span>
//           </motion.div>

//           {/* CTA Buttons: Hover effects via Tailwind */}
//           <div className="flex flex-col sm:flex-row gap-3 mb-16">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9, duration: 0.5 }}
//             >
//               <Link to="/login">
//               <Button
//                 variant="hero"
//                 size="lg"
//                 className="text-sm px-6 py-4 h-auto relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-white/20 border-white/30 text-white hover:bg-white/30"
//               >
//                 <span className="relative z-10">Hire Talent</span>
//                 <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
//               </Button>
//               </Link>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 0.5 }}
//             >
//               <Button
//                 variant="herSecondary"
//                 size="lg"
//                 className="text-sm px-6 py-4 h-auto relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
//               >
//                 <span className="relative z-10">What is Adaptive Hiring?</span>
//                 <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
//               </Button>
//             </motion.div>
//           </div>

//           {/* Stats Grid: Staggered entrance */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[
//               {
//                 value: "150k",
//                 desc: "Top-rated, highly skilled global talent pool",
//               },
//               {
//                 value: "$80,000",
//                 desc: "Cost savings per talent hired through Freelance Match",
//               },
//               { value: "66%", desc: "Faster time to hire" },
//               { value: "33%", desc: "Faster project delivery" },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg transition-all duration-300 hover:scale-102 hover:-translate-y-2 hover:shadow-xl hover:shadow-white/10 cursor-pointer"
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.1 * index + 0.5, duration: 0.8 }}
//               >
//                 <div className="text-3xl md:text-4xl font-bold text-white mb-1">
//                   {stat.value.startsWith("$") ? (
//                     <span className="text-2xl">$</span>
//                   ) : null}
//                   {stat.value.replace(/[$%k]/g, "")}
//                   {stat.value.endsWith("k") ? (
//                     <span className="text-2xl">k</span>
//                   ) : null}
//                   {stat.value.endsWith("%") ? (
//                     <span className="text-2xl">%</span>
//                   ) : null}
//                 </div>
//                 <p className="text-xs text-white/80 hover:text-white transition-colors">
//                   {stat.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// src/components/Hero.tsx (Fixed - Removed <style jsx> which is Next.js specific; added animation via Tailwind classes and global CSS import suggestion)
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg"; // Adjust path if needed; fallback to gradient if image fails

// Note: Add this to your global CSS (e.g., src/index.css or globals.css):
/*
@keyframes dance {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-5px) rotate(5deg); }
  50% { transform: translateY(-2px) rotate(-3deg); }
  75% { transform: translateY(-3px) rotate(3deg); }
}
.animate-dance {
  animation: dance 3s ease-in-out infinite;
}
*/

export const Hero = () => {
  const [typewriterVisible, setTypewriterVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setTypewriterVisible(true);
    controls.start("visible");
  }, [controls]);

  const tagline =
    "Build better DevOps, Data, and AI solutions faster with Freelance Match's adaptive hiring platform.";

  const headlineWords = [
    "Build",
    "better",
    "DevOps,",
    "Data,",
    "and",
    "AI",
    "solutions",
    "—",
    "faster",
  ];

  const headlineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const taglineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
      }}
    >
      {/* Enhanced Background: Image with fallback gradient + subtle parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed transition-all duration-500"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-primary/80 transition-opacity duration-500" />
      </div>

      {/* Optional: Overlay particles or subtle SVG animation for depth */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grain"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="1" fill="white" opacity="0.1">
                <animate
                  attributeName="r"
                  values="1;2;1"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grain)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          {/* Headline with Framer Motion */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {headlineWords.map((word, index) => (
              <motion.span
                key={word}
                variants={headlineVariants}
                initial="hidden"
                animate={controls}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline: Fade up with scale */}
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            There are more than 150,000 highly skilled tech professionals on our
            roster. Most in largely untapped markets. Ready to be placed quickly
            and effectively.
          </motion.p>

          {/* Upgraded Tagline: Typewriter effect */}
          <motion.div
            className="text-base md:text-lg text-white/80 mb-12 max-w-2xl"
            variants={taglineVariants}
            initial="hidden"
            animate="visible"
          >
            {tagline.split("").map((char, index) => (
              <motion.span key={index} variants={charVariants}>
                {char}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: tagline.length * 0.05 + 0.5 }}
              className="inline-block ml-2 animate-pulse text-white/80"
            >
              — Discover Adaptive Hiring
            </motion.span>
          </motion.div>

          {/* CTA Buttons: Hover effects via Tailwind */}
          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Link to="/register">
                <Button
                  variant="hero"
                  size="lg"
                  className="text-sm px-6 py-4 h-auto relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-white/20 border-white/30 text-white hover:bg-white/30 animate-dance" // Retained animate-dance (ensure CSS is imported globally)
                >
                  <span className="relative z-10">Hire Talent</span>
                  <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Button
                variant="herSecondary"
                size="lg"
                className="text-sm px-6 py-4 h-auto relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <span className="relative z-10">What is Adaptive Hiring?</span>
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Button>
            </motion.div>
          </div>

          {/* Stats Grid: Staggered entrance */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                value: "150k",
                desc: "Top-rated, highly skilled global talent pool",
              },
              {
                value: "$80,000",
                desc: "Cost savings per talent hired through Freelance Match",
              },
              { value: "66%", desc: "Faster time to hire" },
              { value: "33%", desc: "Faster project delivery" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg transition-all duration-300 hover:scale-102 hover:-translate-y-2 hover:shadow-xl hover:shadow-white/10 cursor-pointer"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index + 0.5, duration: 0.8 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value.startsWith("$") ? (
                    <span className="text-2xl">$</span>
                  ) : null}
                  {stat.value.replace(/[$%k]/g, "")}
                  {stat.value.endsWith("k") ? (
                    <span className="text-2xl">k</span>
                  ) : null}
                  {stat.value.endsWith("%") ? (
                    <span className="text-2xl">%</span>
                  ) : null}
                </div>
                <p className="text-xs text-white/80 hover:text-white transition-colors">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
