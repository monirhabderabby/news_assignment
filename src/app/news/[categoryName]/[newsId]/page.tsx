// Packages
import axios from "axios";
import moment from "moment";
import { Varela_Round } from "next/font/google";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

// Local Imports
import { auth } from "@/auth";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/ui/section-title";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CommentType, NewsType } from "../../../../../types";
import CommentForm from "./components/comment-form";
import CommentList from "./components/comment-list";

const inter = Varela_Round({ subsets: ["latin"], weight: ["400"] });

async function getData(id: number) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/news/${id}`
  );
  const res2 = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/comment?newsId=${id}`
  );

  const data: NewsType = res.data;
  const comments: CommentType[] = res2.data;

  return { data, comments };
}

const NewsPage = async ({ params }: { params: { newsId: number } }) => {
  const authUser = await auth();
  const { data: news, comments } = await getData(Number(params.newsId));

  const buffer = await fetch(news.image).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );
  const { base64 } = await getPlaiceholder(buffer);
  return (
    <div className="contain py-10">
      <section className="w-2/3 mx-auto">
        <h3 className="text-[#111111] text-[32px]  font-medium text-center mx-auto">
          {news.title}
        </h3>
        <div className="flex items-center gap-x-2 justify-center">
          <Image
            src={news.user.image}
            alt="profile"
            width={20}
            height={20}
            className="rounded-full shadow-md"
          />
          <span className="text-[#111111] text-[14px]">By</span>
          <div className="text-[#111111] text-[14px]">
            <span className="font-semibold">{news.user.name}</span> -{" "}
            {moment(news.createdAt).format("LL")}
          </div>
        </div>

        <Separator className="mx-auto my-8" />
        <div className="w-full relative h-[400px]">
          <Image
            src={news.image}
            alt="imag"
            fill
            placeholder="blur"
            blurDataURL={base64}
          />
        </div>
        <div className="space-y-8 mt-16">
          <p className={cn("text-[#222222] text-[16px]", inter.className)}>
            {news.text1}
          </p>
          <p className={cn("text-[#222222] text-[16px]", inter.className)}>
            {news.text2}
          </p>
          <p className={cn("text-[#222222] text-[16px]", inter.className)}>
            {news.text3}
          </p>
          <p className={cn("text-[#222222] text-[16px]", inter.className)}>
            {news.text4}
          </p>
        </div>
        <Card className="mt-8">
          <CardContent className="mt-7 flex gap-x-8">
            <Image src={news.user.image} alt="imag" width={150} height={150} />
            <div>
              <h4 className="text-[18px] font-medium">{news.user.name}</h4>
              <a
                href="https://www.monirhrabby.com"
                target="_website"
                className="text-[14px] font-medium underline hover:text-orange-600 duration-300"
              >
                www.monirhrabby.com
              </a>
              <p className="text-[12px] font-medium">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Vestibulum ac vehicula leo. Donec urna lacus gravida ac
                vulputate sagittis tristique vitae lectus. Nullam rhoncus tortor
                at dignissim vehicula.
              </p>
            </div>
          </CardContent>
        </Card>
        <div className="mt-8">
          <SectionTitle title={`${comments.length} Comments`} />
          <CommentForm userId={Number(authUser?.user.id)} newsId={news.id} />
          <CommentList comments={comments} />
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
