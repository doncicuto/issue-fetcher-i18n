import i18next from "i18next";
import { hydrate } from "react-dom";
import { initReactI18next } from "react-i18next";
import { RemixBrowser } from "remix";
import { RemixI18NextProvider } from "remix-i18next";

// intialize i18next using initReactI18next and configuring it
i18next
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "es"],
    defaultNS: "common",
    fallbackLng: "en",
    // I recommend you to always disable react.useSuspense for i18next
    react: { useSuspense: false },
  })
  .then(() => {
    // then hydrate your app wrapped in the RemixI18NextProvider
    return hydrate(
      <RemixI18NextProvider i18n={i18next}>
        <RemixBrowser />
      </RemixI18NextProvider>,
      document
    );
  });
