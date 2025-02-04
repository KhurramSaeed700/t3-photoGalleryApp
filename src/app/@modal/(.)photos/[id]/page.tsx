import { Modal } from "./modal";
import { notFound } from "next/navigation";
import FullPageImageView from "~/app/appComponents/full-img-page";

export default function PhotoModal({ params }: { params: { id: string } }) {
  // Wait for params to be available
  const photoId = params.id;
  const idAsNumber = Number(photoId);

  if (Number.isNaN(idAsNumber)) {
    notFound();
  }

  try {
    return (
      <Modal>
        <FullPageImageView id={idAsNumber} />
      </Modal>
    );
  } catch (error) {
    console.error("Error loading image from @modal:", error);
    notFound();
  }
}
