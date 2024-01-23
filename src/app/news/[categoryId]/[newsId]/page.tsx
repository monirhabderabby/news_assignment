import { auth } from "@/auth";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/ui/section-title";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import moment from "moment";
import { Varela_Round } from "next/font/google";
import Image from "next/image";
import CommentForm from "./components/comment-form";

const inter = Varela_Round({ subsets: ["latin"], weight: ["400"] });

const NewsPage = async () => {
  const authUser = await auth();
  return (
    <div className="contain py-10">
      <section className="w-2/3 mx-auto">
        <h3 className="text-[#111111] text-[32px]  font-medium text-center mx-auto">
          WordPress News Magazine Charts the Most Chic and Fashionable Women of
          New York City
        </h3>
        <div className="flex items-center gap-x-2 justify-center">
          <Image
            src={authUser?.user.image as string}
            alt="profile"
            width={20}
            height={20}
            className="rounded-full shadow-md"
          />
          <span className="text-[#111111] text-[14px]">By</span>
          <div className="text-[#111111] text-[14px]">
            <span className="font-semibold">Armin Vans</span> -{" "}
            {moment(new Date("06-12-2015")).format("LL")}
          </div>
        </div>

        <Separator className="mx-auto my-8" />
        <div className="w-full relative h-[400px]">
          <Image src="/party.jpg" alt="imag" fill />
        </div>
        <div className="space-y-8 mt-16">
          <p className={cn("text-[#222222] text-[16px]", inter.className)}>
            We woke reasonably late following the feast and free flowing wine
            the night before. After gathering ourselves and our packs, we headed
            down to our homestay family’s small dining room for breakfast. We
            were making our way to the Rila Mountains, where we were visiting
            the Rila Monastery where we enjoyed scrambled eggs, toast, mekitsi,
            local jam and peppermint tea.
          </p>
          <p className={cn("text-[#222222] text-[16px]", inter.className)}>
            We woke reasonably late following the feast and free flowing wine
            the night before. After gathering ourselves and our packs, we headed
            down to our homestay family’s small dining room for breakfast.
          </p>
          <p className={cn("text-[#222222] text-[16px]", inter.className)}>
            We woke reasonably late following the feast and free flowing wine
            the night before. After gathering ourselves and our packs, we headed
            down to our homestay family’s small dining room for breakfast.
          </p>
          <p className={cn("text-[#222222] text-[16px]", inter.className)}>
            We woke reasonably late following the feast and free flowing wine
            the night before. After gathering ourselves and our packs, we headed
            down to our homestay family’s small dining room for breakfast.
          </p>
        </div>
        <Card className="mt-8">
          <CardContent className="mt-7 flex gap-x-8">
            <Image src="/party.jpg" alt="imag" width={150} height={150} />
            <div>
              <h4 className="text-[18px] font-medium">Monir Hossain</h4>
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
          <SectionTitle title="Comments" />
          <CommentForm />
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
