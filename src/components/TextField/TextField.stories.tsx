import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
    title: "Components/TextField",
    component: TextField,
    args: {
        label: "Correo",
        placeholder: "nombre@empresa.com",
        helperText: "Usa tu correo corporativo",
        fullWidth: true
    }
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {};

export const Disabled: Story = {
    args: { disabled: true, helperText: "Este campo está deshabilitado" }
};

export const Error: Story = {
    args: { error: true, errorMessage: "El correo no es válido" }
};

export const DarkTheme: Story = {
    render: (args) => (
        <div data-theme="dark" style={{ padding: 16, borderRadius: 12, maxWidth: 420 }}>
            <TextField {...args} />
        </div>
    )
};
