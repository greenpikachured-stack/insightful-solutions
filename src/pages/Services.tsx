import { Code, Cloud, Users, Zap, Shield, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom solutions built with modern technologies that scale with your business needs.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Robust cloud infrastructure design and migration for optimal performance.",
  },
  {
    icon: Users,
    title: "Team Augmentation",
    description: "Skilled professionals who integrate seamlessly with your existing teams.",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end modernization of legacy systems and processes.",
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Comprehensive security audits and implementation of best practices.",
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description: "Turn your data into actionable insights with advanced analytics.",
  },
];

const Services = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Solutions That Drive{" "}
            <span className="text-primary">Innovation</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We deliver strategic IT solutions tailored to your unique challenges, 
            helping you stay ahead in an ever-evolving digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how we can help transform your business with the right technology solutions.
          </p>
          <Button variant="hero" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
