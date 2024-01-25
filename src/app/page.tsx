import NewsLetter from "@/components/news-letter";
import FeaturesNews from "@/components/section/features-news";
import LeatestNews from "@/components/section/leatest-news";
import PopulerNews from "@/components/section/populer-news";
import axios from "axios";
import { NewsType } from "../../types";

async function getData() {
  const res1 = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/news?type=latest`
  );
  const res2 = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/news?type=latest`
  );
  const res3 = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/news?type=features`
  );

  const populerNewsList: NewsType[] = res1.data;
  const latestNewsList: NewsType[] = res2.data;
  const featuresNewsList: NewsType[] = res3.data;

  return {
    populerNewsList,
    latestNewsList,
    featuresNewsList,
  };
}

export default async function Home() {
  const { populerNewsList, latestNewsList, featuresNewsList } = await getData();
  return (
    <main>
      <LeatestNews newsList={latestNewsList} />
      <PopulerNews newsList={populerNewsList} />
      <div className="grid grid-cols-8 gap-8 contain relative">
        <div className="col-span-5">
          <FeaturesNews newsList={featuresNewsList} />
        </div>
        <div className="col-span-3 mt-12">
          <NewsLetter />
        </div>
      </div>
    </main>
  );
}
