import { redirectToPreviewURL } from "@prismicio/next";
import { createClient } from "@/prismicio";

/**
 * @param {import("next/server").NextRequest} request
 */
export async function GET(request) {
  const client = createClient();

  await redirectToPreviewURL({ client, request });
}
