import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Zap } from "lucide-react";
import hackathon1 from "@/assets/hackathon-1.jpg";
import hackathon2 from "@/assets/hackathon-2.jpg";

const Hackathons = () => {
  const achievements = [
    {
      title: "Hybrid Hack 2025",
      event: "SRM AARUUSH '25",
      result: "Selected for 2nd Round",
      date: "July - August 2025",
      image: hackathon1,
      highlight: true,
    },
    {
      title: "IORT Workshop",
      event: "Internet of Robotic Things - IIT Varanasi",
      result: "Completed",
      date: "April 2025",
      image: hackathon2,
      description: "National Level workshop held at SRM Institute of Science and Technology",
    },
    {
      title: "HACK STACK",
      result: "Participated",
      date: "2025",
    },
  ];

  return (
    <section id="hackathons" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-secondary mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Recent Hackathon Achievements
            </span>
          </h2>
          <div className="h-1 w-24 gradient-secondary rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className={`group overflow-hidden transition-smooth hover:shadow-glow border-2 hover:border-accent/50 ${
                achievement.highlight ? 'ring-2 ring-accent/20' : ''
              }`}
            >
              {achievement.image && (
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/5 to-secondary/5">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  {achievement.highlight && (
                    <div className="absolute top-4 right-4">
                      <Badge className="gradient-secondary text-white shadow-lg animate-pulse">
                        <Zap className="w-3 h-3 mr-1" />
                        Highlight
                      </Badge>
                    </div>
                  )}
                </div>
              )}
              
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold group-hover:text-accent transition-smooth">
                  {achievement.title}
                </h3>
                
                {achievement.event && (
                  <p className="text-sm text-muted-foreground font-medium">
                    {achievement.event}
                  </p>
                )}
                
                {achievement.description && (
                  <p className="text-sm text-foreground/70">
                    {achievement.description}
                  </p>
                )}
                
                <div className="flex items-center justify-between pt-2">
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    {achievement.result}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {achievement.date}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
