import React from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  MessageCircle,
  Code,
  BookOpen,
  Lightbulb,
  Globe,
  Zap,
  Shield,
  Clock,
  Users,
  Sparkles,
  Target,
  Cpu,
  Database,
  ArrowRight,
  Check,
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Natural Conversations",
      description:
        "Engage in human-like conversations with advanced natural language understanding",
      features: [
        "Context awareness",
        "Emotional intelligence",
        "Multi-turn dialogue",
        "Tone adaptation",
      ],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Code Assistant",
      description:
        "Get intelligent coding help across 50+ programming languages",
      features: [
        "Code generation",
        "Bug detection",
        "Code optimization",
        "Documentation",
      ],
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learning Companion",
      description:
        "Personalized learning experiences tailored to your pace and style",
      features: [
        "Adaptive learning",
        "Progress tracking",
        "Interactive quizzes",
        "Study plans",
      ],
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Partner",
      description:
        "Unlock your creativity with AI-powered brainstorming and content creation",
      features: [
        "Idea generation",
        "Content writing",
        "Story creation",
        "Design concepts",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-language Support",
      description:
        "Communicate in over 100 languages with real-time translation",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy First",
      description:
        "End-to-end encryption ensures your conversations stay private",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description:
        "Your AI assistant is always ready to help, anytime, anywhere",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description:
        "Share AI insights and collaborate with your team seamlessly",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Advanced AI Models",
      description: "Powered by cutting-edge GPT-4 and custom fine-tuned models",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Memory & Context",
      description: "Remembers your preferences and conversation history",
    },
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "50 messages per day",
        "Basic AI assistance",
        "Standard response time",
        "Web access only",
      ],
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For power users and professionals",
      features: [
        "Unlimited messages",
        "Advanced AI models",
        "Priority support",
        "Mobile & web access",
        "Code assistant",
        "File uploads",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Custom AI training",
        "Team management",
        "API access",
        "Dedicated support",
        "SLA guarantee",
      ],
    },
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
              <Link to="/features" className="text-purple-600 font-medium">
                Features
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">
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
              <Sparkles className="w-4 h-4 mr-2" />
              Discover All Features
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Everything you need in an
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                AI assistant
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              NovaTalk combines cutting-edge AI technology with intuitive design
              to deliver the most comprehensive AI assistant experience
              available today.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features designed to enhance your productivity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {feature.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything else you need for the perfect AI experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Start free, scale as you grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 border-2 ${
                  plan.popular
                    ? "border-purple-500 shadow-2xl relative"
                    : "border-gray-200 shadow-lg"
                } hover:shadow-xl transition-shadow`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-medium transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
                      : "border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to experience the future of AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already boosting their productivity
            with NovaTalk
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 flex items-center justify-center group text-lg font-medium"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-200 text-lg font-medium">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
