import { Hero, SearchBar, Tags } from '@/components'
import { Footer, Header } from '@/components/Layout'
import { useLocalStorage } from '@/hooks'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const initialPrefixTags = [
  {
    tag: 'Highest',
    id: 'initial-1',
  },
]

const initialSuffixTags = [
  {
    tag: 'videos on',
    id: 'initial-2',
  },
  {
    tag: 'youtube',
    id: 'initial-3',
  },
]

const Home: NextPage = () => {
  const [defaultQuery, setDefaultQuery] = useState<string>('')
  const [prefixTags, setPrefixTags] = useLocalStorage(
    'prefix-tags',
    initialPrefixTags
  )
  const [suffixTags, setSuffixTags] = useLocalStorage(
    'suffix-tags',
    initialSuffixTags
  )

  useEffect(() => {
    if (prefixTags.length === 0 && suffixTags.length === 0) {
      setSuffixTags(initialSuffixTags)
      setPrefixTags(initialPrefixTags)
      setDefaultQuery('rated')
    }
  }, [])

  return (
    <>
      <Head>
        <title>
          Google Affix - Search Google with persistent prefix and suffix tags
        </title>
        <meta
          name="description"
          content="Search Google with persistent prefix and suffix tags inspired by tagglesearch.app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Header />

      <main className="flex flex-col items-center flex-1 w-full h-full px-4 py-5 mt-10 md:mt-[15vh] md:py-0">
        <Hero />

        <SearchBar
          defaultQuery={defaultQuery}
          suffixTags={suffixTags}
          prefixTags={prefixTags}
        />

        <Tags
          prefixTags={prefixTags}
          setPrefixTags={setPrefixTags}
          suffixTags={suffixTags}
          setSuffixTags={setSuffixTags}
        />
      </main>

      <Footer />
    </>
  )
}

export default Home
