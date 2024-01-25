import { NewsType } from "../../../types";
import NewsFillCard from "../news-fill-card";

interface LeatestNewsProps {
  newsList: NewsType[];
}

const LeatestNews: React.FC<LeatestNewsProps> = async ({ newsList }) => {
  let content;
  if (newsList?.length === 0) {
    content = (
      <div className="contain py-6">
        <div className="flex items-center gap-x-4 px-4">
          <div className="bg-[#222222] text-[14px] text-white px-2 py-1">
            Latest News
          </div>
          <p className="text-[#111111] text-[14px]">
            Another Big Apartment Project Slated for Broad Ripple Company
          </p>
        </div>
        <div className="h-[504px] flex justify-center items-center">
          <p className="text-[20px] text-gray-500">No News Found!</p>
        </div>
      </div>
    );
  } else if (newsList?.length >= 1) {
    content = (
      <section className="contain">
        <div className=" py-6">
          <div className="flex items-center gap-x-4 px-4">
            <div className="bg-[#222222] text-[14px] text-white px-2 py-1">
              Latest News
            </div>
            <p className="text-[#111111] text-[14px]">
              Another Big Apartment Project Slated for Broad Ripple Company
            </p>
          </div>
        </div>
        <div className="h-[504px] w-full grid grid-cols-10 gap-[4px]">
          <div className="col-span-4 row-span-2">
            {newsList[0] && (
              <NewsFillCard
                title={newsList[0].title}
                category={newsList[0].categories.name}
                createdAt={newsList[0].createdAt}
                image={newsList[0].image}
                author={newsList[0].user.name}
                newsId={newsList[0].id}
              />
            )}
          </div>
          <div className="col-span-6 row-span-1">
            {newsList[1] && (
              <NewsFillCard
                title={newsList[1].title}
                category={newsList[1].categories.name}
                createdAt={newsList[1].createdAt}
                image={newsList[1].image}
                author={newsList[1].user.name}
                newsId={newsList[1].id}
                titleClass="text-[20px] w-[70%]"
              />
            )}
          </div>
          <div className="col-span-3 row-span-1">
            {newsList[2] && (
              <NewsFillCard
                title={newsList[2].title}
                category={newsList[2].categories.name}
                createdAt={newsList[2].createdAt}
                image={newsList[2].image}
                author={newsList[2].user.name}
                newsId={newsList[2].id}
                titleClass="text-[16px] w-[90%]"
              />
            )}
          </div>
          <div className="col-span-3 row-span-1">
            {newsList[3] && (
              <NewsFillCard
                title={newsList[3].title}
                category={newsList[3].categories.name}
                createdAt={newsList[3].createdAt}
                image={newsList[3].image}
                author={newsList[3].user.name}
                newsId={newsList[3].id}
                titleClass="text-[16px] w-[90%]"
              />
            )}
          </div>
        </div>
      </section>
    );
  }
  return content;
};

export default LeatestNews;
