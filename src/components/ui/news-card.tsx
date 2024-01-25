// Packages
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewsCardProps {
  image: string;
  title: string;
  createdAt: Date;
  author: string;
  description: string;
  category: string;
  newsId: number;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  createdAt,
  author,
  description,
  category,
  newsId,
}) => {
  const categoryNaming = category.split(" ").join("_");
  const url = `/news/${categoryNaming}/${newsId}`;
  return (
    <Link href={url}>
      <div className="relative w-[322px] pb-8 hover:shadow-md rounded-[6px] duration-500 group cursor-pointer">
        <Image src={image} alt="banner" width={322} height={234} />
        <div className="space-y-2 px-4 py-2">
          <div>
            <h3 className=" text-[18px] text-[#111111] font-medium mt-3 group-hover:text-orange-600">
              {title}
            </h3>
            <div className="text-[#111111] text-[14px]">
              <span className="font-semibold">{author}</span> -{" "}
              {moment(createdAt).format("LL")}
            </div>
          </div>

          <p className="text-[#111111] text-[12px]">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
