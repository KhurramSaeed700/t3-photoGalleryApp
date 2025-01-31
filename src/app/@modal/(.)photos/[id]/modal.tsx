"use client";

import { type ElementRef, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);
  const [mounted, setMounted] = useState(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    setModalRoot(document.getElementById("modal-root"));
  }, []);

  useEffect(() => {
    if (mounted && dialogRef.current && !dialogRef.current.open) {
      try {
        dialogRef.current.showModal();
      } catch (e) {
        console.error("Failed to show modal:", e);
      }
    }

    const dialog = dialogRef.current;

    // Add event listener for the 'cancel' event (triggered by Escape key)
    const handleCancel = (event: Event) => {
      event.preventDefault();
      onDismiss();
    };

    dialog?.addEventListener("cancel", handleCancel);

  }, [mounted, onDismiss]);

  function onDismiss() {
    router.back();
  }

  // Don't render anything until mounted and modalRoot is available
  if (!mounted || !modalRoot) return null;

  return createPortal(
    <div className="modal-backdrop fixed inset-0 bg-black/50">
      <dialog ref={dialogRef} className="h-screen w-screen bg-zinc-900/50 p-8">
        <div className="relative mx-auto max-h-[85vh] max-w-[85vw]">
          {children}
          {/* <button
            onClick={onDismiss}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white"
          >
            ✕
          </button> */}
        </div>
      </dialog>
    </div>,
    modalRoot,
  );
}
