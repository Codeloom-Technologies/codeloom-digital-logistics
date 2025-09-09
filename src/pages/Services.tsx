import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Globe,
  Zap,
  Brain,
  Database,
  Smartphone,
  Cloud,
  Shield,
  Cog,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: Code,
      title: "Software Development",
      description:
        "Custom applications, platforms, and tools that solve real-world challenges with precision and innovation.",
      features: [
        "Web Applications & Platforms",
        "Mobile App Development",
        "Desktop Software Solutions",
        "API Development & Integration",
      ],
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description:
        "Helping businesses embrace modern technologies to boost efficiency, growth, and competitive advantage.",
      features: [
        "Legacy System Modernization",
        "Cloud Migration & Strategy",
        "Process Automation",
        "Digital Strategy Consulting",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Tech-Enabled Services",
      description:
        "Extending beyond pure software into smart, technology-powered operations and innovative solutions.",
      features: [
        "IoT Solutions & Implementation",
        "Smart Automation Systems",
        "Tech-Powered Logistics",
        "Integrated Service Platforms",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const specializations = [
    {
      icon: Brain,
      title: "Machine Learning & AI",
      description:
        "Intelligent solutions that learn and adapt to your business needs.",
      color: "text-orange-500",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "Robust data pipelines and analytics for informed decision-making.",
      color: "text-blue-500",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Responsive, intuitive applications optimized for all devices.",
      color: "text-green-500",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable, secure cloud infrastructure and deployment strategies.",
      color: "text-purple-500",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Enterprise-grade security measures and compliance protocols.",
      color: "text-red-500",
    },
    {
      icon: Cog,
      title: "System Integration",
      description:
        "Seamless integration of various systems and third-party services.",
      color: "text-indigo-500",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We analyze your needs, challenges, and goals to create a tailored solution strategy.",
    },
    {
      step: "02",
      title: "Design & Architecture",
      description:
        "Our team designs scalable, efficient solutions with user experience at the forefront.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Agile development with continuous testing ensures quality and reliability.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "Seamless deployment with ongoing support and maintenance for optimal performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            variant="secondary"
            className="mb-6 bg-white/10 text-white border-white/20"
          >
            Technology Solutions & Services
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            From software development to digital transformation, we deliver
            innovative solutions that drive business growth and technological
            excellence.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Core Service Offerings
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet your business
              needs and drive sustainable growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Technical Specializations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep expertise across modern technologies and methodologies to
              deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 bg-card"
                >
                  <CardContent className="p-6 text-center">
                    <Icon
                      className={`w-12 h-12 ${spec.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    />
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {spec.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {spec.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures quality, transparency, and
              successful project delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-primary text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gradient-primary opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LoomDash Highlight */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-accent rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
            <div className="relative">
              <Badge
                variant="secondary"
                className="mb-6 bg-white/20 text-white border-white/30"
              >
                Featured Service
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                LoomDash Logistics
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                Experience our tech-enabled logistics service that combines
                innovation with reliability. LoomDash represents our commitment
                to real-world technology applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Explore LoomDash
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10 text-lg px-8"
                >
                  Request Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Let's discuss how our services can help transform your business with
            innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Started Today
            </Button>
            <Link to="/schedule-consultation">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/30 hover:bg-white/10 text-lg px-8"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
