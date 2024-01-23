// Packages
import moment from "moment";
// Local Imports
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface NewsFillCardProps {
  image: string;
  category: string;
  title: string;
  createdAt: Date;
  author: string;
  className?: string;
  titleClass?: string;
}
const NewsFillCard: React.FC<NewsFillCardProps> = ({
  author,
  category,
  createdAt,
  image,
  title,
  className,
  titleClass,
}) => {
  return (
    <div
      className={cn("h-full w-full relative ", className)}
      style={{
        backgroundImage: `url(${image})`, // Replace 'your-image-url' with the actual URL of your image
        backgroundSize: "cover", // Adjust the background size as needed
        backgroundPosition: "center", // Adjust the background position as needed
      }}
    >
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
  );
};

export default NewsFillCard;
