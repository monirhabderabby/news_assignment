// Packages

// Local Imports
import { NewsType } from "../../../types";
import NewsCard from "../ui/news-card";
import NewsWidthCard from "../ui/news-width-card";
import SectionTitle from "../ui/section-title";

interface PopulerNewsProps {
  newsList: NewsType[];
}

const PopulerNews: React.FC<PopulerNewsProps> = async ({ newsList }) => {
  if (newsList.length == 0) {
    return (
      <div className="contain py-6">
        <SectionTitle title="Populer News" />
        <div className="h-[300px] w-full flex justify-center items-center">
          No News Found on the Databse!
        </div>
      </div>
    );
  }
  return (
    <div className="contain py-6">
      <SectionTitle title="Populer News" />
      <div className="mt-4 grid grid-cols-4 gap-8">
        <div className="relative">
          {newsList[0] && (
            <NewsCard
              description={newsList[0].short_des.slice(0, 128) + "..."}
              image={newsList[0].image}
              author={newsList[0].user.name}
              title={newsList[0].title}
              createdAt={newsList[0].createdAt}
            />
          )}
        </div>
        <div className="col-span-3 grid grid-cols-2 gap-8">
          {newsList[1] && (
            <NewsWidthCard
              title={newsList[1].title}
              image={newsList[1].image}
              createdAt={newsList[1].createdAt}
              catName={newsList[1].categories.name}
              newsId={newsList[1].id}
            />
          )}
          {newsList[2] && (
            <NewsWidthCard
              title={newsList[2].title}
              image={newsList[2].image}
              createdAt={newsList[2].createdAt}
              catName={newsList[2].categories.name}
              newsId={newsList[2].id}
            />
          )}
          {newsList[3] && (
            <NewsWidthCard
              title={newsList[3].title}
              image={newsList[3].image}
              createdAt={newsList[3].createdAt}
              catName={newsList[3].categories.name}
              newsId={newsList[3].id}
            />
          )}
          {newsList[4] && (
            <NewsWidthCard
              title={newsList[4].title}
              image={newsList[4].image}
              createdAt={newsList[4].createdAt}
              catName={newsList[4].categories.name}
              newsId={newsList[4].id}
            />
          )}
          {newsList[5] && (
            <NewsWidthCard
              title={newsList[5].title}
              image={newsList[5].image}
              createdAt={newsList[5].createdAt}
              catName={newsList[5].categories.name}
              newsId={newsList[5].id}
            />
          )}
          {newsList[6] && (
            <NewsWidthCard
              title={newsList[6].title}
              image={newsList[6].image}
              createdAt={newsList[6].createdAt}
              catName={newsList[6].categories.name}
              newsId={newsList[6].id}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PopulerNews;
