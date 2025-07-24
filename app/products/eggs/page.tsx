"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Egg, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EggProductionPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const eggTypes = [
    {
      name: "Organic Free-Range",
      price: "$6.99/dozen",
      description: "Premium organic eggs from pasture-raised hens",
      features: ["Certified Organic", "Free-Range", "No Antibiotics", "Rich in Omega-3"],
    },
    {
      name: "Pasture-Raised",
      price: "$5.99/dozen",
      description: "Fresh eggs from hens with outdoor access",
      features: ["Pasture Access", "Natural Diet", "Hormone-Free", "Farm Fresh"],
    },
    {
      name: "Brown Eggs",
      price: "$4.99/dozen",
      description: "Traditional brown eggs from healthy hens",
      features: ["Brown Shell", "High Protein", "Fresh Daily", "Local Production"],
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
                  className="text-green-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
            <Link href="/products">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Products
            </Link>
          </Button>

          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center mb-6">
              <Egg className="w-12 h-12 text-yellow-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-green-800">
                Egg <span className="text-yellow-600">Production</span>
              </h1>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl">
              Premium organic eggs from our free-range hens, raised with the highest standards of animal welfare and
              sustainable farming practices.
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h2 className="text-3xl font-bold text-green-800 mb-6">Our Egg Production Process</h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  At GreenHarvest Farm, our egg production begins with the welfare of our hens. Our 2,000+ laying hens
                  roam freely across 50 acres of lush pastureland, enjoying a natural diet supplemented with organic,
                  locally-sourced feed.
                </p>
                <p>
                  <strong>Daily Collection:</strong> Our eggs are collected fresh daily, ensuring maximum freshness and
                  quality. Each egg is carefully inspected, cleaned, and graded according to strict quality standards.
                </p>
                <p>
                  <strong>Sustainable Practices:</strong> We use rotational grazing to maintain soil health, and our
                  hens help fertilize the land naturally. Solar panels power our facilities, making our operation
                  carbon-neutral.
                </p>
                <p>
                  <strong>Quality Assurance:</strong> Every batch is tested for freshness, and we maintain detailed
                  records of production dates, ensuring traceability from farm to table.
                </p>
              </div>
            </div>
            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Free-range hens in pasture"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Egg Varieties</h2>
            <p className="text-lg text-gray-600">
              Choose from our selection of premium eggs, each with unique characteristics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eggTypes.map((egg, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-yellow-100 p-4 rounded-full">
                      <Egg className="w-8 h-8 text-yellow-600" />
                    </div>
                  </div>
                  <CardTitle className="text-green-800">{egg.name}</CardTitle>
                  <div className="text-2xl font-bold text-yellow-600">{egg.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-center">{egg.description}</p>
                  <ul className="space-y-2">
                    {egg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">Order Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Why Choose Our Eggs?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🌱",
                title: "Organic Certified",
                description: "USDA certified organic with no synthetic pesticides or fertilizers",
              },
              {
                icon: "🐔",
                title: "Happy Hens",
                description: "Free-range hens with access to pasture and natural behaviors",
              },
              {
                icon: "💪",
                title: "Nutrient Rich",
                description: "Higher omega-3, vitamin E, and beta-carotene than conventional eggs",
              },
              {
                icon: "🌍",
                title: "Sustainable",
                description: "Carbon-neutral production with renewable energy and regenerative practices",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Order Fresh Eggs?</h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today to place your order or visit our farm store for the freshest eggs available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              <Link href="/contact">Place Order</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-700 bg-transparent"
            >
              <Link href="/contact">Visit Farm Store</Link>
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
