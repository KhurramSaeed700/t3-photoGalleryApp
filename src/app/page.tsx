import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-2">
        {mockImages.map((image) => (
          <div key={image.id}>
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
