import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'

import './styles/index.scss'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [`${theme}`])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
