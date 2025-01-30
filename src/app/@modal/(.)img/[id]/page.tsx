export default async function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const photoId = await params.id;
  return <div>{photoId}</div>;
}
