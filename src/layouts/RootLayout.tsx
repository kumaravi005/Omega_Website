import { Outlet, ScrollRestoration } from 'react-router'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

/**
 * Shell shared by every page: skip link, Header, page content, Footer.
 * Pages render only their own content — never the header or footer.
 */
export function RootLayout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      {/* tabIndex=-1 lets the skip link move focus here in every browser */}
      <main id="main-content" tabIndex={-1} className="page-main">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}
