import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Heart, Target, Eye } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
            <Link href="/gallery" className="hover:text-[#4CAF50] transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-[#4CAF50] transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button href="/signin" className="border border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white bg-transparent px-3 py-1 rounded transition-colors">
              Sign In
            </Button>
            <Button href="/signup" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white px-3 py-1 rounded transition-colors">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3B2F2F] to-[#3B2F2F]/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-[#4CAF50]">Mbogiwood</span>
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            We're passionate about celebrating and promoting African cinema, connecting talented professionals, and
            building a thriving ecosystem for the continent's film industry.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3B2F2F] mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To create a comprehensive platform that showcases the best of African cinema while connecting
                  filmmakers, actors, and industry professionals with opportunities across the continent.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#FFB300] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3B2F2F] mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become the leading digital hub for African cinema, fostering creativity, collaboration, and
                  cultural exchange while bringing African stories to global audiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3B2F2F] mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Authenticity, creativity, collaboration, and cultural pride drive everything we do. We believe in the
                  power of storytelling to unite and inspire communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3B2F2F] mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Since our launch, we've been proud to support the African film industry
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#4CAF50] mb-2">500+</div>
              <div className="text-gray-600">Films Featured</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4CAF50] mb-2">10K+</div>
              <div className="text-gray-600">Professionals Connected</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4CAF50] mb-2">50+</div>
              <div className="text-gray-600">Countries Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4CAF50] mb-2">1M+</div>
              <div className="text-gray-600">Hours Watched</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3B2F2F] mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Meet the passionate individuals behind Mbogiwood</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Amara Okafor",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=300&width=300&text=Amara+Okafor",
                bio: "Film producer with 15+ years experience in African cinema",
              },
              {
                name: "Kwame Asante",
                role: "Head of Content",
                image: "/placeholder.svg?height=300&width=300&text=Kwame+Asante",
                bio: "Award-winning director and curator of African film festivals",
              },
              {
                name: "Zara Hassan",
                role: "Head of Technology",
                image: "/placeholder.svg?height=300&width=300&text=Zara+Hassan",
                bio: "Tech entrepreneur passionate about digital media platforms",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-[#3B2F2F] mb-2">{member.name}</h3>
                  <p className="text-[#4CAF50] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#3B2F2F] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
          <p className="text-xl text-gray-200 mb-8">
            Be part of the movement celebrating and advancing African cinema. Whether you're a filmmaker, actor, or film
            enthusiast, there's a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/signup" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white px-5 py-3 rounded text-lg">
              Get Started
            </Button>
            <Button href="/about" className="border border-white text-white hover:bg-white hover:text-[#3B2F2F] px-5 py-3 rounded text-lg">
              Learn More
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
                  <Link href="/films" className="hover:text-[#4CAF50]">Films</Link>
                </li>
                <li>
                  <Link href="/jobs" className="hover:text-[#4CAF50]">Jobs</Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-[#4CAF50]">Gallery</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#4CAF50]">Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-[#4CAF50]">About Us</Link></li>
                <li><Link href="/privacy" className="hover:text-[#4CAF50]">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-[#4CAF50]">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <p className="text-gray-300 mb-4">Stay updated with the latest from Mbogiwood</p>
              <Button href="/subscribe" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white px-4 py-2 rounded">
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
  );
}