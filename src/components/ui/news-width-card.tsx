// Packages
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

interface NewsWidthCardProps {
  title: string;
  image: string;
  createdAt: Date;
  newsId: number;
  catName: string;
}

const NewsWidthCard: React.FC<NewsWidthCardProps> = ({
  createdAt,
  image,
  title,
  newsId,
  catName,
}) => {
  const catNaming = catName?.split(" ").join("_");
  const url = `/news/${catNaming}/${newsId}`;
  return (
    <Link href={url} className="group flex gap-x-2">
      <Image src={image} alt="image" width={105} height={55} />
      <div className="space-y-2">
        <h3 className="text-[14px] group-hover:text-orange-500 text-[#111111] font-semibold">
          {title}
        </h3>
        <div className="text-[10px] text-gray-400">
          {moment(createdAt).format("LL")}
        </div>
      </div>
    </Link>
  );
};

export default NewsWidthCard;
