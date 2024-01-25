import NewsCard from "@/components/ui/news-card";
import SectionTitle from "@/components/ui/section-title";
import axios from "axios";
import { NewsType } from "../../../types";

async function getData(searchText: string) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/news?search=${searchText}`
  );

  const newsList: NewsType[] = res.data;

  return {
    newsList,
  };
}

const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const searchText = searchParams?.search;
  const { newsList } = await getData(searchText as string);

  return (
    <div className="contain py-6">
      <SectionTitle title="Search Result..." />
      <div className="my-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {newsList?.map((news) => (
          <NewsCard
            key={news.id}
            description={news.short_des.slice(0, 128) + "..."}
            image={news.image}
            author={news.user.name}
            title={news.title}
            createdAt={news.createdAt}
            category={news.categories.name}
            newsId={news.id}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
