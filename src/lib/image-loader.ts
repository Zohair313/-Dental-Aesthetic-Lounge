"use client";

/**
 * Custom image loader for Next.js static export on GitHub Pages.
 * Automatically prefixes the repository subpath (basePath) to all image URLs.
 */
export default function imageLoader({ src }: { src: string }) {
  if (
    !src ||
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:") ||
    src.startsWith("blob:")
  ) {
    return src;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (basePath && src.startsWith(basePath)) {
    return src;
  }

  const clean = src.startsWith("/") ? src : `/${src}`;
  return `${basePath}${clean}`;
}
