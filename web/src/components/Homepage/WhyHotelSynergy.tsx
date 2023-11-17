import InfoCard from "./InfoCard";
import { IoMdCloudDone } from "react-icons/io";
import { FaGlobe, FaUsers } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { MdInventory2 } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";

function WhyHotelSynergy() {
  return (
    <section className="flex flex-col items-center my-10">
      <h1 className="font-bold text-3xl">
        Why <span className="text-rose-800">Hotel Synergy</span>?
      </h1>
      <span className="text-slate-500">
        There are tons of software avilable for managing your bussiness but
        Hotel Synergy is different.
      </span>
      <div className="grid my-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-2">
        <InfoCard
          title="Cloud Backup"
          icon={<IoMdCloudDone />}
          info="We got your data safe anywhere & any time."
        />
        <InfoCard
          title="Free Website"
          icon={<FaGlobe />}
          info="Get a free website hosting for your hotel."
        />
        <InfoCard
          title="Online Booking"
          icon={<FaHotel />}
          info="Online Bookings services automatically integrated."
        />
        <InfoCard
          title="User Roles"
          icon={<FaUsers />}
          info="We got your data safe anywhere & any time."
        />
        <InfoCard
          title="Inventory Management"
          icon={<MdInventory2 />}
          info="Don't worry about your stocks or payments."
        />
        <InfoCard
          title="Integrated Payment"
          icon={<FaMoneyBillWave />}
          info="Receive payments from any provider."
        />
      </div>
    </section>
  );
}

export default WhyHotelSynergy;
