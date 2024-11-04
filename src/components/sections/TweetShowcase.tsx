'use client'

import { ExternalLink } from 'lucide-react'

interface Tweet {
  id: string
  url: string
}

const tweets: Tweet[] = [
  {
    id: '1',
    url: "https://x.com/credebtdorian/status/1793327014356631790"
  },
  {
    id: '2',
    url: "https://x.com/credebtdorian/status/1844069554160632087"
  },
  {
    id: '3',
    url: "https://x.com/monetization_x/status/1844125738020282388"
  },
  {
    id: '4',
    url: "https://x.com/credebtdorian/status/1830737210469126420"
  },
  {
    id: '5',
    url: "https://x.com/credebtdorian/status/1764349903289844104"
  },
  {
    id: '6',
    url: "https://x.com/credebtdorian/status/1763942340039782874"
  },
  {
    id: '7',
    url: "https://x.com/credebtdorian/status/1761975675139875166"
  },
  {
    id: '8',
    url: "https://x.com/CREdebtDorian/status/1844772805012779267"
  }
]

const TweetCard = ({ tweet }: { tweet: Tweet }) => (
  <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
    <a
      href={tweet.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 flex items-center gap-1 justify-end"
    >
      <span className="text-sm">View on X</span>
      <ExternalLink size={14} />
    </a>
  </div>
)

export default function TweetShowcase() {
  return (
    <section className="py-20" id="tweets">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-2">Thoughts on X</h2>
        <p className="text-slate-400 mb-8">Selected insights about platform growth and monetization</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tweets.map((tweet) => (
            <TweetCard key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </div>
    </section>
  )
}