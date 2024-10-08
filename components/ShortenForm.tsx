"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";

const ShortenForm = () => {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to shorten..."
          type="url"
          required
        />
        <Button className="w-full p-2">Shortner URL</Button>
      </div>
    </form>
  );
};
export default ShortenForm;
