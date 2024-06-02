import { SocialIcons } from "@/app/components/SocialIcons";

interface link {
    link: string
    icon: string
}

interface socialMediasProps {
    links: link[]
}

export function SocialMedias({ links }: socialMediasProps) {
    return (
        <div id="social-media" className="bg-[#F2F2F2] p-4 sm:p-6 flex flex-col gap-4 max-w-7xl mx-auto rounded-md w-full">
            <div className="text-white w-full flex items-center justify-center flex-col gap-4">
                <h2 className="text-[#011640] text-2xl font-bold">Acompanhe nossas redes sociais</h2>
                <div className="w-fit min-w-80 flex gap-2 p-3 text-2xl sm:text-3xl flex-wrap">
                    {links.map((link, key) => (
                        <a
                            className="text-[#F2F2F2] bg-[#011640] rounded-full p-2 shadow-md hover:bg-[#113859] transition-all duration-75"
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
