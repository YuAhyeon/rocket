type Data = {
  type: string;
  hour: string[];
  day: string[];
  month: string[];
  year: string[] | string[][];
};

type RowProps = {
  data: Data;
  head: string[];
};

export default function Row({ data, head }: RowProps) {
  const [label, description] = head;
  const { hour, day, month, year } = data;
  const flatYear = Array.isArray(year[0]) ? (year as string[][]).flat() : (year as string[]);

  const Cell = ({ item }: { item: string[] }) => {
    return (
      <td className="py-[8.8px]">
        <p className="text-[1rem] font-bold">{item[0]}</p>
        <p className="text-[0.8rem]">({item[1]})</p>
      </td>
    );
  };

  return (
    <tr className={`border-b-2 border-b-black`}>
      <th scope="row">
        <p className="text-[1rem] font-bold">{label} </p>
        <p className="text-[0.8rem] font-normal">({description})</p>
      </th>
      <Cell item={hour} />
      <Cell item={day} />
      <Cell item={month} />
      <Cell item={flatYear} />
    </tr>
  );
}
