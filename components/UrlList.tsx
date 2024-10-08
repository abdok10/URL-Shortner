import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CopyIcon, EyeIcon } from "lucide-react";

const UrlList = () => {
  return (
    <div>
      <h2 className="text-2xl mb-2 font-semibold">Recent URLs</h2>

      <ul className="space-y-2">
        <li className="flex items-center justify-between gep-2  border-dashed">
          <Link href={"google.com"} target="_blank" className="text-blue-500">google.com</Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted">
              <CopyIcon className="size-4"/>
              <span className="sr-only">Copy URL</span>  
            </Button>
            <span className="flex items-center gap-1">
              <EyeIcon className="size-4"/>
              100 views
            </span>
          </div>
        </li>
      </ul>
    </div>
  )
}
export default UrlList;