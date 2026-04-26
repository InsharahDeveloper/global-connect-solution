import { useState } from "react";
import { Headphones, Globe, Server, Phone , PhoneCall , MonitorCloud} from "lucide-react";

function ServicesList() {
  const services = [
    {
      id: "gv_business",
      icon: Globe,
      title: "Google Voice (GV) Business",
      definition: ` Google Voice Business is a premium virtual phone number service designed for commercial and professional use. It's built for stability and can handle high volumes of calls, making it ideal for businesses, freelancers, and marketing campaigns.`,
      countries: [
        {
          name: "USA",
          price: "$50/monthly",
          warranty: "30 days replacement warrant. If any issue occurs we will resolve it or replace the account.",
          advantages: [
            "Supports 1-5 users.",
            "Unlimited inbound and outbound calling.",
          ],
          order_message: "Hello! I want to buy Business GV For USA"
        },
        {
          name: "UK",
          price: "$70/monthly",
          warranty: "30 days replacement warrant. If any issue occurs we will resolve it or replace the account.",
          advantages: [
            "Unlimited calling.",
            "Your choice of area code.",
            "Support for upto 4-5 users.",
          ],
          order_message: "Hello! I want to buy Business GV For UK"
        },
        {
          name: "Canada",
          price: "$60/monthly",
          warranty: "30 days replacement warrant. If any issue occurs we will resolve it or replace the account.",
          advantages: [
            "Unlimited calling.",
            "Your choice of area code.",
            "Support for upto 1-5 users.",
          ],
          order_message: "Hello! I want to buy Business GV For Canada"
        },
        {
          name: "Australia",
          price: "$120/monthly",
          warranty: "30 days replacement warrant. If any issue occurs we will resolve it or replace the account.",
          advantages: [
            "Unlimited calling.",
            "Your choice of area code.",
            "Support for upto 1-5 users.",
          ],
          order_message: "Hello! I want to buy Business GV For Australia"
        },
        {
          name: "Others",
          available_countries: ["Europe", "Ireland", "Spain", "Belgium", "Switzerland", "Denmark", "France", "Italy", "Netherlands", "Sweden"],
          price: "$100/monthly",
          warranty: "30 days replacement warrant. If any issue occurs we will resolve it or replace the account.",
          advantages: [
            "Unlimited calling.",
            "Support for upto 1-5 users.",
          ],
          order_message: "Hello! I want to buy Business GV for Europe."
        },
      ],
    },
    {
      id: "gv_personal",
      icon: Globe,
      title: "Google Voice Personal USA",
      definition: `Google Voice Personal is a virtual phone number service for individual, non-business use. It's a great low-cost option if you need a basic USA number.`,
      price: "$10 One time pay",
      warranty: "No Warranty after successfull login.",
      advantages: [
        "Genuine USA number for Calls , SMS Texts and online verification.",
        "Ready to use.",
      ],
      order_message: "Hello! I want to buy Google Voice Personal for USA."
    },
    {
      id: "w_num",
      icon: Phone,
      title: "Whatsapp Number",
      price: "$8 One time pay",
      warranty: "No Warranty after successfull login.",
      advantages: [
        "You get a secure number for your WhatsApp setup",
        "We have numbers available for over 180 countries.",
        "We can provide numbers in large quantities if needed.",
      ],
      order_message: "Hello! I want to buy Whatsapp number for -------- country."
    },
    {
      id: "Ooma",
      icon: Globe,
      title: "Ooma Software",
      definition : "Ooma is a cloud-based VoIP phone system software designed for businesses. It provides calling, messaging, virtual numbers, and team communication tools for modern companies.",
      position : "Out of Stock"
    },
    {
      id: "Ringcentral",
      icon: PhoneCall,
      title: "Ring Central",
      definition : "RingCentral is a cloud-based business communication platform that offers voice calls, video meetings, messaging, and contact center solutions for companies of all sizes.",
      position : "Out of Stock"
    },
    {
      id: "8X8",
      icon: Globe,
      title: "8X8",
      definition : "8x8 is a cloud-based business communication platform that provides voice calling, video meetings, messaging, and contact center solutions for companies worldwide.",
      position : "Out of Stock"
    },
    {
      id: "zoomphone",
      icon: Phone,
      title: "Zoom Phone",
      definition : "Zoom Phone is a cloud-based VoIP business phone system by Zoom that offers voice calling, SMS, call routing, and unified communication for modern businesses.",
      position : "Out of Stock"
    },
  ];

  // ✅ FIXED INITIAL STATE
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);

  const isGVBusiness = selectedService.id === "gv_business";
  const isOutOfStock = selectedService.position === "Out of Stock";
  const Icon = selectedService.icon;

  // ✅ SAFE ACTIVE DATA
  const activeData = isGVBusiness
    ? selectedService.countries?.[selectedCountryIndex]
    : selectedService;

  // change service
  const handleServiceClick = (service) => {
    setSelectedService(service);

    if (service.id === "gv_business") {
      setSelectedCountryIndex(0); // reset USA
    }
  };

  const handleOrderNow = () => {
    const phone = "923000584969"; // apna whatsapp number

    const message = activeData.order_message;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* LEFT SIDE */}
          <div className="bg-orange-400 rounded-2xl p-4 space-y-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className={`w-full text-start flex items-center gap-3 p-3 rounded-xl transition
                ${
                  selectedService.id === service.id
                    ? "bg-blue text-white"
                    : "hover:bg-blue text-white"
                }`}
              >
                <service.icon className="w-5 h-5" />
                <span>{service.title}</span>
              </button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-3 border rounded-2xl p-8">

            {/* TITLE */}
            <div className="flex items-center gap-3 mb-6">
              <Icon className="w-8 h-8 text-orange-500" />

              <h2 className="text-2xl font-bold">
                {isGVBusiness
                  ? `${selectedService.title} - ${activeData.name}`
                  : selectedService.title}
              </h2>
            </div>

            {/* DEFINITION */}
                <p className="mb-6">{selectedService.definition}</p>

            {/* OUT OF STOCK SECTION */}
            {isOutOfStock ? (
              <div className="text-center py-16">
                <h3 className="text-4xl font-bold text-red-500">
                  Out of Stock
                </h3>
                <p className="mt-3 text-gray-500">
                  This service is currently unavailable.
                </p>
              </div>
            ) : (
              <>
                

                {/* COUNTRY BUTTONS */}
                {isGVBusiness && (
                  <div className="flex gap-4 flex-wrap mb-6">
                    {selectedService.countries.map((c, i) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedCountryIndex(i)}
                        className={`px-4 py-1 rounded-full border
                        ${
                          selectedCountryIndex === i
                            ? "bg-orange-500 text-white scale-[1.2]"
                            : "bg-none"
                        }`}
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>
                )}

                {/* OTHERS COUNTRIES */}
                {activeData.name === "Others" &&
                  activeData.available_countries && (
                    <div className="mb-5">
                      <h4 className="font-semibold mb-2">
                        Available Countries:
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {activeData.available_countries.map((country, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 border rounded-full text-sm"
                          >
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                {/* DETAILS */}
                <p>
                  <span className="font-semibold">Price:</span>{" "}
                  {activeData.price}
                </p>

                <p>
                  <span className="font-semibold">Warranty:</span>{" "}
                  {activeData.warranty}
                </p>

                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Advantages:</h4>

                  <ul className="list-disc ml-5">
                    {activeData.advantages?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* ORDER BUTTON */}
                <div className="mt-6">
                  <button
                    onClick={handleOrderNow}
                    className="px-5 py-2 border rounded-full hover:bg-orange-500 hover:text-white transition"
                  >
                    Order Now
                  </button>
                </div>
              </>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

export default ServicesList;