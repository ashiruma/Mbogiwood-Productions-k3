import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Shield, Eye, Lock, Users } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
          <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl mb-4 text-gray-200">Last updated: January 1, 2024</p>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[#3B2F2F]">
                  <Eye className="w-5 h-5" />
                  <span>Information We Collect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#3B2F2F] mb-2">Personal Information</h4>
                  <p className="text-gray-600">
                    We collect information you provide directly to us, such as when you create an account, make a
                    purchase, or contact us. This may include your name, email address, phone number, and payment
                    information.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#3B2F2F] mb-2">Usage Information</h4>
                  <p className="text-gray-600">
                    We automatically collect information about how you use our platform, including your viewing history,
                    search queries, and interaction with content.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#3B2F2F] mb-2">Device Information</h4>
                  <p className="text-gray-600">
                    We collect information about the device you use to access our platform, including device type,
                    operating system, browser type, and IP address.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[#3B2F2F]">
                  <Users className="w-5 h-5" />
                  <span>How We Use Your Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• Provide and maintain our services</li>
                  <li>• Process transactions and send related information</li>
                  <li>• Send you technical notices and support messages</li>
                  <li>• Respond to your comments and questions</li>
                  <li>• Personalize your experience and content recommendations</li>
                  <li>• Monitor and analyze usage patterns and trends</li>
                  <li>• Detect and prevent fraud and abuse</li>
                  <li>• Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[#3B2F2F]">
                  <Lock className="w-5 h-5" />
                  <span>Information Sharing</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except in the following circumstances:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• With service providers who assist us in operating our platform</li>
                  <li>• When required by law or to protect our rights</li>
                  <li>• In connection with a business transfer or acquisition</li>
                  <li>• With your explicit consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#3B2F2F]">Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no method of transmission over the internet
                  is 100% secure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#3B2F2F]">Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">You have the right to:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Access and update your personal information</li>
                  <li>• Delete your account and personal data</li>
                  <li>• Opt out of marketing communications</li>
                  <li>• Request a copy of your data</li>
                  <li>• Object to certain processing of your data</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#3B2F2F]">Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We use cookies and similar tracking technologies to enhance your experience, analyze usage, and
                  personalize content. You can control cookie settings through your browser preferences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#3B2F2F]">Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the
                  new policy on this page and updating the "Last updated" date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#3B2F2F]">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this privacy policy, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>Email: privacy@mbogiwood.com</p>
                  <p>Phone: +234 (0) 123 456 7890</p>
                  <p>Address: 123 Cinema Street, Lagos, Nigeria</p>
                </div>
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
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-gray-300">
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
                <li>
                  <Link href="/about" className="hover:text-[#4CAF50]">
                    About Us
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
