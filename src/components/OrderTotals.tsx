import { useCallback } from "react";
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
    order: OrderItem[];
    tip: number;
    placeOrder: () => void;
}

export default function OrderTotals({order, tip, placeOrder}: OrderTotalsProps) {
    const subtotalAmount = useCallback(() => {
        return order.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
    ,[order]);

    const totalAmount = useCallback(() => {
        return subtotalAmount() * tip
    }, [order, tip]);

    const totalToPay = useCallback(() => {
        return subtotalAmount() + totalAmount()
    }
    ,[order, tip]);

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-bold text-2xl text-blue-950">Totales y propinas</h2>
            <p>Subtotal a pagar 
                <span className="font-bold">{formatCurrency(subtotalAmount())}</span>
            </p>
            <p>Propina: {''}
                <span className="font-bold">{formatCurrency(totalAmount())}</span>
            </p>
            <p>Total a pagar: {''}
                <span className="font-bold">{formatCurrency(totalToPay())}</span>
            </p>
        </div>
        <button className="bg-blue-950 text-white p-3 
            rounded-lg w-full uppercase mt-10 
            font-semibold hover:bg-blue-900 
            disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={totalToPay() === 0} onClick={() => placeOrder()}>
            Guardar orden
        </button>
    </>
  )
}
