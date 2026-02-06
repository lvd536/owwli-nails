import Model from "@/components/Model";
import Image from "next/image";
import gradient from "@/public/gradient.png";

export default function Home() {
    return (
        <div className="flex max-md:flex-col relative items-start justify-between gap-2">
            <Image
                src={gradient}
                alt="gradient-bg"
                className="absolute top-5 right-5 opacity-80"
            />
            <div className="h-0 w-160 absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#c92ec7] -rotate-30" />
            <div className="md:absolute left-5 top-20 md:w-3/10 max-md:mt-5 max-md:px-2 z-2">
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
            <div className="hidden max-md:flex items-center justify-between">
                <div className="flex flex-col gap-2">
                    <div></div>
                    <div></div>
                </div>
                <div className="flex flex-col gap-2">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <Model />
        </div>
    );
}
