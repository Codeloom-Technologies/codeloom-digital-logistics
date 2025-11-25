import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Users,
  Calendar,
  FileText,
  Activity,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Products = () => {
  const features = [
    {
      icon: Users,
      title: "Patient Management",
      description:
        "Comprehensive patient records, history tracking, and appointment scheduling all in one place.",
    },
    {
      icon: Calendar,
      title: "Appointment System",
      description:
        "Smart scheduling with automated reminders and real-time availability updates.",
    },
    {
      icon: FileText,
      title: "Medical Records",
      description:
        "Secure digital medical records with easy access and compliance built-in.",
    },
    {
      icon: Activity,
      title: "Real-time Analytics",
      description:
        "Insightful dashboards and reports to help make data-driven decisions.",
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "HIPAA-compliant security measures to protect sensitive patient information.",
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description:
        "Lightning-fast performance with cloud-based infrastructure for seamless operations.",
    },
  ];

  const benefits = [
    "Streamline hospital operations and reduce administrative burden",
    "Improve patient care with instant access to medical histories",
    "Reduce wait times with intelligent appointment scheduling",
    "Enhance security and compliance with industry standards",
    "Scale effortlessly as your healthcare facility grows",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge
              variant="secondary"
              className="mb-4 bg-white/10 text-white border-white/20"
            >
              Hospital Management System
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              CuraCloud HMS
              <span className="block text-2xl lg:text-3xl font-normal text-white/90 mt-2">
                Modern Healthcare Management
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              A comprehensive Hospital Management System designed to streamline
              healthcare operations, improve patient care, and enhance
              efficiency across your entire facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cura-cloud.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow text-lg px-8"
                >
                  Launch CuraCloud <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10 text-lg px-8"
                >
                  Request Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Powerful Features for Modern Healthcare
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage your healthcare facility efficiently
              and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Choose CuraCloud HMS?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Built by Codeloom Technologies, CuraCloud HMS combines
                cutting-edge technology with healthcare expertise to deliver a
                solution that truly understands your needs.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-secondary rounded-lg shadow-elegant flex items-center justify-center">
                <Building2 className="w-32 h-32 text-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Facility?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Join healthcare providers who trust CuraCloud HMS to manage their
            operations efficiently and improve patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cura-cloud.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started Now
              </Button>
            </a>
            <a href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/30 hover:bg-white/10 text-lg px-8"
              >
                Schedule a Demo
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
