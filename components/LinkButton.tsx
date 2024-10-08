"use client";

import Link from "next/link";

interface linkButtonProps {
  url: string;
}

const LinkButton = ({ url }: linkButtonProps) => {
  const handleClick = () => {
    setTimeout(() => {
      window.location.reload(); // This will reload the current page after the link is clicked.
    }, 1000); // Add a delay to ensure the new tab opens before reloading.

    return true; // Allow the link navigation to proceed.
  };
  return (
    <Link
      href={url.startsWith("http") ? url : `https://${url}`}
      target="_blank"
      className="text-blue-500 underline"
      onClick={handleClick}
    >
      {url}
    </Link>
  );
};
export default LinkButton;
