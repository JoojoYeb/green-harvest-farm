"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Egg, Fish, Shell, Feather, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProductsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const products = [
    {
      icon: <Egg className="w-8 h-8" />,
      title: "Egg Production",
      description: "Premium organic eggs from free-range hens",
      details:
        "Our egg production facility houses over 2,000 free-range hens in spacious, natural environments. We focus on hen welfare and sustainable practices to produce the highest quality organic eggs. Our eggs are rich in omega-3 fatty acids and have vibrant orange yolks, indicating superior nutrition.",
      features: [
        "Free-range, pasture-raised hens",
        "Organic feed with no antibiotics or hormones",
        "Fresh eggs collected daily",
        "Available in various sizes and packaging",
        "Omega-3 enriched varieties available",
      ],
      link: "/products/eggs",
      image: "organic free range chickens in green pasture with eggs",
    },
    {
      icon: <Feather className="w-8 h-8" />,
      title: "Layer Poultry",
      description: "High-quality layer birds and poultry farming solutions",
      details:
        "We specialize in breeding and raising premium layer birds with excellent egg-laying capacity. Our poultry operation includes modern housing systems, optimal nutrition programs, and comprehensive health management to ensure maximum productivity and bird welfare.",
      features: [
        "High-performance layer breeds",
        "Modern housing with climate control",
        "Comprehensive vaccination programs",
        "Nutritionally balanced feed programs",
        "Expert breeding and genetics",
      ],
      link: "/products/poultry",
      image: "modern poultry farm with layer chickens in clean facilities",
    },
    {
      icon: <Fish className="w-8 h-8" />,
      title: "Fish Farming",
      description: "Sustainable aquaculture with fresh, healthy fish",
      details:
        "Our aquaculture operation utilizes recirculating aquaculture systems (RAS) to produce fresh fish year-round. We focus on sustainable practices, water quality management, and optimal fish nutrition to deliver premium quality fish while minimizing environmental impact.",
      features: [
        "Recirculating aquaculture systems",
        "Multiple fish species available",
        "Sustainable water management",
        "Premium fish feed and nutrition",
        "Year-round production capability",
      ],
      link: "/products/fish",
      image: "modern fish farming facility with clean water tanks and healthy fish",
    },
    {
      icon: <Shell className="w-8 h-8" />,
      title: "Snail Farming",
      description: "Innovative snail farming with premium quality produce",
      details:
        "Our heliculture operation represents the cutting edge of snail farming technology. We maintain optimal growing conditions for various snail species, focusing on nutrition, habitat management, and sustainable harvesting practices to produce premium quality snails for culinary and cosmetic markets.",
      features: [
        "Climate-controlled growing environments",
        "Multiple snail species cultivation",
        "Organic feeding programs",
        "Sustainable harvesting methods",
        "Premium quality for gourmet markets",
      ],
      link: "/products/snails",
      image: "snail farming facility with controlled environment and healthy snails",
    },
  ]

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
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
            <Link href="/">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
            </Link>
          </Button>

          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Our <span className="text-yellow-600">Products</span> & Services
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Discover our comprehensive range of sustainable farming products and services, each designed with quality,
              sustainability, and innovation at its core.
            </p>
          </div>
        </div>
      </section>

      {/* Products Accordion */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {products.map((product, index) => (
              <Card
                key={index}
                className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${
                  activeAccordion === index ? "shadow-xl border-yellow-400" : "hover:shadow-lg"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-green-600">{product.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-green-800">{product.title}</h3>
                        <p className="text-gray-600">{product.description}</p>
                      </div>
                    </div>
                    <div className="text-yellow-600">{activeAccordion === index ? <ChevronUp /> : <ChevronDown />}</div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      activeAccordion === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 border-t border-gray-100">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <p className="text-gray-700 mb-6 leading-relaxed">{product.details}</p>

                          <h4 className="font-semibold text-green-800 mb-3">Key Features:</h4>
                          <ul className="space-y-2 mb-6">
                            {product.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <span className="text-yellow-600 mr-2">•</span>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <Button asChild className="bg-green-600 hover:bg-green-700">
                            <Link href={product.link}>Learn More About {product.title}</Link>
                          </Button>
                        </div>

                        <div className="flex items-center justify-center">
                          <img
                            src={`/placeholder.svg?height=300&width=400&query=${product.image}`}
                            alt={product.title}
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Explore Individual Products</h2>
            <p className="text-lg text-gray-600">
              Visit dedicated pages for detailed information about each product line
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-green-600 mb-4 flex justify-center group-hover:text-yellow-600 transition-colors">
                    {product.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 mb-3">{product.title}</h3>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-yellow-50 group-hover:border-yellow-400 bg-transparent"
                  >
                    <Link href={product.link}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-green-100 mb-8">
            Contact our team to discuss your agricultural needs and discover how our products can benefit your
            operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              <Link href="/contact">Get Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-700 bg-transparent"
            >
              <Link href="/resources">Learn More</Link>
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
