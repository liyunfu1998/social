import Image from "next/image";
import Link from "next/link";

export default function FriendRequests() {
  return <div className="p-4 bg-white rounded-lg shadow-md text-sm flex-col gap-4">
    {/* TOP */}
    <div className="flex justify-between items-center font-medium">
      <span className="text-gray-500">Friend Requests</span>
      <Link href='/' className="text-blue-500">See All</Link>
    </div>
    {/* USER */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image src="https://images.pexels.com/photos/27351031/pexels-photo-27351031.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
        <span className="font-medium">Christina Christiansen</span>
      </div>
      <div className="flex gap-3 justify-end">
        <Image src='/images/accept.png' alt="" width={20} height={20} className="cursor-pointer" />
        <Image src='/images/reject.png' alt="" width={20} height={20} className="cursor-pointer" />
        
      </div>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image src="https://images.pexels.com/photos/27351031/pexels-photo-27351031.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
        <span className="font-medium">Christina Christiansen</span>
      </div>
      <div className="flex gap-3 justify-end">
        <Image src='/images/accept.png' alt="" width={20} height={20} className="cursor-pointer" />
        <Image src='/images/reject.png' alt="" width={20} height={20} className="cursor-pointer" />
        
      </div>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image src="https://images.pexels.com/photos/27351031/pexels-photo-27351031.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
        <span className="font-medium">Christina Christiansen</span>
      </div>
      <div className="flex gap-3 justify-end">
        <Image src='/images/accept.png' alt="" width={20} height={20} className="cursor-pointer" />
        <Image src='/images/reject.png' alt="" width={20} height={20} className="cursor-pointer" />
        
      </div>
    </div>
    {/* BOTTOM */}
    <div className=""></div>
  </div>;
}