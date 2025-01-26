import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  if (!images.length) {
    return <div className="text-center text-lg">No images uploaded yet</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col w-48 h-48">
          <Image
            src={image.url}
            alt={image.name}
            style={{ objectFit: "cover" }}
            width={480}
            height={480}
          />
          <div className="text-sm text-center">{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="pl-3 pr-3">
      <SignedOut>
        <div className="text-center text-lg">Sign in to view your images</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
