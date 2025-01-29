import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  if (!images.length) {
    return <div className="text-center text-lg">No images uploaded yet</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col items-center">
          <div className="relative h-48 w-full max-w-xs ">
            <Link href={`/img/${image.id}`}>
              <Image
                src={image.url}
                width={480}
                height={480}
                alt={image.name}
                style={{ objectFit: "cover" }}
                loading="lazy" // loading the image until it reaches a calculated distance from the viewport.
                className="rounded-md shadow-md w-full h-full"
              />
            </Link>
          </div>
          <div className=" text-sm mt-2 max-w-full text-left">{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="px-3">
      <SignedOut>
        <div className="text-center text-lg">Sign in to view your images</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
