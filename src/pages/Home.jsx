import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search } from "lucide-react";
import EventCard from "../components/EventCard";


export default function Home() {
    return (
       <>
        <Navbar />
        <section className="bg-[url('./assets/images/hero-bg.png')] h-[596px] bg-cover bg-no-repeat w-[95%] mx-auto relative">
            <h1 className="text-big-heading text-white w-[30%] mx-auto text-center pt-32 font-bold">MADE FOR THOSE WHO DO</h1>

            <form className="bg-navy-blue w-[90%] mx-auto py-6 px-10 flex flex-row justify-between rounded-md absolute -bottom-12 right-[5%]">
            <div className="flex flex-col w-[30%]">
                <label htmlFor="type" className="text-white text">Looking For</label>
                <select name="type" id="type" className="bg-white  p-2 rounded-md">
                    <option selected disabled>Choose event type</option>
                    <option value="drama">Drama</option>
                    <option value="tech">Tech</option>
                </select>
            </div>
            <div className="flex flex-col w-[30%]">
                <label htmlFor="type" className="text-white text">Location</label>
                <select name="location" id="location" className="bg-white  p-2 rounded-md">
                    <option selected disabled>Choose location</option>
                    <option value="accra">Accra</option>
                    <option value="kumasi">Kumasi</option>
                </select>
            </div>
            <div className="flex flex-col w-[30%]">
                <label htmlFor="type" className="text-white text">When</label>
                <input type="datetime-local" name="when" id="when" className="bg-white p-1.5 rounded-md"  />
                {/* <select name="type" id="type" className="bg-white  p-2 rounded-md">
                    <option selected disabled>Choose date and time</option>
                    <option value="drama">Drama</option>
                    <option value="tech">Tech</option>
                </select> */}
            </div>
            <div className="bg-primary text-white size-[60px] flex flex-row justify-center items-center rounded-md">
                <Search/>
            </div>
        </form>
        </section>
        <section>
            <div>
                <h1>
                    <span>Upcoming</span>
                    <span>Events</span>
                </h1>

                <label htmlFor=""></label>
            </div>

            <div className="grid grid-cols-3 gap-5 p-20">
                {[1,2,3,4,5,6].map(n => <EventCard key={n} />)}
            </div>
        </section>
        <section className="h-[500px]"></section>
        <Footer />
       </>
    );

}