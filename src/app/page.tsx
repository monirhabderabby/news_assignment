import FeaturesNews from "@/components/section/features-news";
import LeatestNews from "@/components/section/leatest-news";
import PopulerNews from "@/components/section/populer-news";
import axios from "axios";
import { NewsType } from "../../types";

async function getData() {
  const res1 = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/news?type=latest`
  );

  const populerNewsList: NewsType[] = res1.data;

  return {
    populerNewsList,
  };
}

export default async function Home() {
  const { populerNewsList } = await getData();
  return (
    <main>
      <LeatestNews />
      <PopulerNews newsList={populerNewsList} />
      <div className="grid grid-cols-8 gap-8 contain">
        <div className="col-span-6">
          <FeaturesNews />
        </div>
      </div>
    </main>
  );
}
