import { FC, useEffect, useState } from 'react'
import { CrossIcon, SearchIcon } from '@/components/Icons'

const SearchBar: FC<any> = ({ suffixTags, prefixTags, doseMatch }) => {
  const [touched, setTouched] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (doseMatch) setQuery('rated')
  }, [doseMatch])

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
        className={`lg:max-w-[584px] max-w-[430px] mt-3 md:mt-6 w-full dark:hover:bg-primary-2 dark:focus:bg-primary-2 dark:hover:border-transparent border hover:shadow-md rounded-full overflow-hidden h-9 md:h-11 my-0 mx-auto relative ${
          touched
            ? 'dark:bg-primary-2 dark:border-transparent shadow-lg'
            : 'border-input-border'
        }`}
      >
        <SearchIcon className="absolute w-5 h-5 text-gray-300 dark:text-gray-400 top-2/4 -translate-y-2/4 left-4" />

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
          onBlur={() => setTouched(false)}
          onFocus={() => setTouched(true)}
        />

        {query && (
          <CrossIcon
            onClick={() => setQuery('')}
            className="absolute w-5 h-5 text-gray-600 cursor-pointer dark:text-gray-400 top-2/4 -translate-y-2/4 right-4"
          />
        )}
      </form>

      <div className="flex mt-6 flex-wrap items-center justify-center max-w-[360px] mx-auto gap-2 sm:gap-5">
        <button onClick={(e) => handleSearch(e)} className="triggers">
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
    </>
  )
}

export default SearchBar
