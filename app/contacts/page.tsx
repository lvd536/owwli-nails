import { contacts } from "@/consts/contacts";
import Link from "next/link";
import Image from "next/image";
import ContactItem from "@/components/ContactItem";

export default function page() {
    return (
        <div className="flex max-md:flex-col w-full p-5 gap-6">
            <div className="flex flex-col items-center justify-center gap-2 max-md:mb-5">
                <p className="text-lg font-medium bg-stone-900/60 rounded-lg px-6 py-6 lg:py-11">
                    Здесь вы можете выбрать удобный способ связи со мной. В
                    личном чате можно задать любые вопросы, уточнить детали
                    процедуры, подобрать дизайн или записаться на удобную дату.
                    Я всегда стараюсь отвечать быстро и помогать с выбором, даже
                    если вы пока просто присматриваетесь.
                    <br />
                    В личном канале я делюсь новостями, свободными окнами для
                    записи и важной информацией для клиентов. А в канале с
                    примерами работ вы найдёте актуальные дизайны, формы и идеи
                    для вдохновения — можно сразу выбрать понравившийся вариант
                    и отправить его мне в чат.
                    <br />
                    Так вам будет проще сориентироваться, подобрать стиль и
                    связаться со мной в пару кликов.
                </p>
            </div>
            <ul className="flex flex-wrap items-center justify-start max-md:gap-6 gap-2">
                <ContactItem contact={contacts.telegramNailsChannel} />
                <ContactItem contact={contacts.telegramPerson} />
                <ContactItem contact={contacts.telegramPersonChannel} />
            </ul>
        </div>
    );
}
