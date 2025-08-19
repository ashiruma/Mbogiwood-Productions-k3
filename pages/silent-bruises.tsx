import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Heart, Eye, Clock } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function SilentBruises() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
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
            <Link href="/films" className="text-[#4CAF50] font-semibold">Films</Link>
            <Link href="/jobs" className="hover:text-[#4CAF50] transition-colors">Jobs</Link>
            <Link href="/gallery" className="hover:text-[#4CAF50] transition-colors">Gallery</Link>
            <Link href="/contact" className="hover:text-[#4CAF50] transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#3B2F2F] to-[#3B2F2F]/80 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-[#4CAF50] text-white mb-4">Featured Campaign</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Silent Bruises</h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl mb-6 text-gray-200"
            >
              A movement to raise awareness and demand action against gender-based violence. Through storytelling, community engagement, and advocacy, we aim to inspire real change.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white shadow-lg flex items-center justify-center"
                asChild>
                <a href="#trailer">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Trailer
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#3B2F2F] bg-transparent flex items-center justify-center"
                asChild
              >
                <a href="#donate">
                  <Heart className="w-5 h-5 mr-2" />
                  Support the Campaign
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <Card className="overflow-hidden shadow-2xl group w-full max-w-lg">
              <img
                src="/mbogiwood-logo.png"
                alt="Silent Bruises Hero"
                className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs bg-black/20 text-white">
                    Social Impact
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4 text-[#FFB300]" />
                    <span className="text-sm font-medium">500K Reached</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#3B2F2F] mb-2">Silent Bruises</h3>
                <p className="text-gray-600 text-sm mb-4">Join the movement. Help break the silence.</p>
                <div className="flex items-center space-x-1 text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>Ongoing</span>
                </div>
                <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white w-full" size="sm" asChild>
                  <a href="#donate">Donate</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Trailer Section */}
      <section id="trailer" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold mb-6 text-[#3B2F2F]"
          >
            Watch the Trailer
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-video mb-6 mx-auto overflow-hidden rounded-lg shadow-lg"
            style={{ maxWidth: 720 }}
          >
            <iframe
              className="w-full h-[400px] rounded"
              src="https://www.youtube.com/embed/wpwIWSeU0A8?si=eb8dSscJNNF_YjkC"
              title="Silent Bruises Trailer"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </motion.div>
          <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white" asChild>
            <a href="#donate">Join the Movement</a>
          </Button>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-4xl font-bold text-[#4CAF50]">+500K</h3>
              <p className="text-gray-600">Viewers Reached</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-4xl font-bold text-[#FFB300]">+50</h3>
              <p className="text-gray-600">Communities Engaged</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-4xl font-bold text-[#D32F2F]">+100</h3>
              <p className="text-gray-600">Advocacy Partners</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation/CTA Section */}
      <section id="donate" className="py-16 bg-[#3B2F2F]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold mb-4"
          >
            Be Part of the Change
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-6"
          >
            Your support helps amplify voices, spread awareness, and protect lives. Together, we can end the silence.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid gap-4 max-w-md mx-auto"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded text-gray-800"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded text-gray-800"
              required
            />
            <Button
              className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 px-6 py-3 rounded-full font-semibold text-white"
              type="submit"
            >
              Donate Now
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3B2F2F] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-xl font-bold">Mbogiwood</h4>
            </div>
            <p className="text-gray-300">Silent Bruises Campaign. Powered by Mbogiwood Productions.</p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/films" className="hover:text-[#4CAF50]">Films</Link></li>
              <li><Link href="/jobs" className="hover:text-[#4CAF50]">Jobs</Link></li>
              <li><Link href="/gallery" className="hover:text-[#4CAF50]">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-[#4CAF50]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Support</h5>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/help" className="hover:text-[#4CAF50]">Help Center</Link></li>
              <li><Link href="/privacy" className="hover:text-[#4CAF50]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#4CAF50]">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Connect</h5>
            <p className="text-gray-300 mb-4">Stay updated with the latest from Mbogiwood</p>
            <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90">Subscribe</Button>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Mbogiwood. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
