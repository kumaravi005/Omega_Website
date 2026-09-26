import { useId, useRef, useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { contactInfo, programmes } from '@/data'
import type { ProgrammeSlug } from '@/types/content'
import type { EnquiryFieldErrors, EnquiryFormValues } from '@/types/enquiry'
import { telHref, whatsappHref } from '@/utils/contact'
import { ENQUIRY_FIELD_ORDER, submitEnquiry, validateEnquiryForm, validateField } from '@/utils/enquiry'

const EMPTY_VALUES: EnquiryFormValues = {
  studentName: '',
  parentName: '',
  studentClass: '',
  programme: '',
  phone: '',
  preferredContact: '',
  message: '',
}

// Confirmed class ranges (see data/programmes.ts) as selectable options.
const CLASS_OPTIONS: Record<ProgrammeSlug, string[]> = {
  'pre-foundation': ['Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
  foundation: ['Class 11', 'Class 12'],
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

/**
 * Real, working admission enquiry form. Submits to the backend API
 * (POST /api/enquiries — see backend/src/routes/enquiries.ts). There is no
 * permanent storage or email notification behind it yet; a successful
 * submission means the institute's server received and validated it, not
 * that anyone has replied — the success message says exactly that, and
 * offers the direct contact channels alongside it.
 */
export function AdmissionEnquiryForm() {
  const idPrefix = useId()
  const [values, setValues] = useState<EnquiryFormValues>(EMPTY_VALUES)
  const [errors, setErrors] = useState<EnquiryFieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  // A plain ref, not state: two submits fired in the same synchronous tick
  // (a very fast double-click, or a test dispatching requestSubmit twice back
  // to back) would both still read the OLD `status` from this render's
  // closure, since React hasn't re-rendered between them yet. A ref mutates
  // immediately, so the second call always sees the first call's guard.
  const submittingRef = useRef(false)

  const fieldId = (name: keyof EnquiryFormValues) => `${idPrefix}-${name}`
  const errorId = (name: keyof EnquiryFormValues) => `${idPrefix}-${name}-error`

  function updateValue(name: keyof EnquiryFormValues, value: string) {
    setValues((prev) => {
      const next = { ...prev, [name]: value }
      // A class from the previous programme may no longer be valid.
      if (name === 'programme') next.studentClass = ''
      return next
    })
    setErrors((prev) => {
      if (!(name in prev)) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  function handleTextChange(name: keyof EnquiryFormValues) {
    return (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      updateValue(name, event.target.value)
    }
  }

  function handleBlur(name: keyof EnquiryFormValues) {
    return (event: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      // Validate the live DOM value at blur time, not `values` from this
      // closure — a change and a blur can in principle land in the same
      // React batch, in which case `values` here would still be one keystroke
      // behind. `event.target.value` is always current.
      const error = validateField(name, { ...values, [name]: event.target.value })
      setErrors((prev) => {
        if (error) return { ...prev, [name]: error }
        if (!(name in prev)) return prev
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  function focusFirstInvalid(fields: EnquiryFieldErrors) {
    const firstInvalid = ENQUIRY_FIELD_ORDER.find((name) => fields[name])
    if (firstInvalid) document.getElementById(fieldId(firstInvalid))?.focus()
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // Guards against a second click while a request is already in flight, and
    // against resubmitting once it has already succeeded.
    if (submittingRef.current || status === 'success') return

    const validationErrors = validateEnquiryForm(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      focusFirstInvalid(validationErrors)
      return
    }

    submittingRef.current = true
    setStatus('submitting')
    setStatusMessage('')

    const result = await submitEnquiry(values)

    if (result.ok) {
      setStatus('success')
      setStatusMessage(result.message)
      return
    }

    submittingRef.current = false
    setStatus('error')
    setStatusMessage(result.message)
    if (result.fields) {
      setErrors(result.fields)
      focusFirstInvalid(result.fields)
    }
  }

  if (status === 'success') {
    const phone = contactInfo.phones[0]
    return (
      <div className="form-status form-status--success" role="status">
        <p className="lead">{statusMessage || 'Thank you — your enquiry has been received.'}</p>
        <p>
          If you would like to reach us directly in the meantime, you can{' '}
          {phone && <a href={telHref(phone)}>call {phone}</a>}
          {phone && contactInfo.whatsapp && ' or '}
          {contactInfo.whatsapp && (
            <a href={whatsappHref(contactInfo.whatsapp)} target="_blank" rel="noopener noreferrer">
              message us on WhatsApp
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          )}
          .
        </p>
      </div>
    )
  }

  const classOptions = values.programme ? CLASS_OPTIONS[values.programme] : []

  return (
    <form className="stack" noValidate onSubmit={handleSubmit}>
      <p className="hint">Fields marked with an asterisk (*) are required.</p>

      {status === 'error' && (
        <div className="form-status form-status--error" role="alert">
          <p>{statusMessage}</p>
        </div>
      )}

      <div className="field">
        <label className="label" htmlFor={fieldId('studentName')}>
          Student name<span className="required" aria-hidden="true">*</span>
        </label>
        <input
          id={fieldId('studentName')}
          name="studentName"
          className="input"
          type="text"
          autoComplete="name"
          placeholder="e.g. Aman Kumar"
          required
          maxLength={100}
          value={values.studentName}
          onChange={handleTextChange('studentName')}
          onBlur={handleBlur('studentName')}
          aria-invalid={Boolean(errors.studentName)}
          aria-describedby={errors.studentName ? errorId('studentName') : undefined}
        />
        {errors.studentName && (
          <p className="field-error" id={errorId('studentName')}>
            {errors.studentName}
          </p>
        )}
      </div>

      <div className="field">
        <label className="label" htmlFor={fieldId('parentName')}>
          Parent / guardian name<span className="required" aria-hidden="true">*</span>
        </label>
        <input
          id={fieldId('parentName')}
          name="parentName"
          className="input"
          type="text"
          autoComplete="name"
          placeholder="e.g. Suresh Kumar"
          required
          maxLength={100}
          value={values.parentName}
          onChange={handleTextChange('parentName')}
          onBlur={handleBlur('parentName')}
          aria-invalid={Boolean(errors.parentName)}
          aria-describedby={errors.parentName ? errorId('parentName') : undefined}
        />
        {errors.parentName && (
          <p className="field-error" id={errorId('parentName')}>
            {errors.parentName}
          </p>
        )}
      </div>

      <div className="field">
        <label className="label" htmlFor={fieldId('programme')}>
          Programme<span className="required" aria-hidden="true">*</span>
        </label>
        <select
          id={fieldId('programme')}
          name="programme"
          className="select"
          required
          value={values.programme}
          onChange={handleTextChange('programme')}
          onBlur={handleBlur('programme')}
          aria-invalid={Boolean(errors.programme)}
          aria-describedby={errors.programme ? errorId('programme') : undefined}
        >
          <option value="">Select a programme</option>
          {programmes.map((programme) => (
            <option key={programme.slug} value={programme.slug}>
              {programme.name} ({programme.classRange})
            </option>
          ))}
        </select>
        {errors.programme && (
          <p className="field-error" id={errorId('programme')}>
            {errors.programme}
          </p>
        )}
      </div>

      <div className="field">
        <label className="label" htmlFor={fieldId('studentClass')}>
          Student class<span className="required" aria-hidden="true">*</span>
        </label>
        <select
          id={fieldId('studentClass')}
          name="studentClass"
          className="select"
          required
          disabled={!values.programme}
          value={values.studentClass}
          onChange={handleTextChange('studentClass')}
          onBlur={handleBlur('studentClass')}
          aria-invalid={Boolean(errors.studentClass)}
          aria-describedby={errors.studentClass ? errorId('studentClass') : undefined}
        >
          <option value="">{values.programme ? 'Select a class' : 'Select a programme first'}</option>
          {classOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.studentClass && (
          <p className="field-error" id={errorId('studentClass')}>
            {errors.studentClass}
          </p>
        )}
      </div>

      <div className="field">
        <label className="label" htmlFor={fieldId('phone')}>
          Phone number<span className="required" aria-hidden="true">*</span>
        </label>
        <input
          id={fieldId('phone')}
          name="phone"
          className="input"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="e.g. 98765 43210"
          required
          maxLength={20}
          value={values.phone}
          onChange={handleTextChange('phone')}
          onBlur={handleBlur('phone')}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? errorId('phone') : undefined}
        />
        {errors.phone && (
          <p className="field-error" id={errorId('phone')}>
            {errors.phone}
          </p>
        )}
      </div>

      <fieldset className="fieldset">
        <legend className="legend">
          Preferred contact method<span className="required" aria-hidden="true">*</span>
        </legend>
        <div
          className="radio-group"
          role="radiogroup"
          aria-invalid={Boolean(errors.preferredContact)}
          aria-describedby={errors.preferredContact ? errorId('preferredContact') : undefined}
        >
          <label className="radio-option">
            <input
              type="radio"
              name="preferredContact"
              value="call"
              checked={values.preferredContact === 'call'}
              onChange={handleTextChange('preferredContact')}
              onBlur={handleBlur('preferredContact')}
            />
            Phone call
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="preferredContact"
              value="whatsapp"
              checked={values.preferredContact === 'whatsapp'}
              onChange={handleTextChange('preferredContact')}
              onBlur={handleBlur('preferredContact')}
            />
            WhatsApp
          </label>
        </div>
        {errors.preferredContact && (
          <p className="field-error" id={errorId('preferredContact')}>
            {errors.preferredContact}
          </p>
        )}
      </fieldset>

      <div className="field">
        <label className="label" htmlFor={fieldId('message')}>
          Message / enquiry
        </label>
        <textarea
          id={fieldId('message')}
          name="message"
          className="textarea"
          placeholder="Anything you'd like to tell us — e.g. when you're looking to join, or a question about the programme."
          maxLength={1000}
          value={values.message}
          onChange={handleTextChange('message')}
          onBlur={handleBlur('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? errorId('message') : undefined}
        />
        {errors.message && (
          <p className="field-error" id={errorId('message')}>
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" variant="accent" size="lg" disabled={status === 'submitting'} aria-busy={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send enquiry'}
      </Button>
    </form>
  )
}
