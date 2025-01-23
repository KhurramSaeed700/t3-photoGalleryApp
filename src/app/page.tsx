import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrl = [
  "https://mc4kqyvjmh.ufs.sh/f/CXhOJGY1MT92ktuoDOcGVJUK6ZqmolwdIDX7ubhn2ifRBWeP",
  "https://mc4kqyvjmh.ufs.sh/f/CXhOJGY1MT92pydwJARo8DARKHEUd7ByumCXrZzQiGvVJNTM",
  "https://mc4kqyvjmh.ufs.sh/f/CXhOJGY1MT921gBiqrCUEzFovXIAhPxJLZHROK04W7DmgQ26",
  "https://mc4kqyvjmh.ufs.sh/f/CXhOJGY1MT929nXWxviAfo8hZP7TwiRxmgC1QX43eDEkGydS",
];

const mockImages = mockUrl.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const post = await db.query.posts.findMany();
  console.log(post);
  return (
    <main className="pl-3 pr-3">
      <div className="flex flex-wrap gap-3">
        

        {mockImages.map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
