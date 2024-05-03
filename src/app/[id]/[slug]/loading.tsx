import { Skeleton } from "@/components/ui/skeleton";
import { H1, P } from "@/components/Typography";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";

const Loading = () => {
  return (
    <main className={"mx-auto max-w-[650px] px-10 pb-32 md:px-0"}>

      <div className={"mb-28 mt-20 xl:mb-40 xl:mt-32"}>
        <H1 className={"mb-10"}>
          <Skeleton className={"h-20 w-full"} />
        </H1>
        <Skeleton className={"h-4 w-full"} />
        <P italic muted className={"flex items-center"}>
          <CalendarIcon className={"mr-2 h-4 w-4"} />
          <Skeleton className={"h-4 w-full"} />
        </P>
        <Separator className="my-4" />
      </div>

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
