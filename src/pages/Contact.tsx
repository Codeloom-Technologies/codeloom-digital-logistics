import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
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
  Facebook,
  Instagram,
  Sparkles,
  Zap,
  Shield,
  CheckCircle,
  Calendar,
  Video,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  MailCheck,
  PhoneCall,
  Map,
  Building,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    company: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        company: "",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      info: "codeloomtechnologies@gmail.com",
      description: "Response within 2 business hours",
      gradient: "from-blue-600 to-cyan-600",
      action: "mailto:codeloomtechnologies@gmail.com",
      badge: "Recommended",
    },
    {
      icon: Phone,
      title: "Phone Support",
      info: "+234 (9033) 440-507",
      description: "Mon-Fri: 9AM-6PM WAT",
      gradient: "from-emerald-600 to-teal-600",
      action: "tel:+2349033440507",
      badge: "Quick Response",
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      info: "Book a Meeting",
      description: "30-min technical consultation",
      gradient: "from-purple-600 to-pink-600",
      action: "/schedule",
      badge: "Free Consultation",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      info: "Available 24/7",
      description: "Instant messaging support",
      gradient: "from-orange-600 to-red-600",
      action: "#chat",
      badge: "Bot + Human",
    },
  ];

  const officeInfo = [
    {
      icon: Building,
      title: "Headquarters",
      details: ["Abuja, Nigeria", "Remote-First Company", "Global Team"],
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Emergency Support: 24/7",
      ],
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      icon: Users,
      title: "Team Structure",
      details: [
        "Senior Engineers Available",
        "Dedicated Project Managers",
        "24/7 Technical Support",
      ],
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
  ];

  const services = [
    "Enterprise Software Development",
    "AI & Machine Learning Solutions",
    "Cloud Infrastructure & DevOps",
    "Mobile Application Development",
    "Web Application Development",
    "Digital Transformation",
    "System Integration",
    "Technical Consulting",
    "Security Audits & Compliance",
    "Other Services",
  ];

  const socialLinks = [
    { platform: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/codeloom", color: "hover:bg-blue-600" },
    { platform: "Twitter", icon: Twitter, url: "https://twitter.com/codeloomtech", color: "hover:bg-sky-500" },
    { platform: "Facebook", icon: Facebook, url: "https://facebook.com/codeloomtech", color: "hover:bg-blue-700" },
    { platform: "Instagram", icon: Instagram, url: "https://instagram.com/codeloomtech", color: "hover:bg-pink-600" },
  ];

  const trustIndicators = [
    { icon: Shield, text: "Enterprise-Grade Security", color: "text-blue-400" },
    { icon: CheckCircle, text: "NDA-Ready Conversations", color: "text-emerald-400" },
    { icon: Zap, text: "Quick Response Time", color: "text-yellow-400" },
    { icon: MailCheck, text: "Guaranteed Response", color: "text-purple-400" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,rgba(120,119,198,0.15),transparent)]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium tracking-wider text-blue-300">
                CONNECT WITH EXPERTS
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100">
                Let's Engineer
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mt-4">
                Your Future
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Schedule a free technical consultation with our engineering team. 
              Get insights, architecture review, and a tailored solution roadmap.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              {trustIndicators.map((indicator, index) => {
                const Icon = indicator.icon;
                return (
                  <div key={index} className="flex items-center gap-3 px-4 py-2 rounded-full bg-gray-900/50 border border-gray-800">
                    <Icon className={`w-4 h-4 ${indicator.color}`} />
                    <span className="text-sm text-gray-300">{indicator.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Connect With Our Team
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose your preferred way to connect. Our technical team is ready to discuss your project requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const isLink = method.action.startsWith('/') || method.action.startsWith('http');
                
                return (
                  <Card key={index} className="group relative overflow-hidden border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500">
                    <CardContent className="p-8">
                      {/* Badge */}
                      {method.badge && (
                        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0">
                          {method.badge}
                        </Badge>
                      )}
                      
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                      <p className="text-lg font-medium text-gray-200 mb-2">{method.info}</p>
                      <p className="text-sm text-gray-400 mb-6">{method.description}</p>
                      
                      {/* Action Button */}
                      {isLink ? (
                        <Link to={method.action}>
                          <Button variant="outline" className="w-full group/btn">
                            <span className="flex items-center justify-center gap-2">
                              Connect Now
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </span>
                          </Button>
                        </Link>
                      ) : (
                        <a href={method.action}>
                          <Button variant="outline" className="w-full group/btn">
                            <span className="flex items-center justify-center gap-2">
                              Connect Now
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </span>
                          </Button>
                        </a>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    Send Us Your Project Details
                  </span>
                </h2>
                <p className="text-gray-400">
                  Fill out the form below and our technical team will get back to you with a detailed proposal.
                </p>
              </div>

              {isSubmitted ? (
                <Card className="border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm">
                  <CardContent className="p-12 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-300 mb-8">
                      Thank you for reaching out. Our technical team will review your inquiry and get back to you within 2 business hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} className="bg-gradient-to-r from-emerald-600 to-teal-600">
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-gray-300">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500 focus:border-blue-500"
                            placeholder="John"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-gray-300">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500 focus:border-blue-500"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-300">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500 focus:border-blue-500"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-gray-300">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500 focus:border-blue-500"
                            placeholder="+234 123 456 7890"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-gray-300">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500 focus:border-blue-500"
                          placeholder="Your Company"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-gray-300">
                          Service Interested In *
                        </Label>
                        <Select value={formData.service} onValueChange={handleSelectChange}>
                          <SelectTrigger className="bg-gray-900/50 border-gray-800 text-white focus:border-blue-500">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-gray-800">
                            {services.map((service, index) => (
                              <SelectItem key={index} value={service} className="text-white hover:bg-gray-800">
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-300">
                          Project Details *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="min-h-32 bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500 focus:border-blue-500 resize-none"
                          placeholder="Tell us about your project requirements, timeline, budget, and any specific technical needs..."
                        />
                      </div>

                      <div className="space-y-4">
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-6 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                        >
                          {isLoading ? (
                            <span className="flex items-center justify-center">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center">
                              Submit Project Inquiry
                              <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                          )}
                        </Button>
                        
                        <p className="text-xs text-gray-400 text-center">
                          By submitting, you agree to our privacy policy. We'll never share your information with third parties.
                        </p>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Company Info & Social */}
            <div className="space-y-8">
              {/* Office Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Company Information
                </h3>
                <div className="space-y-4">
                  {officeInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index} className={`border border-gray-800 ${info.bg} backdrop-blur-sm`}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${info.bg}`}>
                              <Icon className={`w-6 h-6 ${info.color}`} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-white mb-3">{info.title}</h4>
                              <div className="space-y-2">
                                {info.details.map((detail, idx) => (
                                  <p key={idx} className="text-sm text-gray-300 leading-relaxed">
                                    {detail}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <Card className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "flex flex-col items-center justify-center p-4 rounded-xl border border-gray-800",
                            "bg-gray-900/50 hover:border-blue-500/50 transition-all duration-300 group"
                          )}
                        >
                          <div className={cn(
                            "w-12 h-12 rounded-lg flex items-center justify-center mb-3",
                            "bg-gray-800 group-hover:scale-110 transition-transform"
                          )}>
                            <Icon className="w-6 h-6 text-gray-400 group-hover:text-white" />
                          </div>
                          <span className="text-sm text-gray-400 group-hover:text-white">{social.platform}</span>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Response Promise */}
              <Card className="border border-blue-500/30 bg-blue-500/5 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Response Guarantee</h4>
                      <p className="text-sm text-blue-300">We take your time seriously</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-800/50">
                      <span className="text-gray-400">Initial Response</span>
                      <span className="font-semibold text-white">Within 2 Hours</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-800/50">
                      <span className="text-gray-400">Technical Proposal</span>
                      <span className="font-semibold text-white">Within 24 Hours</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-400">Urgent Support</span>
                      <span className="font-semibold text-white">Immediate</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <p className="text-sm text-gray-300 text-center">
                      ⭐ For enterprise clients: Dedicated account manager assigned within 1 business day
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <span className="text-sm font-medium tracking-widest text-blue-300">
                OUR LOCATION
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Global Reach,
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  Local Expertise
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                While headquartered in Abuja, Nigeria, our remote-first model allows us to serve clients worldwide with exceptional quality.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black h-96">
              {/* Map Placeholder with Professional Design */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Map className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">Abuja, Nigeria</h3>
                    <p className="text-gray-400 max-w-md mx-auto">
                      Serving clients across Africa, Europe, North America, and Asia
                    </p>
                    <div className="flex items-center justify-center gap-4 pt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">Headquarters</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">Remote Teams</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">Global Coverage</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Animated Dots */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-blue-500/30 rounded-full animate-pulse"
                  style={{
                    left: `${10 + i * 10}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                ></div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              {[
                { label: "Time Zones Covered", value: "GMT-8 to GMT+8", icon: Globe },
                { label: "Response Time", value: "< 2 Hours", icon: Zap },
                { label: "Language Support", value: "English, French", icon: MessageCircle },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">{item.label}</p>
                          <p className="text-lg font-bold text-white">{item.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent_70%)]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-xl">
              <Video className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium tracking-wider text-blue-300">
                FREE TECHNICAL CONSULTATION
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100">
                Ready to Start Your
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Engineering Journey?
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Book a free 60-minute technical consultation with our engineering leadership team. 
              Get expert insights and a clear roadmap for your project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/schedule">
                <Button
                  size="lg"
                  className="group px-12 py-8 text-lg font-semibold rounded-lg
                    bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700
                    shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <span className="flex items-center">
                    Schedule Free Consultation
                    <Calendar className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                  </span>
                </Button>
              </Link>
              
              <Link to="/capabilities">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-12 py-8 text-lg border-gray-700 hover:border-blue-500
                    hover:bg-blue-500/10 backdrop-blur-sm transition-all duration-300"
                >
                  View Our Capabilities
                </Button>
              </Link>
            </div>

            <p className="text-sm text-gray-400 pt-12">
              <span className="text-gray-300">No commitment required</span>
              <span className="mx-4">•</span>
              <span>Technical experts only</span>
              <span className="mx-4">•</span>
              <span>Detailed follow-up report</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;