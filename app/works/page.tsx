import WorkCard from "@/components/WorkCard";
import { nailWorks } from "@/consts/nailWorks";

export default function page() {
    return (
        <ul className="flex flex-wrap gap-2 items-stretch justify-center pt-5">
            {nailWorks.map((work) => (
                <WorkCard nailWork={work} key={work.id} />
            ))}
        </ul>
    );
}
