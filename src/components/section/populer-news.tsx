import NewsCard from "../ui/news-card";
import NewsWidthCard from "../ui/news-width-card";
import SectionTitle from "../ui/section-title";

const PopulerNews = () => {
  const posts = [
    {
      id: 1,
      image: "/party.jpg",
      category: "FASHION",
      title: "WordPress News Magazine Charts ",
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
    <div className="contain py-6">
      <SectionTitle title="Populer News" />
      <div className="mt-4 grid grid-cols-4 gap-8">
        <div className="relative">
          <NewsCard
            description="We woke reasonably late following the feast and free flowing wine
              the night before. After gathering ourselves and our packs, we
              headed down to..."
            image={posts[0].image}
            author={posts[0].author}
            title={posts[0].title}
            createdAt={posts[0].createdAt}
          />
        </div>
        <div className="col-span-3 grid grid-cols-2 gap-8">
          <NewsWidthCard
            title={posts[0].title}
            image={posts[0].image}
            createdAt={posts[0].createdAt}
          />
          <NewsWidthCard
            title={posts[0].title}
            image={posts[0].image}
            createdAt={posts[0].createdAt}
          />
          <NewsWidthCard
            title={posts[0].title}
            image={posts[0].image}
            createdAt={posts[0].createdAt}
          />
          <NewsWidthCard
            title={posts[0].title}
            image={posts[0].image}
            createdAt={posts[0].createdAt}
          />
          <NewsWidthCard
            title={posts[0].title}
            image={posts[0].image}
            createdAt={posts[0].createdAt}
          />
          <NewsWidthCard
            title={posts[0].title}
            image={posts[0].image}
            createdAt={posts[0].createdAt}
          />
          <NewsWidthCard
            title={posts[0].title}
            image={posts[0].image}
            createdAt={posts[0].createdAt}
          />
          <NewsWidthCard
            title={posts[0].title}
            image={posts[0].image}
            createdAt={posts[0].createdAt}
          />
        </div>
      </div>
    </div>
  );
};

export default PopulerNews;
