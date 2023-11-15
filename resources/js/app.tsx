import { InertiaApp, createInertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import ReactDOM from 'react-dom'
import '../css/app.css'
import '@mantine/core/styles.css'
import { MantineProvider, createTheme } from '@mantine/core'

const theme = createTheme({
  /** Put your mantine theme override here */
})

const el = document.getElementById('app')

import { createRoot } from 'react-dom/client'
import { MantineLayout } from './components/MantineLayout'

createInertiaApp({
  resolve: (name) => {
    const page = require(`./pages/${name}`)
    page.default.layout = page.default.layout || ((page) => <MantineLayout children={page} />)
    return page
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
