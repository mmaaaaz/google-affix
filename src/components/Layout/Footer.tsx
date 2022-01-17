import { HeartIcon } from '../Icons'

const Footer = () => {
  return (
    <footer className="flex flex-col w-full text-xs text-gray-500 sm:text-sm bg-primary-3 dark:text-gray-300">
      <div className="flex items-center justify-center px-5 md:px-8 py-3 border-b border-input-border/[0.15]">
        <p className="flex items-center justify-center mx-auto text-center w-max">
          Made with
          <HeartIcon className="w-6 h-6 mx-1 text-red-600 animate-pulse" /> in
          Pakistan
        </p>
      </div>

      <div className="flex items-center justify-between w-full px-5 py-3 md:px-8 ">
        <h1 className="">
          Search Google with persistent prefix and suffix tags
        </h1>
        <h2 className="h-full overflow-x-auto text-center whitespace-normal">
          Inspiration
          <a
            className="mx-1 font-medium text-green-500 whitespace-pre rounded-md"
            href="https://www.tagglesearch.app/"
            rel="noopener noreferrer"
          >
            Taggle Search
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

export default Footer
