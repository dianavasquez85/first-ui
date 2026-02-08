import { useId } from "react";
import "./textfield.css";
import type { TextFieldProps } from "./TextField.types";

import { cn } from "../../utils/cn";

export function TextField({
    id,
    label,
    helperText,
    error,
    errorMessage,
    fullWidth,
    disabled,
    className,
    "aria-describedby": ariaDescribedBy,
    ...rest
}: TextFieldProps) {
    const autoId = useId();
    const inputId = id ?? `tf-${autoId}`;

    const helperId = helperText ? `${inputId}-help` : undefined;
    const errorId = error && errorMessage ? `${inputId}-error` : undefined;

    // Unimos describedby externo + helper/error generados
    const describedBy = [ariaDescribedBy, helperId, errorId].filter(Boolean).join(" ") || undefined;

    return (
        <div className={cn("tf", fullWidth && "tf--full", className)}>
            {label ? (
                <label className="tf__label" htmlFor={inputId}>
                    {label}
                </label>
            ) : null}

            <input
                {...rest}
                id={inputId}
                disabled={disabled}
                aria-invalid={error ? "true" : undefined}
                aria-describedby={describedBy}
                className={cn("tf__input", error && "tf__input--error")}
            />

            {helperText ? (
                <div className="tf__helper" id={helperId}>
                    {helperText}
                </div>
            ) : null}

            {error && errorMessage ? (
                <div className="tf__error" id={errorId} role="alert">
                    {errorMessage}
                </div>
            ) : null}
        </div>
    );
}
