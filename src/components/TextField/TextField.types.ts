import type { InputHTMLAttributes } from "react";

export type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    label?: string;
    helperText?: string;
    error?: boolean;
    errorMessage?: string;
    fullWidth?: boolean;
};
