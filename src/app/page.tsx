import LoginButton from "@/components/LoginButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className='flex h-full bg-blue-400 flex-col items-center justify-center'>
      <h1
        className={cn(
          "text-2xl font-semibold text-white drop-shadow-md",
          font.className
        )}
      >
        Auth
      </h1>
      <p className='text-white text-lg'>A simple auth service!</p>
      <div className='mt-6'>
        <LoginButton>
          <Button variant='secondary' size='lg'>
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
