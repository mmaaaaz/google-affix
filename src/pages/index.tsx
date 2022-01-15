import { Hero, SearchBar, Tags } from '@/components'
import { Footer, Header } from '@/components/Layout'
import { useLocalStorage } from '@/hooks'
import { nanoid } from 'nanoid'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'

const initialPrefixTags = [
  {
    tag: 'Highest',
    id: 'initial-1'
  }
]

const initialSuffixTags = [
  {
    tag: 'video on youtube',
    id: 'initial-2'
  }
]

const Home: NextPage = () => {
  const [prefixTags, setPrefixTags] = useLocalStorage(
    'prefix-tags',
    initialPrefixTags
  )
  const [suffixTags, setSuffixTags] = useLocalStorage(
    'suffix-tags',
    initialSuffixTags
  )

  useEffect(() => {
    if (prefixTags.length === 0) {
      setPrefixTags(initialPrefixTags)
    }
  }, [prefixTags.length, setPrefixTags])

  useEffect(() => {
    if (suffixTags.length === 0) {
      setSuffixTags(initialSuffixTags)
    }
  }, [suffixTags.length, setSuffixTags])

  const doseMatch = useMemo(() => {
    const dooooes =
      JSON.stringify(suffixTags) === JSON.stringify(initialSuffixTags) &&
      JSON.stringify(prefixTags) === JSON.stringify(initialPrefixTags)

    return dooooes
  }, [suffixTags, prefixTags])

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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center w-full h-full px-4 py-8 mt-12 md:mt-[10%] lg:mt-36 md:py-0">
        <Hero />

        <SearchBar
          doseMatch={doseMatch}
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
