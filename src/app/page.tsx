import { getArticles } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";
import { H1, P } from "@/components/Typography";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const { data, meta } = await getArticles({
    limit: 5,
    page: +searchParams.page,
  });
  const { page, pageCount } = meta.pagination;

  return (
    <main className="mx-auto min-h-screen max-w-[1400px] px-10 py-32 2xl:px-0">
      <H1 className={"mb-32 "}>Nos derniers articles</H1>

      <div className={"flex flex-wrap justify-center gap-10 lg:justify-start"}>
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

      {pageCount > 1 ? (
        <Pagination className={"mt-12"}>
          <PaginationContent>
            {Array.from({ length: pageCount }, (_, i) => {
              return (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={page === i + 1}
                    href={`?page=${i + 1}`}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
          </PaginationContent>
        </Pagination>
      ) : null}
    </main>
  );
}
