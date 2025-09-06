import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Support from "./pages/Support";
import {
  MessageCircle,
  Sparkles,
  Globe,
  Code,
  BookOpen,
  Lightbulb,
  ArrowRight,
  Menu,
  X,
  
  Brain,
  Zap,
} from "lucide-react";
import Login from "./pages/Login";
import Verify from "./pages/Verify";
import { UserData } from "./context/UserContext";
import Blog from "./pages/Blog";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import SignupForm from "./pages/SignupForm";
import ForgotPassword from "./pages/ForgotPassword";
const App = () => {
  const {  isAuth,  } = UserData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Natural conversations",
      description:
        "Have natural, flowing conversations with your AI personal assistant",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Code assistance",
      description:
        "Get help with programming, debugging, and technical solutions",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Learning support",
      description:
        "Learn new topics and get detailed explanations on any subject",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Creative assistance",
      description:
        "Brainstorm ideas and get help with creative projects and writing",
    },
  ];

  const examples = [
    "Help me plan my daily schedule",
    "Explain machine learning concepts",
    "Write a professional email for me",
    "Create a workout plan for beginners",
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={isAuth ? <Home /> : <Login />}></Route>
          <Route path="/login" element={isAuth ? <Home /> : <Login />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/signup" element={<SignupForm />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          {/* <Route path="/contact" element={<Contact />}></Route> */}
          <Route path="/features" element={<Features />}></Route>
          <Route
            path="/verify"
            element={isAuth ? <Home /> : <Verify />}
          ></Route>
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-white">
                {/* Navigation */}
                <nav className="relative z-50 bg-white border-b border-gray-100">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                      {/* Logo */}
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <Brain className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-semibold text-gray-900">
                          NovaTalk
                        </span>
                      </div>

                      {/* Desktop Navigation */}
                      <div className="hidden md:flex items-center space-x-8">
                        <a
                          href="/features"
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Features
                        </a>
                        {/* <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Pricing
                        </a> */}
                        <a
                          href="/about"
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          About
                        </a>
                        <a
                          href="/support"
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Support
                        </a>
                        <a
                          href="/blog"
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Blog
                        </a>
                        {/* <a
                          href="/contact"
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Contact
                        </a> */}
                      </div>

                      {/* Desktop Auth Buttons */}
                      <div className="hidden md:flex items-center space-x-4">
                        <button
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                          onClick={() =>
                            (window.location.href = isAuth ? "/home" : "/login")
                          }
                        >
                          Log in
                        </button>
                        <button
                          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
                          onClick={() => (window.location.href = "/signup")}
                        >
                          Get Started
                        </button>
                      </div>

                      {/* Mobile menu button */}
                      <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                      >
                        {isMenuOpen ? (
                          <X className="w-6 h-6" />
                        ) : (
                          <Menu className="w-6 h-6" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100">
                      <div className="px-4 py-4 space-y-4">
                        <a
                          href="/features"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          Features
                        </a>
                        {/* <a
                          href="#"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          Pricing
                        </a> */}
                        <a
                          href="/about"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          About
                        </a>
                        <a
                          href="/support"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          Support
                        </a>
                        <a
                          href="/blog"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          Blog
                        </a>
                        {/* <a
                          href="/contact"
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Contact
                        </a> */}
                        <div className="pt-4 border-t border-gray-100 space-y-2">
                          <button className="block w-full text-left text-gray-600 hover:text-gray-900">
                            Log in
                          </button>
                          <button className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </nav>

                {/* Hero Section */}
                <section className="relative overflow-hidden">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className="text-center">
                      {/* Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm text-purple-700 mb-8">
                        <Zap className="w-4 h-4 mr-2" />
                        Powered by Advanced AI Technology
                      </div>

                      {/* Main Heading */}
                      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                        Meet NovaTalk.
                        <br />
                        Your AI Personal
                        <br />
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          Assistant.
                        </span>
                      </h1>

                      {/* Subtitle */}
                      <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Experience the future of AI assistance. NovaTalk helps
                        you with daily tasks, creative projects, learning, and
                        so much more. Your intelligent companion is here.
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center group text-lg font-medium">
                          Start chatting now
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-lg font-medium">
                          Watch demo
                        </button>
                      </div>

                      {/* Chat Interface Preview */}
                      <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                          {/* Chat Header */}
                          <div className="bg-gradient-to-r from-purple-50 to-blue-50 px-6 py-4 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                                  <Brain className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-medium text-gray-900">
                                  NovaTalk Assistant
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-gray-500">
                                  Ready to help
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Chat Messages */}
                          <div className="p-6 space-y-6">
                            <div className="flex items-start space-x-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-blue-600 font-medium text-sm">
                                  You
                                </span>
                              </div>
                              <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-xs">
                                <p className="text-gray-800">
                                  Help me organize my work schedule for tomorrow
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <Brain className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                                  <p className="text-gray-800 leading-relaxed">
                                    I'd be happy to help you organize your
                                    schedule! Here's a structured approach:
                                  </p>
                                  <ul className="mt-3 space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                      <span>
                                        Start with your most important tasks in
                                        the morning
                                      </span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                      <span>
                                        Block time for focused work without
                                        interruptions
                                      </span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                      <span>
                                        Schedule breaks between meetings for
                                        better productivity
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Chat Input */}
                          <div className="border-t border-gray-200 p-4">
                            <div className="flex items-center space-x-3">
                              <div className="flex-1 bg-gray-50 rounded-xl px-4 py-3">
                                <p className="text-gray-500">
                                  Ask NovaTalk anything...
                                </p>
                              </div>
                              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all">
                                <ArrowRight className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Background Gradient */}
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                    <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                  </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-gray-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                      <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Your intelligent companion for every task
                      </h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        NovaTalk is designed to understand your needs and
                        provide personalized assistance across all aspects of
                        your digital life.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                            {feature.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Examples Section */}
                <section className="py-20">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                      <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Try these conversation starters
                      </h2>
                      <p className="text-xl text-gray-600">
                        See how NovaTalk can assist you with various tasks
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                      {examples.map((example, index) => (
                        <button
                          key={index}
                          className="text-left bg-white border border-gray-200 rounded-2xl p-6 hover:border-purple-300 hover:shadow-md transition-all duration-200 group"
                        >
                          <div className="flex items-center justify-between">
                            <p className="text-gray-800 font-medium">
                              {example}
                            </p>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-16">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                      <div className="col-span-1">
                        <div className="flex items-center space-x-2 mb-6">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <Brain className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-xl font-semibold">
                            NovaTalk
                          </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                          Your AI personal assistant, designed to make your life
                          easier and more productive.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-3 text-gray-400">
                          <li>
                            <a
                              href="#"
                              className="hover:text-white transition-colors"
                            >
                              Features
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="hover:text-white transition-colors"
                            >
                              Pricing
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="hover:text-white transition-colors"
                            >
                              API
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="hover:text-white transition-colors"
                            >
                              Integrations
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3 text-gray-400">
                          <li>
                            <a
                              href="#"
                              className="hover:text-white transition-colors"
                            >
                              Documentation
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="hover:text-white transition-colors"
                            >
                              Tutorials
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="hover:text-white transition-colors"
                            >
                              Blog
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="hover:text-white transition-colors"
                            >
                              Community
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-3 text-gray-400">
                          <li>
                            <a
                              href="#"
                              className="hover:text-white transition-colors"
                            >
                              About
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="hover:text-white transition-colors"
                            >
                              Careers
                            </a>
                          </li>
                          <li>
                            <a
                              href="/contact"
                              className="hover:text-white transition-colors"
                            >
                              Contact
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="hover:text-white transition-colors"
                            >
                              Press
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                      <p className="text-gray-400 text-sm">
                        © 2025 NovaTalk. All rights reserved.
                      </p>
                      <div className="flex space-x-6 mt-4 md:mt-0">
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          Terms
                        </a>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          Privacy
                        </a>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          Security
                        </a>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
