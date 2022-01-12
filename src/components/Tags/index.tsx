import Tag from './Tag'

const Tags = ({
  prefixTags,
  setPrefixTags,
  suffixTags,
  setSuffixTags
}: any) => {
  return (
    <div className="flex flex-wrap justify-between w-full max-w-md gap-8 p-4 mx-auto mt-5 md:max-w-3xl">
      <Tag title="Prefix Tags" tags={prefixTags} setTags={setPrefixTags} />
      <Tag title="Suffix Tags" tags={suffixTags} setTags={setSuffixTags} />
    </div>
  )
}

export default Tags
