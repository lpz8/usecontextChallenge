import { ThemeProvider, useTheme } from "./themes/ThemeContext";
import RoutesApp from "./routes/RoutesApp";
import "./index.css";
import "./App.css";


function AppContent() {
  const { theme } = useTheme();
  return (
    <section className={`App ${theme}`}>
      <RoutesApp />
    </section>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}