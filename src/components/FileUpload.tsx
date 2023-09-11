import { ChangeEvent } from "react";
import "./Shared.css";

interface FileUploadProps {
  label: string;
  id?: string;
  acceptedType: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

export default function FileUpload({
  label,
  id,
  acceptedType,
  onChange,
}: FileUploadProps) {
  return (
    <div className="flex flex-row">
      <label htmlFor={id} className="width-small align-left">
        {label}
      </label>
      <input
        type="file"
        id={id}
        accept={acceptedType}
        onChange={(event) => onChange(event)}
        className="width-small"
      />
    </div>
  );
}
