import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import unifix1 from "@/assets/unifix-1.jpg";
import unifix2 from "@/assets/unifix-2.jpg";
import unifix3 from "@/assets/unifix-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "UniFix",
      description: "A Java Swing + MySQL desktop application that enables university students and staff to register, manage, and resolve complaints related to hostel, mess, academic, or general campus issues. It serves as a unified digital complaint portal where students can raise problems, wardens or admins can assign technicians, and staff can track complaint resolution progress.",
      tags: ["Java", "Swing", "MySQL", "Desktop App"],
      images: [unifix1, unifix2, unifix3],
      inspiration: "Interface and flow inspired by SRMIST ServiceDesk portal",
    },
    {
      title: "PRO-PHOTO-EDIT",
      description: "A mobile photo-editing application designed to enhance and modify images easily. Developed using React Native with Expo, allowing it to run on both Android and iOS platforms. The app provides users with essential image-editing tools such as cropping, brightness adjustment, and filter effects.",
      tags: ["React Native", "Expo", "Mobile", "TypeScript"],
      github: "https://github.com/sudharshan200601/PRO-PHOTO-EDIT",
      collaboration: true,
    },
    {
      title: "Emergency AI Triage App",
      description: "An offline-first Android app that combines voice, text, and image analysis to provide intelligent medical triage using on-device TensorFlow Lite models. It classifies conditions, estimates urgency (Green/Yellow/Red), and suggests actions, all while keeping data private and fast on mobile devices.",
      tags: ["Android", "TensorFlow Lite", "AI/ML", "Healthcare"],
      github: "https://github.com/Arjjun-S/EmergencyTriageApp.git",
      collaboration: true,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Project Profile
            </span>
          </h2>
          <div className="h-1 w-24 gradient-primary rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden transition-smooth hover:shadow-glow border-2 hover:border-primary/50"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  {project.collaboration && (
                    <Badge variant="secondary" className="text-xs">
                      Collab
                    </Badge>
                  )}
                </div>

                {project.images && (
                  <div className="grid grid-cols-3 gap-2">
                    {project.images.map((img, i) => (
                      <div key={i} className="aspect-square rounded-lg overflow-hidden border border-border">
                        <img 
                          src={img} 
                          alt={`${project.title} screenshot ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <p className="text-foreground/80 leading-relaxed">
                  {project.description}
                </p>

                {project.inspiration && (
                  <p className="text-sm text-muted-foreground italic">
                    {project.inspiration}
                  </p>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="bg-primary/5">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {project.github && (
                  <Button variant="gradient" className="w-full mt-4" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on GitHub
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

export default Projects;
