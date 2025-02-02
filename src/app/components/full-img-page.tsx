import { getImageById } from "~/server/queries";
import { notFound } from "next/navigation";
import { clerkClient } from "@clerk/nextjs/server";

export default async function FullPageImageView(props: { id: number }) {
  try {
    const image = await getImageById(props.id);
    if (!image) notFound();

    // changed syntax for clerkclient
    // https://www.reddit.com/r/nextjs/comments/1gpczqc/clerk_next_js_issue/?rdt=40145
    const clerk = await clerkClient();
    const uploader = await clerk.users.getUser(image.userId);

    return (
      <div className="flex h-full w-full">
        <div className="flex flex-shrink items-center justify-center border-r-2 pr-3">
          <img src={image.url} className="w-96 object-contain" />
        </div>
        <div className="flex w-48 flex-col">
          <div className="border-b-2 pb-2 pl-5 text-lg font-bold text-white">
            {image.name}
          </div>
          <div className="flex flex-col">
            <span>Uploaded By:</span>
            <span>{uploader.fullName}</span>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading image:", error);
    notFound();
  }
}
