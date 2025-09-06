import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserData } from "../context/UserContext";

import {
  Brain,
  Search,
  Calendar,
  User,
  ArrowRight,
  Tag,
  TrendingUp,
  Bookmark,
  Share,
  Clock,
  Eye,
} from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const { handleSubscribe } = UserData();

  const handleSubscribe1 = (e) => {
    e.preventDefault();
    handleSubscribe(email);
    setSubscribeMessage("Subscription successful! Thank you for subscribing.");
    setEmail(""); // Clear the email input field
  };

  const categories = [
    "All",
    "AI News",
    "Product Updates",
    "Tutorials",
    "Industry Insights",
    "Company News",
  ];

  const featuredPost = {
    title: "The Future of AI Assistants: What to Expect in 2024",
    excerpt:
      "Explore the latest advancements in AI technology and how they're shaping the future of digital assistants. From improved natural language processing to better contextual understanding...",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    views: "2.4k",
    category: "AI News",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
  };

  const blogPosts = [
    {
      title: "Building Better Prompts: A Complete Guide",
      excerpt:
        "Learn how to write effective prompts that get better results from AI assistants. Tips and tricks from our engineering team.",
      author: "Marcus Rodriguez",
      date: "March 12, 2024",
      readTime: "6 min read",
      views: "1.8k",
      category: "Tutorials",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "NovaTalk 3.0: What's New",
      excerpt:
        "Discover the latest features and improvements in our biggest update yet, including enhanced AI models and new collaboration tools.",
      author: "James Wilson",
      date: "March 10, 2024",
      readTime: "4 min read",
      views: "3.2k",
      category: "Product Updates",
      image:
        "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "AI Ethics: Our Commitment to Responsible AI",
      excerpt:
        "How we're ensuring NovaTalk remains safe, unbiased, and beneficial for all users. Our approach to ethical AI development.",
      author: "Dr. Aisha Patel",
      date: "March 8, 2024",
      readTime: "10 min read",
      views: "1.5k",
      category: "Company News",
      image:
        "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Productivity Hacks with AI: 10 Creative Uses",
      excerpt:
        "Discover unconventional ways to use AI assistants for boosting productivity, from meal planning to project management.",
      author: "Lisa Park",
      date: "March 5, 2024",
      readTime: "7 min read",
      views: "2.1k",
      category: "Tutorials",
      image:
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "The Evolution of Natural Language Processing",
      excerpt:
        "A deep dive into how NLP has evolved and what it means for the future of human-AI interaction.",
      author: "Dr. Michael Chen",
      date: "March 3, 2024",
      readTime: "12 min read",
      views: "1.9k",
      category: "Industry Insights",
      image:
        "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Customer Spotlight: How TechCorp Uses NovaTalk",
      excerpt:
        "Learn how TechCorp transformed their customer support with AI assistance, reducing response times by 60%.",
      author: "Rachel Kim",
      date: "February 28, 2024",
      readTime: "5 min read",
      views: "1.3k",
      category: "Company News",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const trendingTopics = [
    "AI Ethics",
    "Machine Learning",
    "Natural Language Processing",
    "Productivity Tips",
    "API Integration",
    "Custom Models",
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

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
              <Link to="/support" className="text-gray-600 hover:text-gray-900">
                Support
              </Link>
              <Link to="/blog" className="text-purple-600 font-medium">
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
              The NovaTalk
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Insights, updates, and stories from the world of AI. Stay updated
              with the latest developments in artificial intelligence and
              NovaTalk.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            {selectedCategory === "All" && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Featured Article
                </h2>
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden hover:shadow-3xl transition-shadow">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{featuredPost.views}</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors cursor-pointer">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {featuredPost.author}
                          </p>
                        </div>
                      </div>
                      <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Blog Posts Grid */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {selectedCategory === "All"
                  ? "Latest Articles"
                  : `${selectedCategory} Articles`}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group"
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="bg-gray-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-xs space-x-2">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center text-gray-500 text-xs space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors cursor-pointer line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {post.author}
                            </p>
                            <p className="text-xs text-gray-500">{post.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Bookmark className="w-4 h-4 text-gray-500" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Share className="w-4 h-4 text-gray-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-purple-100 mb-4">
                Get the latest AI insights and NovaTalk updates delivered to
                your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-xl text-gray-900 outline-none"
                />
                <button
                  onClick={handleSubscribe1}
                  className="w-full bg-white text-purple-600 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
                {subscribeMessage && (
                  <p className="text-green-600">{subscribeMessage}</p>
                )}
                <p className="text-sm text-gray-500 text-center">
                  We respect your privacy. Your information will never be
                  shared.
                </p>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-900">
                  Trending Topics
                </h3>
              </div>
              <div className="space-y-2">
                {trendingTopics.map((topic, index) => (
                  <button
                    key={index}
                    className="flex items-center space-x-2 w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Tag className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700 hover:text-purple-600">
                      {topic}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Popular This Week
              </h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <div key={index} className="flex space-x-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm line-clamp-2 hover:text-purple-600 cursor-pointer">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-gray-500 text-xs mt-1 space-x-2">
                        <span>{post.views}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
