import { GiForkKnifeSpoon } from "react-icons/gi";
import { GiBusStop } from "react-icons/gi";
import { GiFarmer } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdBiotech } from "react-icons/md";
import { GiHealthIncrease } from "react-icons/gi";
import { GiSuspensionBridge } from "react-icons/gi";

export function FocusItemsIcons({ icon }: { icon: string }) {
    switch (icon) {
        case 'Combate a fome':
            return <GiForkKnifeSpoon size={40}/>;
            
        case 'Mobilidade urbana':
            return <GiBusStop size={40}/>;
        case 'Agronegócio':
            return <GiFarmer size={40}/>;
        case 'Emprego e Renda':
            return <FaMoneyBillTrendUp size={40}/>;
        case 'Tecnologia e Inovação':
            return <MdBiotech size={40}/>;
        case 'Saúde':
            return <GiHealthIncrease size={40}/>;
        case 'Infraestrutura':
            return <GiSuspensionBridge size={40}/>;

        default:
            return <p>batata</p>;
    }
}
