// Packages
import moment from "moment";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
// Local Imports
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "./ui/badge";

interface NewsFillCardProps {
  image: string;
  category: string;
  title: string;
  createdAt: Date;
  author: string;
  className?: string;
  titleClass?: string;
  newsId: number;
}
const NewsFillCard: React.FC<NewsFillCardProps> = async ({
  author,
  category,
  createdAt,
  image,
  title,
  className,
  newsId,
  titleClass,
}) => {
  const buffer = await fetch(image).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );
  const { base64 } = await getPlaiceholder(buffer);

  const categoryName = category.split(" ").join("_");
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/news/${categoryName}/${newsId}`;
  return (
    <Link href={url}>
      <div className={cn("h-full w-full relative overflow-hidden", className)}>
        <Image
          src={image}
          alt="sdf"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          placeholder="blur"
          className="hover:scale-105 duration-500"
          blurDataURL={base64}
        />
        <div className="absolute bottom-[20px] left-[20px] space-y-3">
          <Badge>{category}</Badge>
          <h3
            className={cn(
              "text-[27px] font-medium leading-[34px] text-white w-[90%]",
              titleClass
            )}
          >
            {title}
          </h3>
          <div className="text-white text-[14px]">
            <span className="font-semibold">{author}</span> -{" "}
            {moment(createdAt).format("LL")}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsFillCard;
