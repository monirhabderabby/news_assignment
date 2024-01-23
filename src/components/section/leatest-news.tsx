import NewsFillCard from "../news-fill-card";

const LeatestNews = () => {
  const posts = [
    {
      id: 1,
      image: "/party.jpg",
      category: "FASHION",
      title:
        "WordPress News Magazine Charts the Most Chic and Fashionable Women of New York City",
      author: "Armin Vans",
      createdAt: new Date("06-21-2015"),
    },
    {
      id: 2,
      image: "/party.jpg",
      category: "GADGET",
      title: "Game Changing Virtual Reality Console Hits the Market",
      author: "Armin Vans",
      createdAt: new Date("06-21-2015"),
    },
    {
      id: 3,
      image: "/party.jpg",
      category: "TRAVEL",
      title: "Discover the Most Magical Sunset in Santorini",
      author: "Armin Vans",
      createdAt: new Date("06-21-2015"),
    },
    {
      id: 4,
      image: "/party.jpg",
      category: "TECH",
      title: "Computer Filters Noise to Make You a Better Listener",
      author: "Armin Vans",
      createdAt: new Date("06-21-2015"),
    },
  ];
  return (
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
          <NewsFillCard
            title={posts[0].title}
            category={posts[0].category}
            createdAt={posts[0].createdAt}
            image={posts[0].image}
            author={posts[0].author}
          />
        </div>
        <div className="col-span-6 row-span-1">
          <NewsFillCard
            title={posts[1].title}
            category={posts[1].category}
            createdAt={posts[1].createdAt}
            image={posts[1].image}
            author={posts[1].author}
            titleClass="text-[20px] w-[70%]"
          />
        </div>
        <div className="col-span-3 row-span-1">
          <NewsFillCard
            title={posts[2].title}
            category={posts[2].category}
            createdAt={posts[2].createdAt}
            image={posts[2].image}
            author={posts[2].author}
            titleClass="text-[16px] w-[90%]"
          />
        </div>
        <div className="col-span-3 row-span-1">
          <NewsFillCard
            title={posts[3].title}
            category={posts[3].category}
            createdAt={posts[3].createdAt}
            image={posts[3].image}
            author={posts[3].author}
            titleClass="text-[16px] w-[90%]"
          />
        </div>
      </div>
    </section>
  );
};

export default LeatestNews;
