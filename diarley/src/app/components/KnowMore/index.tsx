import Image from "next/image";
import { Form } from "../Form";

interface knowMoreProps {
    knowImage: string
}

export function KnowMore({ knowImage }: knowMoreProps) {
    return (
        <div className="bg-sky-600 p-4 sm:p-6 flex flex-col gap-4 max-w-7xl mx-auto">
            <div>
                <Image
                    src={knowImage}
                    className="h-full rounded-md"
                    width={527.14}
                    height={700}
                    quality={100}
                    alt="hero" />
            </div>
            <div><Form /></div>
        </div>
    )
}
