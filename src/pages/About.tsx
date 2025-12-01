import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Code,
  Rocket,
  Shield,
  Zap,
  CheckCircle,
  Users,
  Award,
  Target,
  Sparkles,
  Heart,
  Globe,
  Cpu,
  Brain,
  Cloud,
  Database,
  Smartphone,
  ArrowRight,
  Calendar,
  ExternalLink,
  TrendingUp,
  ShieldCheck,
  Layers,
  GitBranch,
  BarChart3,
  Building,
  MapPin,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const About = () => {
  const [activeTimeline, setActiveTimeline] = useState("2022");

  const achievements = [
    { number: "10+", label: "Projects Completed", icon: Code, suffix: "" },
    { number: "99.9", label: "Uptime SLA", icon: ShieldCheck, suffix: "%" },
    { number: "5", label: "Team Members", icon: Users, suffix: "+" },
    { number: "24/7", label: "Support Response", icon: Clock, suffix: "" },
  ];

  const teamValues = [
    {
      icon: Sparkles,
      title: "Technical Excellence",
      description:
        "We pursue mastery in engineering, delivering solutions that are not just functional but exceptional.",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: Heart,
      title: "Client Partnership",
      description:
        "Your success is our success. We build lasting relationships through transparency and collaboration.",
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      icon: Target,
      title: "Impact-Driven",
      description:
        "Every line of code serves a purpose. We focus on solutions that create measurable business value.",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: Globe,
      title: "Innovation Forward",
      description:
        "We stay ahead of the curve, constantly exploring new technologies and methodologies.",
      gradient: "from-orange-600 to-red-600",
    },
  ];

  const expertiseAreas = [
    {
      icon: Cpu,
      title: "Software Engineering",
      description: "Full-stack development & architecture",
      color: "text-blue-400",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent systems & predictive analytics",
      color: "text-purple-400",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud solutions",
      color: "text-emerald-400",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Data pipelines & analytics platforms",
      color: "text-cyan-400",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native & cross-platform applications",
      color: "text-orange-400",
    },
    {
      icon: Shield,
      title: "Security Engineering",
      description: "Compliance & threat protection",
      color: "text-red-400",
    },
  ];

  const timeline = [
    {
      year: "2022",
      events: [
        "Company foundation established",
        "First enterprise client acquisition",
        "Core team formation with senior engineers",
      ],
      icon: Building,
    },
    {
      year: "2023",
      events: [
        "Official launch of Codeloom Technologies",
        "Development of proprietary technology stack",
        "Expansion to international markets",
        "Launch of CuraCloud HMS product",
      ],
      icon: Rocket,
    },
    {
      year: "2024",
      events: [
        "Team expansion to 50+ members",
        "AI research division established",
        "Multiple enterprise partnerships secured",
        "Global remote delivery model perfected",
      ],
      icon: TrendingUp,
    },
  ];

  const teamStats = [
    { label: "Senior Engineers", value: "85%", icon: Code },
    { label: "Advanced Degrees", value: "60%", icon: Award },
    { label: "Certifications", value: "200+", icon: Shield },
    { label: "Years Experience", value: "10+", icon: BarChart3 },
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
                ENGINEERING EXCELLENCE SINCE 2022
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100">
                About Codeloom
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mt-4">
                Technologies
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We engineer digital excellence through precise code, robust architecture, 
              and innovative solutions that transform businesses and shape the future of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    Our Engineering
                  </span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    Philosophy
                  </span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Founded in 2022 with a vision to bridge complex technological challenges 
                  with elegant solutions, Codeloom Technologies has evolved into a premier 
                  engineering partner for forward-thinking businesses.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Our team of senior engineers, data scientists, and architects combines 
                  deep technical expertise with a passion for innovation, delivering 
                  enterprise-grade solutions that drive measurable business outcomes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {teamStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="p-6 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">{stat.value}</div>
                          <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-8">Our Journey</h3>
                <div className="space-y-8">
                  {timeline.map((period, index) => {
                    const Icon = period.icon;
                    return (
                      <div key={index} className="flex gap-6 group">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 w-px bg-gradient-to-b from-blue-500/30 to-transparent mt-4"></div>
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl font-bold text-blue-400 mb-3">{period.year}</div>
                          <div className="space-y-3">
                            {period.events.map((event, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-300">{event}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-24 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <span className="text-sm font-medium tracking-widest text-blue-300">
                TECHNICAL EXPERTISE
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Deep Technical
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  Capabilities
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <Card key={index} className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 group">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className={`w-7 h-7 ${area.color}`} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {area.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {area.description}
                      </p>
                      
                      <div className="flex items-center gap-3 text-sm text-blue-400">
                        <ArrowRight className="w-4 h-4" />
                        <span>Explore capabilities</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12 mb-16">
            <div className="space-y-6">
              <span className="text-sm font-medium tracking-widest text-blue-300">
                WHY WE EXIST
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Solving Complex
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  Technical Challenges
                </span>
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-red-500/50 transition-all duration-500">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  The Modern Challenge
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">
                    Businesses today face unprecedented technological complexity. 
                    Legacy systems, integration nightmares, security vulnerabilities, 
                    and the rapid pace of innovation create significant barriers to growth.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Legacy technical debt slowing innovation",
                      "Complex system integration requirements",
                      "Cybersecurity threats and compliance needs",
                      "Difficulty finding skilled engineering talent",
                    ].map((challenge, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-500">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Engineering Response
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">
                    We architect solutions that transform challenges into competitive advantages. 
                    Through meticulous engineering, innovative thinking, and deep industry expertise.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Modern architecture and best practices",
                      "Scalable, secure cloud-native solutions",
                      "AI-driven insights and automation",
                      "Dedicated expert teams and knowledge transfer",
                    ].map((solution, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        <span className="text-gray-300 text-sm">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <span className="text-sm font-medium tracking-widest text-blue-300">
                OUR CULTURE
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Core Engineering
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  Values
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide our engineering decisions and client relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 group">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500 group text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-blue-400" />
                    </div>
                    
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                      {achievement.number}
                      <span className="text-blue-400">{achievement.suffix}</span>
                    </div>
                    
                    <div className="text-sm font-medium text-gray-400 tracking-wider">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
                PARTNER WITH EXPERTS
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100">
                Ready to Engineer Your
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Digital Future?
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Join the growing list of enterprises that trust Codeloom with their 
              most critical technology initiatives. Let's build something extraordinary together.
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
                    Schedule Technical Consultation
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
                  View Our Case Studies
                </Button>
              </Link>
            </div>

            <p className="text-sm text-gray-400 pt-12">
              <span className="text-gray-300">Response within 2 business hours</span>
              <span className="mx-4">•</span>
              <span>Enterprise-grade security & NDA</span>
              <span className="mx-4">•</span>
              <span>Senior engineering team assigned</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;