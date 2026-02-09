import Brush from "@/public/brush2.png";
import Chat from "@/public/chat.png";
import Girl from "@/public/girl.png";

export const contacts = {
    telegramPerson: {
        label: "Личные сообщения",
        link: "https://t.me/privateMessages",
        icon: Chat,
    },
    telegramPersonChannel: {
        label: "Личный Канал",
        link: "https://t.me/privateChannel",
        icon: Girl,
    },
    telegramNailsChannel: {
        label: "Примеры работ",
        link: "https://t.me/workChannel",
        icon: Brush,
    },
} as const;
