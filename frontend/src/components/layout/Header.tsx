import { useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Logo } from '@/components/common/Logo'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import { ROUTES } from '@/config/routes'
import { headerCta, primaryNav } from '@/data'
import { useDisclosure } from '@/hooks/useDisclosure'
import { cn } from '@/utils/cn'
import styles from './Header.module.css'

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

/**
 * Site header: brand, primary navigation, admission CTA.
 * Below 1024px the navigation collapses into a menu that closes on route
 * change, link click and Escape.
 */
export function Header() {
  const { isOpen, close, toggle } = useDisclosure()
  const { pathname } = useLocation()
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Close after navigating (including browser back / forward).
  useEffect(() => {
    close()
  }, [pathname, close])

  // Escape closes the open menu and returns focus to its button.
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, close])

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link to={ROUTES.home} className={styles.brand} onClick={close}>
          <Logo />
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={toggle}
        >
          <MenuIcon open={isOpen} />
          <span className="visually-hidden">{isOpen ? 'Close menu' : 'Open menu'}</span>
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={cn(styles.nav, isOpen && styles.navOpen)}
        >
          <ul className={styles.list}>
            {primaryNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === ROUTES.home}
                  className={({ isActive }) => cn(styles.link, isActive && styles.linkActive)}
                  onClick={close}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <ButtonLink to={headerCta.to} variant="accent" onClick={close}>
            {headerCta.label}
          </ButtonLink>
        </nav>
      </Container>
    </header>
  )
}
