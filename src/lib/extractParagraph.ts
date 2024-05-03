import { BlocksContent } from "@strapi/blocks-react-renderer";

export const extractParagraph = (content: BlocksContent | null) => {
  return content
    ?.filter(({ type }) => type === "paragraph")
    .map(({ children }) => {
      return (
        children
          .filter(({ type }) => type === "text")
          // @ts-ignore (missing type)
          .map(({ text }: { text: string }) => text)
      );
    });
};
