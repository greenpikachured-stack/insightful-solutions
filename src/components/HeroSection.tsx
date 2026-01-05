import { ArrowRight, Code2, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-abstract.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-30">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 mx-auto px-6 py-20 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left content */}
          <div className="max-w-2xl">
            {/* Tag */}
            <div 
              className="mb-8 inline-flex items-center gap-2 border border-border bg-card px-4 py-2 text-sm font-mono text-muted-foreground opacity-0 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              IT Solutions Partner
            </div>

            {/* Headline */}
            <h1 
              className="mb-6 font-sans text-4xl font-bold leading-tight tracking-tight text-foreground opacity-0 animate-fade-up md:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.2s" }}
            >
              Solutions that
              <span className="relative mx-3 inline-block">
                <span className="relative z-10 text-primary">scale</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full animate-draw-line"
                  height="8"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 7 Q50 0 100 7"
                    stroke="hsl(var(--accent))"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="1000"
                  />
                </svg>
              </span>
              with your vision
            </h1>

            {/* Subheadline */}
            <p 
              className="mb-10 text-lg leading-relaxed text-muted-foreground opacity-0 animate-fade-up md:text-xl"
              style={{ animationDelay: "0.3s" }}
            >
              We deliver technology expertise without the overhead. 
              Clear scope. Clean execution. Predictable outcomes.
            </p>

            {/* CTAs */}
            <div 
              className="mb-12 flex flex-wrap items-center gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button variant="hero" size="xl">
                Let's talk
                <ArrowRight className="ml-1" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Our approach
              </Button>
            </div>

            {/* Trust indicators */}
            <div 
              className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-primary" />
                <span>Clean architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent" />
                <span>Fast delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>Reliable support</span>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div 
            className="relative flex items-center justify-center opacity-0 animate-slide-in-right"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-border/50 bg-card/30 backdrop-blur-sm" />
            <div className="absolute -inset-4 translate-x-3 translate-y-3 border border-primary/20" />
            
            {/* Image container */}
            <div className="relative z-10 overflow-hidden border border-border bg-card p-2 shadow-xl">
              <img
                src={heroImage}
                alt="Abstract technology network visualization"
                className="aspect-video w-full max-w-lg object-cover animate-pulse-glow"
                style={{ animationDuration: "4s" }}
              />
              
              {/* Floating badge */}
              <div className="absolute -right-4 -top-4 z-20 border border-border bg-card px-4 py-2 shadow-lg">
                <p className="font-mono text-xs text-muted-foreground">Since</p>
                <p className="text-xl font-bold text-foreground">2018</p>
              </div>
            </div>

            {/* Tech stack indicator */}
            <div className="absolute -bottom-6 -left-6 z-20 border border-border bg-card px-6 py-3 shadow-lg">
              <p className="font-mono text-xs text-muted-foreground mb-1">Technologies</p>
              <div className="flex gap-2">
                {["React", "Node", "Cloud"].map((tech) => (
                  <span 
                    key={tech}
                    className="bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default HeroSection;