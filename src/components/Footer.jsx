import { Linkedin, Instagram, Facebook } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-navy-blue text-white">
      <h1 className="text-center space-x-1 py-4">
        <span className=" text-white font-bold text-2xl">Event</span>
        <span className="text-[#7848F4] font-bold text-2xl">Hive</span>
      </h1>
      <form className=" text-center space-x-1">
        <input type="email" placeholder="Enter your mail" name="email" className="bg-white rounded-sm py-1 px-3 text-black " />
        <button type="Submit" className="bg-[#7848F4] rounded-sm px-3 py-1">Subscribe</button>
      </form>
      <div className="text-center space-x-6 py-8 px-4">
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Get in touch</span>
        <span>FAQs</span>
      </div>
      <hr className="m-5" />
      <div className="flex flex-row place-content-between py-4 m-5">
        <div className="space-x-4 ">
          <button className="hover:bg-[#7848F4] hover:rounded-sm hover:px-2 hover:py-1">English</button>
          <button className="hover:bg-[#7848F4] hover:rounded-sm hover:px-2 hover:py-1">French</button>
          <button className="hover:bg-[#7848F4] hover:rounded-sm hover:px-2 hover:py-1">Hindi</button>
        </div>

        <div className="flex flex-row space-x-3 pl-30 space-y-3">
          <Linkedin />
          <Instagram />
          <Facebook />
        </div>
        
        <p>Non Copyrighted © 2025 Upload by EventHive</p>
      </div>
    </footer>
  );
}
export default Footer;
