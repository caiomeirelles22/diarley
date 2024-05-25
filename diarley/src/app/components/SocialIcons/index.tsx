import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export function SocialIcons({ icon }: { icon: string }) {
    switch (icon) {
        case 'facebook':
            return <FaFacebook/>;
            
        case 'instagram':
            return <FaInstagram/>;
        case 'whatsApp':
            return <FaWhatsapp/>;
        case 'email':
            return <MdEmail/>;

        default:
            return <p>batata</p>;
    }
}
