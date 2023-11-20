
import LineChart from "@/components/charts/Line"
import BarChart from "@/components/charts/Bar"
import { PieChart } from "@/components/charts/Pie"
import { DoughnutChart } from "@/components/charts/Doughnut"

export default function ExampleComponent() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-3xl w-full items-center justify-between font-mono text-sm lg:flex"><LineChart /></div>
      <div className="z-10 max-w-3xl w-full items-center justify-between font-mono text-sm lg:flex"><BarChart /></div>
      <div className="z-10 max-w-3xl w-full items-center justify-between font-mono text-sm lg:flex"><PieChart /></div>
      <div className="z-10 max-w-3xl w-full items-center justify-between font-mono text-sm lg:flex"><DoughnutChart /></div>
    </main>

  )
}