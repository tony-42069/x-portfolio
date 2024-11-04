'use client'

import { useEffect } from 'react'

interface Tweet {
  id: string
  url: string
}

const tweets: Tweet[] = [
  {
    id: '1',
    url: "https://twitter.com/credebtdorian/status/1793327014356631790"
  },
  {
    id: '2',
    url: "https://twitter.com/credebtdorian/status/1844069554160632087"
  },
  {
    id: '3',
    url: "https://twitter.com/monetization_x/status/1844125738020282388"
  },
  {
    id: '4',
    url: "https://twitter.com/credebtdorian/status/1830737210469126420"
  },
  {
    id: '5',
    url: "https://twitter.com/credebtdorian/status/1764349903289844104"
  },
  {
    id: '6',
    url: "https://twitter.com/credebtdorian/status/1763942340039782874"
  },
  {
    id: '7',
    url: "https://twitter.com/credebtdorian/status/1761975675139875166"
  },
  {
    id: '8',
    url: "https://twitter.com/CREdebtDorian/status/1844772805012779267"
  }
]

export default function TweetShowcase() {
  useEffect(() => {
    // @ts-ignore
    if (window.twttr) {
      // @ts-ignore
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <section className="py-20" id="tweets">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-2">Thoughts on X</h2>
        <p className="text-slate-400 mb-8">Selected insights about platform growth and monetization</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tweets.map((tweet) => (
            <div key={tweet.id} className="flex justify-center">
              <blockquote className="twitter-tweet" data-theme="dark">
                <a href={tweet.url}></a>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}