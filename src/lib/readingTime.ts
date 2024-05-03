import { BlocksContent } from "@strapi/blocks-react-renderer";

export const readingTime = (content: BlocksContent | null): number => {
  const text = content
    ?.filter(({ type }) => type === "paragraph" || type === "heading")
    .map(({ children }) => {
      return (
        children
          .filter(({ type }) => type === "text")
          // @ts-ignore (missing type)
          .map(({ text }: { text: string }) => text)
          .join(" ")
      );
    })
    .join(" ");

  if (!text) return 0;

  const WORDS_PER_MINUTE = 200;

  const words = text.split(/\s+/).length;

  return Math.ceil(words / WORDS_PER_MINUTE);
};
