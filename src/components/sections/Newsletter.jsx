import { useState } from "react";
import "../../App.css"

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData();
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    formData.append("email", email);
    formData.append("subject", "New Newsletter Subscription");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="w-full newsletter py-24 px-6 md:px-20 relative overflow-hidden">

      {/* Background Glow */}
      <div className="glow absolute top-0 left-0 w-72 h-72 bg-[#f49e58] opacity-20 blur-3xl rounded-full"></div>
      <div className="glow absolute bottom-0 right-0 w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>

      {/* Grid Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">

          <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-bold leading-tight">
            Stay <span className="orange">Updated</span> With Our Newsletter
          </h2>

          <p data-aos="fade-right" className="text-gray-400 mt-4 text-lg">
            Get the latest updates, features, and insights directly in your inbox.
          </p>

          {/* Features */}
          <div className="mt-8 space-y-3 text-gray-400">
            <p data-aos="fade-right">✔ Weekly product updates</p>
            <p data-aos="fade-right">✔ New feature announcements</p>
            <p data-aos="fade-right">✔ Exclusive tips & resources</p>
          </div>

          <p data-aos="zoom-in" className="mt-6 text-sm text-gray-400">
            No spam. Unsubscribe anytime.
          </p>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex justify-center">

          <form
          data-aos="fade-right"
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 space-y-5"
          >

            {/* Title */}
            <h3 className="text-2xl font-bold text-center">
              Subscribe Now
            </h3>

            {/* Email Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-blue/50 placeholder-gray-300 outline-none focus:border-[#f49e58] focus:ring-2 focus:ring-[#f49e58]/40 transition"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full relative py-3 overflow-hidden rounded-xl bg-orange-400 text-white font-bold transition duration-300"
            >
              <div className="relative z-1">{status === "loading" ? "Subscribing..." : "Subscribe"}</div>
            </button>

            {/* Messages */}
            {status === "success" && (
              <p className="text-green-400 text-center">
                🎉 Subscribed successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-center">
                ❌ Something went wrong. Try again.
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;