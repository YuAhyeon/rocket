import { columnHead, rowHead, data } from '@/app/data';
import { NormalRow, GwiRow, Data } from '@/app/types';
import { Row, Gangi, Gwiin } from '@/components/table';

export default function Table() {
  const isNormalRow = (row: Data): row is NormalRow => {
    return row.type !== 'gwi';
  };
  const isGwiRow = (row: Data): row is GwiRow => {
    return row.type === 'gwi';
  };

  const rows: NormalRow[] = data.filter(isNormalRow);
  const gwiRow = data.at(-1);

  return (
    <table className="w-full table-fixed border-collapse border-spacing-0 border-2 border-black border-l-0 border-t-0 mt-[20px]">
      <colgroup>
        <col className="border-r-2 border-black" />
        <col className="border-r border-table-border" />
        <col className="border-r border-table-border" />
        <col className="border-r border-table-border" />
        <col className="" />
      </colgroup>
      <thead className="text-[1.3075rem]">
        <tr className="border-b-2 border-black">
          {columnHead.map((head) => (
            <th key={head} className="leading-loose">
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((rowData, index) => {
          return rowData.type === 'gan' || rowData.type === 'ji' ? (
            <Gangi key={rowData.type} data={rowData} head={rowHead[index]} />
          ) : (
            <Row key={rowData.type} data={rowData} head={rowHead[index]} />
          );
        })}
        {gwiRow && isGwiRow(gwiRow) && <Gwiin data={gwiRow} head={rowHead.at(-1)!} />}
      </tbody>
    </table>
  );
}
