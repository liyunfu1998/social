import Image from "next/image"
import Link from "next/link"

export default function UserInfoCard({userId}: {userId?: string}){
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex-col gap-4">
    {/* TOP */}
    <div className="flex justify-between items-center font-medium">
      <span className="text-gray-500">User Information</span>
      <Link href='/' className="text-blue-500 text-xs">See All</Link>
    </div>
    {/* BOTTOM */}
    <div className="flex flex-col gap-4 text-gray-500">
      <div className="flex items-center gap-2">
      <span className="text-xl text-black">Ora Kilback</span>
      <span className="text-sm">Gina Collier IV</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam modi repudiandae repellat laborum autem ex neque, consequatur voluptatem exercitationem beatae, nemo asperiores aut? Cumque ab laudantium doloremque asperiores fugiat! Hic?
      </p>
      <div className="flex items-center gap-2">
        <Image src='/images/map.png' alt="" width={16} height={16} />
        <span>Living in <b>Denver</b></span>
      </div>
      <div className="flex items-center gap-2">
        <Image src='/images/school.png' alt="" width={16} height={16} />
        <span>Went to <b>Edger High School</b></span>
      </div>
      <div className="flex items-center gap-2">
        <Image src='/images/work.png' alt="" width={16} height={16} />
        <span>Works at <b>Apple Inc.</b></span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1 items-center">
          <Image src='/images/link.png' alt="" width={16} height={16} />
          <Link href='https://liyunfu.tech' className="text-blue-500 font-medium">liyunfu.tech</Link>
        </div>
        <div className="flex gap-1 items-center">
          <Image src='/images/date.png' alt="" width={16} height={16} />
          <span>Joined November 2024</span>
        </div>
      </div>
      <button className="bg-blue-500 text-white text-sm rounded-md p-2">Follow</button>
      <span className="text-red-400 self-end text-xs cursor-pointer">Block User</span>
    </div>
    </div>
  )
}