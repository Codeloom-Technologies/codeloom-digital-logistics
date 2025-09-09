import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  Clock,
  MapPin,
  Zap,
  Shield,
  Users,
  Package,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-loomdash.jpg";
import { Link } from "react-router-dom";

const LoomDash = () => {
  const services = [
    {
      icon: Clock,
      title: "Express Dispatch",
      description:
        "Same-day or next-day city deliveries with guaranteed time slots.",
    },
    {
      icon: Package,
      title: "E-commerce Fulfillment",
      description:
        "Helping businesses deliver to customers quickly and efficiently.",
    },
    {
      icon: Users,
      title: "Corporate Deliveries",
      description:
        "Professional and timely service for companies and enterprises.",
    },
    {
      icon: Truck,
      title: "On-Demand Riders",
      description:
        "Flexible dispatch riders available when you need them most.",
    },
  ];

  const features = [
    {
      icon: Zap,
      text: "Speed & Reliability – We deliver on time, every time.",
    },
    {
      icon: MapPin,
      text: "Smart Tracking – Stay updated with real-time delivery insights.",
    },
    {
      icon: Shield,
      text: "Backed by Technology – Supported by the innovation of Codeloom Technologies.",
    },
    {
      icon: Users,
      text: "Customer-Centric Service – Designed to make your deliveries seamless and stress-free.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-secondary">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <Badge
              variant="secondary"
              className="mb-4 bg-white/10 text-white border-white/20"
            >
              Powered by Codeloom Technologies
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              LoomDash
              <span className="block text-2xl lg:text-3xl font-normal text-white/90 mt-2">
                Dispatch & Last-Mile Delivery
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Powered by Codeloom, Delivered with Speed. We combine innovation,
              technology, and efficiency to provide fast, reliable, and
              trackable deliveries across the city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/start-delivery">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow text-lg px-8"
                >
                  Start Delivery <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/track-delivery">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10 text-lg px-8"
                >
                  Track Package
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To redefine dispatch logistics through technology — making
              deliveries smarter, faster, and more dependable.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose LoomDash */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Why Choose LoomDash?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-lg hover:bg-muted/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg text-foreground font-medium leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Services We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                      <Icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Connection */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge
              variant="outline"
              className="mb-6 border-primary/20 text-primary"
            >
              Part of Codeloom Technologies Family
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Technology-Driven Logistics
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              LoomDash is the dispatch and last-mile delivery service of
              Codeloom Dispatch Logistics Ltd., operating under the umbrella of
              Codeloom Technologies. We combine innovation, technology, and
              efficiency to provide fast, reliable, and trackable deliveries
              across the city.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Quick. Reliable. Tech-Driven.
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            At LoomDash, we don't just move packages — we deliver trust, speed,
            and innovation. Backed by Codeloom Technologies, you can count on us
            for reliable dispatch logistics that keep your world moving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-delivery">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Request Delivery
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-gradient-primary border-white/30 hover:bg-white/10 text-lg px-8"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoomDash;
