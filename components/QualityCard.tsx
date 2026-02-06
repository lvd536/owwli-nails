import { IQuality } from "@/consts/qualities";
import Image from "next/image";

interface IProps {
    quality: IQuality;
}

export default function QualityCard({ quality }: IProps) {
    return (
        <div className="flex h-20 w-full gap-2 items-center justify-start rounded-lg bg-stone-900 p-2">
            <div className="min-w-12 min-h-12 max-w-12 max-h-12 rounded-lg p-2 bg-stone-800">
                <Image
                    src={quality.icon}
                    alt="quality card image"
                    width={50}
                    height={50}
                />
            </div>
            <div>
                <p className="text-md font-bold">{quality.label}</p>
                <p className="font-medium">{quality.description}</p>
            </div>
        </div>
    );
}
