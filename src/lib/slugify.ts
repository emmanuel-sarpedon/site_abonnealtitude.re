import slugifyLib from "slugify";

export const slugify = (str?: string | null) => {
  if (!str) return str;
  return slugifyLib(str, { lower: true, strict: true, locale: "fr" });
};
