import React, { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

import './styles/index.scss'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const App = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [`${theme}`])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={'/about'} element={<AboutPage />}/>
              <Route path={'/'} element={<MainPage />} />
            </Routes>
        </Suspense>
    </div>
  )
}

export default App
