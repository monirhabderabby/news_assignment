import NewsCard from "../ui/news-card";
import NewsWidthCard from "../ui/news-width-card";
import SectionTitle from "../ui/section-title";

const FeaturesNews = () => {
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
    <div className=" py-6">
      <SectionTitle title="Features" />
      <div className="grid grid-cols-2 gap-8 mt-4">
        <NewsCard
          author={posts[0].author}
          createdAt={posts[0].createdAt}
          description="We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to"
          image={posts[0].image}
          title={posts[0].title}
        />
        <NewsCard
          author={posts[0].author}
          createdAt={posts[0].createdAt}
          description="We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to"
          image={posts[0].image}
          title={posts[0].title}
        />
        <div className="space-y-4">
          <NewsWidthCard
            image={posts[0].image}
            title={posts[0].title}
            createdAt={posts[0].createdAt}
          />
          <NewsWidthCard
            image={posts[0].image}
            title={posts[0].title}
            createdAt={posts[0].createdAt}
          />
        </div>
        <div className="space-y-4">
          <NewsWidthCard
            image={posts[0].image}
            title={posts[0].title}
            createdAt={posts[0].createdAt}
          />
          <NewsWidthCard
            image={posts[0].image}
            title={posts[0].title}
            createdAt={posts[0].createdAt}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesNews;
