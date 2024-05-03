import { BlocksContent } from "@strapi/blocks-react-renderer";
import { createHash } from "crypto";

export const extractHeading = (
  content: BlocksContent | null,
): { text: string; level: number; hash: string }[] => {
  if (!content) return [];

  return (
    content
      ?.filter(({ type }) => type === "heading")
      // @ts-ignore (missing type)
      .map(({ children, level }) => {
        return (
          children
            .filter(({ type }) => type === "text")
            // @ts-ignore (missing type)
            .map(({ text }) => ({
              text,
              level,
              hash: createHash("sha256")
                .update(JSON.stringify({ text, level }))
                .digest("hex"),
            }))
        );
      })
      .flat()
  );
};
