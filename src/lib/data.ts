import { notFound } from "next/navigation";
import { revalidateTag } from "next/cache";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export async function getArticle(
  id: string,
  options?: { revalidate?: boolean },
) {
  if (options?.revalidate) revalidateTag(`article_${id}`);

  const { data } = await fetch(
    `${process.env.STRAPI_URL as string}/api/articles/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: {
        tags: [`article_${id}`],
      },
    },
  ).then((res) => res.json());

  if (!data?.attributes) notFound();

  return data?.attributes;
}

export async function getArticles(): Promise<{
  data: {
    id: number;
    attributes: { Titre: string | null; Contenu: BlocksContent };
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}> {
  return fetch(`${process.env.STRAPI_URL as string}/api/articles`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    next: {
      tags: ["articles"],
    },
  }).then((res) => res.json());
}
