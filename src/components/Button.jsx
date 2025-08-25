import { useTheme } from "../themes/ThemeContext";

export default function Button() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="theme-switch" aria-label="Cambiar tema claro/oscuro" title="Cambiar tema">
      {/* checked = true cuando estamos en oscuro */}
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        aria-checked={theme === "dark"}
        aria-label="Cambiar tema"
      />
      <span className="slider">
        {/* Opcional: iconos (no texto) para que sea minimal */}
        <span className="icon left" aria-hidden>☀️</span>
        <span className="icon right" aria-hidden>🌙</span>
      </span>
    </label>
  );
}