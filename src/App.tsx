import reactLogo from '@/assets/svg/react.svg'
import viteLogo from '@/assets/svg/vite.svg'

export default function App() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 bottom-20 m-auto flex h-fit w-fit flex-col space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={viteLogo}
              width="64"
              className="logo"
              alt="Vite logo"
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={reactLogo}
              width="64"
              className="logo react"
              alt="React logo"
            />
          </a>
        </div>
        <span className="text-2xl">React TypeScript Starter Template</span>
      </div>
    </div>
  )
}
