import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Rocket, 
  Shield, 
  Truck, 
  ArrowRight, 
  CheckCircle,
  Smartphone,
  Globe,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-codeloom.jpg";

const Index = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom applications, platforms, and tools that solve real-world challenges."
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Helping businesses embrace modern technologies to boost efficiency and growth."
    },
    {
      icon: Zap,
      title: "Tech-Enabled Services",
      description: "Extending beyond pure software into smart, technology-powered operations."
    }
  ];

  const achievements = [
    { number: "50+", label: "Projects Delivered" },
    { number: "25+", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              Innovative Digital Solutions
            </Badge>
            <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Codeloom
              <span className="block text-2xl lg:text-3xl font-normal text-white/90 mt-2">
                Technologies
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              We weave technology seamlessly into the way people live, work, and move — 
              delivering products and services that are smart, efficient, and impactful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 shadow-glow">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link to="/loomdash">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-white border-white/30 hover:bg-white/10 text-lg px-8 w-full sm:w-auto"
                >
                  <Truck className="mr-2 w-5 h-5" />
                  Meet LoomDash
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Codeloom Technologies is a forward-thinking tech company dedicated to building 
              innovative digital solutions that power businesses and everyday life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Innovation at Our Core
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our mission is to weave technology seamlessly into the way people live, work, 
                and move — delivering products and services that are smart, efficient, and impactful.
              </p>
              <div className="space-y-4">
                {[
                  "Technology-driven solutions across multiple sectors",
                  "Focus on innovation, reliability, and customer value",
                  "Expertise in software development and digital transformation",
                  "Real-world applications that make a difference"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300 border-0 bg-muted/30">
                  <CardContent className="p-6">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We provide technology-driven solutions across multiple sectors, with a focus 
              on innovation, reliability, and customer value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* LoomDash Highlight */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-accent rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
            <div className="relative">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                Our Subsidiary Service
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Meet LoomDash
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                As part of our drive to merge tech with real-world needs, we launched LoomDash, 
                a dispatch and last-mile delivery service. Powered by Codeloom's innovation, 
                LoomDash brings speed, reliability, and smart logistics to businesses and individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/loomdash">
                  <Button size="lg" variant="secondary" className="text-lg px-8">
                    <Truck className="mr-2 w-5 h-5" />
                    Explore LoomDash
                  </Button>
                </Link>
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

      {/* Vision Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Our Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To become a leading African technology company that inspires trust, drives progress, 
            and connects people through innovative digital and logistics solutions.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Let's work together to bring innovative technology solutions to your business. 
            Contact us today to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Started Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white/30 hover:bg-white/10 text-lg px-8"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;