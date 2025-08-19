import React from "react";
import Image from "next/image";

export default function SilentBruises() {
  // Asset paths (ensure these exist in /public or update accordingly)
  const LOGO_IMAGE = "/mbogiwood-logo.png"; // Save Image 2 as mbogiwood-logo.png in /public
  const HERO_IMAGE = LOGO_IMAGE;

  // Colors from your branding
  const burgundy = "#2B1617";
  const green = "#47AD3A";
  const yellow = "#FFB400";
  const red = "#ED2727";

  return (
    <main className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative" style={{ backgroundColor: burgundy }}>
        <div className="w-full h-[80vh] flex items-center justify-center">
          <Image
            src={HERO_IMAGE}
            alt="Mbogiwood Productions Logo"
            width={400}
            height={400}
            className="object-contain opacity-90"
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow">
            Silent Bruises
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6 text-white drop-shadow">
            A powerful story exposing the hidden scars of gender-based violence — and the courage to heal.
          </p>
          <a
            href="#watch"
            style={{ backgroundColor: red }}
            className="hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold"
          >
            Watch Trailer
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: burgundy }}>
            About the Campaign
          </h2>
          <p className="text-lg leading-relaxed">
            Silent Bruises is more than a film — it’s a movement to raise awareness, spark conversations, and demand action against gender-based violence. Through storytelling, community engagement, and advocacy, we aim to inspire real change.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section id="watch" className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: burgundy }}>
            Watch the Trailer
          </h2>
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe
              className="w-full h-[400px] rounded"
              src="https://www.youtube.com/embed/wpwIWSeU0A8?si=eb8dSscJNNF_YjkC"
              title="Silent Bruises Trailer"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <a
            href="#donate"
            style={{ backgroundColor: red }}
            className="hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold"
          >
            Join the Movement
          </a>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold" style={{ color: green }}>+500K</h3>
            <p>Viewers Reached</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold" style={{ color: yellow }}>+50</h3>
            <p>Communities Engaged</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold" style={{ color: red }}>+100</h3>
            <p>Advocacy Partners</p>
          </div>
        </div>
      </section>

      {/* Donation / Call to Action */}
      <section id="donate" style={{ backgroundColor: red }} className="text-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Be Part of the Change
          </h2>
          <p className="mb-6">
            Your support helps amplify voices, spread awareness, and protect lives. Together, we can end the silence.
          </p>
          <form className="grid gap-4 max-w-md mx-auto">
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
            <button
              className="bg-black hover:bg-gray-900 px-6 py-3 rounded-full font-semibold"
              type="submit"
            >
              Donate Now
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 text-sm flex flex-col items-center">
        <div className="mb-2">
          <Image
            src={LOGO_IMAGE}
            alt="Mbogiwood Productions Logo"
            width={120}
            height={60}
            className="object-contain"
          />
        </div>
        &copy; 2025 Silent Bruises Campaign – Powered by Mbogiwood Productions
      </footer>
    </main>
  );
}
