import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";
import certIbm from "@/assets/cert-ibm.jpg";
import certAws from "@/assets/cert-aws.jpg";
import certNptel from "@/assets/cert-nptel.jpg";
import nptelJava from "@/assets/nptel-java.jpg";

const Certificates = () => {
  const certificates = [
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM - Coursera",
      date: "March 2025",
      image: certIbm,
      verify: "https://www.credly.com/badges/ac4d768b-c9ed-4eca-8f16-b4c99e5f3158",
      badge: "Professional",
    },
    {
      title: "AWS Cloud Virtual Internship",
      issuer: "AICTE - EduSkills",
      date: "January - March 2025",
      duration: "10 weeks",
      image: certAws,
      certId: "afhdcdb8214d332de971a322fa5ea6e3",
      badge: "Internship",
    },
    {
      title: "Fundamentals of Object Oriented Programming",
      issuer: "NPTEL - IIT Roorkee",
      date: "Jan-Apr 2025",
      score: "67%",
      image: certNptel,
      rollNo: "NPTEL25CS34S548500988",
      badge: "Elite",
    },
    {
      title: "Programming in Java",
      issuer: "NPTEL - SWAYAM",
      date: "In Progress",
      progress: "36.84%",
      image: nptelJava,
      badge: "Ongoing",
    },
  ];

  return (
    <section id="certificates" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Certificates & Achievements
            </span>
          </h2>
          <div className="h-1 w-24 gradient-primary rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden transition-smooth hover:shadow-glow border-2 hover:border-primary/50"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                {cert.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge className="gradient-primary text-white shadow-lg">
                      {cert.badge}
                    </Badge>
                  </div>
                )}
              </div>
              
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                  {cert.title}
                </h3>
                
                <p className="text-muted-foreground font-medium">
                  {cert.issuer}
                </p>
                
                <div className="flex flex-wrap gap-2 text-sm text-foreground/70">
                  <span>📅 {cert.date}</span>
                  {cert.duration && <span>• {cert.duration}</span>}
                  {cert.score && (
                    <Badge variant="secondary" className="ml-auto">
                      Score: {cert.score}
                    </Badge>
                  )}
                  {cert.progress && (
                    <Badge variant="secondary" className="ml-auto bg-accent/10 text-accent">
                      Progress: {cert.progress}
                    </Badge>
                  )}
                </div>
                
                {cert.certId && (
                  <p className="text-xs text-muted-foreground font-mono">
                    ID: {cert.certId}
                  </p>
                )}
                
                {cert.rollNo && (
                  <p className="text-xs text-muted-foreground font-mono">
                    Roll: {cert.rollNo}
                  </p>
                )}
                
                {cert.verify && (
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={cert.verify} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Verify Certificate
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
