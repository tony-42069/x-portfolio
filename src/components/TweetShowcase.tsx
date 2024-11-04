'use client'

import { ExternalLink } from 'lucide-react'

interface Tweet {
  id: string
  date: string
  url: string
}

const tweets: Tweet[] = [
  {
    id: '1',
    date: "Apr 8, 2024",
    url: "https://x.com/CREdebtDorian/status/1844772805012779267"
  },
  {
    id: '2',
    date: "Apr 6, 2024",
    url: "https://x.com/credebtdorian/status/1844069554160632087"
  },
  {
    id: '3',
    date: "Apr 6, 2024",
    url: "https://x.com/monetization_x/status/1844125738020282388"
  },
  {
    id: '4',
    date: "Mar 21, 2024",
    url: "https://x.com/credebtdorian/status/1830737210469126420"
  },
  {
    id: '5',
    date: "Feb 28, 2024",
    url: "https://x.com/credebtdorian/status/1764349903289844104"
  },
  {
    id: '6',
    date: "Feb 27, 2024",
    url: "https://x.com/credebtdorian/status/1763942340039782874"
  },
  {
    id: '7',
    date: "Feb 22, 2024",
    url: "https://x.com/credebtdorian/status/1761975675139875166"
  },
  {
    id: '8',
    date: "Nov 11, 2023",
    url: "https://x.com/CREdebtDorian/status/1786500928373170422"
  }
]

const TweetCard = ({ tweet }: { tweet: Tweet }) => (
  <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
    <div className="flex justify-between items-center">
      <span className="text-slate-400 text-sm">{tweet.date}</span>
      
        href={tweet.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
      >
        <span className="text-sm">View on X</span>
        <ExternalLink size={14} />
      </a>
    </div>
  </div>
)

const TweetShowcase = () => {
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

export default TweetShowcase