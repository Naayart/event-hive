import { Linkedin, Instagram, Facebook } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-navy-blue text-white">
      <h1 className="text-center space-x-1 py-4">
        <span className=" text-white font-bold text-2xl">Event</span>
        <span className="text-[#7848F4] font-bold text-2xl">Hive</span>
      </h1>
      <form className=" text-center space-x-1">
        <input type="email" placeholder="Enter your mail" name="email" className="bg-white text-black rounded-sm py-1" />
        <button type="Submit" className="bg-[#7848F4] rounded-sm px-2 py-1">Subscribe</button>
      </form>
      <div className="text-center space-x-6 py-8">
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Get in touch</span>
        <span>FAQs</span>
      </div>
      <hr />
      <div className="flex flex-row place-content-between">
        <div className="space-x-1">
          <button>English</button>
          <button>French</button>
          <button>Hindi</button>
        </div>
        <div className="flex flex-row space-x-4">
          <Linkedin />
          <Instagram />
          <Facebook />
        </div>
        <p>Non Copyrighted© 2025 Upload by EventHive</p>
      </div>
    </footer>
  );
}
export default Footer;
