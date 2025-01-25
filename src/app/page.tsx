import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({});
  return (
    <div className="flex flex-wrap gap-3">
      {images.map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} />
          <div className="text-lg">{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="pl-3 pr-3">
      <SignedOut>please sign in</SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
