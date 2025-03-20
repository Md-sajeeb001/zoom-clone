"use client";

import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section
      className="sticky top-0 left-0 flex  flex-col w-fit min-h-screen
      space-y-6 p-6 pt-28 pb-10 text-white bg-[#1C1F2E] max-sm:hidden
      lg:w-[264px]"
    >
      {sidebarLinks.map((link) => {
        const isActive =
          pathname === link.route || pathname.startsWith(`${link.route}/`);

        return (
          <Link
            href={link.route}
            key={link.label}
            className={cn(
              "flex gap-4 items-center p-4 rounded-lg justify-start",
              { "bg-blue-600": isActive }
            )}
          >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={24}
              height={24}
            ></Image>
            <p className="text-lg font-semibold max-lg:hidden">{link.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default Sidebar;
