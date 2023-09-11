import "./Shared.css";
import { ButtonTypes } from "./types.ts";

interface ButtonProps {
  type: ButtonTypes;
  label: string;
  onClick?(): void;
}

export default function Button({ type, label, onClick }: ButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  );
}
