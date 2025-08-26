export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#3B2F2F]">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <p className="text-gray-600 mb-6">Send us a message and we’ll get back to you.</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Name</label>
            <input className="w-full border rounded px-3 py-2 mt-1" />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2 mt-1" />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Message</label>
            <textarea className="w-full border rounded px-3 py-2 mt-1 h-32" />
          </div>
          <div>
            <button type="button" className="bg-[#4CAF50] text-white px-4 py-2 rounded">Send Message</button>
          </div>
        </form>
      </main>
    </div>
  );
}
