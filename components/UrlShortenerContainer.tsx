import ShortenForm from "@/components/ShortenForm";
import UrlList from "@/components/UrlList";

const UrlShortenerContainer = () => {
  return (
    <div className="space-y-6">
      <ShortenForm />
      <UrlList />
    </div>
  );
};
export default UrlShortenerContainer;
