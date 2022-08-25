import { Container } from '@/components'
import 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

export default function TokenBurning() {
  const chartData = {
    labels: [
      'Aug/8/2022',
      'Aug/8/2022',
      'Aug/8/2022',
      'Aug/8/2022',
      'Aug/8/2022',
      'Aug/8/2022',
      'Aug/8/2022',
      'Aug/8/2022',
      'Aug/8/2022',
      'Aug/8/2022',
    ],
    datasets: [
      {
        label: 'Token Burning',
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        backgroundColor: 'rgba(45,212,191,0.5)',
        borderColor: 'rgba(45,212,191,1)',
        fill: true,
      },
    ],
  }

  return (
    <section
      id="TokenBurning"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-neutral-800 sm:text-5xl">
            Token Burning
          </h2>
          <p className="mt-4 text-center text-lg text-red-500">
            ※ここの情報をお送りください
          </p>
          <div className="mt-10">
            <Chart type="line" data={chartData} />
          </div>
        </div>
      </Container>
    </section>
  )
}
