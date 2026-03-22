import type { ReactNode } from 'react'
import { Heading, Text, Link } from '@/component'
import { Route } from '@/types'
import { KunKhmerNavbar } from './kunkhmer-navbar'
import { KunKhmerFooter } from './kunkhmer-footer'
import { MatchPage } from './match-page'
import { AthletePage } from './athlete-page'
import rawData from './data.json'
import type { KunKhmerData } from './types'

const data = rawData as unknown as KunKhmerData

const MatchPoster = ({ matchId }: { matchId: string }) => {
  const match = data.matches[matchId]
  const red = data.athletes[match.redCornerId]
  const blue = data.athletes[match.blueCornerId]

  return (
    <Link href={`/website/kunkhmer/match/${matchId}`} className="group relative block overflow-hidden rounded-2xl bg-black text-white shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-blue-900 opacity-50 transition-opacity group-hover:opacity-75"></div>
      <div className="relative flex flex-col items-center justify-between p-12 md:flex-row">
        <div className="text-center md:text-right">
          <div className="text-3xl font-black uppercase italic">{red.name}</div>
          <div className="text-red-400 font-bold">{red.stats.wins} Wins</div>
        </div>
        <div className="px-8 text-5xl font-black italic text-white/20">VS</div>
        <div className="text-center md:text-left">
          <div className="text-3xl font-black uppercase italic">{blue.name}</div>
          <div className="text-blue-400 font-bold">{blue.stats.wins} Wins</div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-black/50 py-2 text-center text-sm font-bold uppercase tracking-widest backdrop-blur-sm">
        {match.title} • Click for Details
      </div>
    </Link>
  )
}

const MatchCard = ({ matchId }: { matchId: string }) => {
  const match = data.matches[matchId]
  const red = data.athletes[match.redCornerId]
  const blue = data.athletes[match.blueCornerId]

  return (
    <Link
      href={`/website/kunkhmer/match/${matchId}`}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-red-500 hover:shadow-lg"
    >
      <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-4 py-2">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
          {new Date(match.date).toLocaleDateString()}
        </span>
        <span className={`text-xs font-bold uppercase tracking-widest ${match.status === 'live' ? 'animate-pulse text-red-600' :
          match.status === 'finished' ? 'text-gray-400' : 'text-blue-600'
          }`}>
          {match.status}
        </span>
      </div>
      <div className="flex items-center justify-between p-6">
        <div className="text-center">
          <div className="text-lg font-black uppercase text-red-700">{red.name}</div>
        </div>
        <div className="px-4 text-2xl font-black italic text-gray-300">VS</div>
        <div className="text-center">
          <div className="text-lg font-black uppercase text-blue-700">{blue.name}</div>
        </div>
      </div>
      {match.result && (
        <div className="border-t border-gray-100 bg-gray-50 px-4 py-2 text-center text-sm font-medium text-gray-600">
          Result: {match.result}
        </div>
      )}
    </Link>
  )
}

const KunKhmerIndexView = () => {
  const allMatches = Object.values(data.matches)
  const liveMatches = allMatches.filter(m => m.status === 'live')
  const upcomingMatches = allMatches.filter(m => m.status === 'upcoming')
  const finishedMatches = allMatches.filter(m => m.status === 'finished')

  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <Heading level={1} className="mb-4 text-5xl font-black uppercase tracking-tighter text-red-700 md:text-7xl">
          {data.index.hero.title}
        </Heading>
        <Text className="text-xl font-bold text-gray-600 uppercase tracking-widest">
          {data.index.hero.subtitle}
        </Text>
      </div>

      {/* Live Now */}
      {liveMatches.length > 0 && (
        <div className="mb-16">
          <Heading level={2} className="mb-8 flex items-center gap-3 border-l-8 border-red-600 pl-6 text-3xl font-black uppercase italic text-red-600">
            <span className="inline-block h-4 w-4 animate-pulse rounded-full bg-red-600"></span>
            Live Now
          </Heading>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {liveMatches.map(match => (
              <MatchPoster key={match.id} matchId={match.id} />
            ))}
          </div>
        </div>
      )}

      {/* Upcoming Fights */}
      <div className="mb-16">
        <Heading level={2} className="mb-8 border-l-8 border-blue-600 pl-6 text-3xl font-black uppercase italic">
          Upcoming Fights
        </Heading>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingMatches.map(match => (
            <MatchCard key={match.id} matchId={match.id} />
          ))}
        </div>
      </div>

      {/* Recent Results */}
      <div className="mb-16">
        <Heading level={2} className="mb-8 border-l-8 border-gray-600 pl-6 text-3xl font-black uppercase italic">
          Recent Results
        </Heading>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {finishedMatches.map(match => (
            <MatchCard key={match.id} matchId={match.id} />
          ))}
        </div>
      </div>

      {/* Athletes Grid */}
      <div id="athletes">
        <Heading level={2} className="mb-8 border-l-8 border-red-600 pl-6 text-3xl font-black uppercase italic">
          Top Fighters
        </Heading>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Object.values(data.athletes).map((athlete) => (
            <Link
              key={athlete.id}
              href={`/website/kunkhmer/athlete/${athlete.id}`}
              className="group block rounded-lg border border-gray-200 bg-white p-4 transition-all hover:-translate-y-1 hover:border-red-500 hover:shadow-lg"
            >
              <div className="mb-4 aspect-square rounded bg-gray-100"></div>
              <Heading level={3} className="text-lg font-black uppercase">{athlete.name}</Heading>
              <Text className="text-sm text-gray-500">{athlete.stats.weight}</Text>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export const KunKhmerIndexPage = ({ route }: { route: Route }): ReactNode => {
  const renderContent = () => {
    if (route._tag !== 'WebsiteKunKhmer') return <KunKhmerIndexView />

    switch (route.subRoute._tag) {
      case 'MatchDetail':
        return <MatchPage id={route.subRoute.id} />
      case 'AthleteDetail':
        return <AthletePage id={route.subRoute.id} />
      case 'Index':
      default:
        return <KunKhmerIndexView />
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 font-sans">
      <KunKhmerNavbar />
      <main className="mx-auto w-full max-w-6xl px-4">
        {renderContent()}
      </main>
      <KunKhmerFooter />
    </div>
  )
}
