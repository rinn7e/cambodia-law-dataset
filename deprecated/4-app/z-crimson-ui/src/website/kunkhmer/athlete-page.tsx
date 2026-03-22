import type { ReactNode } from 'react'
import { Heading, Text } from '@/component'
import rawData from './data.json'
import type { KunKhmerData } from './types'

const data = rawData as unknown as KunKhmerData

export const AthletePage = ({ id }: { id: string }): ReactNode => {
  const athlete = data.athletes[id]

  if (!athlete) return <div>Athlete not found</div>

  return (
    <div className="py-12">
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="mb-6 h-48 w-48 rounded-full border-4 border-red-600 bg-gray-200 shadow-xl"></div>
        <Heading level={1} className="text-5xl font-black uppercase">{athlete.name}</Heading>
        <Text className="text-2xl font-bold text-red-600 italic">"{athlete.nickname}"</Text>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 rounded-xl border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-4">
        {[
          { label: 'Height', value: athlete.stats.height },
          { label: 'Weight', value: athlete.stats.weight },
          { label: 'Reach', value: athlete.stats.reach },
          { label: 'Record', value: `${athlete.stats.wins}-${athlete.stats.losses}-${athlete.stats.draws}` },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
            <div className="text-xl font-bold md:text-3xl">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-4xl">
        <Heading level={2} className="mb-6 border-b-2 border-red-600 pb-2 text-2xl font-black uppercase">Recent Matches</Heading>
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center text-gray-500 italic">
          Match history data coming soon...
        </div>
      </div>
    </div>
  )
}
