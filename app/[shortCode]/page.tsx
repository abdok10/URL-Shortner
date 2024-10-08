import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import UrlNotFound from "@/components/UrlNotFound";

interface RedirectPageProps {
  params: {
    shortCode: string;
  };
}

const RedirectPage = async ({ params }: RedirectPageProps) => {
  const shortCode = params.shortCode;
  const url = await prisma.url.findUnique({
    where: {
      shortCode,
    },
  });
  if (!url) {
    return <UrlNotFound />;
  }

  await prisma.url.update({
    where: { shortCode },
    data: {
      visits: { increment: 1 },
    },
  });
  return redirect(url.originalUrl);
};

export default RedirectPage;
