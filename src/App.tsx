import { Button } from "./components/Button";
import { TextField } from "./components/TextField";

function App() {
  return (
    <div style={{ padding: 40, display: "grid", gap: 12, maxWidth: 420 }}>
      <h1>Button</h1>

      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="ghost">Ghost</Button>

      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
      <Button fullWidth>Full width</Button>

      <div data-theme="dark" style={{ padding: 16, borderRadius: 12 }}>
        <Button variant="ghost">Ghost in dark</Button>
      </div>

      <h1>TextField</h1>
      <div style={{ padding: 40, display: "grid", gap: 12, maxWidth: 420 }}>

        <TextField label="Correo" placeholder="nombre@empresa.com" helperText="Usa tu correo corporativo" fullWidth />
        <TextField label="Contraseña" type="password" error errorMessage="Mínimo 8 caracteres" fullWidth />
        <Button fullWidth>Continuar</Button>
      </div>
    </div>

  );
}

export default App;
