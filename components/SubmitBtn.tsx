"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full p-2" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="animate-spin mr-3" />
          Shortening...
        </>
      ) : (
        "Shorten URL"
      )}
    </Button>
  );
};
export default SubmitBtn;
