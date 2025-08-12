import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, MapPin, DollarSign, Calendar, Filter, Play, Building } from "lucide-react"
import Link from "next/link"

const jobs = [
  {
    id: 1,
    title: "Film Director",
    company: "Nollywood Studios",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "$50,000 - $80,000",
    posted: "2 days ago",
    category: "Creative",
    experience: "5+ years",
    featured: true,
    description: "Lead creative vision for upcoming feature films and oversee all aspects of production.",
    requirements: ["5+ years directing experience", "Portfolio of completed films", "Strong leadership skills"],
    logo: "/placeholder.svg?height=60&width=60&text=NS",
  },
  {
    id: 2,
    title: "Cinematographer",
    company: "African Cinema Collective",
    location: "Cape Town, South Africa",
    type: "Contract",
    salary: "$40,000 - $60,000",
    posted: "1 week ago",
    category: "Technical",
    experience: "3+ years",
    featured: false,
    description: "Capture stunning visuals for documentary and narrative films across Africa.",
    requirements: ["Professional camera operation", "Lighting expertise", "Travel flexibility"],
    logo: "/placeholder.svg?height=60&width=60&text=ACC",
  },
  {
    id: 3,
    title: "Lead Actor",
    company: "Mbogiwood Productions",
    location: "Nairobi, Kenya",
    type: "Project-based",
    salary: "$25,000 - $40,000",
    posted: "3 days ago",
    category: "Performance",
    experience: "2+ years",
    featured: true,
    description: "Star in upcoming romantic drama set in contemporary Nairobi.",
    requirements: ["Acting experience", "Fluent in English and Swahili", "Available for 3-month shoot"],
    logo: "/placeholder.svg?height=60&width=60&text=MP",
  },
  {
    id: 4,
    title: "Film Producer",
    company: "Sahara Entertainment",
    location: "Accra, Ghana",
    type: "Full-time",
    salary: "$45,000 - $70,000",
    posted: "5 days ago",
    category: "Business",
    experience: "4+ years",
    featured: false,
    description: "Manage film production from development through distribution.",
    requirements: ["Production management experience", "Budget management", "Industry connections"],
    logo: "/placeholder.svg?height=60&width=60&text=SE",
  },
  {
    id: 5,
    title: "Sound Engineer",
    company: "Audio Vision Studios",
    location: "Johannesburg, South Africa",
    type: "Full-time",
    salary: "$30,000 - $45,000",
    posted: "1 week ago",
    category: "Technical",
    experience: "2+ years",
    featured: false,
    description: "Handle audio recording, mixing, and post-production for film projects.",
    requirements: ["Pro Tools proficiency", "Studio experience", "Attention to detail"],
    logo: "/placeholder.svg?height=60&width=60&text=AVS",
  },
  {
    id: 6,
    title: "Script Writer",
    company: "Story Craft Media",
    location: "Remote",
    type: "Freelance",
    salary: "$20,000 - $35,000",
    posted: "4 days ago",
    category: "Creative",
    experience: "1+ years",
    featured: true,
    description: "Develop compelling screenplays for African-themed feature films.",
    requirements: ["Screenwriting experience", "Cultural knowledge", "Creative storytelling"],
    logo: "/placeholder.svg?height=60&width=60&text=SCM",
  },
]

const categories = ["All", "Creative", "Technical", "Performance", "Business"]
const jobTypes = ["All", "Full-time", "Contract", "Project-based", "Freelance"]
const locations = ["All", "Lagos, Nigeria", "Cape Town, South Africa", "Nairobi, Kenya", "Accra, Ghana", "Remote"]

export default function JobsPage() {
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
            <Link href="/jobs" className="text-[#4CAF50] font-semibold">
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
      <section className="bg-gradient-to-r from-[#3B2F2F] to-[#3B2F2F]/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Find Your Dream Job in <span className="text-[#4CAF50]">African Cinema</span>
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Connect with leading production companies, studios, and creative teams across Africa. Your next career
            opportunity in film and entertainment awaits.
          </p>

          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Search jobs, companies, or keywords..." className="pl-10 h-12 text-black border-0" />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Location" className="pl-10 h-12 w-full md:w-48 text-black border-0" />
            </div>
            <Button size="lg" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white h-12 px-8">
              Search Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#3B2F2F] mb-2">500+</div>
              <div className="text-gray-600">Active Jobs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#3B2F2F] mb-2">150+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#3B2F2F] mb-2">2,000+</div>
              <div className="text-gray-600">Professionals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#3B2F2F] mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-6 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filter by:</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-600">Category:</span>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    size="sm"
                    className={
                      category === "All"
                        ? "bg-[#4CAF50] hover:bg-[#4CAF50]/90"
                        : "border-gray-300 hover:border-[#4CAF50] hover:text-[#4CAF50] bg-transparent"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-600">Type:</span>
                {jobTypes.map((type) => (
                  <Button
                    key={type}
                    variant={type === "All" ? "default" : "outline"}
                    size="sm"
                    className={
                      type === "All"
                        ? "bg-[#4CAF50] hover:bg-[#4CAF50]/90"
                        : "border-gray-300 hover:border-[#4CAF50] hover:text-[#4CAF50] bg-transparent"
                    }
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#3B2F2F]">Latest Opportunities</h2>
            <div className="flex items-center space-x-2 text-gray-600">
              <span>Showing {jobs.length} jobs</span>
            </div>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <img
                          src={job.logo || "/placeholder.svg"}
                          alt={job.company}
                          className="w-12 h-12 object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-[#3B2F2F]">{job.title}</h3>
                          {job.featured && <Badge className="bg-[#D32F2F] text-white">Featured</Badge>}
                        </div>

                        <div className="flex items-center space-x-4 text-gray-600 mb-3">
                          <div className="flex items-center space-x-1">
                            <Building className="w-4 h-4" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{job.posted}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4">{job.description}</p>

                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            {job.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {job.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {job.experience}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end space-y-3 lg:min-w-[200px]">
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-[#4CAF50] font-semibold">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-300 hover:border-[#4CAF50] hover:text-[#4CAF50] bg-transparent"
                        >
                          View Details
                        </Button>
                        <Button size="sm" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white">
                          Apply Now
                        </Button>
                      </div>
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
              Load More Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#3B2F2F] mb-4">Featured Companies</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join leading production companies and studios shaping the future of African cinema
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Nollywood Studios",
                jobs: "12 open positions",
                logo: "/placeholder.svg?height=80&width=80&text=NS",
              },
              {
                name: "African Cinema Collective",
                jobs: "8 open positions",
                logo: "/placeholder.svg?height=80&width=80&text=ACC",
              },
              {
                name: "Sahara Entertainment",
                jobs: "15 open positions",
                logo: "/placeholder.svg?height=80&width=80&text=SE",
              },
              {
                name: "Story Craft Media",
                jobs: "6 open positions",
                logo: "/placeholder.svg?height=80&width=80&text=SCM",
              },
            ].map((company, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-[#3B2F2F] mb-2">{company.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{company.jobs}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white bg-transparent"
                  >
                    View Jobs
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#3B2F2F] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Launch Your Career?</h3>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of professionals building the future of African cinema. Create your profile and start
            applying today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white">
              Create Profile
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#3B2F2F] bg-transparent"
            >
              Post a Job
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
              <h5 className="font-semibold mb-4">For Employers</h5>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/post-job" className="hover:text-[#4CAF50]">
                    Post a Job
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-[#4CAF50]">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/employer-resources" className="hover:text-[#4CAF50]">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <p className="text-gray-300 mb-4">Stay updated with the latest opportunities</p>
              <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90">Subscribe to Jobs</Button>
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
