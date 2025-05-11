"use client";

import { ArrowLeft } from "iconsax-react";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} type="button">
      <ArrowLeft color="#E6D5B8" size={20} variant="Bold" />
    </button>
  );
}

export default BackButton;
