import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { ExternalLinkIcon } from '@heroicons/react/outline'

import { Button, Container, Logo, NavLink } from '@/components'

function MobileNavLink({ href, children, blank }) {
  const classes = 'block w-full p-2'
  if (blank) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
        <ExternalLinkIcon className="ml-1 inline-block h-5 w-5 text-teal-500" />
      </a>
    )
  }
  return (
    <Popover.Button as={Link} href={href} className={classes}>
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-neutral-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-neutral-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-8 text-lg tracking-tight text-neutral-900 shadow-xl ring-1 ring-neutral-900/5"
          >
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/lightpaper">Lightpaper</MobileNavLink>
            <MobileNavLink href="https://skeb.jp" blank>
              Launch App
            </MobileNavLink>
            {/* <div className="mt-8 space-y-3 sm:flex sm:space-y-0 sm:space-x-2">
              <Button
                href="/Skeb_Coin_En_20220819 02.pdf"
                color="teal"
                variant="outline"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                Whitepaper
              </Button>
              <Button
                href="https://skeb.jp"
                color="teal"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                Launch App
              </Button>
            </div> */}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export default function Header() {
  return (
    <header className="py-5 sm:py-10">
      <Container>
        <nav className="relative z-50 flex items-center">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-14 w-auto hover:opacity-80" />
            </Link>
          </div>
          <div className="ml-14 hidden md:gap-x-4 lg:flex">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/lightpaper">Lightpaper</NavLink>
            <NavLink href="https://skeb.jp" blank>
              Launch App
            </NavLink>
          </div>
          {/* <div className="hidden items-center gap-x-2 lg:flex">
            <Button
              href="/Skeb_Coin_En_20220819 02.pdf"
              color="teal"
              variant="outline"
              target="_blank"
              rel="noreferrer"
            >
              Whitepaper
            </Button>
            <Button
              href="https://skeb.jp"
              color="teal"
              target="_blank"
              rel="noreferrer"
            >
              Launch App
            </Button>
          </div> */}
          <div className="ml-auto lg:hidden">
            <MobileNavigation />
          </div>
        </nav>
      </Container>
    </header>
  )
}
