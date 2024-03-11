import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: "600",
});

interface CardTitleProps {
  label: string;
}

const CardTitle = ({ label }: CardTitleProps) => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-y-4'>
      <h1 className={cn("text-2xl font-semibold", font.className)}>Auth</h1>
      <p className='text-sm text-muted-foreground'>{label}</p>
    </div>
  );
};

export default CardTitle;
