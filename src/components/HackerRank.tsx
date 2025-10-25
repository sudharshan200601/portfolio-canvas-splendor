import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ExternalLink, Code2, Star } from "lucide-react";
import hackerrank1 from "@/assets/hackerrank-1.jpg";
import hackerrank2 from "@/assets/hackerrank-2.jpg";
import hackerrank3 from "@/assets/hackerrank-3.jpg";
import hackerrank4 from "@/assets/hackerrank-4.jpg";

const HackerRank = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const stats = {
    rank: "490,810",
    points: "265/400",
    nextBadge: "135 points to Gold badge",
  };

  const skills = [
    "Problem Solving (Basic)",
    "Python (Basic)",
    "Problem Solving (Advanced)",
    "Python (Intermediate)",
  ];

  const recentSolved = [
    { problem: "Validating Postal Codes", language: "pypy3", score: 80.0, difficulty: "Hard" },
    { problem: "Maximize It!", language: "pypy3", score: 50.0, difficulty: "Hard" },
    { problem: "The Minion Game", language: "pypy3", score: 40.0, difficulty: "Medium" },
    { problem: "Write a function", language: "pypy3", score: 10.0, difficulty: "Medium" },
  ];

  return (
    <section id="hackerrank" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-accent mb-4">
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              HackerRank Profile
            </span>
          </h2>
          <div className="h-1 w-24 gradient-accent rounded-full mx-auto mb-6" />
          
          <Button variant="gradient" size="lg" asChild>
            <a href="https://www.hackerrank.com/profile/smssudharshan471" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Full Profile
            </a>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center gradient-primary text-white shadow-glow">
            <p className="text-sm opacity-90 mb-2">Rank</p>
            <p className="text-4xl font-bold">{stats.rank}</p>
          </Card>
          <Card className="p-6 text-center gradient-secondary text-white shadow-glow">
            <p className="text-sm opacity-90 mb-2">Points</p>
            <p className="text-4xl font-bold">{stats.points}</p>
          </Card>
          <Card className="p-6 text-center gradient-accent text-white shadow-glow">
            <Star className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm opacity-90">{stats.nextBadge}</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skills Section */}
          <Card className="p-6 border-2 hover:border-primary/50 transition-smooth">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <div className="w-2 h-8 gradient-primary rounded-full" />
              Skills Certified
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="p-3 text-sm border-2 hover:border-primary transition-smooth justify-center"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Recent Solved Problems */}
          <Card className="p-6 border-2 hover:border-accent/50 transition-smooth">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <div className="w-2 h-8 gradient-accent rounded-full" />
              Recent Solved Problems
            </h3>
            <div className="space-y-3">
              {recentSolved.map((problem, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-smooth"
                >
                  <div className="flex-1">
                    <p className="font-medium text-sm">{problem.problem}</p>
                    <p className="text-xs text-muted-foreground">{problem.language}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="secondary" 
                      className={
                        problem.difficulty === "Hard" 
                          ? "bg-destructive/10 text-destructive" 
                          : "bg-accent/10 text-accent"
                      }
                    >
                      {problem.difficulty}
                    </Badge>
                    <span className="text-sm font-bold text-primary">{problem.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Screenshots Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Profile Screenshots</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[hackerrank1, hackerrank2, hackerrank3, hackerrank4].map((img, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group cursor-pointer hover:shadow-glow transition-smooth"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`HackerRank screenshot ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Full size screenshot" 
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HackerRank;
