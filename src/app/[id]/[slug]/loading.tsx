import { Skeleton } from "@/components/ui/skeleton";
import { H1 } from "@/components/Typography";
import { cn } from "@/lib/utils";

const Loading = () => {
  return (
    <main className={"mx-auto max-w-[650px] px-10 pb-32 md:px-0"}>
      <H1 className={"my-32"}>
        <Skeleton className={"h-20 w-full"} />
      </H1>

      <div className={"flex flex-col gap-y-8"}>
        {Array.from({ length: 20 }).map((_, i) => (
          <Skeleton
            className={cn("w-full", {
              "h-4": i % 2 === 0,
              "h-8": i % 2 === 1,
              "h-12": i % 5 === 0,
            })}
            key={i}
          />
        ))}
      </div>
    </main>
  );
};

export default Loading;
