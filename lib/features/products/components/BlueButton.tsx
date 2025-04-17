import Link from "next/link";

interface BlueButtonProps {
  href: string;
  children: React.ReactNode;
}

export function BlueButton({ href, children }: BlueButtonProps) {
  return (
    <Link href={href} className="group mt-2 mb-12 inline-block">
      <div className="relative h-12 w-[14.5rem] group-hover:shadow-[8px_8px_16px_rgba(0,102,255,0.4)]">
        <div className="border-secondary-blue group-hover:border-secondary-blue/70 absolute inset-0 border-[1.125px]"></div>
        <div className="group-hover:bg-secondary-blue/70 bg-secondary-blue absolute top-[10%] right-[2%] bottom-[8.33%] left-[2%]"></div>
        <div className="absolute top-[7px] left-[18px] mt-1 h-[27px] w-[11.625rem] text-center text-[18px] leading-[27px] font-bold text-white group-hover:text-right">
          {children}
        </div>
      </div>
    </Link>
  );
}
