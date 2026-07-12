import { notFound } from "next/navigation";

/**
 * Catch-all for URLs that match no real route. Without it, unmatched paths
 * never enter the [lang] layout (the root layout lives in a dynamic segment)
 * and would get the bare framework 404 instead of ../not-found.tsx.
 */
export default function CatchAllPage(): never {
  notFound();
}
