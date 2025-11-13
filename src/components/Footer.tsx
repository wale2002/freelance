// // src/components/Footer.tsx
// import { Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
// import { motion } from "framer-motion";

// export const Footer = () => {
//   const footerLinks = {
//     Company: ["About Us", "Careers", "Press", "Contact"],
//     Solutions: ["For Employers", "For Talent", "Enterprise", "Adaptive Hiring"],
//     Resources: ["Blog", "Case Studies", "Documentation", "Support"],
//     Legal: [
//       "Privacy Policy",
//       "Terms of Service",
//       "Cookie Policy",
//       "Compliance",
//     ],
//   };

//   return (
//     <motion.footer
//       className="bg-secondary text-secondary-foreground py-16"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={{
//         hidden: { opacity: 0, y: 50 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//       }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
//           {/* Brand Column */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
//                 <span className="text-primary-foreground font-bold text-sm">
//                   F
//                 </span>
//               </div>
//               <span className="text-xl font-bold">Freelance Match</span>
//             </div>
//             <p className="text-secondary-foreground/80 text-sm mb-6">
//               Connecting global tech talent with leading companies worldwide.
//             </p>
//             <div className="flex gap-4">
//               <a
//                 href="#"
//                 className="text-secondary-foreground/60 hover:text-primary transition-colors"
//               >
//                 <Linkedin className="h-5 w-5" />
//               </a>
//               <a
//                 href="#"
//                 className="text-secondary-foreground/60 hover:text-primary transition-colors"
//               >
//                 <Twitter className="h-5 w-5" />
//               </a>
//               <a
//                 href="#"
//                 className="text-secondary-foreground/60 hover:text-primary transition-colors"
//               >
//                 <Facebook className="h-5 w-5" />
//               </a>
//               <a
//                 href="#"
//                 className="text-secondary-foreground/60 hover:text-primary transition-colors"
//               >
//                 <Youtube className="h-5 w-5" />
//               </a>
//             </div>
//           </div>

//           {/* Link Columns */}
//           {Object.entries(footerLinks).map(([category, links]) => (
//             <div key={category}>
//               <h3 className="font-semibold mb-4">{category}</h3>
//               <ul className="space-y-3">
//                 {links.map((link) => (
//                   <li key={link}>
//                     <a
//                       href="#"
//                       className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className="border-t border-secondary-foreground/10 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-sm text-secondary-foreground/60">
//               © 2025 Freelance Match. All rights reserved.
//             </p>
//             <p className="text-sm text-secondary-foreground/60">
//               Built with passion for connecting great talent
//             </p>
//           </div>
//         </div>
//       </div>
//     </motion.footer>
//   );
// };


// src/components/Footer.tsx
import { Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const footerLinks = {
    Company: ["About Us", "Careers", "Press", "Contact"],
    Solutions: ["For Employers", "For Talent", "Enterprise", "Adaptive Hiring"],
    Resources: ["Blog", "Case Studies", "Documentation", "Support"],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Compliance",
    ],
  };

  return (
    <motion.footer
      className="bg-secondary text-secondary-foreground py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  F
                </span>
              </div>
              <span className="text-xl font-bold">Freelance Match</span>
            </div>
            <p className="text-secondary-foreground/80 text-sm mb-6">
              Connecting global tech talent with leading companies worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © 2025 Freelance Match. All rights reserved.
            </p>
            <p className="text-sm text-secondary-foreground/60">
              Built with passion for connecting great talent
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};