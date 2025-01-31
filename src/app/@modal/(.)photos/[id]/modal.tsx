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

    // Cleanup function to close modal when component unmounts
    return () => {
      if (dialogRef.current?.open) {
        dialogRef.current.close();
      }
    };
  }, [mounted]);

  function onDismiss() {
    router.back();
  }

  // Don't render anything until mounted and modalRoot is available
  if (!mounted || !modalRoot) return null;

  return createPortal(
    <div className="modal-backdrop fixed inset-0 bg-black/50">
      <dialog
        ref={dialogRef}
        className="h-screen w-screen bg-red-200"
        onClose={onDismiss}
      >
        <div className="relative">
          {children}
          <button
            onClick={onDismiss}
            className="absolute right-0 top-0 rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
      </dialog>
    </div>,
    modalRoot,
  );
}
