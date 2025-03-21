"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="humburger icon"
            className="cursor-pointer sm:hidden"
          ></Image>
        </SheetTrigger>
        <SheetContent side="left" className=" bg-[#1C1F2E]">
          <Link href="/" className="flex px-6 py-3 items-center gap-1">
            <Image
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt="Yoom logo"
              className="max-sm:size-10"
            ></Image>
            <p className="text-[26px] font-extrabold text-white">Yoom</p>
          </Link>
          <div className="flex px-6 h-[calc(100vh-72px)] flex-col justify-between overflow-y-autoauto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-4 pb-10 text-white ">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route;

                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          { "bg-blue-600": isActive }
                        )}
                      > 
                        <Image
                          src={link.imgURL}
                          alt={link.label}
                          width={20}
                          height={20}
                        ></Image>
                        <p className="font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
