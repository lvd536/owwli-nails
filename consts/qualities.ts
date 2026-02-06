import Thumb from "@/public/thumb.png";
import type { StaticImageData } from "next/image";

export interface IQuality {
    label: string;
    description: string;
    icon: string | StaticImageData;
}

export const qualities: IQuality[] = [
    {
        label: "Индивидуальный дизайн",
        description:
            "Маникюр под ваш стиль, форму и настроение. Каждый дизайн — уникален.",
        icon: Thumb,
    },
    {
        label: "Чистота и безопасность",
        description:
            "Стерильные инструменты и одноразовые материалы. Максимальный комфорт.",
        icon: Thumb,
    },
    {
        label: "Качество и стойкость",
        description:
            "Профессиональные материалы и техники. Аккуратный результат надолго.",
        icon: Thumb,
    },
    {
        label: "Точность и внимание к деталям",
        description: "Идеальная форма, чистая кутикула и точные акценты.",
        icon: Thumb,
    },
];
