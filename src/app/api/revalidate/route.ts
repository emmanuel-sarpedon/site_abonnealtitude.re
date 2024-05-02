import { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (data.event === "trigger-test")
      return new Response(null, { status: 200 });

    if (data?.model === "article") {
      const { id } = data.entry;
      revalidateTag(`article_${id}`);
      revalidateTag("articles");

      return new Response(null, { status: 204 });
    }

    return new Response(null, { status: 400 });
  } catch (e) {
    console.log(e);
  }
}
