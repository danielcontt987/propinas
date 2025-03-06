import MenuItems from "./components/MenuItems"
import { menuItems } from "./data/db"

import useOrder from "./hooks/useOrder";
function App() {

const { addItem } = useOrder();

return (
<>
    <header className=" bg-blue-950 py-4">
        <h2 className="text-center text-white text-xl font-bold">Calculadora de propinas y consumo</h2>
    </header>
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
            <h3 className="text-3xl font-bold">Menú</h3>
            <section className="space-y-3 mt-10">
                {menuItems.map((item) => (
                <MenuItems item={item} key={item.id} addItem={addItem} />
                ))}
            </section>
        </div>
        <div>
            <h3 className="">Consumo</h3>
        </div>
    </main>
</>
)
}

export default App
