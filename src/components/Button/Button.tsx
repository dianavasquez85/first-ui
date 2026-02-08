import "./button.css";
import type { ButtonProps } from "./Button.types";

import { cn } from "../../utils/cn";

export function Button({
    variant = "primary",
    size = "md",
    fullWidth,
    loading,
    loadingText = "Cargando…",
    leftIcon,
    rightIcon,
    disabled,
    children,
    ...rest
}: ButtonProps) {
    const isDisabled = Boolean(disabled || loading);

    return (
        <button
            {...rest}
            className={cn(
                "btn",
                `btn--${variant}`,
                `btn--${size}`,
                fullWidth && "btn--full",
                rest.className
            )}
            disabled={isDisabled}
            aria-busy={loading ? "true" : undefined}
        >
            {loading ? <span className="spinner" aria-hidden="true" /> : leftIcon}
            <span className="btn__label">
                {children || <span className="sr-only">{rest["aria-label"]}</span>}
            </span>
            {rightIcon}

            {loading ? (
                <span className="sr-only" aria-live="polite">
                    {loadingText}
                </span>
            ) : null}
        </button>
    );
}
