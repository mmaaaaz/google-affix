import { nanoid } from 'nanoid'
import { useState } from 'react'
interface Tags {
  id: string
  tag: string
}

interface ITag {
  title: string
  tags: Tags[]
  setTags: any
}

export const Tag = ({ title, tags = [], setTags }: ITag) => {
  const [tag, setTag] = useState<string>('')

  const removeTag = (id: string) => {
    const filteredTags = tags.filter((t: any) => t.id !== id)
    setTags(filteredTags)
  }

  const handleNewTag = (e: any) => {
    e.preventDefault()
    setTags([
      ...tags,
      {
        tag,
        id: nanoid(5),
      },
    ])

    setTag('')
  }

  return (
    <div className="min-w-[200px] md:min-w-[280px] w-full border-2 border-input-border max-w-xs flex flex-col items-start justify-between rounded overflow-hidden">
      <div className="relative flex items-center justify-center w-full h-8 py-1 text-center border-b rounded-sm border-input-border px-7">
        <p className="select-none">{title}</p>
        {tags.length > 0 && (
          <div className="absolute right-2 top-2/4 -translate-y-2/4">
            <Delete
              title="Delete All Tags"
              onClick={() => setTags([])}
            />
          </div>
        )}
      </div>

      {tags.length > 0 ? (
        <ul className="flex flex-wrap h-full min-h-[5rem] items-center flex-1 gap-1 px-4 py-4">
          {tags.map(({ tag, id }: any) => {
            return (
              <li
                key={id}
                title={tag}
                className="relative flex items-center text-white justify-between h-6 max-w-[18rem] pl-3 pr-8 overflow-hidden text-sm truncate transition-colors duration-150 ease-in-out bg-green-500 rounded-full group hover:bg-green-600"
              >
                <span>{tag}</span>
                <div className="absolute right-0 top-2/4 -translate-y-2/4 ">
                  <Delete onClick={() => removeTag(id)} />
                </div>
              </li>
            )
          })}
        </ul>
      ) : (
        <div className="h-full min-h-[5rem] py-4 select-none flex-1 flex items-center justify-center w-full px-4">
          <p className="text-sm text-center text-gray-400">
            Add some {title} <br /> by clicking on the input below
          </p>
        </div>
      )}

      <div className="w-full">
        <form
          className="flex items-stretch justify-between overflow-hidden border-input-border border-y"
          onSubmit={(e) => handleNewTag(e)}
        >
          <input
            className="w-full px-4 py-1 bg-transparent outline-none"
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />

          <button
            type="submit"
            className="p-2"
            disabled={!tag}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-4 h-4 ${tag ? 'text-green-400' : ''}`}
            >
              <path d="m9 11 3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}

const Delete = ({ onClick, ...props }: any) => {
  return (
    <button
      className="flex items-center justify-center w-6 h-6 text-white bg-green-600 rounded-full group-hover:bg-green-400 hover:bg-green-400"
      onClick={onClick}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    </button>
  )
}
