"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CircleCheckBig, CopyIcon } from "lucide-react";

export default function CopyButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = url;

    // Copying text to clipboard
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true); // Indicate the text has been copied
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div>
      {copied ? (
        // <Button variant="secondary"><Check /></Button>
        <Button
          size="icon"
          className="text-emerald-500"
          variant="secondary"
        >
          <CircleCheckBig />
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-muted"
          onClick={handleCopy}
        >
          <CopyIcon className="size-4" />
          <span className="sr-only">Copy URL</span>
        </Button>
      )}
    </div>
  );
}
