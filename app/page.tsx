import Model from "@/components/Model";
import Image from "next/image";
import gradient from "@/public/gradient.png";
import { qualities } from "@/consts/qualities";
import QualityCard from "@/components/QualityCard";

export default function Home() {
    return (
        <div className="flex max-md:flex-col relative items-start justify-between gap-2">
            <Image
                src={gradient}
                alt="gradient-bg"
                className="absolute top-5 right-5 opacity-80"
            />
            <div className="h-0 w-160 absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#c92ec7] -rotate-30" />
            <div className="md:absolute left-5 top-20 md:w-4/10 max-md:mt-5 max-md:px-2 z-2">
                <p className="font-bold text-2xl">Алина Оливьешкина</p>
                <p className="font-medium text-lg">
                    Делаю не просто маникюр, а контент, который хочется
                    скринить. Ко мне приходят за идеальным «под кутикулу»,
                    тонкими торцами и дизайном, который соберёт все лайки в
                    сторис. Со мной можно обсудить всё на свете или просто
                    позалипать в сериал с чашкой кофе. Никаких «плюшек» на
                    ногтях — только эстетика и носибельность 3+ недели.
                </p>
            </div>
            <div className="md:absolute left-0 top-80 flex md:flex-col flex-wrap max-md:items-center max-md:justify-between gap-2 m-2">
                <QualityCard quality={qualities[0]} />
                <QualityCard quality={qualities[1]} />
                <QualityCard quality={qualities[2]} />
                <QualityCard quality={qualities[3]} />
            </div>
            <Model />
        </div>
    );
}
