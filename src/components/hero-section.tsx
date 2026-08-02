import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-itilise-light to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional <span className="text-itilise-blue">Training</span> & <span className="text-itilise-teal">Consultancy</span> Services
            </h1>
            <p className="text-xl text-itilise-gray mb-8 leading-relaxed">
              Expert delivery of PRINCE2©, PRINCE2 Agile©, AgilePM©, FitSM, ITIL© and SCRUM training, plus consultancy services to help your organisation implement and maximize the value from these proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("#services")}
                className="bg-itilise-blue text-white px-8 py-3 rounded-lg hover:bg-itilise-blue-dark transition-colors font-semibold"
              >
                Explore Services
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-2 border-itilise-teal text-itilise-teal px-8 py-3 rounded-lg hover:bg-itilise-teal hover:text-white transition-colors font-semibold"
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional business training session" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
