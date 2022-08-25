import Link from 'next/link'
import { ExternalLinkIcon } from '@heroicons/react/outline'

export default function NavLink({ href, children, blank }) {
  const classes =
    'inline-block rounded-xl py-3 px-5 text-lg text-neutral-800 hover:bg-white'
  if (blank) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
        <ExternalLinkIcon className="ml-1 inline-block h-5 w-5" />
      </a>
    )
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
