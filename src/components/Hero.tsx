import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-hero opacity-10 animate-pulse" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About Me */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                About Me
              </h2>
              <div className="h-1 w-20 gradient-primary rounded-full" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                S.M. Sudharshan
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground font-medium">
              2nd-year B.Tech CSE Student | Web Developer | Cloud Computing Enthusiast
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm passionate about Cloud Computing and Web Development, building creative, functional web applications that make an impact. 
              Currently serving as a Web Developer at Hybrutos Racing Club, I enjoy coding in C++, Java, and Python, 
              constantly exploring new tools and frameworks to grow as a developer.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="gradient" size="lg" asChild>
                <a href="https://github.com/sudharshan200601" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="gradientSecondary" size="lg" asChild>
                <a href="https://www.linkedin.com/in/sudharshan-sm-5b0a4a341/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:ss5630@srmist.edu.in">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  2nd Year
                </p>
                <p className="text-sm text-muted-foreground">CSE Student</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  SRM IST
                </p>
                <p className="text-sm text-muted-foreground">Kattankulathur</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Photo placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute inset-0 gradient-primary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
              
              {/* Photo placeholder */}
              <div className="relative w-80 h-96 rounded-3xl border-4 border-primary/20 bg-card shadow-glow overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">SS</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Add your photo here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
