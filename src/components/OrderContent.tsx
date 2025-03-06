import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderContentProps = {
    order: OrderItem[]
}

export default function OrderContent({order}: OrderContentProps) {
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
                        <button className="bg-red-700 text-white h-8 w-8 rounded-lg" onClick={() => console.log('Eliminar')}>
                            X
                        </button>
                    </div>
                ))
            )}
        </div>
        <div className="mt-5">
            <button className="bg-blue-950 text-white p-3 rounded-lg w-full">Pagar</button>
        </div>
    </div>
  )
}
