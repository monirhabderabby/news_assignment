import { Facebook, Linkedin, Twitter, User } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import { Input } from "./ui/input";

const Header = () => {
  const socialLink = [
    {
      id: 1,
      icon: <Facebook className="w-5 h-5 hover:text-orange-600" />,
      link: "",
    },
    {
      id: 1,
      icon: <Twitter className="w-5 h-5 hover:text-orange-600" />,
      link: "",
    },
    {
      id: 1,
      icon: <Linkedin className="w-5 h-5 hover:text-orange-600" />,
      link: "",
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
        <div className="flex items-center gap-x-3">
          {socialLink.map(({ icon, id, link }) => (
            <a href={link} className="p-2" key={id}>
              {icon}
            </a>
          ))}
        </div>
      </section>
      <section className="bg-gray-100 h-[60px] w-full ">
        <div className="flex justify-between contain items-center h-full">
          <div className="space-x-4">
            {categories?.map(({ id, name }) => (
              <Link
                key={id}
                href={`/news/${id}`}
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
            <Link href="/login">
              <User className="hover:text-orange-600 cursor-pointer" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
