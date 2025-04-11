import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    return (
        <section className="bg-primary-darkBlue flex h-[6.5rem] items-center justify-evenly">
            <Image src="Logos.svg" alt="logo image" width={228} height={40} />
            <nav className="flex items-center gap-8">
                <Link
                    href="/"
                    className="text-base font-normal text-white/70 uppercase"
                >
                    Home
                </Link>
                <Link
                    href="/"
                    className="text-base font-normal text-white/70 uppercase"
                >
                    Notícias
                </Link>
                <Link
                    href="/"
                    className="text-base font-normal text-white/70 uppercase"
                >
                    Loja &#5167;
                </Link>
                <Link
                    href="/"
                    className="text-base font-normal text-white/70 uppercase"
                >
                    Estatísticas &#5169;
                </Link>
                <Link
                    href="/"
                    className="text-base font-normal text-white/70 uppercase"
                >
                    Campeonato
                </Link>
                <Link
                    href="/"
                    className="text-base font-normal text-white/70 uppercase"
                >
                    Suporte
                </Link>
                <Image src="Cart.svg" alt="cart" width={36} height={24} />
            </nav>
            <div className="flex items-center gap-8">
                <button className="bg-primary-pink flex h-12 w-56 items-center justify-center gap-4 font-bold text-white uppercase shadow-[0_0_0_4px_#000916,0_0_0_6px_#e73387]">
                    sair
                    <Image
                        src="Logout.svg"
                        alt="Logout icon"
                        aria-hidden
                        width={24}
                        height={24}
                    />
                </button>
                <Image src="World.svg" alt="world icon" width={20} height={20} />
                <Image src="User.svg" alt="user icon" width={40} height={40} />
            </div>
        </section>
    );
}
