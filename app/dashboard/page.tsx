import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, User, Heart, Clock, Star, Settings, LogOut, Film, Briefcase, ImageIcon } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
            <Link href="/gallery" className="hover:text-[#4CAF50] transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-[#4CAF50] transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="hidden md:block">John Doe</span>
            </div>
            <Button
              variant="outline"
              className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white bg-transparent"
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#3B2F2F] mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Continue watching your favorite films and discover new content.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center">
                  <Film className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#3B2F2F]">24</p>
                  <p className="text-gray-600 text-sm">Films Watched</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#FFB300] rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#3B2F2F]">12</p>
                  <p className="text-gray-600 text-sm">Favorites</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#D32F2F] rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#3B2F2F]">48h</p>
                  <p className="text-gray-600 text-sm">Watch Time</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#3B2F2F] rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#3B2F2F]">3</p>
                  <p className="text-gray-600 text-sm">Job Applications</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Continue Watching */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#3B2F2F]">Continue Watching</CardTitle>
                <CardDescription>Pick up where you left off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src="/placeholder.svg?height=80&width=120&text=Film+Thumbnail"
                      alt="The Journey Home"
                      className="w-20 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#3B2F2F]">The Journey Home</h4>
                      <p className="text-sm text-gray-600">45 minutes remaining</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-[#4CAF50] h-2 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    <Button size="sm" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src="/placeholder.svg?height=80&width=120&text=Film+Thumbnail"
                      alt="Lagos Nights"
                      className="w-20 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#3B2F2F]">Lagos Nights</h4>
                      <p className="text-sm text-gray-600">1 hour 20 minutes remaining</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-[#4CAF50] h-2 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                    </div>
                    <Button size="sm" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended for You */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-[#3B2F2F]">Recommended for You</CardTitle>
                <CardDescription>Based on your viewing history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src="/placeholder.svg?height=200&width=300&text=Recommended+Film"
                        alt="Ancestral Voices"
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <div className="mt-2">
                      <h4 className="font-semibold text-[#3B2F2F]">Ancestral Voices</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-[#FFB300]" />
                        <span>4.9</span>
                        <span>•</span>
                        <span>Documentary</span>
                      </div>
                    </div>
                  </div>

                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src="/placeholder.svg?height=200&width=300&text=Recommended+Film"
                        alt="Rising Star"
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <div className="mt-2">
                      <h4 className="font-semibold text-[#3B2F2F]">Rising Star</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-[#FFB300]" />
                        <span>4.8</span>
                        <span>•</span>
                        <span>Musical</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Account Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#3B2F2F]">Account Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Plan</span>
                    <Badge className="bg-[#4CAF50] text-white">Premium</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Next billing</span>
                    <span className="text-sm text-gray-600">Jan 15, 2025</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white bg-transparent"
                  >
                    Manage Subscription
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#3B2F2F]">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/films">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-gray-300 hover:border-[#4CAF50] hover:text-[#4CAF50] bg-transparent"
                    >
                      <Film className="w-4 h-4 mr-2" />
                      Browse Films
                    </Button>
                  </Link>
                  <Link href="/jobs">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-gray-300 hover:border-[#4CAF50] hover:text-[#4CAF50] bg-transparent"
                    >
                      <Briefcase className="w-4 h-4 mr-2" />
                      Find Jobs
                    </Button>
                  </Link>
                  <Link href="/gallery">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-gray-300 hover:border-[#4CAF50] hover:text-[#4CAF50] bg-transparent"
                    >
                      <ImageIcon className="w-4 h-4 mr-2" />
                      View Gallery
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-300 hover:border-[#D32F2F] hover:text-[#D32F2F] bg-transparent"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
