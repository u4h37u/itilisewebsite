import { useState } from "react";
import { Menu, X } from "lucide-react";
import itiliseLogo from "@assets/Itilise Logo_redraw-01_1750344710701.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#training", label: "Training" },
    { href: "#consultancy", label: "Consultancy" },
    { href: "#about", label: "About" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src={itiliseLogo} 
              alt="ITILISE Ltd Logo" 
              className="h-10 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-itilise-gray hover:text-itilise-blue transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#contact")}
                className="bg-itilise-blue text-white px-4 py-2 rounded-lg hover:bg-itilise-blue-dark transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-itilise-gray hover:text-itilise-blue"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-itilise-gray hover:text-itilise-blue transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#contact")}
                className="block w-full text-left px-3 py-2 bg-itilise-blue text-white rounded-lg hover:bg-itilise-blue-dark transition-colors font-medium mt-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
