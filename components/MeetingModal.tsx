import React, { ReactNode } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className: string;
  children?: ReactNode;
  handelClick?: () => void;
  buttonText?: string;
  image?: string;
  buttonIcon: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  handelClick,
  buttonText,
  image,
  buttonIcon,
  children,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex bg-[#1C1F2E] w-full max-w-[520px] flex-col gap-6 border-none px-6 py-9 text-white">
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="image" width={72} height={72}></Image>
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
            {title}
          </h1>
          {children}
          <Button
            className="cursor-pointer bg-[#0E78F9] focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={handelClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="button icon"
                width={13}
                height={13}
              />
            )}
            &nbsp;
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
