type Data = {
  type: string;
  hour: string[];
  day: string[];
  month: string[];
  year: string[];
};

type RowProps = {
  data: Data;
  head: string[];
};

export default function Gangi({ data, head }: RowProps) {
  const [label, description] = head;
  const { hour, day, month, year } = data;

  const Cell = ({ item }: { item: string[] }) => {
    const baseStyle = 'rounded-[12.55px] flex-center flex-col w-[55px] h-[55px]';

    const colorClass =
      item[1] === '정' || item[1] === '사'
        ? 'bg-[#C23030] text-white'
        : item[1] === '인'
          ? 'bg-[#18868C] text-white'
          : item[1] === '유'
            ? 'bg-none text-black border border-black'
            : 'bg-black text-white';

    return (
      <td className="py-[8.8px] text-center">
        <div className="w-full h-full flex-center leading-[20px]">
          <div className={`${baseStyle} ${colorClass}`}>
            <p className="text-[0.475rem] font-bold">{item[1]}</p>
            <p className="text-[1.56rem] font-bold">{item[0]}</p>
            <p className="text-[0.523125rem]">{item[2]}</p>
          </div>
        </div>
      </td>
    );
  };

  return (
    <tr
      className={`${description === '천간' ? 'border-b border-b-table-border' : 'border-b-2 border-black'}`}
    >
      <th scope="row">
        <p className="text-[1rem] font-bold">{label} </p>
        <p className="text-[0.8rem] font-normal">({description})</p>
      </th>
      <Cell item={hour} />
      <Cell item={day} />
      <Cell item={month} />
      <Cell item={year} />
    </tr>
  );
}
