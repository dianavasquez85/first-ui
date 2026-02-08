import { render, screen } from "@testing-library/react";
import { TextField } from "./TextField";

describe("TextField", () => {
    test("associates label with input", () => {
        render(<TextField label="Correo" />);
        const input = screen.getByLabelText("Correo");
        expect(input).toBeInTheDocument();
    });

    test("sets aria-invalid and renders error message", () => {
        render(<TextField label="Correo" error errorMessage="Error de validación" />);
        const input = screen.getByLabelText("Correo");
        expect(input).toHaveAttribute("aria-invalid", "true");
        expect(screen.getByRole("alert")).toHaveTextContent("Error de validación");
    });

    test("wires helperText via aria-describedby", () => {
        render(<TextField label="Correo" helperText="Ayuda" />);
        const input = screen.getByLabelText("Correo");
        const describedBy = input.getAttribute("aria-describedby");
        expect(describedBy).toBeTruthy();
        // La ayuda debe existir y estar referenciada
        expect(screen.getByText("Ayuda")).toBeInTheDocument();
    });
});
