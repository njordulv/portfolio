import { Spinner } from '@nextui-org/spinner'

export default function loading() {
  return (
    <main className="flex flex-col items-center place-content-center min-h-screen">
      <Spinner color="default" size="lg" />
    </main>
  )
}
