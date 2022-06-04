import { BackIcon, CrossIcon, SearchIcon } from '@/components/Icons'
import { FC, useEffect, useState } from 'react'

export const SearchBar: FC<any> = ({
  suffixTags,
  prefixTags,
  defaultQuery,
}) => {
  const [touched, setTouched] = useState(false)
  const [overlay, setOverlay] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (defaultQuery) setQuery(defaultQuery)
  }, [defaultQuery])

  const handleSearch = (e: any) => {
    e.preventDefault()

    if (
      !query &&
      query.trim().length === 0 &&
      prefixTags.length === 0 &&
      suffixTags.length === 0
    )
      return null

    const encodedParams = encodeURIComponent(
      `${prefixTags
        .map((tag: any) => tag.tag)
        .join(' ')} ${query.trim()} ${suffixTags
        .map((tag: any) => tag.tag)
        .join(' ')}`
    )
    const googleUrl = `https://www.google.com/search?q=${encodedParams}`
    window.location.href = googleUrl
  }

  return (
    <>
      <form
        onSubmit={(e) => handleSearch(e)}
        className={`lg:max-w-[584px] min-h-[45px] max-w-[430px] mt-5 md:mt-7 w-full dark:hover:bg-primary-2 dark:md:bg-transparent dark:bg-primary-2 md:bg-transparent dark:focus:bg-primary-2 dark:hover:border-transparent border bg-transparent border-input-border hover:shadow-md rounded-full overflow-hidden h-10 md:h-11 my-0 mx-auto relative ${
          touched
            ? 'dark:bg-primary-2 dark:border-transparent shadow-lg hover:shadow-lg'
            : 'border-input-border'
        }`}
      >
        <SearchIcon className="absolute w-6 h-6 text-gray-300 md:w-5 md:h-5 dark:text-gray-400 top-2/4 -translate-y-2/4 left-2 md:left-4" />

        <input
          className="w-full h-full px-12 bg-transparent border-none outline-none"
          name="q"
          type="text"
          title="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          maxLength={2048}
          aria-label="Search"
          aria-autocomplete="both"
          aria-haspopup="false"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          autoFocus
          spellCheck="false"
          onClick={() => setOverlay(true)}
          onBlur={() => {
            setTouched(false)
          }}
          onFocus={() => {
            setTouched(true)
            setOverlay(true)
          }}
        />

        {query && (
          <CrossIcon
            onClick={() => setQuery('')}
            className="absolute w-5 h-5 text-gray-600 cursor-pointer dark:text-gray-400 top-2/4 -translate-y-2/4 right-4"
          />
        )}
      </form>

      <div className="flex mt-6 md:mt-7 flex-wrap items-center justify-center max-w-[360px] mx-auto gap-2 md:gap-3">
        <button
          onClick={(e) => handleSearch(e)}
          className="triggers"
        >
          Google Search
        </button>

        <a
          href="https://www.google.com/doodles"
          rel="noopener noreferrer"
          className="hidden triggers sm:flex"
        >
          I'm Feeling Lucky
        </a>
      </div>

      {overlay && (
        <Overlay
          query={query}
          setQuery={setQuery}
          setOverlay={setOverlay}
          handleSearch={handleSearch}
        />
      )}
    </>
  )
}

const Overlay = ({ query, setQuery, setOverlay, handleSearch }: any) => {
  return (
    <div className="fixed inset-0 z-50 block w-full h-full dark:bg-[#303134] bg-white px-2 py-1 md:hidden">
      <form
        onSubmit={(e) => handleSearch(e)}
        className="relative border-b border-input-border"
      >
        <BackIcon
          onClick={() => setOverlay(false)}
          className="absolute w-6 h-6 cursor-pointer dark:text-blue-300 text-[#1A73E8] md:w-5 md:h-5 top-2/4 -translate-y-2/4 left-2 md:left-4"
        />

        <input
          className="w-full px-12 bg-transparent border-none outline-none h-11"
          name="q"
          type="text"
          title="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          maxLength={2048}
          aria-label="Search"
          aria-autocomplete="both"
          aria-haspopup="false"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />

        {query && (
          <CrossIcon
            onClick={() => setQuery('')}
            className="absolute w-6 h-6 text-gray-600 cursor-pointer dark:text-gray-400 top-2/4 -translate-y-2/4 right-4"
          />
        )}
      </form>
    </div>
  )
}
