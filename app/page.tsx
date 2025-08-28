import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Users, Briefcase, ImageIcon, Mail, Star } from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    // Assuming a dark theme by default, but classes will adapt
    <div className="min-h-screen bg-secondary">
      {/* Navigation */}
      <nav className="bg-background text-foreground px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Play className="w-4 h-4 text-primary-foreground" />
            </div>
            <h1 className="font-heading text-2xl font-bold">Mbogiwood Productions</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/films" className="hover:text-primary transition-colors">
              Films
            </Link>
            <Link href="/jobs" className="hover:text-primary transition-colors">
              Jobs
            </Link>
            <Link href="/gallery" className="hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Sign Up</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-5xl font-bold mb-6 leading-tight">
                Welcome to <span className="text-accent">Mbogiwood Productions</span>
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/80">
                Your premier destination for African cinema, career opportunities, and creative content. Discover,
                stream, and connect with the vibrant world of African entertainment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Films
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-background"
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
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-4">What We Offer</h3>
            <p className="text-secondary-foreground max-w-2xl mx-auto">
              Discover the best of African cinema and entertainment industry opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground mb-2">Premium Films</h4>
                <p className="text-muted-foreground">Stream exclusive African films and documentaries</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-accent-foreground" />
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground mb-2">Career Hub</h4>
                <p className="text-muted-foreground">Find opportunities in film and entertainment</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="w-6 h-6 text-destructive-foreground" />
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground mb-2">Gallery</h4>
                <p className="text-muted-foreground">Explore behind-the-scenes content and stills</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-background" />
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground mb-2">Community</h4>
                <p className="text-muted-foreground">Connect with filmmakers and enthusiasts</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-4">Featured This Week</h3>
            <p className="text-muted-foreground">Don't miss these trending films and opportunities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-card text-card-foreground">
              <img src="/placeholder-137vc.png" alt="Featured Film" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 text-accent mr-1" />
                  <span className="text-sm text-muted-foreground">4.8 Rating</span>
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground mb-2">The Journey Home</h4>
                <p className="text-muted-foreground mb-4">A compelling drama about family and tradition</p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Watch Now</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-card text-card-foreground">
              <img src="/placeholder-yhrzq.png" alt="Job Opportunity" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Briefcase className="w-4 h-4 text-accent mr-1" />
                  <span className="text-sm text-muted-foreground">New Opportunity</span>
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground mb-2">Film Director</h4>
                <p className="text-muted-foreground mb-4">Lead creative vision for upcoming productions</p>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-card text-card-foreground">
              <img src="/behind-the-scenes-film-production.png" alt="Gallery Feature" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <ImageIcon className="w-4 h-4 text-accent mr-1" />
                  <span className="text-sm text-muted-foreground">New Gallery</span>
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground mb-2">Behind the Scenes</h4>
                <p className="text-muted-foreground mb-4">Exclusive production photos and moments</p>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  View Gallery
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background text-foreground py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-primary-foreground" />
                </div>
                <h4 className="font-heading text-xl font-bold">Mbogiwood</h4>
              </div>
              <p className="text-muted-foreground">Celebrating African cinema and connecting talent with opportunities.</p>
            </div>

            <div>
              <h5 className="font-heading font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/films" className="hover:text-primary">
                    Films
                  </Link>
                </li>
                <li>
                  <Link href="/jobs" className="hover:text-primary">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-primary">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-heading font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/help" className="hover:text-primary">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-heading font-semibold mb-4">Connect</h5>
              <p className="text-muted-foreground mb-4">Stay updated with the latest from Mbogiwood</p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Mbogiwood. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}