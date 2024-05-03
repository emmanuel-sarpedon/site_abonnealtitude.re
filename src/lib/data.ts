import { notFound } from "next/navigation";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import qs from "qs";

export async function getArticle(id: string) {
  const { data } = await fetch(`${process.env.STRAPI_URL}/api/articles/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    next: {
      tags: [`article_${id}`],
    },
  }).then((res) => res.json());

  if (!data?.attributes) notFound();

  return data?.attributes;
}

export async function getArticles(options?: {
  page?: number;
  limit?: number;
}): Promise<{
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
  return fetch(
    `${process.env.STRAPI_URL as string}/api/articles?${qs.stringify(
      {
        pagination: {
          page: Math.max(options?.page || 1, 1),
          pageSize: options?.limit || 10,
        },
      },
      { encodeValuesOnly: true },
    )}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: {
        tags: ["articles"],
      },
    },
  ).then((res) => res.json());
}
