import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
    test("renders label", () => {
        render(<Button>Continuar</Button>);
        expect(screen.getByRole("button", { name: /continuar/i })).toBeInTheDocument();
    });

    test("disabled prevents click", async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        render(
            <Button disabled onClick={onClick}>
                Continuar
            </Button>
        );

        await user.click(screen.getByRole("button", { name: /continuar/i }));
        expect(onClick).not.toHaveBeenCalled();
    });

    test("loading disables button and sets aria-busy", () => {
        render(<Button loading>Guardar</Button>);
        const btn = screen.getByRole("button", { name: /guardar/i });

        expect(btn).toBeDisabled();
        expect(btn).toHaveAttribute("aria-busy", "true");
    });

    test("applies variant and size classes", () => {
        render(
            <Button variant="danger" size="lg">
                Eliminar
            </Button>
        );

        const btn = screen.getByRole("button", { name: /eliminar/i });
        expect(btn.className).toMatch(/btn--danger/);
        expect(btn.className).toMatch(/btn--lg/);
    });
});
