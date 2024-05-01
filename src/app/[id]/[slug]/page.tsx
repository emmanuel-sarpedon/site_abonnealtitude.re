import RichContentBlocks from "@/components/blocksRenderer";
import { notFound } from "next/navigation";
import { H1 } from "@/components/typography";

const Page = async ({ params }: { params: { id: string } }) => {
  const { data } = await fetch(
    `${process.env.STRAPI_URL as string}/api/articles/${params.id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    },
  ).then((res) => res.json());

  if (!data?.attributes) notFound();

  return (
    <main className={"mx-auto max-w-[650px] px-10 pb-32 md:px-0"}>
      <H1 className={"my-32"}>{data.attributes.Titre}</H1>
      <RichContentBlocks content={data.attributes.Contenu} />
    </main>
  );
};

export default Page;
