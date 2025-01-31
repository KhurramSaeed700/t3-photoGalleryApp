import { getImageById } from "~/server/queries";
import { Modal } from "./modal";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";

export default async function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  // Wait for params to be available
  const photoId = await params.id;
  const idAsNumber = Number(photoId);

  if (Number.isNaN(idAsNumber)) {
    notFound();
  }

  try {
    const image = await getImageById(idAsNumber);
    if (!image) notFound();

    return (
      <Modal>
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
      </Modal>
    );
  } catch (error) {
    console.error("Error loading image:", error);
    notFound();
  }
}
