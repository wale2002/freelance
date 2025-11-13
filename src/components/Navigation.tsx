// // // src/components/Navigation.tsx
// // import { Button } from "@/components/ui/button";
// // import { Menu, Search, User } from "lucide-react";
// // import { useState } from "react";
// // import { Link } from "react-router-dom"; // Use React Router for Vite-based React apps

// // // Updated Navigation Component - Reduced font sizes
// // export const Navigation = () => {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   const menuItems = [
// //     { label: "Why Freelance Match?", href: "#why" },
// //     { label: "Use Cases", href: "#cases" },
// //     { label: "Solutions", href: "#solutions" },
// //     { label: "Platform", href: "#platform" },
// //     { label: "Resources", href: "#resources" },
// //     { label: "Talent", href: "#talent" },
// //     { label: "About", href: "#about" },
// //   ];

// //   return (
// //     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
// //       <div className="container mx-auto px-4">
// //         <div className="flex items-center justify-between h-14">
// //           {/* Reduced h-16 to h-14 */}
// //           {/* Logo */}
// //           <div className="flex items-center gap-2">
// //             <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center">
// //               {/* Reduced w-8/h-8 to w-7/h-7 */}
// //               <span className="text-primary-foreground font-bold text-xs">
// //                 {/* Reduced sm to xs */}F
// //               </span>
// //             </div>
// //             <span className="text-lg font-bold text-foreground">
// //               {/* Reduced xl to lg */}
// //               Freelance Match
// //             </span>
// //           </div>
// //           {/* Desktop Menu */}
// //           <div className="hidden lg:flex items-center gap-6">
// //             {/* Reduced gap-8 to gap-6 */}
// //             {menuItems.map((item) => (
// //               <a
// //                 key={item.label}
// //                 href={item.href}
// //                 className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium"
// //               >
// //                 {item.label}
// //               </a>
// //             ))}
// //           </div>
// //           {/* Right Actions */}
// //           <div className="flex items-center gap-2">
// //             {/* Reduced gap-3 to gap-2 */}
// //             <Button variant="ghost" size="icon" className="hidden md:flex">
// //               <User className="h-4 w-4" /> {/* Reduced h-5/w-5 to h-4/w-4 */}
// //             </Button>
// //             <Button variant="ghost" size="icon" className="hidden md:flex">
// //               <Search className="h-4 w-4" />
// //             </Button>
// //             <Link to="/login">
// //               <Button variant="hero" size="lg" className="hidden md:flex px-6">
// //                 {/* Added px-6 to reduce width */}
// //                 Hire Talent
// //               </Button>
// //             </Link>
// //             <Button
// //               variant="ghost"
// //               size="icon"
// //               className="lg:hidden"
// //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //             >
// //               <Menu className="h-4 w-4" />
// //             </Button>
// //           </div>
// //         </div>

// //         {/* Mobile Menu */}
// //         {isMobileMenuOpen && (
// //           <div className="lg:hidden py-3 border-t border-border">
// //             {/* Reduced py-4 to py-3 */}
// //             <div className="flex flex-col gap-3">
// //               {/* Reduced gap-4 to gap-3 */}
// //               {menuItems.map((item) => (
// //                 <a
// //                   key={item.label}
// //                   href={item.href}
// //                   className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium py-1"
// //                 >
// //                   {item.label}
// //                 </a>
// //               ))}
// //               <Link to="/login">
// //                 <Button variant="hero" className="w-full mt-1">
// //                   {/* Reduced mt-2 to mt-1 */}
// //                   Hire Talent
// //                 </Button>
// //               </Link>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );

// // };

// // src/components/Navigation.tsx
// import { Button } from "@/components/ui/button";
// import { Menu, Search, User } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom"; // Use React Router for Vite-based React apps

// // Updated Navigation Component - Reduced font sizes
// export const Navigation = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const menuItems = [
//     { label: "Why Freelance Match?", href: "#why" },
//     { label: "Use Cases", href: "#cases" },
//     { label: "Solutions", href: "#solutions" },
//     { label: "Platform", href: "#platform" },
//     { label: "Resources", href: "#resources" },
//     { label: "Talent", href: "#talent" },
//     { label: "About", href: "#about" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-14">
//           {/* Reduced h-16 to h-14 */}
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center">
//               {/* Reduced w-8/h-8 to w-7/h-7 */}
//               <span className="text-primary-foreground font-bold text-xs">
//                 {/* Reduced sm to xs */}F
//               </span>
//             </div>
//             <span className="text-lg font-bold text-foreground">
//               {/* Reduced xl to lg */}
//               Freelance Match
//             </span>
//           </div>
//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-6">
//             {/* Reduced gap-8 to gap-6 */}
//             {menuItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>
//           {/* Right Actions */}
//           <div className="flex items-center gap-2">
//             {/* Reduced gap-3 to gap-2 */}
//             <Button variant="ghost" size="icon" className="hidden md:flex">
//               <User className="h-4 w-4" /> {/* Reduced h-5/w-5 to h-4/w-4 */}
//             </Button>
//             <Button variant="ghost" size="icon" className="hidden md:flex">
//               <Search className="h-4 w-4" />
//             </Button>
//             <Link to="/register">
//               <Button variant="hero" size="lg" className="hidden md:flex px-6">
//                 {/* Added px-6 to reduce width */}
//                 Hire Talent
//               </Button>
//             </Link>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="lg:hidden"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               <Menu className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden py-3 border-t border-border">
//             {/* Reduced py-4 to py-3 */}
//             <div className="flex flex-col gap-3">
//               {/* Reduced gap-4 to gap-3 */}
//               {menuItems.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium py-1"
//                 >
//                   {item.label}
//                 </a>
//               ))}
//               <Link to="/register">
//                 <Button variant="hero" className="w-full mt-1">
//                   {/* Reduced mt-2 to mt-1 */}
//                   Hire Talent
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// src/components/Navigation.tsx (Updated: Added focus ring offsets and smooth transitions to <a> tags and Buttons to prevent layout shifts on click/hover; enhanced mobile menu toggle smoothness)
import { Button } from "@/components/ui/button";
import { Menu, Search, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom"; // Use React Router for Vite-based React apps

// Updated Navigation Component - Reduced font sizes
export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Why Freelance Match?", href: "#why" },
    { label: "Use Cases", href: "#cases" },
    { label: "Solutions", href: "#solutions" },
    { label: "Platform", href: "#platform" },
    { label: "Resources", href: "#resources" },
    { label: "Talent", href: "#talent" },
    { label: "About", href: "#about" },
  ];

  const handleMenuItemClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Optional: Prevent default jump and add smooth scroll if targeting sections
    const target = e.currentTarget.getAttribute("href");
    if (target && target.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-200">
      {" "}
      {/* Smooth backdrop transitions */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Reduced h-16 to h-14 */}
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center">
              {/* Reduced w-8/h-8 to w-7/h-7 */}
              <span className="text-primary-foreground font-bold text-xs">
                {/* Reduced sm to xs */}F
              </span>
            </div>
            <span className="text-lg font-bold text-foreground">
              {/* Reduced xl to lg */}
              Freelance Match
            </span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Reduced gap-8 to gap-6 */}
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleMenuItemClick}
                className="text-xs text-muted-foreground hover:text-foreground transition-all duration-150 ease-in-out font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" // NEW: Smooth transition + focus ring offset to prevent shifts
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Reduced gap-3 to gap-2 */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" // NEW: Focus ring offset
            >
              <User className="h-4 w-4" /> {/* Reduced h-5/w-5 to h-4/w-4 */}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" // NEW: Focus ring offset
            >
              <Search className="h-4 w-4" />
            </Button>
            <Link to="/register">
              <Button
                variant="hero"
                size="lg"
                className="hidden md:flex px-6 transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" // NEW: Focus ring offset + transition
              >
                {/* Added px-6 to reduce width */}
                Hire Talent
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" // NEW: Focus ring offset
              onClick={toggleMobileMenu}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-border transition-all duration-200 ease-in-out">
            {" "}
            {/* NEW: Smooth height transition for menu open/close */}
            <div className="flex flex-col gap-3">
              {/* Reduced gap-4 to gap-3 */}
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleMenuItemClick}
                  className="text-xs text-muted-foreground hover:text-foreground transition-all duration-150 ease-in-out font-medium py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" // NEW: Smooth + focus offset
                >
                  {item.label}
                </a>
              ))}
              <Link to="/register">
                <Button
                  variant="hero"
                  className="w-full mt-1 transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" // NEW: Focus offset
                >
                  {/* Reduced mt-2 to mt-1 */}
                  Hire Talent
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
