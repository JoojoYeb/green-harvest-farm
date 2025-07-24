"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Play, BookOpen, Download, ExternalLink, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResourcesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const videoResources = [
    {
      title: "Sustainable Egg Production Techniques",
      description: "Learn the fundamentals of organic egg production and hen welfare management.",
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube ID
      duration: "15:30",
      category: "Egg Production",
    },
    {
      title: "Modern Poultry Housing Systems",
      description: "Explore different housing systems for layer birds and their impact on productivity.",
      videoId: "dQw4w9WgXcQ",
      duration: "22:45",
      category: "Poultry",
    },
    {
      title: "Aquaculture Water Quality Management",
      description: "Essential techniques for maintaining optimal water conditions in fish farming.",
      videoId: "dQw4w9WgXcQ",
      duration: "18:20",
      category: "Aquaculture",
    },
    {
      title: "Snail Farming: Getting Started",
      description: "Complete guide to setting up your first snail farming operation.",
      videoId: "dQw4w9WgXcQ",
      duration: "25:10",
      category: "Snail Farming",
    },
  ]

  const articles = [
    {
      title: "The Future of Sustainable Agriculture",
      description: "Exploring innovative farming techniques that protect the environment while maximizing yield.",
      url: "https://example.com/sustainable-agriculture",
      readTime: "8 min read",
      category: "Sustainability",
    },
    {
      title: "Organic Feed Formulation for Layer Birds",
      description: "Complete guide to creating nutritionally balanced organic feed for optimal egg production.",
      url: "https://example.com/organic-feed",
      readTime: "12 min read",
      category: "Nutrition",
    },
    {
      title: "Disease Prevention in Aquaculture",
      description: "Best practices for maintaining fish health and preventing common diseases in farm settings.",
      url: "https://example.com/fish-health",
      readTime: "10 min read",
      category: "Health Management",
    },
    {
      title: "Market Trends in Alternative Protein Sources",
      description: "Analysis of growing demand for snail farming and other alternative protein markets.",
      url: "https://example.com/protein-trends",
      readTime: "6 min read",
      category: "Market Analysis",
    },
  ]

  const downloadableResources = [
    {
      title: "Egg Production Startup Guide",
      description: "Comprehensive PDF guide covering everything from site selection to marketing your eggs.",
      fileSize: "2.5 MB",
      format: "PDF",
      category: "Egg Production",
    },
    {
      title: "Poultry Nutrition Calculator",
      description: "Excel spreadsheet for calculating optimal feed ratios and nutritional requirements.",
      fileSize: "1.2 MB",
      format: "Excel",
      category: "Nutrition",
    },
    {
      title: "Fish Farm Business Plan Template",
      description: "Professional business plan template specifically designed for aquaculture operations.",
      fileSize: "3.1 MB",
      format: "Word",
      category: "Business Planning",
    },
    {
      title: "Snail Farming Record Keeping Sheets",
      description: "Printable forms for tracking growth, feeding, and harvest records in snail farming.",
      fileSize: "800 KB",
      format: "PDF",
      category: "Record Keeping",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-green-700">
                🌱 GreenHarvest Farm
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/products"
                  className="text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Products
                </Link>
                <Link
                  href="/resources"
                  className="text-green-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Resources
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Button asChild variant="outline" className="mb-6 bg-transparent">
            <Link href="/">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
            </Link>
          </Button>

          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Learning <span className="text-yellow-600">Resources</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Expand your knowledge with our comprehensive collection of educational materials, tutorials, and guides
              covering all aspects of sustainable farming.
            </p>
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Video Tutorials</h2>
            <p className="text-lg text-gray-600">
              Watch our expert-led tutorials covering essential farming techniques and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoResources.map((video, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={`/placeholder.svg?height=200&width=400&query=farming tutorial ${video.category.toLowerCase()}`}
                      alt={video.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg">
                      <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                        <Play className="mr-2 w-5 h-5" />
                        Watch Now
                      </Button>
                    </div>
                    <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                      {video.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">{video.title}</h3>
                    <p className="text-gray-600 mb-4">{video.description}</p>
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm">
                        <Youtube className="mr-2 w-4 h-4" />
                        Watch on YouTube
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles & Guides */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Articles & Guides</h2>
            <p className="text-lg text-gray-600">In-depth articles and comprehensive guides from industry experts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <Card
                key={index}
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-green-800 group-hover:text-yellow-600 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-yellow-50 group-hover:border-yellow-400 bg-transparent"
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Downloadable Resources</h2>
            <p className="text-lg text-gray-600">
              Free templates, calculators, and guides to help you succeed in farming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadableResources.map((resource, index) => (
              <Card
                key={index}
                className={`group hover:shadow-lg transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                        <BookOpen className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                          {resource.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div>{resource.format}</div>
                      <div>{resource.fileSize}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-green-800 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>

                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Download className="mr-2 w-4 h-4" />
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Updated with New Resources</h2>
          <p className="text-xl text-green-100 mb-8">
            Subscribe to our newsletter and be the first to access new tutorials, guides, and farming insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🌱 GreenHarvest Farm</h3>
              <p className="text-green-200">Sustainable agriculture solutions for a better tomorrow.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-green-200 hover:text-yellow-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-green-200 hover:text-yellow-400 transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-green-200 hover:text-yellow-400 transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/products/eggs" className="text-green-200 hover:text-yellow-400 transition-colors">
                    Egg Production
                  </Link>
                </li>
                <li>
                  <Link href="/products/poultry" className="text-green-200 hover:text-yellow-400 transition-colors">
                    Layer Poultry
                  </Link>
                </li>
                <li>
                  <Link href="/products/fish" className="text-green-200 hover:text-yellow-400 transition-colors">
                    Fish Farming
                  </Link>
                </li>
                <li>
                  <Link href="/products/snails" className="text-green-200 hover:text-yellow-400 transition-colors">
                    Snail Farming
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <p className="text-green-200 mb-2">📧 info@greenharvest.com</p>
              <p className="text-green-200 mb-2">📞 +1 (555) 123-4567</p>
              <p className="text-green-200">📍 123 Farm Road, Green Valley</p>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center">
            <p className="text-green-200">© 2024 GreenHarvest Farm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
