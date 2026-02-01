import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  CheckCircle,
  TrendingUp,
  Clock,
  Users,
  Shield,
  Globe,
  Stethoscope,
  FileText,
  Languages,
} from "lucide-react";

const Portfolio = () => {
  const caseStudies = [
    {
      id: "curacloud",
      title: "CuraCloud HMS",
      subtitle: "Enterprise Healthcare Management System",
      category: "Healthcare Technology",
      url: "https://www.curacloud.com.ng/",
      icon: Stethoscope,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-500/30",
      description:
        "Enterprise-grade healthcare management platform that streamlines operations, enhances patient care, and drives financial performance for modern healthcare facilities.",
      challenge:
        "Healthcare facilities struggled with fragmented systems for patient management, billing, and clinical operations, leading to inefficiencies and compliance risks.",
      solution:
        "Built a comprehensive HMS platform with integrated modules for patient management, appointment scheduling, electronic health records, revenue cycle management, pharmacy & inventory, and advanced analytics.",
      results: [
        { metric: "99.9%", label: "Uptime Reliability" },
        { metric: "500+", label: "Patients Served" },
        { metric: "24/7", label: "Support Coverage" },
        { metric: "HIPAA", label: "Compliant" },
      ],
      features: [
        "Digital Health Records",
        "Patient Portal",
        "Automated Billing",
        "Prescription Tracking",
        "Real-time Analytics",
        "Multi-facility Support",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript", "Tailwind CSS"],
      testimonial: {
        quote: "CuraCloud transformed how we manage patient care. The integrated platform has significantly improved our operational efficiency.",
        author: "Healthcare Administrator",
        role: "CuraCloud Client",
      },
    },
    {
      id: "insight-resolve",
      title: "InsightResolve",
      subtitle: "Smart Compliance Solution",
      category: "FinTech / RegTech",
      url: "https://insight-resolve.vercel.app/",
      icon: FileText,
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-500/10 to-indigo-500/10",
      borderColor: "border-blue-500/30",
      description:
        "UK's first smart, compliance-driven complaint handling service powered by proprietary CompliFlow intelligence engine for FCA-regulated organizations.",
      challenge:
        "Organizations faced rising complaint volumes, stricter regulations, and outdated systems that couldn't keep up with compliance demands. Internal teams were overwhelmed and generic CRMs lacked regulatory features.",
      solution:
        "Developed an intelligent compliance platform with real-time risk detection, automated workflow management, audit-ready reporting, and FCA-compliant case handling processes.",
      results: [
        { metric: "99.8%", label: "Compliance Rate" },
        { metric: "48hrs", label: "Avg. Resolution" },
        { metric: "500+", label: "Clients Served" },
        { metric: "£2M+", label: "Risk Prevented" },
      ],
      features: [
        "CompliFlow AI Engine",
        "Real-time Risk Detection",
        "Automated Workflows",
        "Audit Trail Reporting",
        "FCA Compliance Tools",
        "Case Analytics Dashboard",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AI/ML"],
      testimonial: {
        quote: "InsightResolve has revolutionized our complaint handling process. We've seen dramatic improvements in resolution times and compliance scores.",
        author: "Compliance Director",
        role: "Financial Services Firm",
      },
    },
    {
      id: "afritech-symposia",
      title: "Afritech Symposia",
      subtitle: "Professional Language Services Platform",
      category: "Language Services",
      url: "https://www.afritechsymposia.com/",
      icon: Languages,
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-500/10 to-orange-500/10",
      borderColor: "border-amber-500/30",
      description:
        "Professional conference interpreting, translation services, and multilingual communication solutions platform connecting Africa to the world.",
      challenge:
        "Language service providers needed a professional digital presence to showcase their expertise and streamline client engagement for international conferences and events.",
      solution:
        "Created a modern, multilingual website with service showcases, quote request system, portfolio galleries, and seamless user experience designed for international clients.",
      results: [
        { metric: "15+", label: "Years Experience" },
        { metric: "50+", label: "Languages" },
        { metric: "ISO", label: "Certified" },
        { metric: "24/7", label: "Availability" },
      ],
      features: [
        "Conference Interpreting",
        "Document Translation",
        "Remote Simultaneous Interpreting",
        "Event Language Support",
        "Equipment Rental",
        "On-site Coordination",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
      testimonial: {
        quote: "The new platform perfectly represents our brand and has significantly increased our international client inquiries.",
        author: "Managing Director",
        role: "Afritech Symposia",
      },
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your business needs, target audience, and technical requirements.",
      icon: Users,
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop a comprehensive plan with timelines, milestones, and success metrics.",
      icon: TrendingUp,
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular updates, testing, and quality assurance.",
      icon: Clock,
    },
    {
      step: "04",
      title: "Delivery",
      description: "Launch, training, and ongoing support to ensure long-term success.",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),transparent)]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium tracking-wider text-blue-300">
                OUR PORTFOLIO
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100">
                Case Studies &
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mt-4">
                Success Stories
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects that have transformed businesses 
              and delivered measurable results across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              const isReversed = index % 2 === 1;

              return (
                <div key={study.id} className="relative">
                  {/* Case Study Card */}
                  <Card className={`border ${study.borderColor} bg-gradient-to-br ${study.bgGradient} backdrop-blur-sm overflow-hidden`}>
                    <CardContent className="p-0">
                      <div className={`grid lg:grid-cols-2 gap-0 ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                        {/* Content Side */}
                        <div className={`p-8 lg:p-12 space-y-8 ${isReversed ? "lg:order-2" : ""}`}>
                          <div className="space-y-4">
                            <div className="flex items-center gap-4">
                              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${study.gradient} flex items-center justify-center`}>
                                <Icon className="w-7 h-7 text-white" />
                              </div>
                              <Badge variant="outline" className={`${study.borderColor} bg-transparent`}>
                                {study.category}
                              </Badge>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white">{study.title}</h2>
                            <p className="text-xl text-gray-300">{study.subtitle}</p>
                          </div>

                          <p className="text-gray-300 leading-relaxed">{study.description}</p>

                          {/* Results Grid */}
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="text-center p-4 rounded-xl bg-black/30 backdrop-blur-sm">
                                <div className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${study.gradient}`}>
                                  {result.metric}
                                </div>
                                <div className="text-sm text-gray-400 mt-1">{result.label}</div>
                              </div>
                            ))}
                          </div>

                          {/* CTA */}
                          <div className="flex flex-wrap gap-4">
                            <a href={study.url} target="_blank" rel="noopener noreferrer">
                              <Button className={`bg-gradient-to-r ${study.gradient} text-white hover:opacity-90`}>
                                View Live Project
                                <ExternalLink className="ml-2 w-4 h-4" />
                              </Button>
                            </a>
                            <Link to="/contact">
                              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                                Start Similar Project
                                <ArrowRight className="ml-2 w-4 h-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>

                        {/* Details Side */}
                        <div className={`p-8 lg:p-12 bg-black/40 space-y-8 ${isReversed ? "lg:order-1" : ""}`}>
                          {/* Challenge & Solution */}
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                                The Challenge
                              </h3>
                              <p className="text-gray-400 text-sm leading-relaxed">{study.challenge}</p>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                                Our Solution
                              </h3>
                              <p className="text-gray-400 text-sm leading-relaxed">{study.solution}</p>
                            </div>
                          </div>

                          {/* Features */}
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                            <div className="grid grid-cols-2 gap-3">
                              {study.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                  <CheckCircle className={`w-4 h-4 text-${study.gradient.split("-")[1]}-400`} />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                              {study.technologies.map((tech, idx) => (
                                <Badge key={idx} variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Testimonial */}
                          <div className="border-t border-gray-800 pt-6">
                            <blockquote className="text-gray-300 italic text-sm leading-relaxed">
                              "{study.testimonial.quote}"
                            </blockquote>
                            <div className="mt-3">
                              <p className="text-white font-medium text-sm">{study.testimonial.author}</p>
                              <p className="text-gray-500 text-xs">{study.testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-300 border-blue-500/20">
              Our Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              How We Deliver{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our proven methodology ensures consistent, high-quality results for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 group">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
                      {step.step}
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Start Your Project</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Build Something{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Amazing?
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Let's discuss how we can help transform your vision into a successful digital product.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="px-10 py-7 text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-2xl shadow-blue-500/25"
                >
                  <Sparkles className="mr-2 w-5 h-5" />
                  Start Your Project
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-7 text-lg border-gray-700 text-gray-300 hover:bg-gray-800"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
