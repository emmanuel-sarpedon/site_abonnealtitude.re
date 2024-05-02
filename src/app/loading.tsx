import { H1 } from "@/components/Typography";
import { ArticleCardSkeleton } from "@/components/ArticleCard";

const Loading = () => {
  return (
    <main className="mx-auto min-h-screen max-w-[1400px] px-10 py-32 2xl:px-0">
      <H1 className={"mb-32 "}>Nos derniers articles</H1>

      <div className={"flex flex-wrap gap-10 "}>
        {Array.from({ length: 6 }).map((_, index) => (
          <ArticleCardSkeleton key={index} />
        ))}
      </div>
    </main>
  );
};

export default Loading;
