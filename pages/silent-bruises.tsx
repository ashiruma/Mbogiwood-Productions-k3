import React from "react";
import Image from "next/image";
import Header from "../components/Header"; // Assuming you have a Header component
import Footer from "../components/Footer"; // Assuming you have a Footer component

export default function SilentBruises() {
  // Asset paths
  const LOGO_IMAGE = "/mbogiwood-logo.png";
  const HERO_BACKGROUND_IMAGE = "/silent-bruises-hero.jpg"; // A compelling background image

  // Brand colors from mbogiwood.vercel.app
  const brandYellow = "#FBBF24"; // The primary accent color from your site
  const darkBg = "#1A1A1A";
  const sectionBg = "#111111";
  const textColor = "#E5E7EB";

  return (
    <main className="bg-black font-['DM_Sans',_sans-serif] text-white">
      <Header /> {/* Your website's navigation bar */}

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[90vh] text-center px-4">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={HERO_BACKGROUND_IMAGE}
            alt="Silent Bruises Campaign Visual"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Silent Bruises</h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8 text-gray-300">
            A powerful story exposing the hidden scars of gender-based violence — and the courage to heal.
          </p>
          <a
            href="#watch"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-md font-bold text-lg transition-transform transform hover:scale-105"
          >
            Watch Trailer
          </a>
        </div>
      </section>

      {/* About Section */}
      <section style={{ backgroundColor: darkBg }} className="py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: brandYellow }}>
            About the Campaign
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: textColor }}>
            Silent Bruises is more than a film—it’s a movement to raise awareness, spark conversations, and demand action against gender-based violence. Through storytelling and advocacy, we aim to inspire real change.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section id="watch" style={{ backgroundColor: sectionBg }} className="py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ color: brandYellow }}>
            Watch the Trailer
          </h2>
          <div className="aspect-video mb-8 shadow-lg rounded-lg overflow-hidden border border-gray-700">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/wpwIWSeU0A8?si=eb8dSscJNNF_YjkC"
              title="Silent Bruises Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <a
            href="#donate"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-md font-bold text-lg transition-transform transform hover:scale-105"
          >
            Join the Movement
          </a>
        </div>
      </section>

      {/* Impact Section */}
      <section style={{ backgroundColor: darkBg }} className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-5xl font-bold" style={{ color: brandYellow }}>+500K</h3>
            <p className="text-lg mt-2" style={{ color: textColor }}>Viewers Reached</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold" style={{ color: brandYellow }}>+50</h3>
            <p className="text-lg mt-2" style={{ color: textColor }}>Communities Engaged</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold" style={{ color: brandYellow }}>+100</h3>
            <p className="text-lg mt-2" style={{ color: textColor }}>Advocacy Partners</p>
          </div>
        </div>
      </section>

      {/* Donation / Call to Action */}
      <section id="donate" style={{ backgroundColor: brandYellow }} className="text-black py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Be Part of the Change</h2>
          <p className="mb-8 text-lg">
            Your support helps amplify voices, spread awareness, and protect lives. Together, we can end the silence.
          </p>
          <form className="grid gap-5 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-md text-gray-900 bg-gray-100 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-4 rounded-md text-gray-900 bg-gray-100 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <button
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-transform transform hover:scale-105"
              type="submit"
            >
              Donate Now
            </button>
          </form>
        </div>
      </section>

      <Footer /> {/* Your website's footer */}
    </main>
  );
}
