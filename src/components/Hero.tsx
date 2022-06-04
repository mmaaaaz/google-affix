import { useTheme } from 'next-themes'
import { useMemo } from 'react'

const darkLogo =
  'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png'
const lightLogo =
  'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'

export const Hero = () => {
  const { resolvedTheme } = useTheme()

  const resolvedLogo = useMemo(
    () => (resolvedTheme === 'light' ? lightLogo : darkLogo),
    [resolvedTheme]
  )

  return (
    <div className="relative max-w-[157px] md:max-w-[272px] md:h-[92px] h-[61px] w-full">
      {resolvedTheme ? (
        <img
          src={resolvedLogo}
          alt="Google Logo"
          className="object-contain"
        />
      ) : (
        <img
          src={resolvedLogo}
          alt="Google Logo"
          className="object-contain"
        />
      )}

      <p className="absolute px-5 text-sm font-bold tracking-wider text-green-500 transform translate-x-full border rounded shadow-lg select-none border-green-500/40 lg:text-base shadow-green-400/10 right-1/4 -top-7 md:-top-10">
        Affix
      </p>
    </div>
  )
}
