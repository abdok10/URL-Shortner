"use client";

import Link from "next/link";

interface linkButtonProps {
  url: string;
}

const LinkButton = ({ url }: linkButtonProps) => {
  const handleClick = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000); 

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
