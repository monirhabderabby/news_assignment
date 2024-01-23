import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: "/social/facebook.svg",
      link: "https://www.facebook.com/",
    },
    {
      id: 2,
      icon: "/social/instagram.svg",
      link: "https://www.instagram.com/",
    },
    {
      id: 3,
      icon: "/social/twitter.svg",
      link: "https://twitter.com",
    },
    {
      id: 4,
      icon: "/social/youtube.svg",
      link: "https://www.youtube.com",
    },
  ];

  const todayNewsList = [
    {
      id: 1,
      name: "First Page",
      link: "/",
    },
    {
      id: 2,
      name: "sports",
      link: "/",
    },
    {
      id: 3,
      name: "International",
      link: "/",
    },
  ];
  return (
    <div className="bg-gray-100 w-full py-[50px]">
      <div className="contain grid grid-cols-2 md:grid-cols-4 min-h-[200px]">
        <section className="h-full">
          <div className="flex flex-col justify-between h-full">
            <Heading title="Download Apps" />
            <div className="flex items-center gap-x-2">
              <Image src="/android.webp" alt="i" width={97} height={35} />
              <Image src="/Ios-app.webp" alt="i" width={97} height={35} />
            </div>
            <div>
              <h3 className="text-[20px] font-medium ">Follow Us</h3>
              <div className="flex items-center gap-x-4 mt-1">
                {socialLinks?.map(({ icon, id, link }) => (
                  <a key={id} href={link} target="_blank">
                    <Image
                      src={icon}
                      alt="socialIcon"
                      width={20}
                      height={20}
                      className="hover:scale-105 duration-500"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section>
          <Heading title="Today News" />
          <div className="flex flex-col gap-y-3 mt-3">
            {todayNewsList?.map(({ id, link, name }) => (
              <Link
                className="text-[#878787] text-[15px] hover:text-black duration-500"
                key={id}
                href={link}
              >
                {name}
              </Link>
            ))}
          </div>
        </section>
        <section>
          <Heading title="Online" />
          <div className="flex flex-col gap-y-3 mt-3">
            {todayNewsList?.map(({ id, link, name }) => (
              <Link
                className="text-[#878787] text-[15px] hover:text-black duration-500"
                key={id}
                href={link}
              >
                {name}
              </Link>
            ))}
          </div>
        </section>
        <section>
          <Heading title="Advertisement" />
          <div className="flex flex-col gap-y-3 mt-3">
            {todayNewsList?.map(({ id, link, name }) => (
              <Link
                className="text-[#878787] text-[15px] hover:text-black duration-500"
                key={id}
                href={link}
              >
                {name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;

const Heading = ({ title }: { title: string }) => {
  return (
    <div>
      <h3 className="text-[24px] font-medium ">{title}</h3>
      <div className="w-1/3 border-b-2 border-orange-600 mt-1"></div>
    </div>
  );
};
