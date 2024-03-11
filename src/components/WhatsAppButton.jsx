import { useEffect, useState } from "react";
import WhatsappImage from "../assets/images/WhatsApp.svg.webp"

const WhatsAppButton = () => {
  const phoneNumber = '+919319018881'; // Replace with your actual phone number

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const [showButton, setShowButton] = useState(false);



  const handleScroll = () => {
    setShowButton(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<>
{showButton && ( <div
      className="fixed bottom-10 left-4 p-1.5 bg-green-500 text-white rounded-full cursor-pointer"
      onClick={openWhatsApp}
    >
      {/* Replace 'path/to/whatsapp-icon.svg' with your actual icon path */}
      <img src={WhatsappImage} alt="WhatsApp Icon" className="w-10 h-10" />
    </div>)}

</>
  );
};

export default WhatsAppButton;
