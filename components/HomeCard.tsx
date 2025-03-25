import { cn } from "@/lib/utils";
import Image from "next/image";

interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  className?: string;
  handelClick: () => void;
}

const HomeCard = ({
  className,
  img,
  title,
  description,
  handelClick,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        "bg-[#FF742E] px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer",
        className
      )}
      onClick={handelClick}
    >
      <div
        className="flex-center glassmorphism size-12
     rounded-[14px]"
      >
        <Image src={img} alt="meeting" width={27} height={27}></Image>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[22px] font-bold">{title}</h1>
        <p className="text-[16px] font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
