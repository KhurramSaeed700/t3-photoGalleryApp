// //  BEFORE
// export default function PhotoModal({
//   params: { id: photoId },
// }: {
//   params: { id: string };
// }) {
//   return <div>{photoId}</div>;
// }

// // AFTER
export default async function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const photoId = await params.id;
  return <p>{photoId}</p>;
}

// // BUT STILL GETTING THIS ERROR
// Error: Route "/img/[id]" used `params.id`. `params` should be awaited before using its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis
//     at id (webpack-internal:/(rsc)/src/app/img/[id]/src/app/img/[id]/page.tsx:16:31)
//     at Object.apply (webpack-internal:/(rsc)/src/app/img/[id]/sentry-wrapper-module:45:9)
//   14 |   params: { id: string };
//   15 | }) {
// > 16 |   const photoId = await params.id;
//      |                               ^
//   17 |   return <p>{photoId}</p>;
//   18 | }