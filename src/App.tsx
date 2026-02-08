import "./styles/index.css";
import { useState } from "react";
import { Button } from "./components/Button";
import { TextField } from "./components/TextField";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div
      data-theme={theme}
      style={{
        background: "var(--color-bg)",
        color: "var(--color-fg)",
        minHeight: "100vh",
        padding: 32,
      }}
    >
      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24 }}>
        <span style={{ fontWeight: 600 }}>Theme:</span>
        <span>{theme}</span>
        <Button
          variant="ghost"
          onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        >
          Toggle
        </Button>
      </div>

      {/* Tu demo actual */}
      <h1>Button</h1>
      <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
        <Button loading>Loading</Button>
        <Button disabled>Disabled</Button>
      </div>

      <h1 style={{ marginTop: 28 }}>TextField</h1>
      <div style={{ display: "grid", gap: 16, maxWidth: 420 }}>
        <TextField
          label="Correo"
          placeholder="nombre@empresa.com"
          helperText="Usa tu correo corporativo"
        />
        <TextField
          label="Contraseña"
          type="password"
          error
          errorMessage="Mínimo 8 caracteres"
        />
      </div>
    </div>
  );
}
