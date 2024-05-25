import { Anchor } from "@/app/components/Anchor";
import { SocialIcons } from "@/app/components/SocialIcons";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";

interface link {
    link: string
    icon: string
}

interface socialMediasProps {
    links: link[]
}

export function SocialMedias({ links }: socialMediasProps) {
    return (
        <div className="bg-blue-100 p-4 sm:p-6 flex flex-col gap-4 max-w-7xl mx-auto rounded-md w-full">
            <div className="text-white w-full flex items-center justify-center flex-col gap-4">
                <h2 className="text-blue-900 text-2xl font-bold">Acompanhe nossas redes sociais</h2>
                <div className="w-fit min-w-80 flex gap-2 p-3 text-2xl sm:text-3xl flex-wrap">
                    {links.map((link, key) => (
                        <a
                            className="text-blue-900 hover:text-blue-700 bg-white rounded-full p-2 shadow-md hover:bg-blue-200 transition-all"
                            key={key}
                            href={link.link}
                        >
                            <SocialIcons icon={link.icon}/>
                        </a>
                    ))}

                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
