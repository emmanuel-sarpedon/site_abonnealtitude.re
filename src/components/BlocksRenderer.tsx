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

const RichContentBlocks = ({ content }: { content: BlocksContent }) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => <P>{children}</P>,

        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <H1>{children}</H1>;
            case 2:
              return <H2>{children}</H2>;
            case 3:
              return <H3>{children}</H3>;
            case 4:
              return <H4>{children}</H4>;
            case 5:
              return <H5>{children}</H5>;
            case 6:
              return <H6>{children}</H6>;
            default:
              return <H1>{children}</H1>;
          }
        },

        list: ({ children, format }) =>
          format === "ordered" ? <Ol>{children}</Ol> : <Ul>{children}</Ul>,

        quote: ({ children }) => <Blockquote>{children}</Blockquote>,

        code: ({ children, plainText }) => (
          <InlineCode>{children || plainText}</InlineCode>
        ),

        image: ({ children, image }) => (
          <Image
            src={image.url}
            alt={image.alternativeText || ""}
            width={image.width}
            height={image.height}
          />
        ),

        link: ({ children, url }) => <Link href={url}>{children}</Link>,
      }}
      modifiers={{
        bold: ({ children }) => <P>{children}</P>,
        italic: ({ children }) => <P italic>{children}</P>,
      }}
    />
  );
};

export default RichContentBlocks;
