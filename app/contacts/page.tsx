import { contacts } from "@/consts/contacts";
import Link from "next/link";
import Image from "next/image";

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
                <li>
                    <Link
                        href={contacts.telegramNailsChannel.link}
                        className="flex md:w-60 gap-4 items-center justify-between bg-stone-900/60 rounded-lg p-2 pr-4"
                    >
                        <Image
                            src={contacts.telegramNailsChannel.icon}
                            alt="Contact image"
                            width={50}
                            height={50}
                            className="p-1 bg-stone-900/60 rounded-lg"
                        />
                        <p className="text-md font-medium">
                            {contacts.telegramNailsChannel.label}
                        </p>
                    </Link>
                </li>
                <li>
                    <Link
                        href={contacts.telegramPerson.link}
                        className="flex md:w-60 gap-4 items-center justify-between bg-stone-900/60 rounded-lg p-2 pr-4"
                    >
                        <Image
                            src={contacts.telegramPerson.icon}
                            alt=""
                            width={50}
                            height={50}
                            className="p-1 bg-stone-900/60 rounded-lg"
                        />
                        <p className="text-md font-medium">
                            {contacts.telegramPerson.label}
                        </p>
                    </Link>
                </li>
                <li>
                    <Link
                        href={contacts.telegramPersonChannel.link}
                        className="flex md:w-60 gap-4 items-center justify-between bg-stone-900/60 rounded-lg p-2 pr-4"
                    >
                        <Image
                            src={contacts.telegramPersonChannel.icon}
                            alt=""
                            width={50}
                            height={50}
                            className="p-1 bg-stone-900/60 rounded-lg"
                        />
                        <p className="text-md font-medium">
                            {contacts.telegramPersonChannel.label}
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
