import { Tag } from './Tag'

export const Tags = ({
  prefixTags,
  setPrefixTags,
  suffixTags,
  setSuffixTags,
}: any) => {
  return (
    <div className="flex flex-wrap items-start justify-center w-full max-w-md gap-8 p-4 mx-auto mt-5 md:max-w-3xl">
      <Tag
        title="Prefix Tags"
        tags={prefixTags}
        setTags={setPrefixTags}
      />

      <Tag
        title="Suffix Tags"
        tags={suffixTags}
        setTags={setSuffixTags}
      />
    </div>
  )
}
