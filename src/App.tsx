import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider, theme as Theme } from 'antd'
import router from '@/router'
import { StyleProvider } from '@ant-design/cssinjs'

export default function App() {
  const { theme } = useThemeStore()

  useEffect(() => {
    ThemeUtils.changeThemeMode(theme)
  }, [])

  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {},
          algorithm:
            theme === 'light' ? Theme.defaultAlgorithm : Theme.darkAlgorithm
        }}
      >
        <RouterProvider router={createBrowserRouter(router)} />
      </ConfigProvider>
    </StyleProvider>
  )
}
