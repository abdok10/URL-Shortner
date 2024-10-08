"use client";

import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { shortenUrl } from "@/actions/actions";
import { Loader2 } from "lucide-react";

const ShortenForm = () => {
  const [url, setUrl] = useState<string>("");
  const { pending } = useFormStatus();

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
        <Button type="submit" className="w-full p-2" disabled={pending}>
          {pending ? <Loader2 className="animate-spin" /> : "Shorten URL"}
        </Button>
      </div>
    </form>
  );
};
export default ShortenForm;
