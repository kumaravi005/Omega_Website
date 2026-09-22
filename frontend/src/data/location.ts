import type { LocalityInfo } from '@/types/content'

/**
 * General locality only — not a full postal address. Kept isolated here, apart
 * from `data/contact.ts` / `data/branches.ts`, so it can be corrected in one
 * place and does not accidentally get treated as a confirmed full address.
 *
 * Do not add a PIN code, exact street address, landmark or map link here until
 * the institute confirms them — then move this into a proper `Branch` entry
 * in data/branches.ts instead.
 */
export const locality: LocalityInfo = {
  village: 'Bikrampur, Vyaspur',
  district: 'Samastipur',
  state: 'Bihar',
  // The brief that requested this data spelled it "Biyaspur"; the prospectus
  // spells it "Vyaspur". Confirm which is correct before publishing a full address.
  spellingUnconfirmed: true,
}
