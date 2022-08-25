import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-4 px-8 font-semibold',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-4 px-8 font-semibold',
}

const variantStyles = {
  solid: {
    teal: 'bg-teal-500 text-white hover:bg-teal-400',
    white: 'bg-white text-teal-500 hover:bg-teal-50',
  },
  outline: {
    teal: 'bg-white ring-teal-500 text-teal-500 hover:bg-teal-50',
    white: 'ring-white text-white hover:bg-teal-400',
  },
}

export default function Button({
  variant = 'solid',
  color = 'teal',
  className,
  href,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
