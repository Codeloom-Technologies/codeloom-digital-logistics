import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
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
  Sparkles,
  Cpu,
  Terminal,
  Server,
  Lock,
  SmartphoneNfc,
  CloudCog,
  DatabaseZap,
  LockKeyhole,
  Workflow,
  GitBranch,
  BarChart3,
  MessageCircle,
  Calendar,
  ExternalLink,
  Layers,
  ShieldCheck,
  GitCompare,
  CpuIcon,
  BrainCircuit,
  Heart,
  Stethoscope,
  Activity,
  FileText,
  Pill,
  Users,
  Clipboard,
  Bell,
  ShieldHalf,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Services = () => {
  const [activeTab, setActiveTab] = useState("software");
const [showPreview, setShowPreview] = useState(false);

  const serviceCategories = [
    { id: "software", label: "Software", icon: Code },
    { id: "cloud", label: "Cloud & DevOps", icon: Cloud },
    { id: "ai", label: "AI & ML", icon: Brain },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "data", label: "Data", icon: Database },
    { id: "security", label: "Security", icon: Shield },
  ];

  const services = {
    software: {
      title: "Software Engineering",
      description: "Enterprise-grade software solutions built with modern architectures and best practices.",
      icon: Terminal,
      items: [
        {
          title: "Web Application Development",
          description: "Scalable, responsive web applications using React, Next.js, and modern frameworks",
          features: ["SPA/SSR/SSG", "Micro-frontends", "Real-time features", "Progressive Web Apps"],
          technologies: ["React", "Next.js", "TypeScript", "Node.js"],
          gradient: "from-blue-600 to-cyan-600",
        },
        {
          title: "Enterprise Systems",
          description: "Custom software for complex business workflows and enterprise requirements",
          features: ["ERP/CRM Systems", "Workflow Automation", "Legacy Migration", "Third-party Integration"],
          technologies: [".NET", "Java Spring", "Python Django", "Go"],
          gradient: "from-purple-600 to-pink-600",
        },
        {
          title: "API Development",
          description: "Robust, scalable APIs for seamless system integration and data exchange",
          features: ["REST/GraphQL APIs", "Event-driven Architecture", "API Gateways", "WebSocket Services"],
          technologies: ["FastAPI", "Express.js", "Apollo", "NestJS"],
          gradient: "from-emerald-600 to-teal-600",
        },
        {
          title: "E-commerce Solutions",
          description: "High-performance online retail and marketplace platforms",
          features: ["Payment Integration", "Inventory Management", "Multi-vendor", "Analytics Dashboard"],
          technologies: ["Shopify API", "Stripe", "WooCommerce", "Magento"],
          gradient: "from-orange-600 to-red-600",
        },
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      description: "Scalable infrastructure, automated deployment, and modern cloud-native solutions.",
      icon: CloudCog,
      items: [
        {
          title: "Cloud Architecture",
          description: "Design and implementation of cloud-native solutions across major providers",
          features: ["Multi-region Deployment", "Auto-scaling", "Load Balancing", "Disaster Recovery"],
          technologies: ["AWS", "Azure", "Google Cloud", "Terraform"],
          gradient: "from-blue-600 to-cyan-600",
        },
        {
          title: "DevOps Automation",
          description: "CI/CD pipelines and infrastructure as code for efficient development cycles",
          features: ["GitOps Workflows", "Automated Testing", "Monitoring & Alerting", "Security Scanning"],
          technologies: ["GitHub Actions", "Jenkins", "Ansible", "Prometheus"],
          gradient: "from-purple-600 to-pink-600",
        },
        {
          title: "Containerization",
          description: "Docker and Kubernetes solutions for scalable, portable deployments",
          features: ["Container Orchestration", "Service Mesh", "Secret Management", "Resource Optimization"],
          technologies: ["Docker", "Kubernetes", "Helm", "Istio"],
          gradient: "from-emerald-600 to-teal-600",
        },
        {
          title: "Serverless Solutions",
          description: "Event-driven computing with minimal infrastructure management",
          features: ["Function as a Service", "API Gateways", "Event Bridges", "State Machines"],
          technologies: ["AWS Lambda", "Azure Functions", "Google Cloud Functions"],
          gradient: "from-orange-600 to-red-600",
        },
      ],
    },
    ai: {
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by cutting-edge artificial intelligence and data science.",
      icon: BrainCircuit,
      items: [
        {
          title: "Computer Vision",
          description: "Image and video analysis solutions for various applications",
          features: ["Object Detection", "Facial Recognition", "OCR", "Video Analytics"],
          technologies: ["OpenCV", "TensorFlow", "PyTorch", "YOLO"],
          gradient: "from-blue-600 to-cyan-600",
        },
        {
          title: "Natural Language Processing",
          description: "Text analysis and language understanding for intelligent applications",
          features: ["Sentiment Analysis", "Chatbots", "Text Generation", "Translation"],
          technologies: ["Transformers", "BERT", "GPT", "spaCy"],
          gradient: "from-purple-600 to-pink-600",
        },
        {
          title: "Predictive Analytics",
          description: "Data-driven forecasting and insights for business decisions",
          features: ["Time Series Analysis", "Recommendation Systems", "Anomaly Detection", "Risk Assessment"],
          technologies: ["Scikit-learn", "XGBoost", "Prophet", "PyCaret"],
          gradient: "from-emerald-600 to-teal-600",
        },
        {
          title: "MLOps & Deployment",
          description: "Production ML model management and deployment pipelines",
          features: ["Model Versioning", "A/B Testing", "Monitoring", "Automated Retraining"],
          technologies: ["MLflow", "Kubeflow", "Seldon", "TensorFlow Serving"],
          gradient: "from-orange-600 to-red-600",
        },
      ],
    },
    mobile: {
      title: "Mobile Engineering",
      description: "Native and cross-platform mobile applications with premium user experiences.",
      icon: SmartphoneNfc,
      items: [
        {
          title: "iOS Development",
          description: "Native iOS applications with Swift and modern Apple frameworks",
          features: ["ARKit Integration", "Core ML", "In-app Purchases", "Push Notifications"],
          technologies: ["Swift", "SwiftUI", "UIKit", "Combine"],
          gradient: "from-blue-600 to-cyan-600",
        },
        {
          title: "Android Development",
          description: "Native Android applications with Kotlin and Jetpack components",
          features: ["Material Design", "Jetpack Compose", "Background Services", "Play Store Deployment"],
          technologies: ["Kotlin", "Jetpack", "Coroutines", "Room DB"],
          gradient: "from-purple-600 to-pink-600",
        },
        {
          title: "Cross-Platform",
          description: "Single codebase applications for multiple mobile platforms",
          features: ["Code Sharing", "Native Performance", "Hot Reload", "Plugin Ecosystem"],
          technologies: ["React Native", "Flutter", "Ionic", "Xamarin"],
          gradient: "from-emerald-600 to-teal-600",
        },
        {
          title: "Mobile Backend",
          description: "APIs and services optimized for mobile application requirements",
          features: ["Offline Sync", "Real-time Updates", "Media Streaming", "Geolocation Services"],
          technologies: ["Firebase", "AWS Amplify", "GraphQL", "WebSocket"],
          gradient: "from-orange-600 to-red-600",
        },
      ],
    },
    data: {
      title: "Data Engineering",
      description: "Data pipelines, warehouses, and analytics platforms for informed decision-making.",
      icon: DatabaseZap,
      items: [
        {
          title: "Data Warehousing",
          description: "Centralized data repositories optimized for analytics and reporting",
          features: ["ETL/ELT Pipelines", "Data Modeling", "Query Optimization", "Data Governance"],
          technologies: ["Snowflake", "BigQuery", "Redshift", "dbt"],
          gradient: "from-blue-600 to-cyan-600",
        },
        {
          title: "Real-time Streaming",
          description: "Processing and analysis of data streams in real-time",
          features: ["Event Processing", "Stream Aggregation", "Complex Event Processing", "Alerting"],
          technologies: ["Apache Kafka", "Apache Flink", "Spark Streaming", "AWS Kinesis"],
          gradient: "from-purple-600 to-pink-600",
        },
        {
          title: "Business Intelligence",
          description: "Dashboards and reporting solutions for data-driven decisions",
          features: ["Interactive Dashboards", "Self-service Analytics", "Automated Reporting", "KPIs Tracking"],
          technologies: ["Tableau", "Power BI", "Looker", "Metabase"],
          gradient: "from-emerald-600 to-teal-600",
        },
        {
          title: "Big Data Processing",
          description: "Processing and analysis of large-scale datasets",
          features: ["Distributed Computing", "Batch Processing", "Data Lakes", "Schema Evolution"],
          technologies: ["Apache Spark", "Hadoop", "Delta Lake", "Apache Hive"],
          gradient: "from-orange-600 to-red-600",
        },
      ],
    },
    security: {
      title: "Security Engineering",
      description: "Comprehensive security solutions, compliance frameworks, and threat protection.",
      icon: LockKeyhole,
      items: [
        {
          title: "Application Security",
          description: "Secure software development lifecycle and code quality",
          features: ["SAST/DAST", "Code Review", "Dependency Scanning", "Threat Modeling"],
          technologies: ["OWASP", "SonarQube", "Snyk", "Checkmarx"],
          gradient: "from-blue-600 to-cyan-600",
        },
        {
          title: "Infrastructure Security",
          description: "Secure cloud and network infrastructure design and implementation",
          features: ["Zero Trust Architecture", "Network Segmentation", "DDoS Protection", "WAF Configuration"],
          technologies: ["AWS Security Hub", "Azure Security Center", "Cloudflare", "Palo Alto"],
          gradient: "from-purple-600 to-pink-600",
        },
        {
          title: "Compliance & Governance",
          description: "Regulatory compliance and enterprise risk management",
          features: ["GDPR/HIPAA/SOC2", "Audit Trails", "Policy Management", "Risk Assessment"],
          technologies: ["Vanta", "Drata", "OneTrust", "RSA Archer"],
          gradient: "from-emerald-600 to-teal-600",
        },
        {
          title: "Incident Response",
          description: "Security monitoring, threat detection, and incident management",
          features: ["SIEM Integration", "Threat Intelligence", "Forensic Analysis", "Response Automation"],
          technologies: ["Splunk", "ELK Stack", "CrowdStrike", "SentinelOne"],
          gradient: "from-orange-600 to-red-600",
        },
      ],
    },
  };

  const developmentMethodologies = [
    {
      icon: Workflow,
      title: "Agile Development",
      description: "Iterative development with continuous feedback and rapid delivery",
      practices: ["Scrum Framework", "Sprint Planning", "Daily Standups", "Retrospectives"],
    },
    {
      icon: ShieldCheck,
      title: "DevSecOps",
      description: "Security integrated throughout the development lifecycle",
      practices: ["Shift-left Security", "Automated Testing", "Continuous Monitoring", "Compliance as Code"],
    },
    {
      icon: Layers,
      title: "Clean Architecture",
      description: "Maintainable and testable software design principles",
      practices: ["Domain-driven Design", "Test-driven Development", "SOLID Principles", "Hexagonal Architecture"],
    },
    {
      icon: GitBranch,
      title: "Continuous Delivery",
      description: "Automated deployment pipeline for rapid, reliable releases",
      practices: ["CI/CD Pipelines", "Feature Flags", "Blue-green Deployment", "Canary Releases"],
    },
  ];

  const industriesServed = [
    "FinTech & Banking",
    "Healthcare & Life Sciences",
    "E-commerce & Retail",
    "SaaS Platforms",
    "Logistics & Supply Chain",
    "Education & EdTech",
    "Government & Public Sector",
    "Media & Entertainment",
  ];

  const curacloudFeatures = [
    {
      icon: Activity,
      title: "Patient Management",
      description: "Complete patient records, history, and real-time monitoring",
    },
    {
      icon: FileText,
      title: "Electronic Health Records",
      description: "Digital patient records with secure access and compliance",
    },
    {
      icon: Pill,
      title: "Pharmacy Management",
      description: "Inventory, prescriptions, and medication tracking",
    },
    {
      icon: Users,
      title: "Staff & Appointment",
      description: "Staff scheduling and automated appointment management",
    },
    {
      icon: Clipboard,
      title: "Billing & Insurance",
      description: "Automated billing, insurance claims, and financial reports",
    },
    {
      icon: Bell,
      title: "Real-time Alerts",
      description: "Critical alerts, notifications, and emergency protocols",
    },
    {
      icon: ShieldHalf,
      title: "HIPAA Compliance",
      description: "Full HIPAA compliance and data security protocols",
    },
    {
      icon: DatabaseZap,
      title: "Analytics Dashboard",
      description: "Real-time analytics and performance insights",
    },
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
                COMPREHENSIVE SERVICES & PRODUCTS
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100">
                Engineering Excellence
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mt-4">
                Across Technologies
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade software solutions, cutting-edge AI systems, scalable cloud infrastructure, 
              and comprehensive security services—all delivered with precision engineering.
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

      {/* Services Tabs */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12">
            <div className="text-center">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-2 rounded-2xl">
                {serviceCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className={cn(
                        "data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600",
                        "data-[state=active]:text-white data-[state=active]:border-0",
                        "py-4 px-6 rounded-xl transition-all duration-300",
                        "flex flex-col items-center gap-3",
                        "hover:bg-gray-800/50"
                      )}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="text-sm font-medium">{category.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {Object.entries(services).map(([key, service]) => {
              const Icon = service.icon;
              return (
                <TabsContent key={key} value={key} className="space-y-12">
                  <div className="text-center space-y-6">
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-left">
                        <h2 className="text-4xl font-bold text-white">{service.title}</h2>
                        <p className="text-gray-400 text-lg mt-2">{service.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {service.items.map((item, index) => (
                      <Card key={index} className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 group">
                        <CardContent className="p-8">
                          <div className="space-y-6">
                            <div className="flex items-start justify-between">
                              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                <CheckCircle className="w-7 h-7 text-white" />
                              </div>
                              <Badge className="bg-gray-800/50 text-gray-300 border-gray-700">
                                {item.technologies[0]}
                              </Badge>
                            </div>
                            
                            <div>
                              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-gray-400 leading-relaxed">
                                {item.description}
                              </p>
                            </div>

                            <div className="space-y-4">
                              <div>
                                <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                                <div className="flex flex-wrap gap-2">
                                  {item.features.map((feature, i) => (
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
                                  {item.technologies.map((tech, i) => (
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
                  Engineering
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
              {developmentMethodologies.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 group">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                        {method.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {method.description}
                      </p>
                      
                      <div className="space-y-3">
                        {method.practices.map((practice, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
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

      {/* Industries Served */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <span className="text-sm font-medium tracking-widest text-blue-300">
                INDUSTRY EXPERTISE
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Serving Diverse
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  Industries
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We understand the unique challenges and requirements of various sectors, delivering tailored solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industriesServed.map((industry, index) => (
                <Card key={index} className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-blue-400 font-bold">{industry.charAt(0)}</span>
                      </div>
                      <span className="text-gray-300 font-medium group-hover:text-blue-300 transition-colors">
                        {industry}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CuraCloud HMS Product Highlight */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-blue-600/10 to-cyan-600/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.2),transparent_70%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-emerald-800/30 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-64 h-64 bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <Badge className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white border-0">
                      <Heart className="w-3 h-3 mr-2" />
                      HEALTHCARE INNOVATION
                    </Badge>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-cyan-600 flex items-center justify-center">
                        <Stethoscope className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">
                          CuraCloud HMS
                        </h2>
                        <p className="text-emerald-300 text-lg">
                          Hospital Management System
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    A comprehensive, cloud-based Hospital Management System designed to streamline 
                    healthcare operations, enhance patient care, and ensure regulatory compliance.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                    {[
                      { label: "Hospitals Served", value: "50+", icon: Activity },
                      { label: "Patient Records", value: "100K+", icon: FileText },
                      { label: "Uptime", value: "99.9%", icon: Zap },
                      { label: "Compliance", value: "HIPAA", icon: Shield },
                    ].map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <div key={index} className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                          <Icon className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white">{stat.value}</div>
                          <div className="text-xs text-gray-400">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>
                  
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
  <Button 
    onClick={() => setShowPreview(true)}
    className="group bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700"
  >
    <span className="flex items-center">
      Explore CuraCloud HMS
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </span>
  </Button>
  
  <Link to="/contact">
    <Button variant="outline" className="border-gray-700 hover:border-emerald-500">
      Request Demo
    </Button>
  </Link>
</div>

{/* Preview Modal */}
{showPreview && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 border border-emerald-800/30 rounded-2xl max-w-2xl w-full p-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-white">Visit CuraCloud HMS Website</h3>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setShowPreview(false)}
          className="text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>
      <p className="text-gray-300 mb-6">
        You are about to visit the official CuraCloud HMS website. This is an external website that will open in a new tab.
      </p>
      <div className="flex justify-end gap-4">
        <Button 
          variant="outline" 
          onClick={() => setShowPreview(false)}
          className="border-gray-700"
        >
          Cancel
        </Button>
        <a 
          href="https://www.curacloud.com.ng/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className="bg-gradient-to-r from-emerald-600 to-cyan-600">
            Continue to Website
          </Button>
        </a>
      </div>
    </div>
  </div>
)}
                </div>
                
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-white mb-6 text-center">Core Features</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {curacloudFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                          <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white text-sm mb-1">{feature.title}</h4>
                              <p className="text-xs text-gray-400">{feature.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LoomDash Highlight */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.2),transparent_70%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-64 h-64 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1 space-y-6">
                  <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0">
                    <Sparkles className="w-3 h-3 mr-2" />
                    LOGISTICS INNOVATION
                  </Badge>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-white">
                    LoomDash Logistics
                  </h2>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Our flagship tech-enabled logistics platform that demonstrates our engineering capabilities 
                    in real-world applications. Combining AI, real-time tracking, and scalable infrastructure.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    {["Real-time Tracking", "AI Optimization", "Scalable Architecture", "Enterprise Security"].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Link to="/loomdash">
                      <Button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                        <span className="flex items-center">
                          Explore LoomDash
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" className="border-gray-700 hover:border-blue-500">
                        Request Demo
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { label: "Delivery Speed", value: "99.9%", icon: Zap },
                        { label: "Cost Savings", value: "40%", icon: BarChart3 },
                        { label: "Real-time Tracking", value: "100%", icon: Globe },
                        { label: "Client Satisfaction", value: "98%", icon: MessageCircle },
                      ].map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                          <div key={index} className="text-center">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center mx-auto mb-3">
                              <Icon className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent_70%)]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-xl">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium tracking-wider text-blue-300">
                READY TO START
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100">
                Let's Build Your
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Technology Solution
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Schedule a free technical consultation with our engineering team. 
              Get expert insights and a clear roadmap for your project.
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
              <span className="text-gray-300">Free 60-minute technical consultation</span>
              <span className="mx-4">•</span>
              <span>Detailed proposal within 48 hours</span>
              <span className="mx-4">•</span>
              <span>Enterprise-grade security & NDA</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;