import type {Dispatch, SetStateAction} from 'react';
const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
];

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>;
    tip: number;
}
export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
  return (
    <div>
        <h3 className="font-bold text-2xl text-blue-950">Propinas: </h3>
        <form>
            {tipOptions.map((option) => (
                <div key={option.id}>
                    <label key={option.value} className="flex items-center cursor-pointer space-x-2">
                        <span className="text-gray-700 mt-3">{option.label}</span>
                        <input
                            type="radio"
                            name="option"
                            value={option.value}
                            className="peer hidden"
                            onChange={e => setTip(+e.target.value)}
                            checked={tip === option.value}
                        />
                        <div className="w-6 h-6 mt-3 rounded-md border-2 border-gray-400 peer-checked:border-blue-950 peer-checked:bg-blue-950 transition"></div>
                    </label>
                </div>
            ))}
        </form>
    </div>
  )
}
