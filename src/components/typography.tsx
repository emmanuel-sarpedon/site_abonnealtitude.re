import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export function H1({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children }: PropsWithChildren) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

export function H3({ children }: PropsWithChildren) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function H4({ children }: PropsWithChildren) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}

export function H5({ children }: PropsWithChildren) {
  return (
    <h5 className="scroll-m-20 text-lg font-semibold tracking-tight">
      {children}
    </h5>
  );
}

export function H6({ children }: PropsWithChildren) {
  return (
    <h6 className="scroll-m-20 text-base font-semibold tracking-tight">
      {children}
    </h6>
  );
}

export function P({
  children,
  bold,
  italic,
  muted,
}: PropsWithChildren & { bold?: boolean; italic?: boolean; muted?: boolean }) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", {
        "font-semibold": !!bold,
        italic: !!italic,
        "text-muted-foreground text-sm": !!muted,
      })}
    >
      {children}
    </p>
  );
}

export function Blockquote({ children }: PropsWithChildren) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}

export function Table({ children }: PropsWithChildren) {
  return <table className="w-full">{children}</table>;
}

export function Tr({ children }: PropsWithChildren) {
  return <tr className="even:bg-muted m-0 border-t p-0">{children}</tr>;
}

export function Th({ children }: PropsWithChildren) {
  return (
    <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
      {children}
    </th>
  );
}

export function Td({ children }: PropsWithChildren) {
  return (
    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
      {children}
    </td>
  );
}

export function Ul({ children }: PropsWithChildren) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}

export function Ol({ children }: PropsWithChildren) {
  return <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>;
}

export function InlineCode({ children }: PropsWithChildren) {
  return (
    <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}

export function Large({ children }: PropsWithChildren) {
  return <div className="text-lg font-semibold">{children}</div>;
}

export function Small({ children }: PropsWithChildren) {
  return <small className="text-sm font-medium leading-none">{children}</small>;
}
