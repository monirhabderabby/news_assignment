import { NewsType } from "../../../types";
import NewsCard from "../ui/news-card";
import NewsWidthCard from "../ui/news-width-card";
import SectionTitle from "../ui/section-title";

interface FeaturesNewsProps {
  newsList: NewsType[];
}

const FeaturesNews: React.FC<FeaturesNewsProps> = ({ newsList }) => {
  if (newsList?.length == 0) {
    return (
      <div className="py-6">
        <SectionTitle title="Features" />
        <div className="h-[300px] w-full flex justify-center items-center">
          No News Found on the Databse!
        </div>
      </div>
    );
  }
  return (
    <div className=" py-6">
      <SectionTitle title="Features" />
      <div className="grid grid-cols-2 gap-8 mt-4">
        {newsList[0] && (
          <NewsCard
            author={newsList[0].user.name}
            createdAt={newsList[0].createdAt}
            description="We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to"
            image={newsList[0].image}
            title={newsList[0].title}
            category={newsList[0].categories.name}
            newsId={newsList[0].id}
          />
        )}
        {newsList[1] && (
          <NewsCard
            author={newsList[1].user.name}
            createdAt={newsList[1].createdAt}
            description="We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to"
            image={newsList[1].image}
            title={newsList[1].title}
            category={newsList[1].categories.name}
            newsId={newsList[1].id}
          />
        )}
        <div className="space-y-4">
          {newsList[2] && (
            <NewsWidthCard
              image={newsList[2].image}
              title={newsList[2].title}
              createdAt={newsList[2].createdAt}
              catName={newsList[2].categories.name}
              newsId={newsList[2].id}
            />
          )}
          {newsList[3] && (
            <NewsWidthCard
              image={newsList[3].image}
              title={newsList[3].title}
              createdAt={newsList[3].createdAt}
              catName={newsList[3].categories.name}
              newsId={newsList[3].id}
            />
          )}
        </div>
        <div className="space-y-4">
          {newsList[4] && (
            <NewsWidthCard
              image={newsList[4].image}
              title={newsList[4].title}
              createdAt={newsList[4].createdAt}
              catName={newsList[4].categories.name}
              newsId={newsList[4].id}
            />
          )}
          {newsList[5] && (
            <NewsWidthCard
              image={newsList[5].image}
              title={newsList[5].title}
              createdAt={newsList[5].createdAt}
              catName={newsList[5].categories.name}
              newsId={newsList[5].id}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturesNews;
