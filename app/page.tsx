import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Users, Briefcase, ImageIcon, Mail, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#3B2F2F] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center">
              <Play className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-2xl font-bold">Mbogiwood</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/films" className="hover:text-[#4CAF50] transition-colors">
              Films
            </Link>
            <Link href="/jobs" className="hover:text-[#4CAF50] transition-colors">
              Jobs
            </Link>
            <Link href="/gallery" className="hover:text-[#4CAF50] transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-[#4CAF50] transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white bg-transparent"
            >
              Sign In
            </Button>
            <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white">Sign Up</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#3B2F2F] to-[#3B2F2F]/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Welcome to <span className="text-[#4CAF50]">Mbogiwood</span>
              </h2>
              <p className="text-xl mb-8 text-gray-200">
                Your premier destination for African cinema, career opportunities, and creative content. Discover,
                stream, and connect with the vibrant world of African entertainment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Films
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#3B2F2F] bg-transparent"
                >
                  Explore Gallery
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/african-film-production.png" alt="Mbogiwood Film Production" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#3B2F2F] mb-4">What We Offer</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the best of African cinema and entertainment industry opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-[#3B2F2F] mb-2">Premium Films</h4>
                <p className="text-gray-600">Stream exclusive African films and documentaries</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#FFB300] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-[#3B2F2F] mb-2">Career Hub</h4>
                <p className="text-gray-600">Find opportunities in film and entertainment</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-[#3B2F2F] mb-2">Gallery</h4>
                <p className="text-gray-600">Explore behind-the-scenes content and stills</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#3B2F2F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-[#3B2F2F] mb-2">Community</h4>
                <p className="text-gray-600">Connect with filmmakers and enthusiasts</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#3B2F2F] mb-4">Featured This Week</h3>
            <p className="text-gray-600">Don't miss these trending films and opportunities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/placeholder-137vc.png" alt="Featured Film" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 text-[#FFB300] mr-1" />
                  <span className="text-sm text-gray-600">4.8 Rating</span>
                </div>
                <h4 className="text-xl font-semibold text-[#3B2F2F] mb-2">The Journey Home</h4>
                <p className="text-gray-600 mb-4">A compelling drama about family and tradition</p>
                <Button className="w-full bg-[#4CAF50] hover:bg-[#4CAF50]/90">Watch Now</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/placeholder-yhrzq.png" alt="Job Opportunity" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Briefcase className="w-4 h-4 text-[#FFB300] mr-1" />
                  <span className="text-sm text-gray-600">New Opportunity</span>
                </div>
                <h4 className="text-xl font-semibold text-[#3B2F2F] mb-2">Film Director</h4>
                <p className="text-gray-600 mb-4">Lead creative vision for upcoming productions</p>
                <Button
                  variant="outline"
                  className="w-full border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white bg-transparent"
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/behind-the-scenes-film-production.png" alt="Gallery Feature" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <ImageIcon className="w-4 h-4 text-[#FFB300] mr-1" />
                  <span className="text-sm text-gray-600">New Gallery</span>
                </div>
                <h4 className="text-xl font-semibold text-[#3B2F2F] mb-2">Behind the Scenes</h4>
                <p className="text-gray-600 mb-4">Exclusive production photos and moments</p>
                <Button
                  variant="outline"
                  className="w-full border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white bg-transparent"
                >
                  View Gallery
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3B2F2F] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-xl font-bold">Mbogiwood</h4>
              </div>
              <p className="text-gray-300">Celebrating African cinema and connecting talent with opportunities.</p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/films" className="hover:text-[#4CAF50]">
                    Films
                  </Link>
                </li>
                <li>
                  <Link href="/jobs" className="hover:text-[#4CAF50]">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-[#4CAF50]">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#4CAF50]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/help" className="hover:text-[#4CAF50]">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#4CAF50]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#4CAF50]">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <p className="text-gray-300 mb-4">Stay updated with the latest from Mbogiwood</p>
              <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Mbogiwood. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
