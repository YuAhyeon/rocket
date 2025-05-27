import Image from 'next/image';
import { user } from '@/app/data';
import { Result } from '@/components/saju';

export default function P1() {
  return (
    <section className="relative w-full h-full overflow-y-auto scrollbar-hide">
      <div className="relative w-full aspect-[375/1403]">
        <Image
          src="/images/p1.png"
          alt="제 1장, 인트로 이미지"
          fill
          unoptimized
          sizes="100vw"
          quality={100}
          priority
          placeholder="empty"
          draggable="false"
          style={{ objectFit: 'contain' }}
        />
        <div className="z-10 absolute w-[57.3%] h-[8.27%] left-[6.4%] top-[45.3%] flex-center">
          <p className="text-center text-[1.0rem]">
            이제 본격적으로 <br />
            {user.name}님의 사주팔자를 <br />
            분석해볼 차례네요.
          </p>
        </div>
        <div className="z-10 absolute w-[63.73%] h-[8.27%] left-[6.4%] top-[70.7%] flex-center">
          <p className="text-center text-[1.0rem]">
            제가 {user.name}님의 사주를 <br />
            보기 쉽게 표로 정리했어요
          </p>
        </div>
      </div>
      <Result user={user} />
    </section>
  );
}
