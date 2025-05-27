import Image from 'next/image';
import { Table } from '@/components/table';

type User = {
  name: string;
  birth: string;
};

type ResultProps = {
  user: User;
};

export default function Result({ user }: ResultProps) {
  const date = new Date(user.birth);
  const formatted = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

  return (
    <div className="relative top-[-22px] w-full h-fit mb-[80px] px-[12px]">
      <div className="relative w-full border-[3px] border-[#1B2F49]">
        <div className="absolute h-full top-0 left-[5px] border border-border-muted" />
        <div className="absolute h-full top-0 right-[5px] border border-border-muted" />
        <div className="absolute w-full top-[5px] left-0 border border-border-muted" />
        <div className="absolute w-full bottom-[5px] left-0 border border-border-muted" />
        <div className="px-[20px] pt-[40px] pb-[33px] text-center bg-table-bg">
          <div className="absolute left-[5px] top-[3%] w-[20.72%] h-[10.12%]">
            <Image
              src="/images/left-pattern.png"
              alt="표 왼쪽 문양"
              fill
              unoptimized
              sizes="100vw"
              quality={100}
              priority
              placeholder="empty"
              draggable="false"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="absolute right-[5px] top-[1%] w-[18.72%] h-[8.12%]">
            <Image
              src="/images/right-pattern.png"
              alt="표 왼쪽 문양"
              fill
              unoptimized
              sizes="100vw"
              quality={100}
              priority
              placeholder="empty"
              draggable="false"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p className="text-[1rem]">{user.name}님의 사주</p>
          <p className="text-[1.25rem] font-bold">{formatted}</p>
          <Table />
        </div>
      </div>
    </div>
  );
}
