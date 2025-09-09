import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  Globe,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      info: "codeloomtechnologies@gmail.com",
      description: "Send us an email and we'll respond within 24 hours",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+234 (9033) 440-507",
      description: "Speak directly with our team during business hours",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      info: "Available Now",
      description: "Get instant support through our website chat",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["We work remotely", "In, Abuja", "Nigeria"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
    },
    {
      icon: Users,
      title: "Support Team",
      details: [
        "Technical Support 24/7",
        "Sales Team Available",
        "Project Management",
      ],
    },
  ];

  const services = [
    "Software Development",
    "Digital Transformation",
    "Machine Learning & AI",
    "Mobile App Development",
    "LoomDash Logistics",
    "Cloud Solutions",
    "System Integration",
    "Other Services",
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
            Get in Touch
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with innovative technology? Let's
            discuss your project and bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              How to Reach Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your preferred way to connect with our team. We're here to
              help with all your technology needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm text-center"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {method.title}
                    </h3>
                    <p className="text-lg font-medium text-primary mb-3">
                      {method.info}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <select
                      id="service"
                      className="w-full mt-1 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or requirements..."
                      className="mt-1 min-h-32"
                    />
                  </div>

                  <Button
                    disabled
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Office Information
                </h3>
                <div className="space-y-6">
                  {officeInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index} className="border-0 bg-card/50">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">
                                {info.title}
                              </h4>
                              {info.details.map((detail, idx) => (
                                <p
                                  key={idx}
                                  className="text-muted-foreground text-sm"
                                >
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <Card className="border-0 bg-card/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response */}
              <Card className="border-0 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Headphones className="w-6 h-6 text-primary" />
                    <h4 className="font-semibold text-foreground">
                      Quick Response Promise
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We typically respond to inquiries within 2-4 hours during
                    business hours. For urgent matters, please call us directly
                    for immediate assistance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Find Us</h3>
            <p className="text-muted-foreground">
              Located in the heart of Lagos' tech district
            </p>
          </div>
          <div className="bg-muted/30 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">
                Interactive map coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Ready to start your project? Our team is standing by to help bring
            your vision to life.
          </p>
          <Link to="/schedule-consultation">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
