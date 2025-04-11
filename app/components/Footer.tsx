import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-midBlue flex h-[12.75rem] items-center justify-center gap-24">
      <nav className="flex gap-8">
        <Link href="/" className="text-primary-lightGray underline">
          Política de privacidade
        </Link>
        <Link href="/" className="text-primary-lightGray underline">
          Termos de serviço
        </Link>
      </nav>
      <Image
        src="LogoWins.svg"
        alt="logo image"
        aria-hidden
        width={194}
        height={32}
      />
      <Image
        src="SocialMedia.svg"
        alt="Ícones de mídias sociais"
        width={220}
        height={38}
      />
      <Image
        src="PAL.svg"
        alt="Classificação indicativa"
        width={220}
        height={38}
      />
    </footer>
  );
}
