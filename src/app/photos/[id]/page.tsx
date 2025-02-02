import { notFound } from "next/navigation";
import FullPageImageView from "~/app/components/full-img-page";

export default  function PhotoPage({
  params,
}: {
  params: { id: string };
}) {
  // Wait for params to be available
  const photoId = params.id;
  const idAsNumber = Number(photoId);

  if (Number.isNaN(idAsNumber)) {
    notFound();
  }

  try {
    
    return (
        <FullPageImageView id={idAsNumber} />
    );
  } catch (error) {
    console.error("Error loading image from photos/[id]:", error);
    notFound();
  }
}
