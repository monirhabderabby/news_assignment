// Packages
import moment from "moment";
import Image from "next/image";

interface NewsWidthCardProps {
  title: string;
  image: string;
  createdAt: Date;
}

const NewsWidthCard: React.FC<NewsWidthCardProps> = ({
  createdAt,
  image,
  title,
}) => {
  return (
    <div className="border border-1 flex gap-x-2">
      <Image src={image} alt="image" width={105} height={75} />
      <div className="space-y-2">
        <h3 className="text-[14px] text-[#111111] font-semibold">{title}</h3>
        <div className="text-[10px] text-gray-400">
          {moment(createdAt).format("LL")}
        </div>
      </div>
    </div>
  );
};

export default NewsWidthCard;
