import { useTheme } from 'next-themes'
import Image from 'next/image'

const Hero = () => {
  const { resolvedTheme } = useTheme()

  const resolvedImage =
    resolvedTheme === 'dark' ? 'googlelogo_bw.png' : 'googlelogo_color.png'

  return (
    <div className="relative max-w-[180px] md:max-w-[272px] md:h-[92px] h-[61px] w-full">
      <Image
        src={`/${resolvedImage}`}
        alt="Google Logo"
        objectFit="contain"
        layout="fill"
      />
      <p className="absolute px-5 text-sm font-bold tracking-wider text-white transform translate-x-full bg-green-500 rounded shadow-lg select-none lg:text-base shadow-green-400/10 right-1/4 -top-10">
        Affix
      </p>
    </div>
  )
}

export default Hero
