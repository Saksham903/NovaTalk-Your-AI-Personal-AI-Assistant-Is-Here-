import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserData } from "../context/UserContext";

import {
  Brain,
  Search,
  MessageCircle,
  Mail,
  Phone,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Book,
  Video,
  FileText,
  Users,
  Clock,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { handleSendEmail } = UserData();
  const [openFaq, setOpenFaq] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  const [contactReason, setContactReason] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleSendEmail(
      firstName,
      lastName,
      email,
      company,
      subject,
      message,
      contactReason
    );
    e.preventDefault();
  };

  const faqs = [
    {
      question: "How do I get started with NovaTalk?",
      answer:
        "Getting started is easy! Simply sign up for a free account, and you'll get access to our basic AI assistant. No credit card required for the free tier.",
    },
    {
      question: "What's the difference between the free and paid plans?",
      answer:
        "The free plan includes 50 messages per day with basic AI assistance. Paid plans offer unlimited messages, advanced AI models, priority support, and additional features like code assistance and file uploads.",
    },
    {
      question: "Is my data secure with NovaTalk?",
      answer:
        "Absolutely. We use end-to-end encryption for all conversations, and we never store or use your personal data to train our models. Your privacy is our top priority.",
    },
    {
      question: "Can I use NovaTalk for business purposes?",
      answer:
        "Yes! Our Pro and Enterprise plans are designed for business use. Enterprise plans include team management, custom AI training, and dedicated support.",
    },
    {
      question: "How accurate is the AI assistant?",
      answer:
        "NovaTalk is powered by state-of-the-art AI models with high accuracy rates. However, we recommend verifying important information and using your judgment for critical decisions.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. You'll continue to have access to paid features until the end of your billing period.",
    },
  ];

  const supportChannels = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 for Pro & Enterprise users",
      action: "Start Chat",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      availability: "Response within 24 hours",
      action: "Send Email",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Support",
      description: "Speak directly with our technical team",
      availability: "Enterprise customers only",
      action: "Schedule Call",
    },
  ];

  const resources = [
    {
      icon: <Book className="w-8 h-8" />,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      items: [
        "Getting Started",
        "API Documentation",
        "Best Practices",
        "Troubleshooting",
      ],
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      items: [
        "Basic Features",
        "Advanced Tips",
        "Integration Guides",
        "Use Cases",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Forum",
      description: "Connect with other NovaTalk users",
      items: [
        "General Discussion",
        "Feature Requests",
        "Tips & Tricks",
        "Developer Corner",
      ],
    },
  ];

  const statusItems = [
    {
      service: "API Services",
      status: "operational",
      uptime: "99.98%",
    },
    {
      service: "Web Application",
      status: "operational",
      uptime: "99.99%",
    },
    {
      service: "Mobile Apps",
      status: "operational",
      uptime: "99.97%",
    },
    {
      service: "AI Models",
      status: "degraded",
      uptime: "98.45%",
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "degraded":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case "down":
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Info className="w-5 h-5 text-gray-500" />;
    }
  };

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
              <Link to="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link to="/support" className="text-purple-600 font-medium">
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              How can we
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                help you?
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Find answers to your questions, get support from our team, or
              browse our resources.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Choose the support channel that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                  {channel.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {channel.title}
                </h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">
                    {channel.availability}
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all font-medium">
                  {channel.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Page */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              System Status
            </h2>
            <p className="text-xl text-gray-600">
              Real-time status of our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg font-semibold text-gray-900">
                    All Systems Operational
                  </span>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {statusItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(item.status)}
                      <span className="font-medium text-gray-900">
                        {item.service}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">
                        Uptime: {item.uptime}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === "operational"
                            ? "bg-green-100 text-green-800"
                            : item.status === "degraded"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200"
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Help Resources
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to master NovaTalk
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
                  {resource.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>

                <div className="space-y-3">
                  {resource.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <ArrowRight className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700 hover:text-purple-600 cursor-pointer transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-600">
                Send us a message and we'll get back to you soon
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <form className="space-y-6" onSubmit={submitHandler}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      FirstName
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                      placeholder="Your First  name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      LastName
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                      placeholder="Your Last Name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                      placeholder="Your Comapany  name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Reason
                  </label>
                  <input
                    type="text"
                    value={contactReason}
                    onChange={(e) => setContactReason(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    placeholder="Contact Reason"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button className="cursor-pointer w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium text-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
