"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Target, Eye, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
                  className="text-green-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
                  className="text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
              About <span className="text-yellow-600">GreenHarvest</span> Farm
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Pioneering sustainable agriculture since 1995, we're committed to providing the highest quality farming
              solutions while protecting our environment for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h2 className="text-3xl font-bold text-green-800 mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  <strong>Founded in 1995</strong> by the Johnson family, GreenHarvest Farm began as a small organic egg
                  production facility in the heart of Green Valley. What started with just 50 laying hens has grown into
                  a comprehensive agricultural operation spanning over 500 acres.
                </p>
                <p>
                  Our journey into sustainable farming began when we witnessed the environmental impact of conventional
                  agriculture. We made a commitment to develop farming practices that would not only produce
                  high-quality food but also regenerate the land and support local ecosystems.
                </p>
                <p>
                  Today, we're proud to be a leading example of how modern technology and traditional farming wisdom can
                  work together to create a more sustainable future. Our integrated approach includes egg production,
                  layer poultry, aquaculture, and innovative snail farming operations.
                </p>
                <p>
                  <strong>Our commitment extends beyond farming.</strong> We actively educate the next generation of
                  farmers through our resource programs and community outreach initiatives, sharing knowledge that helps
                  build a more sustainable agricultural industry.
                </p>
              </div>
            </div>
            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="bg-gradient-to-br from-green-100 to-yellow-100 p-8 rounded-lg">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="GreenHarvest Farm facilities"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-gray-600 text-center">
                  Our modern sustainable farming facilities in Green Valley
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Mission, Vision & Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <CardContent className="p-8 text-center">
                <div className="text-green-600 mb-4 flex justify-center">
                  <Target className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide sustainable, high-quality agricultural products while educating and empowering farmers to
                  adopt environmentally responsible practices that benefit both communities and ecosystems.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <CardContent className="p-8 text-center">
                <div className="text-yellow-600 mb-4 flex justify-center">
                  <Eye className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading example of regenerative agriculture, creating a world where farming enhances rather
                  than depletes natural resources, ensuring food security for future generations.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <CardContent className="p-8 text-center">
                <div className="text-green-600 mb-4 flex justify-center">
                  <Heart className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Values</h3>
                <ul className="text-gray-700 text-left space-y-2">
                  <li>
                    • <strong>Sustainability:</strong> Environmental stewardship in all practices
                  </li>
                  <li>
                    • <strong>Quality:</strong> Premium products through careful attention
                  </li>
                  <li>
                    • <strong>Innovation:</strong> Embracing technology for better outcomes
                  </li>
                  <li>
                    • <strong>Community:</strong> Supporting local farmers and education
                  </li>
                  <li>
                    • <strong>Integrity:</strong> Transparent and ethical business practices
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The passionate people behind GreenHarvest Farm's success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Founder & CEO", image: "professional woman farmer in green field" },
              { name: "Mike Chen", role: "Head of Aquaculture", image: "aquaculture specialist by fish ponds" },
              { name: "Emma Rodriguez", role: "Poultry Operations Manager", image: "poultry manager with chickens" },
              {
                name: "David Thompson",
                role: "Sustainability Director",
                image: "sustainability expert in farm setting",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className={`transition-all duration-1000 hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={`/placeholder.svg?height=200&width=200&query=${member.image}`}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{member.name}</h3>
                  <p className="text-yellow-600 font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Sustainable Farming Community</h2>
          <p className="text-xl text-green-100 mb-8">
            Whether you're a fellow farmer, a customer, or someone passionate about sustainable agriculture, we'd love
            to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-700 bg-transparent"
            >
              <Link href="/products">View Our Products</Link>
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
