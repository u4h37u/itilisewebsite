import { Rocket, TrendingUp, UserCog, Cog } from "lucide-react";

export default function ConsultancySection() {
  const consultancyServices = [
    {
      icon: Rocket,
      iconColor: "bg-itilise-blue",
      title: "Quick Start Programs",
      description: "Accelerated implementation paths for immediate value delivery",
    },
    {
      icon: TrendingUp,
      iconColor: "bg-itilise-teal",
      title: "Maturity Assessments",
      description: "Comprehensive evaluation of current capabilities and improvement opportunities",
    },
    {
      icon: UserCog,
      iconColor: "bg-purple-600",
      title: "Change Management",
      description: "People-focused approaches to ensure successful adoption",
    },
    {
      icon: Cog,
      iconColor: "bg-orange-500",
      title: "Process Optimization",
      description: "Continuous improvement and efficiency enhancement strategies",
    },
  ];

  const additionalServices = [
    {
      title: "Strategic Planning",
      description: "Develop comprehensive implementation roadmaps aligned with business objectives and organizational capacity.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    },
    {
      title: "Team Coaching",
      description: "Ongoing support and mentoring to embed new practices and ensure sustainable improvement.",
      image: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    },
    {
      title: "Health Checks",
      description: "Regular assessments to monitor progress, identify issues early, and optimize performance continuously.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    },
  ];

  return (
    <section id="consultancy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Consultancy Services</h2>
          <p className="text-xl text-itilise-gray max-w-3xl mx-auto">
            Strategic guidance to implement and optimize methodologies for maximum organizational benefit
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Strategic consultancy meeting" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Implementation & Optimization</h3>
            <p className="text-lg text-itilise-gray mb-8">
              Our consultancy services help organizations successfully adopt and optimize proven methodologies, ensuring maximum return on investment and sustainable change.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {consultancyServices.map((service, index) => (
                <div key={index} className="flex items-start">
                  <div className={`${service.iconColor} rounded-lg p-3 mr-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-itilise-gray text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <div key={index} className="text-center p-6 bg-itilise-light rounded-xl">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-itilise-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
