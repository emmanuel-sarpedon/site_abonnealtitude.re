"use client";

import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import {
  Blockquote,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  InlineCode,
  Ol,
  P,
  Ul,
} from "@/components/Typography";
import Link from "next/link";
import Image from "next/image";

const RichContentBlocks = ({
  content,
  hashMaps,
}: {
  content: BlocksContent;
  hashMaps: Record<string, string>;
}) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => <P>{children}</P>,

        heading: ({ children, level }) => {
          // @ts-ignore (missing type)
          const text = children.at(0).props.text;

          // const hash = createHash("sha256")
          //   .update(JSON.stringify({ text, level }))
          //   .digest("hex");
          const hash = hashMaps[text];

          switch (level) {
            case 1:
              return <H1 id={hash}>{children}</H1>;
            case 2:
              return <H2 id={hash}>{children}</H2>;
            case 3:
              return <H3 id={hash}>{children}</H3>;
            case 4:
              return <H4 id={hash}>{children}</H4>;
            case 5:
              return <H5 id={hash}>{children}</H5>;
            case 6:
              return <H6 id={hash}>{children}</H6>;
            default:
              return <H1 id={hash}>{children}</H1>;
          }
        },

        list: ({ children, format }) =>
          format === "ordered" ? <Ol>{children}</Ol> : <Ul>{children}</Ul>,

        quote: ({ children }) => <Blockquote>{children}</Blockquote>,

        code: ({ children, plainText }) => (
          <InlineCode>{children || plainText}</InlineCode>
        ),

        image: ({ image }) => {
          return (
            <Image
              src={image.url}
              alt={image.alternativeText || ""}
              width={image.width}
              height={image.height}
              className={"w-full"}
            />
          );
        },

        link: ({ children, url }) => <Link href={url}>{children}</Link>,
      }}
    />
  );
};

export default RichContentBlocks;
