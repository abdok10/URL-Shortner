"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { shortenUrl } from "@/actions/actions";

const ShortenForm = () => {
  const [url, setUrl] = useState<string>("");

  return (
    <form action={shortenUrl} onSubmit={() => setUrl("")}>
      <div className="space-y-4">
        <Input
          value={url}
          name="url"
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to shorten..."
          type="url"
          required
        />
        <Button type="submit" className="w-full p-2">
          Shortner URL
        </Button>
      </div>
    </form>
  );
};
export default ShortenForm;
