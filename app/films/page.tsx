import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Play, Search, Star, Clock, Eye, Heart, Filter } from "lucide-react"
import Link from "next/link"

const films = [
  {
    id: 1,
    title: "The Journey Home",
    description: "A compelling drama about family, tradition, and finding one's place in the world.",
    duration: "2h 15m",
    rating: 4.8,
    views: "12.5K",
    price: "$4.99",
    category: "Drama",
    featured: true,
    thumbnail: "/placeholder.svg?height=300&width=400&text=The+Journey+Home",
  },
  {
    id: 2,
    title: "Lagos Nights",
    description: "A thrilling urban story set in the bustling streets of Lagos.",
    duration: "1h 45m",
    rating: 4.6,
    views: "8.2K",
    price: "$3.99",
    category: "Thriller",
    featured: false,
    thumbnail: "/placeholder.svg?height=300&width=400&text=Lagos+Nights",
  },
  {
    id: 3,
    title: "Ancestral Voices",
    description: "A documentary exploring African heritage and cultural traditions.",
    duration: "1h 30m",
    rating: 4.9,
    views: "15.1K",
    price: "Free",
    category: "Documentary",
    featured: true,
    thumbnail: "/placeholder.svg?height=300&width=400&text=Ancestral+Voices",
  },
  {
    id: 4,
    title: "The Entrepreneur",
    description: "An inspiring story of business success against all odds.",
    duration: "2h 5m",
    rating: 4.7,
    views: "9.8K",
    price: "$5.99",
    category: "Biography",
    featured: false,
    thumbnail: "/placeholder.svg?height=300&width=400&text=The+Entrepreneur",
  },
  {
    id: 5,
    title: "Village Tales",
    description: "A heartwarming comedy about life in rural Africa.",
    duration: "1h 55m",
    rating: 4.5,
    views: "6.7K",
    price: "$3.99",
    category: "Comedy",
    featured: false,
    thumbnail: "/placeholder.svg?height=300&width=400&text=Village+Tales",
  },
  {
    id: 6,
    title: "Rising Star",
    description: "The journey of a young musician chasing their dreams.",
    duration: "2h 20m",
    rating: 4.8,
    views: "11.3K",
    price: "$4.99",
    category: "Musical",
    featured: true,
    thumbnail: "/placeholder.svg?height=300&width=400&text=Rising+Star",
  },
]

const categories = ["All", "Drama", "Thriller", "Documentary", "Biography", "Comedy", "Musical"]

export default function FilmsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#3B2F2F] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center">
              <Play className="w-4 h-4 text-white" />
            </div>
            <Link href="/" className="text-2xl font-bold">
              Mbogiwood
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/films" className="text-[#4CAF50] font-semibold">
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

      {/* Hero Film Section */}
      <section className="relative bg-gradient-to-r from-[#3B2F2F] to-[#3B2F2F]/80 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#4CAF50] text-white mb-4">Featured Film</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">The Journey Home</h1>
              <p className="text-xl mb-6 text-gray-200">
                A compelling drama about family, tradition, and finding one's place in the world. Follow the emotional
                journey of a young woman returning to her roots.
              </p>

              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-[#FFB300]" />
                  <span className="font-semibold">4.8</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-5 h-5 text-gray-300" />
                  <span>2h 15m</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-5 h-5 text-gray-300" />
                  <span>12.5K views</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Now - $4.99
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#3B2F2F] bg-transparent"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Add to Watchlist
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Featured+Film+Poster"
                  alt="The Journey Home"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                  >
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Search films..." className="pl-10 border-gray-300 focus:border-[#4CAF50]" />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    size="sm"
                    className={
                      category === "All"
                        ? "bg-[#4CAF50] hover:bg-[#4CAF50]/90"
                        : "border-gray-300 hover:border-[#4CAF50] hover:text-[#4CAF50]"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Films Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#3B2F2F]">All Films</h2>
            <div className="flex items-center space-x-2 text-gray-600">
              <span>Showing {films.length} films</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {films.map((film) => (
              <Card key={film.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={film.thumbnail || "/placeholder.svg"}
                    alt={film.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>

                  {film.featured && <Badge className="absolute top-3 left-3 bg-[#D32F2F] text-white">Featured</Badge>}

                  <div className="absolute top-3 right-3">
                    <Badge
                      variant="secondary"
                      className={`${film.price === "Free" ? "bg-[#4CAF50] text-white" : "bg-black/50 text-white"}`}
                    >
                      {film.price}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {film.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-[#FFB300]" />
                      <span className="text-sm font-medium">{film.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-[#3B2F2F] mb-2">{film.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{film.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{film.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{film.views}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white" size="sm">
                      <Play className="w-4 h-4 mr-1" />
                      {film.price === "Free" ? "Watch Free" : `Watch - ${film.price}`}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 hover:border-[#4CAF50] hover:text-[#4CAF50] bg-transparent"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#3B2F2F] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Watching?</h3>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of viewers enjoying premium African cinema. Sign up today and get your first film free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#3B2F2F] bg-transparent"
            >
              Browse Free Films
            </Button>
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
              <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90">Subscribe</Button>
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
