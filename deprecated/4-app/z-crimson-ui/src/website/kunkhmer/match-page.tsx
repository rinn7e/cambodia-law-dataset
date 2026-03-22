import type { ReactNode } from 'react'
import { Heading, Text, Link } from '@/component'
import { AthleteData } from './types'
import rawData from './data.json'
import type { KunKhmerData } from './types'

const data = rawData as unknown as KunKhmerData

const AthleteCard = ({ athlete, corner }: { athlete: AthleteData; corner: 'red' | 'blue' }) => {
  const bgClass = corner === 'red' ? 'bg-red-900/10 border-red-500/50' : 'bg-blue-900/10 border-blue-500/50'
  const textClass = corner === 'red' ? 'text-red-600' : 'text-blue-600'

  return (
    <Link
      href={`/website/kunkhmer/athlete/${athlete.id}`}
      className={`flex flex-col items-center rounded-xl border-2 p-8 transition-transform hover:scale-105 ${bgClass}`}
    >
      <div className={`mb-4 h-32 w-32 rounded-full border-4 ${textClass} bg-gray-200`}></div>

      <Heading level={2} className="text-3xl font-black">{athlete.name}</Heading>
      <Text className={`text-xl font-bold uppercase italic ${textClass}`}>"{athlete.nickname}"</Text>

      <div className="mt-6 grid w-full grid-cols-2 gap-4 text-center">
        <div>
          <div className="text-xs text-gray-500 uppercase">Wins</div>
          <div className="text-xl font-bold">{athlete.stats.wins}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 uppercase">KO</div>
          <div className="text-xl font-bold text-red-600">{athlete.stats.ko}</div>
        </div>
      </div>
    </Link>
  )
}

export const MatchPage = ({ id }: { id: string }): ReactNode => {
  const match = data.matches[id]

  if (!match) return <div>Match not found</div>

  const red = data.athletes[match.redCornerId]
  const blue = data.athletes[match.blueCornerId]

  return (
    <div className="py-12">
      <div className="mb-12 text-center">
        <span className="mb-2 inline-block rounded bg-red-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-widest">
          {match.status}
        </span>
        <Heading level={1} className="mb-4 text-4xl font-extrabold uppercase italic leading-none md:text-6xl">
          {match.title}
        </Heading>
        <Text className="text-xl text-gray-500">{match.location} • {new Date(match.date).toLocaleDateString()}</Text>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-center">
        <div className="flex-1">
          <AthleteCard athlete={red} corner="red" />
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <div className="text-6xl font-black italic text-gray-300">VS</div>
        </div>

        <div className="flex-1">
          <AthleteCard athlete={blue} corner="blue" />
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="mx-auto max-w-2xl text-lg text-gray-600">{match.description}</p>
      </div>
    </div>
  )
}
