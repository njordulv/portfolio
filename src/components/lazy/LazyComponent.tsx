import { Suspense } from 'react'
import { Preloader } from '@/components/Preloader'
import { useLazyLoad } from '@/hooks/useLazyLoad'

export const LazyComponent = ({
  component: Component,
  id,
}: {
  component: React.LazyExoticComponent<React.ComponentType>
  id?: string
}) => {
  const { ref, isVisible } = useLazyLoad()

  return (
    <div ref={ref} id={id} className="w-full min-h-7">
      {isVisible ? (
        <Suspense fallback={<Preloader />}>
          <Component />
        </Suspense>
      ) : (
        <div className="bg-gray-100/50 animate-pulse" />
      )}
    </div>
  )
}
