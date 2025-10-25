import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border">
      <div className="absolute inset-0 gradient-hero opacity-5" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              S.M. Sudharshan
            </h3>
            <p className="text-sm text-muted-foreground">
              B.Tech CSE Student at SRM Institute of Science and Technology
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#certificates" className="text-muted-foreground hover:text-primary transition-colors">
                Certificates
              </a>
              <a href="#hackathons" className="text-muted-foreground hover:text-primary transition-colors">
                Hackathons
              </a>
              <a href="#hackerrank" className="text-muted-foreground hover:text-primary transition-colors">
                HackerRank
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/sudharshan200601" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/sudharshan-sm-5b0a4a341/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              RA2411003010290
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 S.M. Sudharshan. Portfolio for Advanced Programming Practice (21CSC203P)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
