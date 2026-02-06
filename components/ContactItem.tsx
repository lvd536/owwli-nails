import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface IProps {
    contact: {
        label: string;
        icon: StaticImageData;
        link: string;
    };
}

export default function ContactItem({ contact }: IProps) {
    return (
        <li>
            <Link
                href={contact.link}
                className="flex md:w-60 gap-4 items-center justify-between bg-stone-900/60 rounded-lg p-2 pr-4"
            >
                <Image
                    src={contact.icon}
                    alt=""
                    width={50}
                    height={50}
                    className="p-1 bg-stone-900/60 rounded-lg"
                />
                <p className="text-md font-medium">{contact.label}</p>
            </Link>
        </li>
    );
}
