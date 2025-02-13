import { Suspense } from 'react'
import { Preloader } from '@/components/Preloader'
import { useLazyLoad } from '@/hooks/useLazyLoad'

export const LazyComponent = ({
  component: Component,
}: {
  component: React.LazyExoticComponent<React.ComponentType>
}) => {
  const { ref, isVisible } = useLazyLoad()

  return (
    <div ref={ref} className="w-full min-h-7">
      {isVisible ? (
        <Suspense fallback={<Preloader />}>
          <Component />
        </Suspense>
      ) : (
        <div className="w-full min-h-7 bg-gray-100/50 animate-pulse" />
      )}
    </div>
  )
}
