import Image from "next/image";
import Comments from "./Comments";

export default function Post() {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/27817092/pexels-photo-27817092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-10 h-10 rounded-full"
            width={40}
            height={40}
          />
          <span className="font-medium">Jack McBride</span>
        </div>
        <Image src="/images/more.png" alt="" width={16} height={16} />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/27816153/pexels-photo-27816153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>
        <p>
          不得不说，到目前为止，国风动画、游戏、电影翻来覆去创作，几乎全是哪吒、孙悟空、猪八戒、姜子牙、杨戬这一堆至少200年前的古典小说角色，
          不仅跟复仇者联盟、X战警这种爆发创作出来的宇宙没法比，连跟龙珠、火影忍者、都没法比，
          唯一一个有点影响力的就是《魁拔》，结果还烂尾了。
          （可惜《仙剑》和《轩辕剑》系列生不逢时，如果晚出来几年，也许大电影就拍了）
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/images/like.png"
              width={16}
              height={16}
              className="cursor-pointer"
              alt=""
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123
              <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/images/comment.png"
              width={16}
              height={16}
              className="cursor-pointer"
              alt=""
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123
              <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/images/share.png"
              width={16}
              height={16}
              className="cursor-pointer"
              alt=""
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123
              <span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
}
