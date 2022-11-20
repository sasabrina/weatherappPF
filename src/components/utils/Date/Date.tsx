import moment from "moment";

export interface DateProps {
  date: number | string;
  format: string;
}

const Date: React.FC<DateProps> = ({ date, format }: DateProps) => {
  const formatedDate = moment(date).format(format);

  return <p>{formatedDate}</p>;
};

export default Date;
