import { HeartIcon } from '../Icons'

export const Footer = () => {
  return (
    <footer className="flex flex-col w-full text-xs text-gray-500 sm:text-sm bg-primary-3 dark:text-gray-300">
      <div className="flex items-center justify-center px-5 md:px-8 py-3 border-b border-input-border/[0.15]">
        <h1>Search Google with persistent prefix and suffix tags</h1>
      </div>

      <div className="flex flex-col items-center justify-between px-5 py-3 mx-auto space-x-3 w-max sm:w-full sm:flex-row md:px-8 ">
        <p className="flex items-center justify-center">
          Made with
          <HeartIcon className="w-6 h-6 mx-1 text-red-600 animate-pulse" /> in
          Pakistan
        </p>
        <h2>
          Inspiration
          <a
            className="mx-1 font-medium text-green-500 rounded-md"
            href="https://www.tagglesearch.app/"
            rel="noopener noreferrer"
          >
            Taggle&nbsp;Search
          </a>
          by
          <a
            className="mx-1 font-medium text-green-500 rounded-md"
            href="https://danielrobertson.me/"
            rel="noopener noreferrer"
          >
            @danielrobertson
          </a>
        </h2>
      </div>
    </footer>
  )
}
