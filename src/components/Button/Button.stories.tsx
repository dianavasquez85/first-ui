import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    args: {
        children: "Continuar",
        variant: "primary",
        size: "md"
    },
    argTypes: {
        leftIcon: { control: false },
        rightIcon: { control: false }
    },
    parameters: {
        docs: {
            description: {
                component:
                    "Button base de la librería. Incluye estados (hover/disabled/loading), variantes, tamaños y consideraciones de accesibilidad."
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Disabled: Story = {
    args: { disabled: true }
};

export const Loading: Story = {
    args: { loading: true }
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
        </div>
    )
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    )
};

export const FullWidth: Story = {
    render: () => (
        <div style={{ width: 360 }}>
            <Button fullWidth>Full width</Button>
        </div>
    )
};

export const DarkTheme: Story = {
    render: () => (
        <div data-theme="dark" style={{ padding: 16, borderRadius: 12 }}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Button variant="primary">Primary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
            </div>
        </div>
    )
};

export const AriaLabel: Story = {
    render: () => <Button aria-label="Continuar al siguiente paso">→</Button>
};


