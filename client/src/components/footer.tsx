import itiliseLogo from "@assets/Itilise Logo_redraw-01_1750344710701.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trainingPrograms = [
    { name: "PRINCE2©", href: "#training" },
    { name: "PRINCE2 Agile©", href: "#training" },
    { name: "AgilePM©", href: "#training" },
    { name: "ITIL©", href: "#training" },
    { name: "FitSM", href: "#training" },
    { name: "SCRUM", href: "#training" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Consultancy", href: "#consultancy" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src={itiliseLogo} 
              alt="ITILISE Ltd Logo" 
              className="h-10 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400 mb-4 max-w-md">
              Professional training and consultancy services delivering excellence in project management, agile methodologies, and IT service management.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Training Programs</h4>
            <ul className="space-y-2 text-gray-400">
              {trainingPrograms.map((program) => (
                <li key={program.name}>
                  <button
                    onClick={() => scrollToSection(program.href)}
                    className="hover:text-itilise-teal transition-colors text-left"
                  >
                    {program.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-itilise-teal transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 ITILISE Ltd. All rights reserved.</p>
          <p className="mt-1 text-sm">Company registration number: 11289377</p>
        </div>
      </div>
    </footer>
  );
}
