import Image from "next/image";

export default function Ad({ size }: { size: "small" | "medium" | "large" }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/images/more.png" alt="" width={16} height={16} />
      </div>
      {/* BOTTOM  */}
      <div
        className={`flex flex-col mt-4 ${size === "small" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "small" ? "h-24" : size === "medium" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/27086364/pexels-photo-27086364.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/27086364/pexels-photo-27086364.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            width={24}
            height={24}
            className=" rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">BigChef Lounge</span>
        </div>
        <p className={size === "small" ? "text-xs" : "text-sm"}>
          {size === "small"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            : size === "medium"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit."
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
}
