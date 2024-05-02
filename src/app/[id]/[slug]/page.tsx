import RichContentBlocks from "@/components/BlocksRenderer";
import { H1 } from "@/components/Typography";
import { getArticle } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { Titre } = await getArticle(params.id);

  return {
    title: Titre,
  };
}

const Page = async ({ params }: { params: { id: string } }) => {
  const { Titre, Contenu } = await getArticle(params.id);

  return (
    <main className={"relative mx-auto max-w-[650px] px-10 pb-32 md:px-0"}>
      <H1 className={"my-32"}>{Titre}</H1>

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
