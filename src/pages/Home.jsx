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
            <div className="flex flex-row justify-between mt-20">
                <h1 className="px-16 py-8 space-x-2">
                    <span className="text-black font-bold text-2xl">Upcoming</span>
                    <span className="text-[#7848F4] font-bold text-2xl">Events</span>
                </h1>

                <div className="flex flex-row space-x-2 w-[40%]">
                    <div className="bg-[#687C940D] px-8 py-8 rounded-sm border-none">
                    <select name="day" id="day">
                        <option selected disabled>Weekday</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                    </select>
                </div>

                <div className="bg-[#687C940D] px-8 py-8">
                    <select name="event-type" id="event-type">
                        <option selected disabled>Event type</option>
                        <option value="drama">Drama</option>
                        <option value="tech">Tech</option>
                        <option value="Memorial">Memorial</option>
                    </select>
                </div>

                <div className="bg-[#687C940D] px-8 py-8">
                    <select name="category" id="catergory">
                        <option selected disabled>Any Category</option>
                        <option value="drama">Colorful</option>
                        <option value="tech">Happy</option>
                        <option value="Memorial">Sad</option>
                    </select>
                </div>
                </div>
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