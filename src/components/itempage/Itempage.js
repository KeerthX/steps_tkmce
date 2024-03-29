import { useParams } from "react-router-dom";
import { y2022, y2023, y2024 } from "../../data/eventlist";
import { Link } from "react-router-dom";

function Itempage() {
    const { slug } = useParams();
    const eventData2022 = y2022.find((event) => event.link === slug);
    const eventData2023 = y2023.find((event) => event.link === slug);
    const eventData2024 = y2024.find((event) => event.link === slug);

    let eventData = eventData2022 || eventData2023 || eventData2024;

    return (
        <div className="w-full  pt-20 p-2 font-poppins">
            <div className="border-4 border-[#0B0B51]   p-4  md:flex" >
                <div className="md:w-1/2 w-full flex items-center justify-center">
                    <img src={eventData.img} className="h-64 w-48 object-cover" alt="Event" />
                </div>
                <div className="flex-col pt-10 gap-10">
                    <h1 className="font-bold text-3xl">Event Name</h1>
                    <div  >

                        <h1>{eventData.name}</h1>
                    </div>
                    <div className="flex-col">
                        <h1 className="font-bold text-3xl">Description</h1>
                        <div  >

                            <h1>{eventData.desc}</h1>
                        </div>
                    </div>
                    {eventData.isRegistrationOpen? <div className="pt-5 flex justify-end"><Link to={eventData.form} ><button className="rounded-3xl bg-[#0B0B51] w-32 h-10">Register</button></Link></div>:<></>}
                </div>

            </div>

        </div>
    );
}

export default Itempage;
