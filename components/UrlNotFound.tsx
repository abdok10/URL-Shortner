import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";
import Link from "next/link";

const UrlNotFound = () => {
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50 ">
        <div className="flex size-20 items-center justify-center rounded-full bg-red-500/10">
          <TriangleAlert className="size-10 text-red-500" />
        </div>
        <h2 className="my-6  text-xl font-semibold">Error, URL Not Found</h2>

        <Button asChild>
          <Link href="/">Try again</Link>
        </Button>
      </div>
    </section>
  );
};
export default UrlNotFound;
