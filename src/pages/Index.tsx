import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import {
  Code,
  Rocket,
  ArrowRight,
  Brain,
  Smartphone,
  Globe,
  Zap,
  Sparkles,
  Cpu,
  Cloud,
  Database,
  Users,
  CheckCircle,
  Terminal,
  GitBranch,
  Server,
  Lock,
  Globe2,
  TextCursor,
  BarChart3,
  Layers,
  Shield,
  Workflow,
  GitCompare,
  CloudCog,
  CircuitBoard,
  Binary,
  DatabaseZap,
  LockKeyhole,
  SmartphoneNfc,
  CpuIcon,
  BrainCircuit,
  MessageCircle,
  Star,
  Calendar,
  Award,
  TrendingUp,
  ChevronRight,
  ExternalLink,
  Briefcase,
  Target,
  ZapIcon,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1 });
  const { ref: processRef, inView: processInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Terminal,
      title: "Enterprise Software Development",
      description:
        "Custom, scalable solutions built with modern tech stacks for complex business challenges.",
      gradient: "from-blue-600 to-cyan-600",
      tech: ["React/Next.js", "Node.js/Go", "TypeScript", "PostgreSQL"],
      features: ["Microservices", "API Design", "System Architecture", "Code Review"],
    },
    {
      icon: CpuIcon,
      title: "AI & ML Engineering",
      description:
        "Production-ready AI systems, predictive analytics, and intelligent automation solutions.",
      gradient: "from-purple-600 to-pink-600",
      tech: ["TensorFlow", "PyTorch", "FastAPI", "Docker"],
      features: ["Computer Vision", "NLP", "MLOps", "Model Deployment"],
    },
    {
      icon: CloudCog,
      title: "Cloud & DevOps",
      description:
        "Secure, scalable cloud infrastructure with automated CI/CD pipelines and monitoring.",
      gradient: "from-emerald-600 to-teal-600",
      tech: ["AWS/GCP/Azure", "Kubernetes", "Terraform", "Prometheus"],
      features: ["Infrastructure as Code", "Security", "Scaling", "Disaster Recovery"],
    },
    {
      icon: SmartphoneNfc,
      title: "Mobile Engineering",
      description:
        "Native and cross-platform mobile applications with premium performance and UX.",
      gradient: "from-orange-600 to-red-600",
      tech: ["React Native", "Swift", "Kotlin", "Flutter"],
      features: ["App Store Deployment", "Performance", "Offline Support", "Security"],
    },
    {
      icon: DatabaseZap,
      title: "Data Engineering",
      description:
        "Real-time data pipelines, warehouses, and business intelligence platforms.",
      gradient: "from-indigo-600 to-blue-600",
      tech: ["Apache Spark", "Snowflake", "dbt", "Airflow"],
      features: ["ETL/ELT", "Data Governance", "Real-time Analytics", "Data Quality"],
    },
    {
      icon: LockKeyhole,
      title: "Security Engineering",
      description:
        "End-to-end security solutions, penetration testing, and compliance frameworks.",
      gradient: "from-rose-600 to-red-600",
      tech: ["OWASP", "SIEM", "Zero Trust", "GDPR/HIPAA"],
      features: ["Threat Modeling", "Security Audits", "Incident Response", "Compliance"],
    },
  ];

const techStack = [
  // Frontend - Cyan/Blue shades
  { name: "React", category: "Frontend", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
  { name: "Angular", category: "Frontend", color: "bg-red-500/10 text-red-400 border-red-500/20" },
  { name: "Vue", category: "Frontend", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  { name: "Next.js", category: "Frontend", color: "bg-gray-500/10 text-gray-300 border-gray-500/20" },
  
  // Backend - Green/Teal shades
  { name: "Node.js", category: "Backend", color: "bg-green-500/10 text-green-400 border-green-500/20" },
  { name: "Python", category: "Backend", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  { name: "Go", category: "Backend", color: "bg-sky-500/10 text-sky-400 border-sky-500/20" },
  { name: ".NET", category: "Backend", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  { name: "PHP", category: "Backend", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
  // { name: "Java", category: "Backend", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  
  // Languages - Blue shades
  { name: "TypeScript", category: "Language", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { name: "JavaScript", category: "Language", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  
  // AI/ML - Purple shades
  { name: "TensorFlow", category: "AI/ML", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  { name: "PyTorch", category: "AI/ML", color: "bg-red-500/10 text-red-400 border-red-500/20" },
  
  // Cloud - Orange/Warm shades
  { name: "AWS", category: "Cloud", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  { name: "Azure", category: "Cloud", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { name: "Google Cloud", category: "Cloud", color: "bg-green-500/10 text-green-400 border-green-500/20" },
  { name: "Docker", category: "Cloud", color: "bg-sky-500/10 text-sky-400 border-sky-500/20" },
  
  // DevOps - Blue shades
  { name: "Kubernetes", category: "DevOps", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { name: "Terraform", category: "DevOps", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  // { name: "Ansible", category: "DevOps", color: "bg-red-500/10 text-red-400 border-red-500/20" },
  { name: "Jenkins", category: "DevOps", color: "bg-red-500/10 text-red-400 border-red-500/20" },
  
  // Databases - Indigo/Purple shades
  { name: "PostgreSQL", category: "Database", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
  { name: "MySQL", category: "Database", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { name: "MongoDB", category: "Database", color: "bg-green-500/10 text-green-400 border-green-500/20" },
  { name: "Redis", category: "Database", color: "bg-red-500/10 text-red-400 border-red-500/20" },
  { name: "Elasticsearch", category: "Database", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  
  // Mobile - Pink/Red shades
  { name: "React Native", category: "Mobile", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
  { name: "Flutter", category: "Mobile", color: "bg-sky-500/10 text-sky-400 border-sky-500/20" },
  // { name: "Swift", category: "Mobile", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  // { name: "Kotlin", category: "Mobile", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
];

  const achievements = [
    { number: "10+", label: "Projects Completed", icon: Code, suffix: "" },
    { number: "99.9", label: "Uptime SLA", icon: Server, suffix: "%" },
    { number: "5", label: "Team Members", icon: Users, suffix: "+" },
    { number: "24/7", label: "Support Response", icon: Shield, suffix: "" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Technical requirements analysis and solution architecture",
      icon: TextCursor,
      color: "from-blue-600 to-cyan-600",
    },
    {
      step: "02",
      title: "Architecture & Design",
      description: "System design, API contracts, and technical specifications",
      icon: GitBranch,
      color: "from-purple-600 to-pink-600",
    },
    {
      step: "03",
      title: "Agile Development",
      description: "Sprint-based development with continuous integration",
      icon: Code,
      color: "from-emerald-600 to-teal-600",
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Automated testing, security audits, and performance testing",
      icon: CheckCircle,
      color: "from-orange-600 to-red-600",
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "CI/CD pipeline, production deployment, and monitoring setup",
      icon: Rocket,
      color: "from-indigo-600 to-blue-600",
    },
    {
      step: "06",
      title: "Maintenance & Scale",
      description: "Performance optimization, scaling, and ongoing support",
      icon: BarChart3,
      color: "from-rose-600 to-pink-600",
    },
  ];

  const clients = [
    "FinTech",
    "Healthcare",
    "E-commerce",
    "SaaS",
    "Enterprise",
    "Startups",
    "Government",
    "Education",
  ];

  const testimonials = [
    {
      quote: "Codeloom transformed our legacy systems into a modern, scalable platform. Their engineering excellence is unmatched.",
      name: "Sarah Chen",
      position: "CTO",
      company: "FinTech Innovations Inc.",
      rating: 5,
    },
    {
      quote: "The AI solution they delivered increased our operational efficiency by 300%. Professional from start to finish.",
      name: "Michael Rodriguez",
      position: "Director of Operations",
      company: "HealthFlow Systems",
      rating: 5,
    },
    {
      quote: "Exceptional security architecture and compliance work. They handled our HIPAA requirements perfectly.",
      name: "Jessica Williams",
      position: "Security Lead",
      company: "MediCare Solutions",
      rating: 5,
    },
  ];

  const timeline = [
    { year: "2023", event: "Company Founded", icon: Rocket },
    { year: "Q2 2023", event: "First Enterprise Client", icon: Briefcase },
    { year: "Q3 2023", event: "Team Expansion", icon: Users },
    { year: "Q4 2023", event: "AWS Partnership", icon: Award },
    { year: "2024", event: "Global Expansion", icon: Globe },
    { year: "Present", event: "AI Research Division", icon: BrainCircuit },
  ];

  const caseStudies = [
    {
      title: "Banking Platform Modernization",
      description: "Legacy system migration to cloud-native architecture",
      results: ["300% performance increase", "99.99% uptime", "50% cost reduction"],
      industry: "FinTech",
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "Healthcare Data Platform",
      description: "HIPAA-compliant data pipeline and analytics",
      results: ["Real-time processing", "100M+ records daily", "Full compliance"],
      industry: "Healthcare",
      color: "from-emerald-600 to-teal-600",
    },
    {
      title: "E-commerce AI Personalization",
      description: "Machine learning for personalized shopping experiences",
      results: ["35% conversion increase", "50% revenue growth", "Millisecond response"],
      industry: "E-commerce",
      color: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link to="/contact">
          <Button className="rounded-full w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 group">
            <MessageCircle className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
          </Button>
        </Link>
      </div>

      {/* Hero Section - Ultra Modern */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Floating Binary Code */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute font-mono text-sm text-blue-300/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${20 + Math.random() * 20}s linear infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className={cn(
            "space-y-8 transition-all duration-1000",
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-xl">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium tracking-wider text-blue-300">
                ENTERPRISE SOFTWARE DEVELOPMENT
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-8xl font-bold tracking-tight">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100">
                  Codeloom
                </span>
                <span className="block text-3xl lg:text-4xl font-normal text-gray-400 mt-4 tracking-widest">
                  TECHNOLOGIES
                </span>
              </h1>
              
              <div className="h-px w-32 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            </div>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              We engineer{" "}
              <span className="relative">
                <span className="text-white font-semibold">digital excellence</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></span>
              </span>{" "}
              through{" "}
              <span className="text-blue-300 font-semibold">precise code</span>,{" "}
              <span className="text-cyan-300 font-semibold">robust architecture</span>, and{" "}
              <span className="text-purple-300 font-semibold">innovative solutions</span>.
            </p>

            {/* Tech Stack */}
            <div className="pt-8">
              <p className="text-sm text-gray-400 mb-4 tracking-wider">TECH STACK</p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={cn(
                      "px-4 py-2 rounded-lg backdrop-blur-sm border border-gray-800",
                      "transition-all duration-300 hover:scale-105 hover:border-blue-500/50",
                      tech.color
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-current rounded-full"></div>
                      <span className="font-mono text-sm font-medium">{tech.name}</span>
                      <span className="text-xs text-gray-400">{tech.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-12">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="group relative px-10 py-7 text-lg font-semibold rounded-lg
                    bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700
                    shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <span className="flex items-center">
                    Start Engineering Solution
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-7 text-lg border-gray-700 hover:border-blue-500
                    hover:bg-blue-500/10 backdrop-blur-sm transition-all duration-300"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-16">
              <p className="text-sm text-gray-400 mb-6 tracking-wider">TRUSTED BY INDUSTRY LEADERS IN</p>
              <div className="flex flex-wrap gap-4">
                {clients.map((industry, index) => (
                  <div
                    key={industry}
                    className="px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-800
                      hover:border-blue-500/30 transition-all duration-300"
                  >
                    <span className="text-sm text-gray-300">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-400 tracking-widest">SCROLL</span>
            <div className="w-6 h-10 border border-gray-700 rounded-full flex justify-center p-1">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Premium Grid */}
      <section 
        ref={servicesRef}
        className="py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(
            "space-y-16 transition-all duration-1000",
            servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            {/* Section Header */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                <span className="text-sm font-medium tracking-widest text-blue-300">
                  OUR EXPERTISE
                </span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Engineering Excellence
                </span>
              </h2>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                We deliver enterprise-grade software solutions with precision engineering 
                and cutting-edge technology.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(45deg, transparent, ${service.gradient.split('from-')[1].split(' ')[0].replace('-600', '-500/20')}, transparent)` }}
                    ></div>
                    
                    <div className="relative p-8 border border-gray-800 rounded-2xl backdrop-blur-sm
                      group-hover:border-blue-500/30 transition-all duration-500 group-hover:-translate-y-1">
                      
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} 
                        flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300
                        shadow-lg shadow-current/20`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {service.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-mono rounded-lg bg-gray-900/50 text-gray-300
                                border border-gray-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Features */}
                        <div className="pt-4 border-t border-gray-800">
                          <div className="flex flex-wrap gap-2">
                            {service.features.map((feature) => (
                              <span
                                key={feature}
                                className="px-2 py-1 text-xs text-gray-400"
                              >
                                • {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Hover Indicator */}
                      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r 
                        from-transparent via-blue-500 to-transparent opacity-0 
                        group-hover:opacity-100 transition-opacity duration-500">
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <span className="text-sm font-medium tracking-widest text-blue-300">
              SUCCESS STORIES
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Impactful Case Studies
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-world solutions delivering measurable business outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group relative overflow-hidden border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center mb-6`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-xs font-medium text-blue-400 px-3 py-1 rounded-full bg-blue-500/10">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group/btn">
                    <span className="flex items-center justify-center gap-2">
                      View Case Study
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Timeline */}
      <section 
        ref={processRef}
        className="py-32 relative"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(
            "space-y-16 transition-all duration-1000",
            processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            {/* Section Header */}
            <div className="text-center space-y-6">
              <span className="text-sm font-medium tracking-widest text-blue-300">
                DEVELOPMENT METHODOLOGY
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Engineering Process
                </span>
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px 
                bg-gradient-to-b from-transparent via-gray-800 to-transparent"></div>

              {/* Steps */}
              <div className="space-y-24">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isEven = index % 2 === 0;
                  
                  return (
                    <div
                      key={index}
                      className={cn(
                        "relative lg:flex items-center gap-12",
                        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                      )}
                    >
                      {/* Content Card */}
                      <div className={cn(
                        "flex-1 p-8 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm",
                        "lg:w-1/2",
                        isEven ? "lg:ml-auto" : "lg:mr-auto"
                      )}>
                        <div className="flex items-start justify-between mb-6">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} 
                            flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-4xl font-bold text-gray-700">{step.step}</div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{step.description}</p>
                      </div>

                      {/* Timeline Dot */}
                      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.color}`}></div>
                        <div className="w-8 h-8 rounded-full absolute -inset-2 border-2 border-current opacity-20"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm
                    hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10
                    flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {achievement.number}
                    <span className="text-blue-400">{achievement.suffix}</span>
                  </div>
                  
                  <div className="text-sm font-medium text-gray-400 tracking-wider">
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline Section */}
      <section className="py-32 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest text-blue-300">
              OUR JOURNEY
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-6">
              Building Excellence Since 2023
            </h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-blue-400 font-semibold text-lg">{item.year}</p>
                    <p className="text-gray-300 mt-2 text-sm">{item.event}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest text-blue-300">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-6">
              Trusted by Industry Leaders
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-yellow-400 mb-6 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
                      <p className="text-xs text-blue-400">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent_70%)]"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 
              border border-blue-500/20 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium tracking-wider text-blue-300">
                READY TO TRANSFORM
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100">
                Let's Engineer Your
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Digital Future
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Schedule a technical consultation with our engineering leadership team. 
              Get insights, architecture review, and a tailored solution roadmap.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="group px-12 py-8 text-lg font-semibold rounded-lg
                    bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700
                    shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <span className="flex items-center">
                    Request Technical Consultation
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </Link>
              
              <Link to="/projects">
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

            {/* Trust Indicator */}
            <p className="text-sm text-gray-400 pt-12">
              <span className="text-gray-300">Response within 2 business hours</span>
              <span className="mx-4">•</span>
              <span>NDA-ready</span>
              <span className="mx-4">•</span>
              <span>Enterprise-grade security</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Codeloom Technologies
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Engineering digital excellence since 2023
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
            
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Codeloom Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;