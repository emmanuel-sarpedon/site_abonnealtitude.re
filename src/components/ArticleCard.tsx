import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { P } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Link2Icon } from "@radix-ui/react-icons";
import { slugify } from "@/lib/slugify";
import { Skeleton } from "@/components/ui/skeleton";

const ArticleCard = (props: {
  id: number;
  Titre: string | null;
  Contenu: BlocksContent | null;
}) => {
  return (
    <Card className={"w-full sm:w-96"}>
      <CardHeader>
        <CardTitle>{props.Titre}</CardTitle>
      </CardHeader>

      <CardContent>
        <P className={"line-clamp-4"}>
          {props.Contenu?.filter(({ type }) => {
            return type === "paragraph";
          }).map(({ children }) => {
            return (
              children
                .filter(({ type }) => type === "text")
                // @ts-ignore (missing type)
                .map(({ text }: { text: string }) => text)
            );
          })}
        </P>
      </CardContent>

      <CardFooter>
        <Button asChild>
          <Link
            href={`/${props.id}/${slugify(props.Titre)}`}
            className={"ml-auto"}
          >
            <Link2Icon className="mr-2 h-4 w-4" />
            {"Lire l'article"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;

export const ArticleCardSkeleton = () => {
  return (
    <Card className={"w-full sm:w-96"}>
      <CardHeader>
        <CardTitle>
          <Skeleton className={"h-12 w-full"} />{" "}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <P className={"flex flex-col gap-y-4"}>
          <Skeleton className={"h-4 w-full"} />
          <Skeleton className={"h-4 w-full"} />
          <Skeleton className={"h-4 w-3/4"} />
          <Skeleton className={"h-4 w-1/2"} />
        </P>
      </CardContent>

      <CardFooter>
        <Button className={"ml-auto"}>
          <Link2Icon className="mr-2 h-4 w-4" />
          {"Lire l'article"}
        </Button>
      </CardFooter>
    </Card>
  );
};