import Link from "next/link";
import Image from "next/image";

export default function Birthdays() {
  return <div className="p-4 bg-white rounded-lg shadow-md text-sm flex-col gap-4">
    <div className="flex justify-between items-center font-medium">
      <span className="text-gray-500">Birthday</span>
      <Link href='/' className="text-blue-500">See All</Link>
    </div>
    {/* USER */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image src="https://images.pexels.com/photos/27351031/pexels-photo-27351031.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
        <span className="font-medium">Christina Christiansen</span>
      </div>
      <div className="flex gap-3 justify-end">
        <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">Celebrate</button>
      </div>
    </div>
    {/* UPCOMING */}
    <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
      <Image src='/images/gift.png' alt="" width={24} height={24} className="w-6 h-6 rounded-full object-cover" />
      <Link href='' className="flex flex-col gap-1 text-xs">
        <span className="text-gray-700 font-semibold">
          Upcoming Birthday

        </span>
        <span className="text-gray-500">See other 16 have upcoming birthdays</span>
      </Link>
    </div>
  </div>;
}