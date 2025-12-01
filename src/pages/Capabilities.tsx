import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import {
  Code,
  Server,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Brain,
  Cpu,
  Users,
  BarChart,
  Zap,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  Layers,
  GitBranch,
  Terminal,
  ShieldCheck,
  Lock,
  Globe,
  SmartphoneNfc,
  DatabaseZap,
  CloudCog,
  CpuIcon,
  MessageCircle,
  ChevronRight,
  Sparkles,
  Lightbulb,
  Wrench,
  Settings,
  Package,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Capabilities = () => {
  const [activeTab, setActiveTab] = useState("software");

  const capabilities = {
    software: {
      title: "Software Development",
      icon: Code,
      description: "End-to-end software engineering with modern technologies and best practices.",
      services: [
        {
          title: "Web Application Development",
          description: "Scalable, responsive web applications using React, Next.js, Vue, and Angular",
          features: ["SPA/SSR/SSG", "PWA", "Micro-frontends", "Real-time features"],
          technologies: ["React", "Next.js", "TypeScript", "Node.js"],
        },
        {
          title: "Backend Systems",
          description: "Robust server-side solutions with microservices architecture",
          features: ["REST/GraphQL APIs", "Event-driven architecture", "Message queues", "Caching strategies"],
          technologies: ["Node.js", "Python", "Go", "Java", "PostgreSQL", "MongoDB"],
        },
        {
          title: "Enterprise Solutions",
          description: "Custom software for complex business workflows and integrations",
          features: ["ERP/CRM systems", "Workflow automation", "Legacy migration", "Third-party integrations"],
          technologies: [".NET", "Java Spring", "Kubernetes", "Docker"],
        },
        {
          title: "E-commerce Platforms",
          description: "High-performance online retail solutions",
          features: ["Payment gateways", "Inventory management", "Multi-vendor support", "Analytics dashboard"],
          technologies: ["Shopify API", "Stripe", "WooCommerce", "Magento"],
        },
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: Cloud,
      description: "Scalable infrastructure and automated deployment pipelines.",
      services: [
        {
          title: "Cloud Architecture",
          description: "Design and implementation of cloud-native solutions",
          features: ["Multi-region deployment", "Auto-scaling", "Load balancing", "Disaster recovery"],
          technologies: ["AWS", "Azure", "Google Cloud", "Terraform"],
        },
        {
          title: "DevOps Automation",
          description: "CI/CD pipelines and infrastructure as code",
          features: ["GitOps workflows", "Automated testing", "Monitoring & alerting", "Security scanning"],
          technologies: ["GitHub Actions", "Jenkins", "Ansible", "Prometheus"],
        },
        {
          title: "Containerization",
          description: "Docker and Kubernetes solutions for scalable deployments",
          features: ["Container orchestration", "Service mesh", "Secret management", "Resource optimization"],
          technologies: ["Docker", "Kubernetes", "Helm", "Istio"],
        },
        {
          title: "Serverless Architecture",
          description: "Event-driven computing with minimal infrastructure management",
          features: ["Function as a Service", "API gateways", "Event bridges", "State machines"],
          technologies: ["AWS Lambda", "Azure Functions", "Google Cloud Functions"],
        },
      ],
    },
    mobile: {
      title: "Mobile Development",
      icon: Smartphone,
      description: "Native and cross-platform mobile experiences.",
      services: [
        {
          title: "iOS Development",
          description: "Native iOS applications with Swift and SwiftUI",
          features: ["ARKit integration", "Core ML", "In-app purchases", "Push notifications"],
          technologies: ["Swift", "SwiftUI", "UIKit", "Combine"],
        },
        {
          title: "Android Development",
          description: "Native Android applications with Kotlin and Jetpack",
          features: ["Material Design", "Jetpack Compose", "Background services", "Play Store deployment"],
          technologies: ["Kotlin", "Jetpack", "Coroutines", "Room DB"],
        },
        {
          title: "Cross-Platform",
          description: "Single codebase for multiple platforms",
          features: ["Code sharing", "Native performance", "Hot reload", "Plugin ecosystem"],
          technologies: ["React Native", "Flutter", "Ionic", "Xamarin"],
        },
        {
          title: "Mobile Backend",
          description: "APIs and services optimized for mobile",
          features: ["Offline sync", "Real-time updates", "Media streaming", "Geolocation services"],
          technologies: ["Firebase", "AWS Amplify", "GraphQL", "WebSocket"],
        },
      ],
    },
    ai: {
      title: "AI & Machine Learning",
      icon: Brain,
      description: "Intelligent solutions powered by cutting-edge AI.",
      services: [
        {
          title: "Computer Vision",
          description: "Image and video analysis solutions",
          features: ["Object detection", "Facial recognition", "OCR", "Video analytics"],
          technologies: ["OpenCV", "TensorFlow", "PyTorch", "YOLO"],
        },
        {
          title: "Natural Language Processing",
          description: "Text analysis and language understanding",
          features: ["Sentiment analysis", "Chatbots", "Text generation", "Translation"],
          technologies: ["Transformers", "BERT", "GPT", "spaCy"],
        },
        {
          title: "Predictive Analytics",
          description: "Data-driven forecasting and insights",
          features: ["Time series analysis", "Recommendation systems", "Anomaly detection", "Risk assessment"],
          technologies: ["Scikit-learn", "XGBoost", "Prophet", "PyCaret"],
        },
        {
          title: "MLOps & Deployment",
          description: "Production ML model management",
          features: ["Model versioning", "A/B testing", "Monitoring", "Automated retraining"],
          technologies: ["MLflow", "Kubeflow", "Seldon", "TensorFlow Serving"],
        },
      ],
    },
    data: {
      title: "Data Engineering",
      icon: Database,
      description: "Data pipelines, warehouses, and analytics platforms.",
      services: [
        {
          title: "Data Warehousing",
          description: "Centralized data repositories for analytics",
          features: ["ETL/ELT pipelines", "Data modeling", "Query optimization", "Data governance"],
          technologies: ["Snowflake", "BigQuery", "Redshift", "dbt"],
        },
        {
          title: "Real-time Streaming",
          description: "Processing data in motion",
          features: ["Event processing", "Stream aggregation", "Complex event processing", "Alerting"],
          technologies: ["Apache Kafka", "Apache Flink", "Spark Streaming", "AWS Kinesis"],
        },
        {
          title: "Business Intelligence",
          description: "Dashboards and reporting solutions",
          features: ["Interactive dashboards", "Self-service analytics", "Automated reporting", "KPIs tracking"],
          technologies: ["Tableau", "Power BI", "Looker", "Metabase"],
        },
        {
          title: "Big Data Processing",
          description: "Processing large-scale datasets",
          features: ["Distributed computing", "Batch processing", "Data lakes", "Schema evolution"],
          technologies: ["Apache Spark", "Hadoop", "Delta Lake", "Apache Hive"],
        },
      ],
    },
    security: {
      title: "Security Engineering",
      icon: Shield,
      description: "Comprehensive security solutions and compliance.",
      services: [
        {
          title: "Application Security",
          description: "Secure software development lifecycle",
          features: ["SAST/DAST", "Code review", "Dependency scanning", "Threat modeling"],
          technologies: ["OWASP", "SonarQube", "Snyk", "Checkmarx"],
        },
        {
          title: "Infrastructure Security",
          description: "Secure cloud and network infrastructure",
          features: ["Zero trust architecture", "Network segmentation", "DDoS protection", "WAF configuration"],
          technologies: ["AWS Security Hub", "Azure Security Center", "Cloudflare", "Palo Alto"],
        },
        {
          title: "Compliance & Governance",
          description: "Regulatory compliance and risk management",
          features: ["GDPR/HIPAA/SOC2", "Audit trails", "Policy management", "Risk assessment"],
          technologies: ["Vanta", "Drata", "OneTrust", "RSA Archer"],
        },
        {
          title: "Incident Response",
          description: "Security monitoring and incident management",
          features: ["SIEM integration", "Threat intelligence", "Forensic analysis", "Response automation"],
          technologies: ["Splunk", "ELK Stack", "CrowdStrike", "SentinelOne"],
        },
      ],
    },
  };

  const technologies = [
    {
      category: "Frontend",
      items: [
        { name: "React", logo: "⚛️", description: "Library for building user interfaces" },
        { name: "Next.js", logo: "▲", description: "React framework for production" },
        { name: "TypeScript", logo: "TS", description: "Typed JavaScript superset" },
        { name: "Vue.js", logo: "Vue", description: "Progressive JavaScript framework" },
        { name: "Angular", logo: "🅰️", description: "Platform for building mobile and desktop web applications" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", logo: "🟢", description: "JavaScript runtime built on Chrome's V8" },
        { name: "Python", logo: "🐍", description: "High-level programming language" },
        { name: "Go", logo: "Go", description: "Statically typed, compiled language" },
        { name: "Java", logo: "☕", description: "Object-oriented programming language" },
        { name: ".NET", logo: ".NET", description: "Free, cross-platform, open source framework" },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "AWS", logo: "☁️", description: "Amazon Web Services" },
        { name: "Azure", logo: "Azure", description: "Microsoft's cloud platform" },
        { name: "Google Cloud", logo: "GCP", description: "Google's cloud services" },
        { name: "Docker", logo: "🐳", description: "Containerization platform" },
        { name: "Kubernetes", logo: "⎈", description: "Container orchestration system" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", logo: "🐘", description: "Advanced open source database" },
        { name: "MongoDB", logo: "🍃", description: "Document-oriented database" },
        { name: "Redis", logo: "🗝️", description: "In-memory data structure store" },
        { name: "MySQL", logo: "🐬", description: "Open source relational database" },
        { name: "Elasticsearch", logo: "🔍", description: "Search and analytics engine" },
      ],
    },
  ];

  const methodologies = [
    {
      name: "Agile Development",
      icon: Workflow,
      description: "Iterative development with continuous feedback",
      practices: ["Scrum", "Sprint planning", "Daily standups", "Retrospectives"],
    },
    {
      name: "DevSecOps",
      icon: ShieldCheck,
      description: "Integrating security throughout the development lifecycle",
      practices: ["Shift-left security", "Automated testing", "Continuous monitoring", "Compliance as code"],
    },
    {
      name: "Clean Architecture",
      icon: Layers,
      description: "Maintainable and testable software design",
      practices: ["Domain-driven design", "Test-driven development", "SOLID principles", "Hexagonal architecture"],
    },
    {
      name: "Continuous Delivery",
      icon: GitBranch,
      description: "Automated deployment pipeline for rapid releases",
      practices: ["CI/CD pipelines", "Feature flags", "Blue-green deployment", "Canary releases"],
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
                COMPREHENSIVE CAPABILITIES
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100">
                Our Technical
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mt-4">
                Capabilities
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              End-to-end software engineering expertise across the entire technology stack, 
              delivering scalable, secure, and innovative solutions for modern businesses.
            </p>

            <div className="pt-8">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="group px-10 py-7 text-lg font-semibold rounded-lg
                    bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700
                    shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <span className="flex items-center">
                    Discuss Your Project Needs
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="space-y-12"
          >
            <div className="text-center">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-2 rounded-2xl">
                {Object.entries(capabilities).map(([key, capability]) => {
                  const Icon = capability.icon;
                  return (
                    <TabsTrigger
                      key={key}
                      value={key}
                      className={cn(
                        "data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600",
                        "data-[state=active]:text-white data-[state=active]:border-0",
                        "py-4 px-6 rounded-xl transition-all duration-300",
                        "flex flex-col items-center gap-3",
                        "hover:bg-gray-800/50"
                      )}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="text-sm font-medium">{capability.title}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {Object.entries(capabilities).map(([key, capability]) => {
              const Icon = capability.icon;
              return (
                <TabsContent key={key} value={key} className="space-y-12">
                  <div className="text-center space-y-6">
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-left">
                        <h2 className="text-4xl font-bold text-white">{capability.title}</h2>
                        <p className="text-gray-400 text-lg mt-2">{capability.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {capability.services.map((service, index) => (
                      <Card key={index} className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 group">
                        <CardContent className="p-8">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                {service.title}
                              </h3>
                              <p className="text-gray-400 leading-relaxed">
                                {service.description}
                              </p>
                            </div>

                            <div className="space-y-4">
                              <div>
                                <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                                <div className="flex flex-wrap gap-2">
                                  {service.features.map((feature, i) => (
                                    <Badge
                                      key={i}
                                      variant="secondary"
                                      className="bg-gray-800/50 text-gray-300 border-gray-700"
                                    >
                                      {feature}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                  {service.technologies.map((tech, i) => (
                                    <Badge
                                      key={i}
                                      className="bg-blue-500/10 text-blue-400 border-blue-500/20"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <Button variant="outline" className="w-full group/btn">
                              <span className="flex items-center justify-center gap-2">
                                Learn More
                                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                              </span>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <span className="text-sm font-medium tracking-widest text-blue-300">
                TECHNOLOGY STACK
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Modern Technology
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  Expertise
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We work with industry-leading technologies to build robust, scalable, and maintainable solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((category, index) => (
                <Card key={index} className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-gray-800">
                      {category.category}
                    </h3>
                    <div className="space-y-6">
                      {category.items.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group/tech"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center group-hover/tech:scale-110 transition-transform">
                            <span className="font-bold text-lg">{tech.logo}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white">{tech.name}</h4>
                            <p className="text-sm text-gray-400">{tech.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Methodologies */}
      <section className="py-24 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <span className="text-sm font-medium tracking-widest text-blue-300">
                DEVELOPMENT APPROACH
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Our Engineering
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  Methodologies
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We combine proven methodologies with modern practices to deliver exceptional software.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methodologies.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 group">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                        {method.name}
                      </h3>
                      
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {method.description}
                      </p>
                      
                      <div className="space-y-3">
                        {method.practices.map((practice, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-gray-300">{practice}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <span className="text-sm font-medium tracking-widest text-blue-300">
                WHY CODELOOM
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  The Codeloom
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  Advantage
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Technical Excellence",
                  description: "Deep expertise in modern technologies and architecture patterns",
                  points: ["Senior engineers", "Code reviews", "Best practices", "Performance optimization"],
                },
                {
                  icon: Clock,
                  title: "On-Time Delivery",
                  description: "Predictable delivery with agile methodologies and clear communication",
                  points: ["Sprint planning", "Progress tracking", "Regular updates", "Risk mitigation"],
                },
                {
                  icon: Shield,
                  title: "Quality Assurance",
                  description: "Comprehensive testing and security practices throughout development",
                  points: ["Automated testing", "Security audits", "Performance testing", "Code quality"],
                },
                {
                  icon: TrendingUp,
                  title: "Scalable Solutions",
                  description: "Architecture designed for growth and future expansion",
                  points: ["Microservices", "Cloud-native", "Load balancing", "Database optimization"],
                },
                {
                  icon: Users,
                  title: "Dedicated Teams",
                  description: "Assigned engineers who become an extension of your team",
                  points: ["Direct communication", "Domain knowledge", "Long-term partnership", "Knowledge transfer"],
                },
                {
                  icon: Zap,
                  title: "Rapid Development",
                  description: "Efficient processes that accelerate time to market",
                  points: ["Rapid prototyping", "MVP development", "Iterative delivery", "Continuous deployment"],
                },
              ].map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <Card key={index} className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
                      
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {advantage.description}
                      </p>
                      
                      <div className="space-y-3">
                        {advantage.points.map((point, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span className="text-sm text-gray-300">{point}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent_70%)]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-xl">
              <Lightbulb className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium tracking-wider text-blue-300">
                READY TO INNOVATE
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100">
                Let's Build Something
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Extraordinary
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Get a free technical consultation and discover how our capabilities 
              can transform your business challenges into innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="group px-12 py-8 text-lg font-semibold rounded-lg
                    bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700
                    shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <span className="flex items-center">
                    Start Your Project
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
                  View Case Studies
                </Button>
              </Link>
            </div>

            <p className="text-sm text-gray-400 pt-12">
              <span className="text-gray-300">Free 60-minute consultation</span>
              <span className="mx-4">•</span>
              <span>No commitment required</span>
              <span className="mx-4">•</span>
              <span>Detailed proposal within 48 hours</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Capabilities;