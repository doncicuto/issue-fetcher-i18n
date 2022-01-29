import { LoaderFunction } from "remix";
import { useTranslation } from "react-i18next";
import { i18n } from "~/i18n.server";
import { TestComponent } from "~/components/TestComponent";

export const loader: LoaderFunction = async ({ request }) => {
  return {
    i18n: await i18n.getTranslations(request, ["common"]),
  };
};

export default function Index() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-1 flex-col overflow-y-auto px-8 my-20 mx-20 text-gray-600">
      <h2>{t("hello")}</h2>
      <TestComponent />
    </div>
  );
}
