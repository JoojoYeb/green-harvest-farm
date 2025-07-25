"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

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
                  className="text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Resources
                </Link>
                <Link
                  href="/contact"
                  className="text-green-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
              Contact <span className="text-yellow-600">Us</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Get in touch with our team of agricultural experts. We're here to help you with all your farming needs and
              answer any questions you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h2 className="text-3xl font-bold text-green-800 mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-800">Phone</h3>
                        <p className="text-gray-600">+233(0)50 4600477</p>
                        <p className="text-sm text-gray-500">Mon-Fri 8AM-6PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-yellow-500">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-yellow-100 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-800">Email</h3>
                        <p className="text-gray-600">ghlexo@gmail.com</p>
                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-800">Address</h3>
                        <p className="text-gray-600">Nsawam Road</p>
                        <p className="text-gray-600">Nsawam, Eastern Region</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-400 bg-transparent">
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-400 bg-transparent">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-pink-50 hover:border-pink-400 bg-transparent">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-400 bg-transparent">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-800">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="focus:ring-green-500 focus:border-green-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="focus:ring-green-500 focus:border-green-500"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="focus:ring-green-500 focus:border-green-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="focus:ring-green-500 focus:border-green-500"
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="focus:ring-green-500 focus:border-green-500"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700">
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Visit Our Farm</h2>
            <p className="text-lg text-gray-600">Come see our sustainable farming practices in action</p>
          </div>

          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div className="h-96 bg-gradient-to-br from-green-200 to-yellow-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">GreenHarvest Farm Location</h3>
                <p className="text-gray-600 mb-4">123 Farm Road, Green Valley, CA 95945</p>
                <Button className="bg-green-600 hover:bg-green-700">Get Directions</Button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-green-800 mb-2">Farm Tours</h3>
                <p className="text-gray-600 text-sm">
                  Schedule a guided tour of our facilities. Available weekdays 9AM-4PM.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-green-800 mb-2">Farm Store</h3>
                <p className="text-gray-600 text-sm">
                  Visit our on-site store for fresh eggs, produce, and farming supplies.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-green-800 mb-2">Workshops</h3>
                <p className="text-gray-600 text-sm">
                  Join our educational workshops on sustainable farming techniques.
                </p>
              </CardContent>
            </Card>
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
