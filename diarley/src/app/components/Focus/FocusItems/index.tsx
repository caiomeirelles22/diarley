import { FocusItem, focusItemProps} from "./FocusItem";

export interface FocusItemsProps {
    focusItems: focusItemProps[]
}

export function FocusItems({focusItems}:FocusItemsProps) { 
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6">
            {focusItems.map((item:focusItemProps, key) => (
                <FocusItem key={key}  title={item.title} />
            ))}
        </div>
    );
}