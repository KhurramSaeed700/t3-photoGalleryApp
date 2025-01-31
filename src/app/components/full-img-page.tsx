import { getImageById } from "~/server/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";

export default async function FullPageImageView(props:{id:number}) {
  
  try {
    const image = await getImageById(props.id);
    if (!image) notFound();

    return (
   
        <Suspense
          fallback={<div className="h-96 w-full animate-pulse bg-gray-200" />}
        >
          <div className="relative aspect-square w-full">
            <Image
              src={image.url}
              alt={image.name ?? "Image"}
              className="h-full w-full object-contain"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Suspense>
    );
  } catch (error) {
    console.error("Error loading image:", error);
    notFound();
  }
}
