import { SocialIcons } from '@/app/components/SocialIcons';

interface link {
    link: string
    icon: string
}

interface footerProps {
    links: link[];
}

export function Footer({ links }: footerProps) {
    return (
        <footer className="bg-blue-900 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold">Siga-nos nas redes sociais</h2>
                    <div className="flex gap-4 mt-4">
                        {links.map((link, index) => (
                         <a href={link.link} key={index}>{<SocialIcons icon={link.icon} key={index}/>}</a>
                        ))}

                    </div>
                </div>
                <p className="text-lg">
                    © {new Date().getFullYear()} C.A.M. Meirelles. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
