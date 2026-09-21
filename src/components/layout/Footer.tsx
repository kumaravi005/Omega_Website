import { Link } from 'react-router'
import { Logo } from '@/components/common/Logo'
import { Container } from '@/components/ui/Container'
import { courseRoute, ROUTES } from '@/config/routes'
import { siteConfig } from '@/config/site'
import { branches, contactInfo, courses, footerNav } from '@/data'
import { cn } from '@/utils/cn'
import { telHref, whatsappHref } from '@/utils/contact'
import styles from './Footer.module.css'

const socialPlatforms = [
  { key: 'facebook', label: 'Facebook' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'youtube', label: 'YouTube' },
] as const

/**
 * Site footer. Every value comes from src/data: address, phones, email,
 * hours and social links appear only once the institute has supplied them.
 * Until then the contact column shows a neutral "coming soon" note.
 */
export function Footer() {
  const { phones, whatsapp, email, officeHours, social } = contactInfo
  const socialLinks = socialPlatforms.flatMap(({ key, label }) =>
    social[key] ? [{ label, href: social[key] }] : [],
  )
  const hasContactDetails =
    branches.length > 0 || phones.length > 0 || Boolean(whatsapp || email || officeHours)

  return (
    <footer className={cn(styles.footer, 'on-dark')}>
      <Container>
        <div className={styles.grid}>
          {/* Institute information */}
          <div className={styles.brandCol}>
            <Link to={ROUTES.home} className={styles.brandLink}>
              <Logo inverse />
            </Link>
            <p className={styles.about}>{siteConfig.description}</p>

            {socialLinks.length > 0 && (
              <ul className={styles.social} aria-label="Social media">
                {socialLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {label}
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Navigation */}
          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className={styles.title}>{group.title}</h2>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Courses */}
          <nav aria-label="Courses">
            <h2 className={styles.title}>Courses</h2>
            <ul className={styles.list}>
              {courses.map((course) => (
                <li key={course.slug}>
                  <Link to={courseRoute(course.slug)}>{course.title}</Link>
                </li>
              ))}
              <li>
                <Link to={ROUTES.courses}>All courses</Link>
              </li>
            </ul>
          </nav>

          {/* Contact and address */}
          <div className={styles.contactCol}>
            <h2 className={styles.title}>Contact</h2>
            {hasContactDetails ? (
              <div className={styles.contact}>
                {branches.map((branch) => (
                  <address key={branch.id}>
                    <strong>{branch.name}</strong>
                    <br />
                    {branch.address.line1}
                    <br />
                    {branch.address.line2 && (
                      <>
                        {branch.address.line2}
                        <br />
                      </>
                    )}
                    {branch.address.city}, {branch.address.state} {branch.address.pincode}
                  </address>
                ))}
                {(phones.length > 0 || email || whatsapp) && (
                  <ul className={styles.list}>
                    {phones.map((phone) => (
                      <li key={phone}>
                        <a href={telHref(phone)}>{phone}</a>
                      </li>
                    ))}
                    {whatsapp && (
                      <li>
                        <a href={whatsappHref(whatsapp)} target="_blank" rel="noopener noreferrer">
                          WhatsApp: {whatsapp}
                          <span className="visually-hidden"> (opens in a new tab)</span>
                        </a>
                      </li>
                    )}
                    {email && (
                      <li>
                        <a href={`mailto:${email}`}>{email}</a>
                      </li>
                    )}
                  </ul>
                )}
                {officeHours && <p>{officeHours}</p>}
              </div>
            ) : (
              <p className={styles.note}>
                Address and phone numbers will be published here soon. Meanwhile, see the{' '}
                <Link to={ROUTES.contact}>Contact page</Link>.
              </p>
            )}
          </div>
        </div>

        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
