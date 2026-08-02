import { Award, Handshake, Globe } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { value: "500+", label: "Professionals Trained", color: "text-itilise-blue" },
    { value: "100+", label: "Organizations Served", color: "text-itilise-teal" },
    { value: "10+", label: "Years Experience", color: "text-itilise-blue" },
    { value: "98%", label: "Client Satisfaction", color: "text-itilise-teal" },
  ];

  const credentials = [
    {
      icon: Award,
      iconColor: "text-itilise-blue",
      text: "Certified trainers and consultants",
    },
    {
      icon: Handshake,
      iconColor: "text-itilise-teal",
      text: "Trusted by leading organizations",
    },
    {
      icon: Globe,
      iconColor: "text-itilise-blue",
      text: "Global delivery capabilities",
    },
  ];

  return (
    <section id="about" className="py-20 bg-itilise-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About ITILISE Ltd</h2>
            <p className="text-lg text-itilise-gray mb-6">
              ITILISE Ltd is a leading provider of professional training and consultancy services, specializing in proven methodologies and frameworks that drive organizational excellence.
            </p>
            <p className="text-lg text-itilise-gray mb-8">
              Our experienced team of certified practitioners brings deep expertise across PRINCE2©, Agile, ITIL©, and SCRUM methodologies, helping organizations implement these frameworks effectively and achieve sustainable improvements.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-itilise-gray">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center">
                  <credential.icon className={`w-6 h-6 ${credential.iconColor} mr-3`} />
                  <span className="text-itilise-gray">{credential.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional business team" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
