import { useState } from "react";
import { Star } from "lucide-react";

function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    feedback: "",
    rating: 0,
  });

  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://sheetdb.io/api/v1/4qgr5knb1i21b", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: form,
        }),
      });

      if (response.ok) {
        setPopup({
          show: true,
          message: "Feedback submitted successfully!",
          type: "success",
        });
        setForm({
          name: "",
          email: "",
          service: "",
          feedback: "",
          rating: 0,
        });
      } else {
        setPopup({
          show: true,
          message: "Something went wrong!",
          type: "error",
        });
      }
    } catch (error) {
      console.log(error);
      alert("Network Error");
    }

    setLoading(false);
  };
  return (
    <section className="py-16 px-6 lg:px-20 relative">
      <div className="glow absolute top-0 left-0 w-[300px] h-[300px] bg-orange-400/20 blur-[130px] rounded-full hidden sm:block"></div>
      <div className="glow absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-400/30 blur-[130px] rounded-full"></div>

      {popup.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full text-center shadow-xl animate-[zoomIn_.3s_ease]">

            <h2
              className={`text-2xl font-bold mb-3 ${popup.type === "success"
                ? "text-green-500"
                : "text-red-500"
                }`}
            >
              {popup.type === "success" ? "Success!" : "Oops!"}
            </h2>

            <p className="text-gray-700 mb-6">{popup.message}</p>

            <button
              onClick={() =>
                setPopup({ show: false, message: "", type: "" })
              }
              className="bg-orange-400 text-white px-6 py-2 rounded-xl hover:bg-orange-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start cs-grid">
        <div className="text-center lg:text-left  lg:h-full flex justify-center flex-col">

          <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-bold leading-tight">
            Drop <span className="orange">Your</span> Feedback
          </h2>

          <p data-aos="fade-right" className="text-gray-400 mt-4 text-lg">
            Got a minute? We’d love to hear what you think! Your feedback helps us make things better for you.
          </p>

        </div>

        {/* Right Side Form */}

        <div className="rounded-2xl p-0 sm:p-8">
          <h3 data-aos="fade-right" className="text-2xl font-semibold orange mb-6 2xl:text-5xl">
            Your Feedback
          </h3>

          <form data-aos="zoom-out-up" onSubmit={handleSubmit} className="space-y-6 mt-10">

            {/* Full Name */}
            <div className="relative">
              <input
                value={form.name}
                onChange={handleChange}
                name="name"
                type="text"
                required
                placeholder=" "
                className="peer w-full 2xl:text-2xl px-4 py-4 rounded-xl bg-transparent border border-gray-300 t-blue outline-none focus:border-orange-400"
              />

              <label className="absolute 2xl:top-8 2xl:text-2xl left-4 top-5 -translate-y-1/2 px-2 text-gray-400 transition-all duration-300 
      peer-focus:top-0 peer-focus:text-sm peer-focus:bg-orange-400 peer-focus:rounded-xl peer-focus:px-4 peer-focus:text-[#083055] peer-focus:py-1 peer-focus:bold peer-focus:2xl:text-xl 
      peer-valid:top-0 peer-valid:text-sm peer-valid:bg-orange-400 peer-valid:rounded-xl peer-valid:px-4 peer-valid:text-[#083055] peer-valid:py-1 peer-valid:bold peer-valid:2xl:text-xl ">
                Full Name
              </label>
            </div>
            {/* Email */}
            <div className="relative">
              <input
                value={form.email}
                onChange={handleChange}
                name="email"
                type="email"
                required
                placeholder=" "
                className="peer  2xl:text-2xl w-full px-4 py-4 rounded-xl bg-transparent border border-gray-300 t-blue outline-none focus:border-orange-400"
              />

              <label
                className="absolute left-4 top-5 2xl:top-8 2xl:text-2xl  -translate-y-1/2 px-2 text-gray-400 transition-all duration-300
      
    peer-focus:top-0 
    peer-focus:text-sm 
    peer-focus:bg-orange-400 
    peer-focus:rounded-xl 
    peer-focus:px-4 
    peer-focus:text-[#083055] 
    peer-focus:py-1
    peer-focus:2xl:text-xl

    peer-[&:not(:placeholder-shown)]:top-0
    peer-[&:not(:placeholder-shown)]:text-sm
    peer-[&:not(:placeholder-shown)]:bg-orange-400
    peer-[&:not(:placeholder-shown)]:rounded-xl
    peer-[&:not(:placeholder-shown)]:px-4
    peer-[&:not(:placeholder-shown)]:text-[#083055]
    peer-[&:not(:placeholder-shown)]:py-1
    peer-[&:not(:placeholder-shown)]:2xl:text-xl"
              >
                Email Address
              </label>
            </div>
            {/* {Service Name} */}
            <div className="relative">
              <input
                value={form.service}
                onChange={handleChange}
                name="service"
                type="text"
                required
                placeholder=" "
                className="peer w-full 2xl:text-2xl px-4 py-4 rounded-xl bg-transparent border border-gray-300 t-blue outline-none focus:border-orange-400"
              />

              <label className="absolute 2xl:top-8 2xl:text-2xl left-4 top-5 -translate-y-1/2 px-2 text-gray-400 transition-all duration-300 
      peer-focus:top-0 peer-focus:text-sm peer-focus:bg-orange-400 peer-focus:rounded-xl peer-focus:px-4 peer-focus:text-[#083055] peer-focus:py-1 peer-focus:bold peer-focus:2xl:text-xl 
      peer-valid:top-0 peer-valid:text-sm peer-valid:bg-orange-400 peer-valid:rounded-xl peer-valid:px-4 peer-valid:text-[#083055] peer-valid:py-1 peer-valid:bold peer-valid:2xl:text-xl ">
                Service Name
              </label>
            </div>
            {/* Feedback */}
            <div className="relative">
              <textarea
                value={form.feedback}
                onChange={handleChange}
                name="feedback"
                rows="5"
                required
                placeholder=" "
                className="peer 2xl:text-2xl w-full px-4 py-4 rounded-xl bg-transparent border border-gray-300 t-blue outline-none resize-none focus:border-orange-400"
              ></textarea>

              <label className="absolute 2xl:top-8 2xl:text-2xl left-4 top-5 -translate-y-1/2 px-2 text-gray-400 transition-all duration-300 
      peer-focus:top-0 peer-focus:text-sm peer-focus:bg-orange-400 peer-focus:rounded-xl peer-focus:px-4 peer-focus:text-[#083055] peer-focus:py-1 peer-focus:bold peer-focus:2xl:text-xl
      peer-valid:top-0 peer-valid:text-sm peer-valid:bg-orange-400 peer-valid:rounded-xl peer-valid:px-4 peer-valid:text-[#083055] peer-valid:py-1 peer-valid:bold peer-valid:2xl:text-xl">
                Your Feedback
              </label>
            </div>
            <div className="space-y-2">
              <p className="font-medium">Rate Our Service</p>

              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() =>
                      setForm({ ...form, rating: star })
                    }
                    className="transition hover:scale-110"
                  >
                    <Star
                      size={30}
                      className={`${star <= form.rating
                          ? "fill-orange-400 text-orange-400"
                          : "text-gray-400"
                        }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="chat-btn relative  overflow-hidden rounded-xl hover:text-[#eff6ff] cursor-pointer">
              <button
                className="w-full py-3 rounded-xl bg-orange-400 transition font-semibold"
                type="submit"
                disabled={loading}
              >
                <span className="relative">{loading ? "Submitting..." : "Submit"}</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
export default FeedbackForm;