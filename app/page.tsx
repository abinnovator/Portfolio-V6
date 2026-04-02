import TechStackSection from "@/components/TechStackSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black w-full h-full"> 

      <div className="flex flex-row justify-between px-12 text-white py-6 font-bold">
        <h1>Aadit Bhambri</h1>
        <nav className="flex flex-row gap-4">
          <Link href={'#about'}>About</Link>
          <Link href={"#work"}>Work</Link>

        </nav>
      </div>
      <div className="bg-[#000000]  pt-24">
        <div className="flex flex-col justify-center items-center text-center ">
          <h1 className="font-bold text-white text-9xl border-dashed border-2 p-10 border-[#7F7F7F]">AADIT</h1>
          <h1 className="font-bold text-9xl text-white">BHAMBRI</h1>
          <p className="text-white font-bold">Crafting experiences not just pieces of software</p>

        </div>
        <div className=" hidden md:flex">
          <div className="absolute right-28 top-16 text-white">
            <h1>Web Developer</h1>
          </div>
          <div className="absolute right-12 text-white">
            <h1>UI Designer</h1>
          </div>
          <div className="absolute left-28 top-96 text-white flex flex-row">
            <h1>Game Developer</h1>
          </div>
        </div>
      </div>
      <TechStackSection />
    </main>
    
  );
}
