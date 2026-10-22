import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/**
 * THIS FILE IS YOURS.
 *
 * Components registered here can be used in any `.mdx` page. They merge on
 * top of Thally's built-in components and aren't overwritten when you
 * update Thally.
 */

interface ActionButtonsProps {
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

/** A pair of buttons styled like the Hero's, for use anywhere on a page. */
function ActionButtons({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: ActionButtonsProps) {
  // Uses the Hero's exact classes. Tailwind doesn't scan src/mdx/, so only
  // classes already used in scanned files (like the Hero's) get CSS.
  return (
    <div className="not-prose mt-8 flex flex-wrap items-center gap-3">
      <Link
        href={primaryHref}
        className="inline-flex items-center gap-2 rounded-[9px] bg-primary px-4 py-2 text-[0.84rem] font-semibold text-primary-foreground transition hover:brightness-125 active:scale-[0.98]"
      >
        {primaryLabel}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
      {secondaryHref && secondaryLabel ? (
        <Link
          href={secondaryHref}
          className="inline-flex items-center gap-2 rounded-[9px] border border-border bg-background px-4 py-2 text-[0.84rem] font-semibold text-foreground transition hover:border-accent hover:text-foreground active:scale-[0.98]"
        >
          {secondaryLabel}
        </Link>
      ) : null}
    </div>
  )
}

export const customComponents: MDXComponents = {
  ActionButtons,
}