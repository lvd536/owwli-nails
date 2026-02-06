export interface NailWork {
    id: string;
    title: string;
    description: string;
    image: string;
    price: {
        amount: number;
        currency: string;
        display: string;
    };
    length?: "short" | "medium" | "long" | "extra-long";
    shape?: "stiletto" | "coffin" | "almond" | "square";
    techniques?: string[];
    tags?: string[];
}

export const nailWorks: NailWork[] = [
    {
        id: "red-stiletto-butterfly",
        title: "Красные стилеты — бабочка и кристалл",
        description:
            "Глубокий глянцевый красный на острых стилето. Акцент — 3D-бабочка на безымянном пальце и маленькая серебристая подвеска у ногтя. Техника: наращивание (акрил/гель) + гель-лак. Подходит для вечернего образа и фотосессий.",
        image: "@/public/nails1.jpg",
        price: { amount: 2200, currency: "RUB", display: "2 200 ₽" },
        length: "long",
        shape: "stiletto",
        techniques: ["наращивание", "гель-лак", "3D-дизайн", "стразы"],
        tags: ["вечерний", "яркий", "стильный"],
    },
    {
        id: "clear-ghost-stiletto",
        title: "Прозрачные стилеты — натуральный эффект",
        description:
            "Длинные прозрачные стилеты с натуральным нюансом у кутикулы — минималистичный, но эффектный вариант. Идеально подойдёт как база для последующих дизайнов или для тех, кто любит прозрачные тренды.",
        image: "@/public/nails2.jpg",
        price: { amount: 1800, currency: "RUB", display: "1 800 ₽" },
        length: "extra-long",
        shape: "stiletto",
        techniques: ["наращивание", "прозрачный гель"],
        tags: ["минимал", "прозрачный", "фото"],
    },
    {
        id: "white-coffin-roses",
        title: "Белые гробики — 3D-розы и мрамор",
        description:
            "Длинные coffin-ногти в нежно-белой гамме: комбинированный дизайн — мраморные вкрапления, 3D-розы на одном пальце и аккуратные кристаллы на акценте. Романтичный и деликатный вариант для событий и невест.",
        image: "@/public/nails3.jpg",
        price: { amount: 3500, currency: "RUB", display: "3 500 ₽" },
        length: "long",
        shape: "coffin",
        techniques: ["наращивание", "3D-скульптура", "мрамор", "стразы"],
        tags: ["невеста", "мрамор", "3d"],
    },
    {
        id: "marble-mix-transparent",
        title: "Мрамор и прозрачные вставки — арт-микс",
        description:
            "Смелый микс: мраморные принты, частично прозрачные пластины и металлические декоративные элементы. Подчёркивает индивидуальность, отлично держится при активной носке.",
        image: "@/public/nails4.jpg",
        price: { amount: 3200, currency: "RUB", display: "3 200 ₽" },
        length: "long",
        shape: "coffin",
        techniques: ["мрамор", "прозрачные вставки", "декор (металл)"],
        tags: ["арт", "уникально", "городской"],
    },
] as const;
