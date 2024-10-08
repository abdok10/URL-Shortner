import UrlShortenerContainer from "@/components/UrlShortenerContainer";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto my-12 md:my-20 space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">URL Shortener</h1>
        <p className="md:text-lg">Shorten you URLs and share them easily</p>
      </div>

      <UrlShortenerContainer />
    </main>
  );
}
