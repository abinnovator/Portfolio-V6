import Header from "@/components/Header";
import { PixelGridShader } from "@/components/pixelgrid-shader";
import { buttonVariants } from "@/components/ui/button";
import { Projects } from "@/constants";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function generateStaticParams() {
  return Projects.map((project) => ({
    id: project.id,
  }))
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const project = Projects.find((project) => project.id === id);

  if (!project) {
    return (
      <main className="relative bg-black w-full min-h-screen overflow-x-hidden flex items-center justify-center">
        <p className="text-white text-2xl">Project not found</p>
      </main>
    )
  }

  return (
    <main className="relative bg-black w-full min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <PixelGridShader shape="plasma" colorFg="#00ff00" />
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-28 py-6 sm:py-8 lg:py-10 border-x border-[#262626] overflow-x-hidden relative z-10 w-full">
        <Link href={'/work'} className="text-white pb-2">
          <span className="flex flex-row gap-1">Go back <ArrowRight /></span>
        </Link>
        <div className="p-3 sm:p-4 lg:p-5 border border-[#262626] border-dashed justify-center items-center">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="object-cover w-full h-full rounded-md transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <div className="py-10">
            <Header title={project.title} desc={project.desc} />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto px-4 sm:px-0 justify-center items-center">
            {project.website && (
              <Link
                href={project.website}
                className={buttonVariants({
                  variant: "default",
                  className: "bg-[#262626] w-full sm:w-auto",
                })}
              >
                <Globe className="size-4" /> Visit Website
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                className={buttonVariants({
                  variant: "default",
                  className: "bg-[#262626] w-full sm:w-auto",
                })}
              >
                Visit Source
              </Link>
            )}
          </div>
        </div>
        <div className="p-3 sm:p-4 lg:p-5 border border-[#262626] border-dashed">
          <p className="text-white text-sm sm:text-base leading-relaxed">
            {project.caseStudy}
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;