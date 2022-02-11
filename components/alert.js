import Container from './container'
import cn from 'classnames'
import Link from 'next/link'
import { EXAMPLE_PATH } from '@/lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <link
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </link>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              Hello to our Blog
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
