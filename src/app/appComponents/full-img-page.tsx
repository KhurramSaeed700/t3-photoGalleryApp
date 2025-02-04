import { getImageById } from "~/server/queries";
import { notFound } from "next/navigation";
import { clerkClient } from "@clerk/nextjs/server";
import { CalendarDays, Upload, User } from "lucide-react";
import Image from "next/image";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImageById(props.id);
  if (!image) notFound();

  const clerk = await clerkClient();
  const uploader = await clerk.users.getUser(image.userId).catch(() => null);

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-gradient-to-br from-gray-900 to-black md:flex-row">
      {/* Image Container */}
      <div className="flex flex-1 items-center justify-center p-8">
        <Image
          src={image.url}
          alt={image.name || "Uploaded image"}
          layout="intrinsic"
          width={800}
          height={600}
          className="h-auto max-h-[80vh] w-full max-w-4xl rounded-xl object-contain shadow-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Metadata Container */}
      <div className="flex w-full flex-col gap-8 border-t-2 border-white/10 bg-black/50 p-8 backdrop-blur-lg md:w-96 md:border-l-2 md:border-t-0">
        {/* Image Title */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-white">
            {image.name || "Untitled"}
          </h1>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        {/* Uploader Info */}
        <div className="flex items-center gap-4">
          <User className="h-6 w-6 text-purple-400" />
          <div className="flex flex-col">
            <span className="text-sm text-gray-400">Uploaded by</span>
            <span className="font-medium text-white">
              {uploader?.fullName || "Anonymous"}
            </span>
          </div>
        </div>

        {/* Creation Date */}
        <div className="flex items-center gap-4">
          <CalendarDays className="h-6 w-6 text-emerald-400" />
          <div className="flex flex-col">
            <span className="text-sm text-gray-400">Created on</span>
            <span className="font-medium text-white">
              {new Date(image.createdAt).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
