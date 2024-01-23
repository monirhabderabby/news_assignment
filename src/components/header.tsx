// Packages
import { categories, socials } from "@prisma/client";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

// Local Imports
import { Input } from "./ui/input";
import UserButton from "./user-button";

async function getData() {
  const res1 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/social`, {
    method: "GET",
  });
  const res2 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category`);
  const socials: socials = await res1.json();
  const categoryList: categories[] = await res2.json();

  return {
    socials,
    categoryList,
  };
}

const Header = async () => {
  const { socials, categoryList } = await getData();

  const socialLinks = [
    {
      id: 1,
      icon: "/social/facebook.svg",
      link: socials.facebook,
    },
    {
      id: 2,
      icon: "/social/instagram.svg",
      link: socials.instagram,
    },
    {
      id: 3,
      icon: "/social/twitter.svg",
      link: socials.twitter,
    },
    {
      id: 4,
      icon: "/social/youtube.svg",
      link: socials.youtube,
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Bangladesh",
    },
    {
      id: 2,
      name: "World",
    },
    {
      id: 3,
      name: "Sports",
    },
    {
      id: 4,
      name: "Business",
    },
  ];
  return (
    <div className="h-fit shadow-md ">
      <section className="flex h-[80px] justify-between items-center contain">
        <div className="text-slate-500">{moment(new Date()).format("LL")}</div>
        <h2>Kaler Kontho</h2>
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
      </section>
      <section className="bg-gray-100 h-[60px] w-full ">
        <div className="flex justify-between contain items-center h-full">
          <div className="space-x-4">
            {categoryList?.map(({ id, name }) => (
              <Link
                key={id}
                href={`/news/${name.split(" ").join("_")}`}
                className="bg-gray-200 hover:bg-gray-300 py-2 px-4"
              >
                {name}
              </Link>
            ))}
          </div>
          <div>
            <Input placeholder="search news" />
          </div>
          <div>
            <UserButton />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
