import { useMemo } from "react";
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
    order: OrderItem[];
}

export default function OrderTotals({order}: OrderTotalsProps) {
    const subtotalAmount = useMemo(() => {
        return order.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }
    ,[order]);
  return (
    <>
        <div className="space-y-3">
            <h2 className="font-bold text-2xl">Totales y propinas</h2>
            <p>Subtotal a pagar 
                <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
            </p>
            <p>Propina: {''}
                <span className="font-bold">$0</span>
            </p>
            <p>Total a pagar: {''}
                <span className="font-bold">$0</span>
            </p>
        </div>
        <button className="bg-blue-950 text-white p-3 rounded-lg w-full">Pagar</button>
    </>
  )
}
