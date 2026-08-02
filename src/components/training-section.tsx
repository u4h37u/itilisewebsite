import { Clock, IdCard, Users, Cog, HelpingHand, Puzzle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function TrainingSection() {
  const trainingPrograms = [
    {
      id: "prince2",
      title: "PRINCE2© Foundation & Practitioner",
      description: "Master the world's most widely adopted project management methodology with our comprehensive PRINCE2© training program.",
      badge: "PRINCE2",
      badgeColor: "bg-itilise-blue",
      image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      features: [
        { icon: Clock, text: "3-5 days intensive training" },
        { icon: IdCard, text: "Official certification" },
      ],
      buttonColor: "bg-itilise-blue hover:bg-itilise-blue-dark",
    },
    {
      id: "agile",
      title: "PRINCE2 Agile© & AgilePM©",
      description: "Combine the governance of PRINCE2© with agile flexibility, plus master AgilePM© for dynamic project delivery.",
      badge: "AGILE",
      badgeColor: "bg-itilise-teal",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      features: [
        { icon: Clock, text: "2-4 days per program" },
        { icon: Users, text: "Interactive workshops" },
      ],
      buttonColor: "bg-itilise-teal hover:bg-green-600",
    },
    {
      id: "itsm",
      title: "ITIL© & FitSM",
      description: "Build expertise in IT service management with ITIL© best practices and lightweight FitSM framework.",
      badge: "ITSM",
      badgeColor: "bg-purple-600",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      features: [
        { icon: Clock, text: "Flexible scheduling" },
        { icon: Cog, text: "Practical scenarios" },
      ],
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
    {
      id: "scrum",
      title: "SCRUM Master & Product Owner",
      description: "Master the most popular agile framework with hands-on SCRUM training for all key roles.",
      badge: "SCRUM",
      badgeColor: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      features: [
        { icon: Clock, text: "2-3 days intensive" },
        { icon: HelpingHand, text: "Role-based training" },
      ],
      buttonColor: "bg-orange-500 hover:bg-orange-600",
    },
    {
      id: "custom",
      title: "Bespoke Training Programs",
      description: "Tailored training solutions designed specifically for your organization's needs and context.",
      badge: "CUSTOM",
      badgeColor: "bg-gray-600",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      features: [
        { icon: Puzzle, text: "Customized content" },
        { icon: MapPin, text: "On-site or remote" },
      ],
      buttonColor: "bg-gray-600 hover:bg-gray-700",
      buttonText: "Discuss Requirements",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="training" className="py-20 bg-itilise-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Training Programs</h2>
          <p className="text-xl text-itilise-gray max-w-3xl mx-auto">
            Professional certification programs delivered by experienced practitioners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingPrograms.map((program) => (
            <div key={program.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={program.image} 
                alt={`${program.title} training session`} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Badge className={`${program.badgeColor} text-white`}>
                    {program.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-itilise-gray mb-4">
                  {program.description}
                </p>
                <ul className="text-sm text-itilise-gray mb-6 space-y-2">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <feature.icon className="w-4 h-4 mr-2 text-itilise-teal" />
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  className={`w-full text-white py-3 rounded-lg transition-colors font-semibold ${program.buttonColor}`}
                >
                  {program.buttonText || "Learn More"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
