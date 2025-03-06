import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContent({order, removeItem}: OrderContentProps) {
  return (
    <div>
        <h2 className="font-bold text-3xl text-blue-950">Consumo</h2>
        <div className="space-y-3 mt-10">
            {order.length === 0 ? 
            <p className="text-center">La order esta vacía</p> 
            : (
                order.map((item) => (
                    <div key={item.id} className="flex justify-between border-t border-gray-200 py-4 last-of-type:border-b">
                        <div>
                            <p>{item.name} - {formatCurrency(item.price)}</p>
                            <p className="font-bold">
                            Cantidad: {item.quantity} - Total: {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>
                        <button className="bg-red-700 text-white h-8 w-8 rounded-lg" onClick={() => removeItem(item.id)}>
                            X
                        </button>
                    </div>
                ))
            )}
        </div>
    </div>
  )
}
