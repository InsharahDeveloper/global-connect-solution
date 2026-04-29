import wa_logo from "../../assets/whatsapp_logo.png";

function WaMe() {
    return (
        <>
            <div className="fixed bottom-3 left-3 z-[100] ">
                <a href="https://wa.me/+923000584969" target="_blank" className="flex items-center gap-2">

                    {/* WhatsApp Icon */}
                    <div className="w-15 p-1 rounded-2xl bg-[#eff6ff] shadow-lg cursor-pointer hover:scale-110 transition">
                        <img src={wa_logo} alt="WhatsApp" />
                    </div>
                    {/* Pop Message */}
                    <div className="bg-white text-green-600 px-3 py-1 rounded-xl shadow-lg text-sm font-medium animate-bounce">
                        Start Chatting
                    </div>
                </a>

            </div>
        </>
    );
}

export default WaMe;