import { NailWork } from "@/consts/nailWorks";
import Image from "next/image";
import { HandCoins, Hash, Ruler, Pyramid } from "lucide-react";

interface IProps {
    nailWork: NailWork;
}

export default function WorkCard({ nailWork }: IProps) {
    return (
        <li className="relative w-85 flex flex-col items-center bg-stone-950 pt-4 pb-15 rounded-lg">
            <p className="w-80 bg-foreground/5 text-bold text-sm p-2 rounded-t-lg mt-1">
                {nailWork.title}
            </p>
            <Image
                src={nailWork.image}
                alt="nail work image"
                height={220}
                width={260}
                className="max-w-80 max-h-70 min-w-80 min-h-70 object-cover rounded-b-lg"
            />
            <p className="absolute top-15 right-4 text-xs font-semibold rounded-full p-2 bg-indigo-600/45">
                {nailWork.price.display}
            </p>
            <p className="font-medium text-sm p-2">{nailWork.description}</p>
            {nailWork.techniques && (
                <div className="flex self-start items-center justify-between p-2 gap-2">
                    <HandCoins className="w-7 h-7 p-1.5 rounded-lg bg-stone-900" />
                    <p className="font-bold text-xs">
                        {nailWork.techniques.join(", ")}
                    </p>
                </div>
            )}
            {nailWork.tags && (
                <div className="flex self-start items-center justify-between p-2 gap-2">
                    <Hash className="w-7 h-7 p-1.5 rounded-lg bg-stone-900" />
                    <p className="font-bold text-xs">
                        {nailWork.tags.join(", ")}
                    </p>
                </div>
            )}
            {nailWork.length && (
                <div className="flex self-start items-center justify-between p-2 gap-2">
                    <Ruler className="w-7 h-7 p-1.5 rounded-lg bg-stone-900" />
                    <p className="font-bold text-xs">
                        {nailWork.length.charAt(0).toUpperCase() +
                            nailWork.length.slice(1)}
                    </p>
                </div>
            )}
            {nailWork.shape && (
                <div className="flex self-start items-center justify-between p-2 gap-2">
                    <Pyramid className="w-7 h-7 p-1.5 rounded-lg bg-stone-900" />
                    <p className="font-bold text-xs">
                        {nailWork.shape.charAt(0).toUpperCase() +
                            nailWork.shape.slice(1)}
                    </p>
                </div>
            )}
            <a
                href="http://t.me/oliweeshka"
                className="flex absolute bottom-2 text-sm justify-center py-2 px-8 rounded-full bg-foreground text-background font-semibold"
            >
                Связаться
            </a>
        </li>
    );
}
