import { getArticles } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";
import { H1, P } from "@/components/Typography";

export default async function Home() {
  const { data } = await getArticles();

  return (
    <main className="mx-auto min-h-screen max-w-[1400px] px-10 py-32 2xl:px-0">
      <H1 className={"mb-32 "}>Nos derniers articles</H1>

      <div className={"flex flex-wrap gap-10 "}>
        {data?.length ? (
          data.map(({ id, attributes }) => (
            <ArticleCard
              key={id}
              id={id}
              Titre={attributes.Titre}
              Contenu={attributes.Contenu}
            />
          ))
        ) : (
          <P>Aucun article pour le moment...</P>
        )}
      </div>
    </main>
  );
}
