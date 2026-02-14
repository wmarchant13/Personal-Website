export const assetPath = (p: string) => {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${p}`;
};
