import React from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  Users,
  Target,
  Lightbulb,
  Globe,
  Award,
  ArrowRight,
  Heart,
  Zap,
  Shield,
  Rocket,
  Star,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "We push the boundaries of AI technology to create solutions that truly matter.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Human-Centered",
      description:
        "Every feature we build starts with understanding human needs and experiences.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy & Trust",
      description:
        "Your data and privacy are sacred to us. We build with transparency and security.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description:
        "We believe AI should empower everyone, regardless of location or background.",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former AI researcher at Stanford with 10+ years in machine learning",
      image:
        "https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer, led AI teams at multiple Fortune 500 companies",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Dr. Aisha Patel",
      role: "Head of AI Research",
      bio: "PhD in Computer Science, published 50+ papers on natural language processing",
      image:
        "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "James Wilson",
      role: "Head of Product",
      bio: "Former design lead at Apple, passionate about human-AI interaction",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: "Foundation",
      description:
        "NovaTalk was founded with the vision of making AI accessible to everyone",
    },
    {
      year: "2022",
      title: "First Product Launch",
      description: "Released our first AI assistant to 10,000 beta users",
    },
    {
      year: "2023",
      title: "Series A Funding",
      description:
        "Raised $25M to accelerate product development and team growth",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description:
        "Serving 1M+ users across 50 countries with enterprise solutions",
    },
  ];

  const stats = [
    { number: "1M+", label: "Active Users" },
    { number: "50+", label: "Countries" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">
                NovaTalk
              </span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link
                to="/features"
                className="text-gray-600 hover:text-gray-900"
              >
                Features
              </Link>
              <Link to="/about" className="text-purple-600 font-medium">
                About
              </Link>
              <Link to="/support" className="text-gray-600 hover:text-gray-900">
                Support
              </Link>
              <Link to="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </Link>
              <Link
                to="/login"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm text-purple-700 mb-8">
              <Heart className="w-4 h-4 mr-2" />
              Our Story
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Building the future of
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                human-AI collaboration
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              We believe AI should amplify human potential, not replace it. Our
              mission is to create intelligent systems that understand, assist,
              and inspire people to achieve more.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At NovaTalk, we're on a mission to democratize access to
                artificial intelligence. We believe that everyone should have
                access to powerful AI tools that can help them learn, create,
                and achieve their goals.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of world-class researchers, engineers, and designers
                work tirelessly to push the boundaries of what's possible with
                AI, while never losing sight of the human element that makes
                technology truly meaningful.
              </p>
              <div className="flex items-center space-x-4">
                <Target className="w-6 h-6 text-purple-600" />
                <span className="text-lg font-medium text-gray-900">
                  Making AI accessible to everyone
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl p-8 text-white">
                <Rocket className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-purple-100 leading-relaxed">
                  A world where AI enhances human creativity, accelerates
                  learning, and empowers individuals to solve complex problems
                  with confidence and ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The brilliant minds behind NovaTalk
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-600"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-200 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <div className="text-2xl font-bold text-purple-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Award className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Recognition & Awards
            </h2>
            <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
              We're honored to be recognized by industry leaders and
              organizations worldwide
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Star className="w-8 h-8 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  AI Innovation Award 2024
                </h3>
                <p className="text-purple-100">TechCrunch Disrupt</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Best AI Startup
                </h3>
                <p className="text-purple-100">Y Combinator Demo Day</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Product of the Year
                </h3>
                <p className="text-purple-100">Product Hunt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join our mission
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a developer, researcher, or just someone who believes
            in the power of AI, we'd love to have you on our journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center group text-lg font-medium"
            >
              Try NovaTalk
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-lg font-medium">
              Join Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
