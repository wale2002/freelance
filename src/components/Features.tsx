// src/components/Features.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Zap, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

// Updated Features Component - Reduced font sizes
export const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Global Talent Pool",
      description:
        "Access 150,000+ pre-vetted engineers, designers, and data scientists from around the world.",
    },
    {
      icon: Zap,
      title: "Fast Deployment",
      description:
        "Reduce time-to-hire by 66% with our streamlined matching and onboarding process.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description:
        "Every professional goes through rigorous technical assessments and background checks.",
    },
    {
      icon: TrendingUp,
      title: "Cost Effective",
      description:
        "Save an average of $80,000 per hire while getting top-tier talent.",
    },
  ];

  return (
    <motion.section
      className="py-16 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, staggerChildren: 0.1 },
        },
      }}
    >
      {" "}
      {/* Reduced py-24 to py-16 */}
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {" "}
          {/* Reduced mb-16 to mb-12 */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {" "}
            {/* Reduced from 4xl/5xl to 3xl/4xl */}
            Why Choose Freelance Match?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {" "}
            {/* Reduced from xl to lg */}
            We connect you with world-class talent that drives real business
            results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {" "}
          {/* Reduced gap-8 to gap-6, mb-16 to mb-12 */}
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4 hover:shadow-lg transition-shadow border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    {" "}
                    {/* Reduced w-12/h-12 to w-10/h-10, mb-4 to mb-3 */}
                    <Icon className="h-5 w-5 text-primary" />{" "}
                    {/* Reduced h-6/w-6 to h-5/w-5 */}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {" "}
                    {/* Reduced xl to lg, mb-3 to mb-2 */}
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {" "}
                    {/* Reduced implicit size, explicit sm */}
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Link to="/register">
            <Button variant="hero" size="lg" className="px-8">
              {" "}
              {/* Reduced px-10 to px-8 */}
              Get Started Today
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};
