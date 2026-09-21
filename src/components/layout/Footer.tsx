import { Link } from 'react-router'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/config/site'
import { contactInfo, footerNav } from '@/data'
import styles from './Footer.module.css'

/** Site footer: institute name, grouped links, confirmed contact details (if any) and copyright. */
export function Footer() {
  const hasContact = contactInfo.phones.length > 0 || Boolean(contactInfo.email)

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div>
            <p className={styles.name}>{siteConfig.name}</p>
            {hasContact && (
              <ul className={styles.contact}>
                {contactInfo.phones.map((phone) => (
                  <li key={phone}>{phone}</li>
                ))}
                {contactInfo.email && <li>{contactInfo.email}</li>}
              </ul>
            )}
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className={styles.groupTitle}>{group.title}</h2>
              <ul className={styles.links}>
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
