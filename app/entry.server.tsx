import i18next from "i18next";
import { renderToString } from "react-dom/server";
import { initReactI18next } from "react-i18next";
import type { EntryContext } from "remix";
import { RemixServer } from "remix";
import { RemixI18NextProvider } from "remix-i18next";

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  // Here you also ned to initialize i18next using initReactI18next, you should
  // use the same configuration as in your client side.
  await i18next.use(initReactI18next).init({
    supportedLngs: ["en", "es"],
    defaultNS: "common",
    fallbackLng: "en",
    react: { useSuspense: false },
  });

  // Then you can render your app wrapped in the RemixI18NextProvider as in the
  // entry.client file
  const markup = renderToString(
    <RemixI18NextProvider i18n={i18next}>
      <RemixServer context={remixContext} url={request.url} />
    </RemixI18NextProvider>
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
