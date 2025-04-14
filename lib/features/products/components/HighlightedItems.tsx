import Link from "next/link";
import { HighlightedItemCard } from "./HighlightedItemCard";

type Props = {};

export function HighlightedItems(props: Props) {
    return (
        <section className="flex h-[56.25rem] flex-col items-center justify-center ">
            <div className="flex flex-col justify-center w-[78rem] gap-4 ">
                <h2 className="ml-4 text-[40px] mb-8 font-bold uppercase">
                    Items em
                    <span className="ml-1 bg-secondary-blue px-4 text-[40px] font-bold text-white uppercase">
                        destaque
                    </span>
                </h2>
                <div className="grid grid-cols-3 place-items-center">
                    <HighlightedItemCard
                        size="large"
                        backgroundImage="/HighlightedShape-0.png"
                        name="Cyber Grediant Cup"
                        origin="Desafios Desérticos"
                        image="https://s3-alpha-sig.figma.com/img/e2c3/d9b8/0df16a8c453962d1f4cbaa14622982b0?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FeloV-k10ZqvgVM6wzu2GPNx4HhqLknOhOwGFTgz7~aFFd8oSYglGlUWVFABnVZZneEFRZBLLktV2~fk~TO9hmDogJx5V9GumP0-1AggAsSyjTlqhpYVW1i9slWYXdk1Xgr-yAZSl85gV5bBmF1PDDI6CjJW879MFnfpq0S0tTLW47HmcMAwfxzt4GBXtycnSFhLAPAf~2nm2SKVXmpKYwkyC4oxWP6Hee4JNx4gVCHZp4pRBvvmN9ta-JJKs7PJEi0sHwWmJm-JxFuIC48uIke9H3v2uM7Nda42I3IgilU6zOOCe98Tdb~0rQaw8wbsYYjq6b-jtYq1wCa0ewzCZg__"
                    />

                    <div className="flex h-[30rem] w-[27rem] flex-col items-center justify-between gap-4">
                        <HighlightedItemCard
                            size="small"
                            backgroundImage="/HighlightedShape-1.png"
                            name="Headband Cyber"
                            origin="Piratas Espaciais"
                            image="https://s3-alpha-sig.figma.com/img/b843/db2c/aee97cecd2d908accb1205bc283a0310?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QbMdYxfJJat7WJTlsWmRmiSu9Sbm2lfg6K5nf7YtnGdlt1g-JjpYLDMokAF4FB8wEpz47ZaalljmJU~PT0anYUwFzaVAX1s~IvDkeSYYoY~HkNWdmOJKhcRmfj7vb9-Jw1a9QeaiST1p-4UyDGQGhiMSg5j2sNeSOrXR0UvCyrTGggldRvkDkT4AsAvXenSm-Efq1Ewh9t8nwbDtQCFj8uOUr4rYMBNIyOGC1e3TmSgNMITMp2e9fyKOJ90Unm1yTVGtcEOu8XIPXnaEh0xaCzwzvWUEws97F5ZUbGaogX6NQTOmmeh0BmZKbfKbXpMXPnYtdj-7xcLYbH0wm8fEKw__"
                        />

                        <HighlightedItemCard
                            size="small"
                            backgroundImage="/HighlightedShape-1.png"
                            name="Shoes Cyber"
                            origin="Militar Tech"
                            image="https://s3-alpha-sig.figma.com/img/f9a3/f231/bec29f9c1aadec6234615212b5d68691?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MhL1AHF5bIlHlmZmRKNaWARynQEnLSlJrX2PFLnJDBYdwzl5Q~fq1a1qLX~tIBpY0C7OnS22VyGEayIZeLlTfLokHuxx9HVQ5oQ6M9IpansnyONmkuWExN2teSHiNWoQW2rtvMNk2JZLgyYlkJyr~rOfDKxkyT3oCwDyiVm08J3YvmzK5u9dSIZBketuVtIpVyJy5mmU2Y84WSw3xZ-8UMboTDwEqtLWEaTVNdlSDh8dRo63SQP0L1rLH~k0L1d9tMzXrfeiZhdMvyqntmk05xCXRlQKF0te3CnjivvWRW9HGSz-IcOfSxB0WFPy0QJ1EJmP3XBmPnYUYe8KGQxjKA__"
                        />

                        <HighlightedItemCard
                            size="small"
                            backgroundImage="/HighlightedShape-1.png"
                            name="Pants Cyber"
                            origin="Ninja Celestial"
                            image="https://s3-alpha-sig.figma.com/img/57e4/2cb9/18264d048eef30cd73c6d981f042e8a0?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B7NNw2RmOlgKwNxWU6TbKtbguZCbWx0aTeVwK6MJXSKdOrUYnPVWXXR88ToDnIEYjPn3Q3C~iiw5yQE1VlUPVNmgiqOKCFVC9EZ54kavJfaegKKfAutZOWFk08z7FiHCdG1wMq0FBnC9xG4y8n8nKZsktG3Npx~aA1brMSctQNIbXUg3Iiyw0CF05sdEoqg3bhrpTr1KFWAAOGtCn7eVcl-ex7gbqmruu3UcyTpVUB6UXlPLD4uHSFQD2uPEOZNlQogBKDMkMymvb6RAurjsbhiQwcCvSZZ~TydAtuIoP0ClNrbvhzdxaQudcHuQYFo8ihpkFEMN97MKwehK8Jc0Lg__"
                        />
                    </div>

                    <HighlightedItemCard
                        size="large"
                        backgroundImage="/HighlightedShape-2.png"
                        name="Cyber Grediant Cup"
                        origin="Caveira invernal"
                        image="https://s3-alpha-sig.figma.com/img/39d1/718c/fb3741ac757fcc5712d4b8c4fefd8aec?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dMurmQrysFsswx579kv~cyka8-Aa3PSHMuUClz3yeGLQRA1ymrxYgZJBQYc2FbrjUwRrPfSPvJgnuFlpBgkzRD9qXjxX-iOkSHtMDjOdyXRW2Ea9Tmdk1Zs2L~hWDlbRcGfs9NlTwijkSlZKPJpBraHSjvu5xBi7TnmSPxJTMZM0VZfW~yd1oAPfOf1O4mZShart2l2WjTSvrQUdXkvH6~VCH1mxGG7vPBfwn0pYNlGvcb8aejWPwhPUzCv-txKZ9V4Vpypfz6ob6--0GC8M6KYUJiCC~dEzjuzPa11GmRnKZACHteVUHuSUGeftsWUbGXXk6wtHz4HiYAAQqCMMlg__"
                    />
                </div>
                <Link href="/" className="uppercase bg-secondary-blue px-40 w-fit mx-auto  text-white py-4">Acessar Jogo</Link>
            </div>
        </section>
    );
}
