import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ languages, navigation, settings, children }) => {
  return (
    <div className="text-slate-800">
      <Header
        languages={languages}
        navigation={navigation}
        settings={settings}
      />
      <main>{children}</main>
      <Footer settings={settings} />
    </div>
  );
};
