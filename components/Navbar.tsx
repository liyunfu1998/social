import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-500">
          26x
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm">
        {/* LINKS */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/home.png"
              alt="HomePage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>HomePage</span>
          </Link>
          <Link href="/friends" className="flex items-center gap-2">
            <Image
              src="/images/friends.png"
              alt="FriendsPage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href="/stories" className="flex items-center gap-2">
            <Image
              src="/images/stories.png"
              alt="StoriesPage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        
        <MobileMenu />
      </div>
    </div>
  );
}
