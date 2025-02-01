import { getImageById } from "~/server/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";

export default async function FullPageImageView(props: { id: number }) {
  try {
    const image = await getImageById(props.id);
    if (!image) notFound();

    return (
      <div className="flex h-full w-full">
        <div className="flex flex-shrink items-center justify-center">
          <img src={image.url} className="w-96 object-contain" />
        </div>
        <div className="flex w-48 flex-col">
          <div className="pl-5 text-xl font-bold text-white">{image.name}</div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading image:", error);
    notFound();
  }
}
