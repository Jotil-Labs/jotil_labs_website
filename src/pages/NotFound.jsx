import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'

export function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <AnimatedSection className="text-center">
        <p className="text-8xl font-bold text-gradient mb-4">404</p>
        <h1 className="text-2xl font-bold text-text mb-3">
          Page Not Found
        </h1>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/">
          <Button>
            <ArrowLeft size={16} strokeWidth={1.5} />
            Back to Home
          </Button>
        </Link>
      </AnimatedSection>
    </section>
  )
}
