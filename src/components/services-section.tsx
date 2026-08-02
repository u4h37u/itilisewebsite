import { GraduationCap, Handshake, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-900 font-medium max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive training and consultancy across industry-leading methodologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl border-2 border-blue-700">
            <div className="mb-6">
              <GraduationCap className="w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Professional Training</h3>
              <p className="text-white mb-6">
                Certified training programs designed to build expertise and drive professional development across all major methodologies.
              </p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3" />
                <span>PRINCE2© & PRINCE2 Agile©</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3" />
                <span>AgilePM© & SCRUM</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3" />
                <span>ITIL© & FitSM</span>
              </li>
            </ul>
            <Button
              onClick={() => scrollToSection("#training")}
              className="bg-white text-itilise-blue px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              View Training Programs
            </Button>
          </div>

          <div className="bg-teal-600 text-white p-8 rounded-2xl shadow-xl border-2 border-teal-700">
            <div className="mb-6">
              <Handshake className="w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Expert Consultancy</h3>
              <p className="text-white mb-6">
                Strategic consultancy services to help organizations successfully implement and optimize their use of proven methodologies.
              </p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3" />
                <span>Implementation Planning</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3" />
                <span>Process Optimization</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3" />
                <span>Change Management</span>
              </li>
            </ul>
            <Button
              onClick={() => scrollToSection("#consultancy")}
              className="bg-white text-itilise-teal px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Explore Consultancy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
