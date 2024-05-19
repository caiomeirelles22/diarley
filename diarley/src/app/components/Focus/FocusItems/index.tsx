import { focusList } from "../focusList";
import { FocusItem } from "./FocusItem";

export function FocusItems() {
    return (
        <div className="flex flex-col gap-6">
            {focusList.map((item, index) => (
                <FocusItem key={index} imagem={item.imagem} title={item.title} />
            ))}
        </div>
    );
}