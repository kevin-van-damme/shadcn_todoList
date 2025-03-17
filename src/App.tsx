import Layout from "./components/Layout";
import { ThemeProvider } from "./components/ui/theme-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout />
    </ThemeProvider>
  );
};
export default App;
