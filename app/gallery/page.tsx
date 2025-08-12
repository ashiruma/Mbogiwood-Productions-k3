"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Grid3X3, Grid2X2, Heart, Download, Share2, Play, Eye, Calendar } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const galleryItems = [
  {
    id: 1,
    title: "The Journey Home - Behind the Scenes",
    category: "Behind the Scenes",
    film: "The Journey Home",
    photographer: "Sarah Okafor",
    date: "2024-01-15",
    likes: 245,
    views: 1200,
    featured: true,
    image: "/placeholder.svg?height=400&width=600&text=Behind+the+Scenes+1",
  },
  {
    id: 2,
    title: "Lagos Nights - Film Still",
    category: "Film Stills",
    film: "Lagos Nights",
    photographer: "Michael Adebayo",
    date: "2024-01-10",
    likes: 189,
    views: 890,
    featured: false,
    image: "/placeholder.svg?height=400&width=600&text=Film+Still+1",
  },
  {
    id: 3,
    title: "Ancestral Voices - Documentary Shot",
    category: "Documentary",
    film: "Ancestral Voices",
    photographer: "Amina Hassan",
    date: "2024-01-08",
    likes: 312,
    views: 1500,
    featured: true,
    image: "/placeholder.svg?height=400&width=600&text=Documentary+1",
  },
  {
    id: 4,
    title: "Film Festival Red Carpet",
    category: "Events",
    film: "Various",
    photographer: "David Mensah",
    date: "2024-01-05",
    likes: 156,
    views: 750,
    featured: false,
    image: "/placeholder.svg?height=400&width=600&text=Event+1",
  },
  {
    id: 5,
    title: "Director Portrait Session",
    category: "Portraits",
    film: "The Entrepreneur",
    photographer: "Grace Mwangi",
    date: "2024-01-03",
    likes: 203,
    views: 980,
    featured: false,
    image: "/placeholder.svg?height=400&width=600&text=Portrait+1",
  },
  {
    id: 6,
    title: "Village Tales - Production Still",
    category: "Film Stills",
    film: "Village Tales",
    photographer: "John Osei",
    date: "2023-12-28",
    likes: 178,
    views: 820,
    featured: true,
    image: "/placeholder.svg?height=400&width=600&text=Film+Still+2",
  },
  {
    id: 7,
    title: "Rising Star - Music Video BTS",
    category: "Behind the Scenes",
    film: "Rising Star",
    photographer: "Fatima Al-Rashid",
    date: "2023-12-25",
    likes: 267,
    views: 1100,
    featured: false,
    image: "/placeholder.svg?height=400&width=600&text=Behind+the+Scenes+2",
  },
  {
    id: 8,
    title: "Cinematography Workshop",
    category: "Events",
    film: "Workshop",
    photographer: "Samuel Kone",
    date: "2023-12-20",
    likes: 134,
    views: 650,
    featured: false,
    image: "/placeholder.svg?height=400&width=600&text=Event+2",
  },
  {
    id: 9,
    title: "Cast Ensemble Portrait",
    category: "Portraits",
    film: "The Journey Home",
    photographer: "Sarah Okafor",
    date: "2023-12-18",
    likes: 298,
    views: 1350,
    featured: true,
    image: "/placeholder.svg?height=400&width=600&text=Portrait+2",
  },
]

const categories = ["All", "Behind the Scenes", "Film Stills", "Documentary", "Events", "Portraits"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [gridSize, setGridSize] = useState("medium")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const getGridClasses = () => {
    switch (gridSize) {
      case "small":
        return "grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
      case "large":
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      default:
        return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    }
  }

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
            <Link href="/films" className="hover:text-[#4CAF50] transition-colors">
              Films
            </Link>
            <Link href="/jobs" className="hover:text-[#4CAF50] transition-colors">
              Jobs
            </Link>
            <Link href="/gallery" className="text-[#4CAF50] font-semibold">
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
      <section className="bg-gradient-to-r from-[#3B2F2F] to-[#3B2F2F]/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Visual Stories from <span className="text-[#4CAF50]">African Cinema</span>
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Explore behind-the-scenes moments, stunning film stills, and exclusive content from the vibrant world of
            African filmmaking.
          </p>

          <div className="flex justify-center">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Search gallery..." className="pl-10 h-12 text-black border-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-[#3B2F2F] mb-1">2,500+</div>
              <div className="text-gray-600 text-sm">Photos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#3B2F2F] mb-1">50+</div>
              <div className="text-gray-600 text-sm">Films Featured</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#3B2F2F] mb-1">25+</div>
              <div className="text-gray-600 text-sm">Photographers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#3B2F2F] mb-1">100K+</div>
              <div className="text-gray-600 text-sm">Total Views</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-6 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-700">Category:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "bg-[#4CAF50] hover:bg-[#4CAF50]/90"
                        : "border-gray-300 hover:border-[#4CAF50] hover:text-[#4CAF50] bg-transparent"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">View:</span>
              <Button
                variant={gridSize === "small" ? "default" : "outline"}
                size="sm"
                onClick={() => setGridSize("small")}
                className={
                  gridSize === "small"
                    ? "bg-[#4CAF50] hover:bg-[#4CAF50]/90"
                    : "border-gray-300 hover:border-[#4CAF50] hover:text-[#4CAF50] bg-transparent"
                }
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={gridSize === "medium" ? "default" : "outline"}
                size="sm"
                onClick={() => setGridSize("medium")}
                className={
                  gridSize === "medium"
                    ? "bg-[#4CAF50] hover:bg-[#4CAF50]/90"
                    : "border-gray-300 hover:border-[#4CAF50] hover:text-[#4CAF50] bg-transparent"
                }
              >
                <Grid2X2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#3B2F2F]">
              {selectedCategory === "All" ? "All Photos" : selectedCategory}
            </h2>
            <div className="text-gray-600">Showing {filteredItems.length} photos</div>
          </div>

          <div className={`grid gap-6 ${getGridClasses()}`}>
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3">
                    <Badge className={`${item.featured ? "bg-[#D32F2F]" : "bg-black/50"} text-white`}>
                      {item.featured ? "Featured" : item.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-[#3B2F2F] mb-2 line-clamp-1">{item.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>{item.film}</span>
                    <span>{item.photographer}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{item.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white bg-transparent"
            >
              Load More Photos
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              <Button
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                size="sm"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </Button>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#3B2F2F] mb-2">{selectedImage.title}</h3>
                  <div className="flex items-center space-x-4 text-gray-600 mb-2">
                    <span>Film: {selectedImage.film}</span>
                    <span>•</span>
                    <span>By {selectedImage.photographer}</span>
                    <span>•</span>
                    <span>{new Date(selectedImage.date).toLocaleDateString()}</span>
                  </div>
                  <Badge variant="outline">{selectedImage.category}</Badge>
                </div>

                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300 hover:border-[#4CAF50] hover:text-[#4CAF50] bg-transparent"
                  >
                    <Heart className="w-4 h-4 mr-1" />
                    {selectedImage.likes}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300 hover:border-[#4CAF50] hover:text-[#4CAF50] bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300 hover:border-[#4CAF50] hover:text-[#4CAF50] bg-transparent"
                  >
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{selectedImage.views} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>{selectedImage.likes} likes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-[#3B2F2F] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Share Your Visual Stories</h3>
          <p className="text-xl text-gray-200 mb-8">
            Are you a photographer or filmmaker? Submit your work to be featured in our gallery and showcase the beauty
            of African cinema to the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white">
              Submit Your Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#3B2F2F] bg-transparent"
            >
              Photographer Guidelines
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
              <h5 className="font-semibold mb-4">Gallery</h5>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/gallery?category=behind-the-scenes" className="hover:text-[#4CAF50]">
                    Behind the Scenes
                  </Link>
                </li>
                <li>
                  <Link href="/gallery?category=film-stills" className="hover:text-[#4CAF50]">
                    Film Stills
                  </Link>
                </li>
                <li>
                  <Link href="/gallery?category=events" className="hover:text-[#4CAF50]">
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <p className="text-gray-300 mb-4">Follow us for the latest visual stories</p>
              <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90">Follow Gallery</Button>
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
