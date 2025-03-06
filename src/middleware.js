import { createLocaleRedirect, pathnameHasLocale } from "@/i18n";

export async function middleware(request) {
  if (!pathnameHasLocale(request)) {
    return createLocaleRedirect(request);
  }
}

export const config = {
  matcher: ["/((?!_next|api|slice-simulator|icon.svg).*)"],
};
