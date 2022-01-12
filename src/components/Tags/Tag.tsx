import { nanoid } from 'nanoid'
import { useState } from 'react'

interface ITag {
  title: string
  tags: any[]
  setTags: any
}

const Tag = ({ title, tags = [], setTags }: ITag) => {
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
        id: nanoid(5)
      }
    ])

    setTag('')
  }

  return (
    <div className="min-w-[200px] md:min-w-[280px] w-full max-w-xs flex flex-col items-start rounded overflow-hidden">
      <p className="w-full py-1 text-center border rounded-sm border-input-border px-7">
        {title}
      </p>

      {tags.length > 0 && (
        <ul className="flex flex-wrap gap-1 px-4 py-2">
          {tags.map((val: any) => {
            const { tag, id } = val
            return (
              <li
                onClick={() => removeTag(id)}
                key={id}
                title={`Click to delete ${tag}`}
                className="px-3 text-sm bg-green-500 rounded-md cursor-pointer"
              >
                {tag}
              </li>
            )
          })}
        </ul>
      )}

      <div className="w-full py-4">
        <form
          className="flex items-stretch justify-between overflow-hidden border border-gray-500 rounded-md"
          onSubmit={(e) => handleNewTag(e)}
        >
          <input
            className="w-full px-4 py-1 bg-transparent outline-none"
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />

          <button type="submit" className="p-2" disabled={!tag}>
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

export default Tag
