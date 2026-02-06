import Brush from "@/public/brush2.png";
import Chat from "@/public/chat.png";
import Girl from "@/public/girl.png";

export const contacts = {
    telegramPerson: {
        label: "Личные сообщения",
        link: "t.me/oliweeshka",
        icon: Chat,
    },
    telegramPersonChannel: {
        label: "Личный Канал",
        link: "t.me/owwww567",
        icon: Girl,
    },
    telegramNailsChannel: {
        label: "Примеры работ",
        link: "t.me/owwwwwli",
        icon: Brush,
    },
} as const;
