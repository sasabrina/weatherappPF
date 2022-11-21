import moment from "moment";

export interface DateProps {
  date: number;
  format: string;
}

const Date: React.FC<DateProps> = ({ date, format }: DateProps) => {
  const formatedDate = moment(date * 1000).format(format);

  return <p>{formatedDate}</p>;
};

export default Date;
