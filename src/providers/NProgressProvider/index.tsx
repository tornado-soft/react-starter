import 'nprogress/nprogress.css'

import nprogress from 'nprogress'

interface Props {
  children?: React.ReactNode
}

nprogress.configure({ showSpinner: false })

export default function NProgressProvider(props: Props): JSX.Element {
  useEffect(() => {
    nprogress.start()
    return () => {
      nprogress.done()
    }
  }, [])
  return <>{props.children}</>
}
