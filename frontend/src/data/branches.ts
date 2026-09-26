import { siteConfig } from '@/config/site'
import type { Branch } from '@/types/content'
import { formatAddress, mapsSearchUrl } from '@/utils/contact'

/**
 * Centre location, confirmed from the official prospectus ("OEC Guide",
 * session 2026-27, back cover). The prospectus spells the locality "Vyaspur"
 * (an earlier project note had spelled it "Biyaspur" — "Vyaspur" is used here
 * as the documented spelling).
 *
 * `mapUrl` is a Google Maps text search built from this address, not a
 * confirmed pinned location — it is a best-effort "find this place" link.
 */
const address = {
  line1: 'Vyaspur',
  city: 'Samastipur',
  state: 'Bihar',
  pincode: '848505',
}

export const branches: Branch[] = [
  {
    id: 'main-centre',
    name: siteConfig.name,
    address,
    mapUrl: mapsSearchUrl(formatAddress(address)),
  },
]
