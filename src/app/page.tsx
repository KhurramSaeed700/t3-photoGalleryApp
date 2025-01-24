import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <main className="pl-3 pr-3">
      <div className="flex flex-wrap gap-3">
        {[...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
            <div className="text-lg">{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
