const Footer = () => {
  return (
    <footer className="flex flex-col w-full text-xs text-gray-500 sm:text-sm bg-primary-3 dark:text-gray-300">
      <h1 className="flex items-center justify-center w-full h-full px-4 py-3 text-center border-b border-input-border/30">
        Search Google with persistent prefix and suffix tags
      </h1>
      <h2 className="flex items-center justify-center w-full h-full px-4 py-3 overflow-x-auto text-center whitespace-normal">
        Inspiration:
        <a
          className="px-1 mx-1 font-medium text-green-500 whitespace-pre rounded-md"
          href="https://www.tagglesearch.app/"
          rel="noopener noreferrer"
        >
          Taggle Search
        </a>
        by
        <a
          className="px-1 mx-1 font-medium text-green-500 rounded-md"
          href="https://danielrobertson.me/"
          rel="noopener noreferrer"
        >
          @danielrobertson
        </a>
      </h2>
    </footer>
  )
}

export default Footer
