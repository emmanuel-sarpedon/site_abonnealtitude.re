import RichContentBlocks from "@/components/BlocksRenderer";
import { H1, Large, P, Ul } from "@/components/Typography";
import { getArticle } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, CalendarIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import ReadingTime from "@/components/ReadingTime";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/lib/formatDate";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { extractHeading } from "@/lib/extractHeading";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { slugify } from "@/lib/slugify";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { Titre } = await getArticle(params.id);

  return {
    title: Titre,
    alternates: {
      canonical: new URL(
        `/${params.id}/${slugify(Titre)}`,
        process.env.NEXT_PUBLIC_URL,
      ),
    },
  };
}

const Page = async ({ params }: { params: { id: string } }) => {
  const { Titre, Contenu, createdAt, updatedAt } = await getArticle(params.id);

  const headings = extractHeading(Contenu);

  return (
    <main className={"mx-auto max-w-[650px] px-10 pb-32 pt-20 md:px-0"}>
      <Breadcrumb className={"my-10"}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={"/"}>Tous nos articles</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>{Titre}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div>
        <H1 className={"mb-10"}>{Titre}</H1>
        <ReadingTime Contenu={Contenu} />
        <P italic muted className={"flex items-center"}>
          <CalendarIcon className={"mr-2 h-4 w-4"} />
          {`Publié le ${formatDate(createdAt)} - Mis à jour le ${formatDate(updatedAt)}`}
        </P>
        <Separator className="mt-4" />
      </div>

      <nav className={"mb-20 border-l-8 pl-10"}>
        <Large className={"mt-10"}>Sommaire</Large>
        <Ul className={"m-0"}>
          {headings
            .filter(({ level }) => level > 1)
            .map((heading) => (
              <li
                key={heading.hash}
                className={cn("ml-0 list-none hover:font-semibold", {
                  // "ml-2": heading.level === 2,
                  "ml-4": heading.level === 3,
                  "ml-6": heading.level === 4,
                  "ml-8": heading.level === 5,
                  "ml-10": heading.level === 6,
                })}
              >
                <Link href={`#${heading.hash}`}>{heading.text}</Link>
              </li>
            ))}
        </Ul>
      </nav>

      <RichContentBlocks content={Contenu} />

      <BackToArticlesList className={"mt-32"} />
    </main>
  );
};

export default Page;

const BackToArticlesList = ({ className }: { className?: string }) => {
  return (
    <Button asChild className={className}>
      <Link href={"/"}>
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        Voir tous nos articles
      </Link>
    </Button>
  );
};
