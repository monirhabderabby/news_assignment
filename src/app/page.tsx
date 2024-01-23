import FeaturesNews from "@/components/section/features-news";
import LeatestNews from "@/components/section/leatest-news";
import PopulerNews from "@/components/section/populer-news";

export default async function Home() {
  return (
    <main>
      <LeatestNews />
      <PopulerNews />
      <div className="grid grid-cols-8 gap-8 contain">
        <div className="col-span-6">
          <FeaturesNews />
        </div>
      </div>
    </main>
  );
}
