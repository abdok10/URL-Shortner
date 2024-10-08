import Link from "next/link";
import { EyeIcon } from "lucide-react";
import prisma from "@/lib/db";
import CopyButton from "@/components/CopyButton";

interface UrlTypes {
  id: string;
  originalUrl: string;
  shortCode: string;
  visits: number;
}

const UrlList = async () => {
  const urls: UrlTypes[] = await prisma.url.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });

  const shortenerUrl = (code:string) => `${process.env.NEXT_PUBLIC_BASE_URL}/${code}`

  return (
    <div>
      <h2 className="text-2xl mb-2 font-semibold">Recent URLs</h2>

      <ul className="space-y-2">
        {urls.map((url) => (
          <li
            key={url.id}
            className="flex items-center justify-between gap-2 border-dashed border-gray-500 p-2"
          >
            <Link
              href={`/${url.shortCode}`}
              target="_blank"
              className="text-blue-500 underline"
            >
              {shortenerUrl(url.shortCode)}
            </Link>
            <div className="flex items-center gap-3">
              <CopyButton url={url.originalUrl} />
              <span className="flex items-center gap-1">
                <EyeIcon className="w-4 h-4" />
                {url.visits} views
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlList;
