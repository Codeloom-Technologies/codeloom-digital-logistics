import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Rocket, 
  Shield, 
  Zap, 
  CheckCircle,
  Users,
  Award,
  Target
} from "lucide-react";

const About = () => {
  const achievements = [
    { number: "50+", label: "Projects Delivered" },
    { number: "25+", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const teamValues = [
    { 
      icon: "💡", 
      title: "Innovation", 
      description: "Embrace creativity and technological advancements to stay ahead in the dynamic tech industry.",
      gradient: "from-yellow-400 to-orange-500"
    },
    { 
      icon: "🎯", 
      title: "Precision", 
      description: "Strive for excellence in every detail, ensuring the delivery of high-quality, reliable solutions.",
      gradient: "from-blue-400 to-blue-600"
    },
    { 
      icon: "🤝", 
      title: "Collaboration", 
      description: "Foster a culture of teamwork and collaboration to harness diverse skills for optimal results.",
      gradient: "from-green-400 to-emerald-500"
    },
    { 
      icon: "❤️", 
      title: "Client-Centric", 
      description: "Prioritize client satisfaction by understanding their unique needs and delivering tailored solutions.",
      gradient: "from-pink-400 to-rose-500"
    },
    { 
      icon: "📚", 
      title: "Learning", 
      description: "Cultivate a learning environment that encourages professional growth and staying at the forefront of industry trends.",
      gradient: "from-purple-400 to-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
            Founded 2023 • Est. September 13, 2022
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            About Codeloom Technologies
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            A forward-thinking startup at the forefront of software development and machine learning, 
            dedicated to crafting intricate and precise solutions for today's complex tech landscape.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Codeloom Technologies, founded in 2023 and registered on 13 September 2022, 
                emerged from a vision to bridge the gap between complex technological challenges 
                and innovative solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our dedicated team is driven by the mission to craft intricate and precise solutions, 
                addressing the complex challenges within today's rapidly evolving tech landscape.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, title: "Expert Team", desc: "Skilled professionals" },
                { icon: Award, title: "Quality Focus", desc: "Excellence in delivery" },
                { icon: Target, title: "Client Success", desc: "Tailored solutions" },
                { icon: Rocket, title: "Innovation", desc: "Cutting-edge tech" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-card transition-all duration-300 border-0 bg-muted/30">
                    <CardContent className="p-6">
                      <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Addressing Today's Tech Challenges
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="group hover:shadow-card transition-all duration-300 border-0 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In today's tech-driven landscape, businesses face the daunting challenge of navigating 
                  a complex and rapidly evolving technological environment.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The demand for sophisticated software solutions and machine learning integration has surged, 
                  while the scarcity of tailor-made, precise solutions hinders growth and innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Solution</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We address these challenges head-on with cutting-edge software development and 
                  machine learning solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our team crafts intricate, custom-tailored technological solutions that empower businesses 
                  to not only adapt to the technological landscape but thrive within it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading innovator in software development and machine learning, empowering businesses 
                with cutting-edge solutions that redefine possibilities and drive digital transformation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Codeloom Technologies is on a mission to deliver unparalleled value to our clients by leveraging 
                the latest technologies and a blend of coding expertise and creative craftsmanship, pushing the 
                boundaries of innovation with tailored solutions.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-primary/10">
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
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape our approach to innovation and collaboration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamValues.map((value, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300 text-2xl`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Let's work together to bring innovative technology solutions to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Get Started Today
            </button>
            <button className="px-8 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;