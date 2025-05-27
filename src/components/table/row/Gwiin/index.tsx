type Data = {
  type: string;
  hour: null | string[] | string[][];
  day: null | string[] | string[][];
  month: null | string[] | string[][];
  year: null | string[] | string[][];
};

type RowProps = {
  data: Data;
  head: string[];
};

export default function Gwiin({ data, head }: RowProps) {
  const [label, description] = head;
  const { hour, day, month, year } = data;

  const NoneCell = () => {
    return (
      <td>
        <p className="text-[0.8rem]">(없음)</p>
      </td>
    );
  };

  const Cell = ({ item }: { item: null | string[] | string[][] }) => {
    if (!item) return <NoneCell />;

    const renderItems = (pairs: string[][]) =>
      pairs.map(([text, desc]) => (
        <div key={desc}>
          <p className="text-[1rem] font-bold">{text}</p>
          <p className="text-[0.8rem]">({desc})</p>
        </div>
      ));

    return (
      <td className="py-[8.8px]">
        <div className="flex-center flex-col gap-3">
          {renderItems(typeof item[0] === 'string' ? [item as string[]] : (item as string[][]))}
        </div>
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
      <Cell item={year} />
    </tr>
  );
}
