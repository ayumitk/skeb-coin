import { Container } from '@/components'
import 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import React from 'react'

const primaryData = [19, 19, 19, 15.5, 8.8, 7.6375, 6, 3.1875, 1.875]
const labels = [
  'Ecosystem Reserve',
  'Liquidity / Staking',
  'Foundation & Reserve',
  'Development Team / Founder',
  'Seed Round',
  'Advisors / Partners',
  'Private Round',
  'Strategic Round',
  'Public Round',
]

const backgroundColor = [
  '#2FAF94',
  '#3095D8',
  '#6663FF',
  '#9450FA',
  '#F494DF',
  '#FC9855',
  '#FCCD55',
  '#9BD86C',
  '#AEAEAE',
]

export default function TokenMetrics(props) {
  const customLabels = labels.map(
    (label, index) => `${label} ${primaryData[index].toFixed(1)}%`
  )
  const data = {
    labels: customLabels,
    datasets: [
      {
        data: primaryData,
        backgroundColor: backgroundColor,
      },
    ],
  }
  const options = {
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = `${
              context.label.split(`${context.parsed}`)[0]
            }: ${context.parsed.toFixed(1)}%`
            return label
          },
        },
      },
    },
  }

  return (
    <section id="TokenMetrics" {...props}>
      <Container>
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-neutral-800 sm:mb-10 sm:text-5xl">
            Token Metrics
          </h2>
          <dl className="flex flex-wrap justify-center gap-x-8 gap-y-8">
            <div>
              <dt className="text-sm uppercase text-neutral-600">Network:</dt>
              <dd className="text-2xl font-bold text-neutral-800">
                ERC20 on Ethereum
              </dd>
            </div>
            <div>
              <dt className="text-sm uppercase text-neutral-600">
                Total Supply:
              </dt>
              <dd className="text-2xl font-bold text-neutral-800">
                10,000,000,000
              </dd>
            </div>
          </dl>
          <div className="mx-auto mt-10">
            <Chart type="doughnut" data={data} options={options} />
          </div>
        </div>
      </Container>
    </section>
  )
}
