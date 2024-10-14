"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { shortenUrl } from "@/actions/actions";
import SubmitBtn from "@/components/SubmitBtn";

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

        <SubmitBtn />
      </div>
    </form>
  );
};
export default ShortenForm;
