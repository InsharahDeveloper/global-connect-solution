import { Mail, Phone, Send, MessageCircle } from "lucide-react";
import "../../App.css";
import { useState } from "react";
import toast from "react-hot-toast";

function ContactForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // ✅ FIX 1: loading toast (missing in your code)
    const loadingToast = toast.loading("Sending Message...");

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: username,
          email,
          message,
        }),
      });

      const data = await res.json();

      // close loading toast
      toast.dismiss(loadingToast);

      if (!res.ok || !data.success) {
        throw new Error();
      }

      // ✅ SUCCESS TOAST (clean version)
      toast.success("Message Sent Successfully 🎉");

      // reset fields
      setUsername("");
      setEmail("");
      setMessage("");

    } catch (error) {
      toast.dismiss(loadingToast);

      // ❌ ERROR TOAST
      toast.error("Failed to Send Message ❌");
    }

    setLoading(false);
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-16 cs relative">

      {/* UI same as yours */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start cs-grid">

        {/* FORM */}
        <div className="rounded-2xl p-6 sm:p-8 ">
          <h3 className="text-2xl font-semibold orange mb-6 2xl:text-5xl">
            Send Message
          </h3>

          <form className="space-y-6 mt-10" onSubmit={handleSubmit}>

            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                required
                placeholder=" "
                className="peer w-full px-4 py-4 rounded-xl bg-transparent border border-gray-300 outline-none focus:border-orange-400"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="absolute left-4 top-5 text-gray-400 transition-all">
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                required
                placeholder=" "
                className="peer w-full px-4 py-4 rounded-xl bg-transparent border border-gray-300 outline-none focus:border-orange-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="absolute left-4 top-5 text-gray-400 transition-all">
                Email Address
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                rows="5"
                required
                placeholder=" "
                className="peer w-full px-4 py-4 rounded-xl bg-transparent border border-gray-300 outline-none resize-none focus:border-orange-400"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <label className="absolute left-4 top-5 text-gray-400 transition-all">
                Your Message
              </label>
            </div>

            {/* BUTTON */}
            <button
              className="w-full py-3 rounded-xl bg-orange-400 text-white font-semibold"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  Sending
                  <span className="animate-bounce">...</span>
                </span>
              ) : (
                "Submit Request"
              )}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default ContactForm;