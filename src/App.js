import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  // eslint-disable-next-line no-undef
  const { t, i18n } = useTranslation();
  return (
    <div>
      <button onClick={() => i18n.changeLanguage("ja")}>click</button>
      <h1>{t("main.title")}</h1>
    </div>
  );
}

export default App;
