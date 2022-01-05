import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'

interface Props extends LinkProps {
  children: ReactElement
  colorActive?: string
}

export function ActiveLink({
  children,
  colorActive = 'green.400',
  ...rest
}: Props) {
  const { asPath } = useRouter()

  let isActive = false

  if (asPath === rest.href || asPath === rest.as) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? colorActive : undefined,
      })}
    </Link>
  )
}
