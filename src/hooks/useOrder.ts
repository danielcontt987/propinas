import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
        const [order, setOrder] = useState<OrderItem[]>([]);
        const addItem = (item: MenuItem) => {
        const itemInOrder = order.find((orderItem) => orderItem.id === item.id)
        if (itemInOrder) {
            const newOrder = order.map((orderItem) => {
                return {...orderItem, quantity: orderItem.quantity + 1}
            })
            setOrder(newOrder)
        }else{
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    console.log(order);
    
    return {
        addItem
    }
}