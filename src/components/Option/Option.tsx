export interface OptionProps {
  value: string;
  name: string;
}

const Option: React.FC<OptionProps> = ({ value, name }: OptionProps) => {
  return <option value={value}>{name}</option>;
};

export default Option;
