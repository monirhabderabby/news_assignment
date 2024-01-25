import FeaturesNews from "@/components/section/features-news";
import LeatestNews from "@/components/section/leatest-news";
import PopulerNews from "@/components/section/populer-news";
import axios from "axios";
import { NewsType } from "../../../../types";

async function getData(category: string) {
  const res1 = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/news?type=populer&category=${category}`
  );
  const res2 = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/news?type=latest&category=${category}`
  );
  const res3 = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/news?type=features&category=${category}`
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

const CategoryPage = async ({
  params,
}: {
  params: { categoryName: string };
}) => {
  const { latestNewsList, featuresNewsList, populerNewsList } = await getData(
    params.categoryName
  );

  console.log(params.categoryName);
  return (
    <div className="contain py-6">
      <LeatestNews newsList={latestNewsList} />
      <PopulerNews newsList={populerNewsList} />
      <div className="grid grid-cols-8 gap-8 contain">
        <div className="col-span-6">
          <FeaturesNews newsList={featuresNewsList} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
