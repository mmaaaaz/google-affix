import { ReactNode } from 'react'
import { ThemeSwitcher } from '..'
import { BuyMeACoffe, GithubIcon } from '../Icons'

const Header = () => {
  return (
    <header className="flex items-center justify-end w-full p-2 text-sm divide-x md:p-4 divide-secondary-3">
      <div className="pr-6">
        <ThemeSwitcher />
      </div>

      <nav className="flex items-center pl-6 space-x-3 md:space-x-6">
        <HeaderLink link="https://github.com/mmaaaaz/google-affix">
          <GithubIcon className="w-full h-full" />
        </HeaderLink>

        <HeaderLink link="https://github.com/mmaaaaz/google-affix">
          <BuyMeACoffe className="w-full h-full" />
        </HeaderLink>

        <HeaderLink link="https://github.com/mmaaaaz/google-affix">
          <img
            src="https://avatars.githubusercontent.com/u/80816622?v=4"
            alt="Devmaaaz Github link"
            className="object-contain w-full h-full rounded-full"
          />
        </HeaderLink>
      </nav>
    </header>
  )
}

export default Header

interface IHeaderLinks {
  link: string
  children: ReactNode
}

const HeaderLink = ({ children, link }: IHeaderLinks) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="overflow-hidden rounded-full md:w-8 md:h-8 w-6 h-6 p-0.5"
    >
      {children}
    </a>
  )
}
