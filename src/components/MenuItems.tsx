import { MenuItem } from "../types"
    type MenuItemsProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}
export default function MenuItems({item, addItem}: MenuItemsProps) {
    return (
    <button className="border-2 border-blue-950
        hover:bg-blue-900
        hover:text-white 
        p-4 w-full 
        flex justify-between rounded-lg" onClick={() => addItem(item)}>
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
    )
}
