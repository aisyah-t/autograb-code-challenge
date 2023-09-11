import "./Shared.css";

interface SelectOption {
  name: string;
  value: string;
}

interface SelectProps {
  label: string;
  options: SelectOption[];
  value: string;
  onChange(value: string): void;
  id?: string;
}

export default function Select({
  label,
  options,
  value,
  onChange,
  id,
}: SelectProps) {
  return (
    <div className="flex flex-row">
      <label htmlFor={id} className="width-small align-left">
        {label}
      </label>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        id={id}
      >
        <option value="" disabled>
          {label.toLowerCase()}
        </option>
        {options.map(({ name, value }) => (
          <option value={value} key={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
