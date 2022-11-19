import { ChangeEvent } from "react";
import styles from "./select.module.scss";

export interface SelectProps {
  name: string;
  optionPlaceholder?: string;
  value: string;
  onchange: (e: ChangeEvent<HTMLSelectElement>) => void;
  children: JSX.Element | JSX.Element[];
}

const Select: React.FC<SelectProps> = ({
  name,
  optionPlaceholder,
  value,
  onchange,
  children,
}: SelectProps) => {
  return (
    <select
      className={styles.select}
      name={name}
      id={name}
      value={value}
      onChange={onchange}
    >
      {optionPlaceholder && (
        <option disabled value="">
          {optionPlaceholder}
        </option>
      )}
      {children}
    </select>
  );
};

export default Select;
