import { Link, NavLink } from 'react-router'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import { ROUTES } from '@/config/routes'
import { siteConfig } from '@/config/site'
import { headerCta, primaryNav } from '@/data'
import { useDisclosure } from '@/hooks/useDisclosure'
import { cn } from '@/utils/cn'
import styles from './Header.module.css'

/** Site header: brand, primary navigation, admission CTA and a mobile menu. */
export function Header() {
  const menu = useDisclosure()

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        {/* Text wordmark until the official logo is supplied (see src/assets/logo). */}
        <Link to={ROUTES.home} className={styles.brand} onClick={menu.close}>
          {siteConfig.name}
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={menu.isOpen}
          aria-controls="primary-navigation"
          onClick={menu.toggle}
        >
          {menu.isOpen ? 'Close' : 'Menu'}
          <span className="visually-hidden"> navigation</span>
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={cn(styles.nav, menu.isOpen && styles.navOpen)}
        >
          <ul className={styles.list}>
            {primaryNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === ROUTES.home}
                  className={({ isActive }) =>
                    cn(styles.link, isActive && styles.linkActive)
                  }
                  onClick={menu.close}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <ButtonLink to={headerCta.to} variant="accent" size="sm" onClick={menu.close}>
            {headerCta.label}
          </ButtonLink>
        </nav>
      </Container>
    </header>
  )
}
