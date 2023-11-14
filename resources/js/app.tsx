import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import ReactDOM from 'react-dom'
import '../css/app.css'
import { socket, SocketContext } from './context/socket'

const el = document.getElementById('app')

// ReactDOM.render(
//   <SocketContext.Provider value={socket}>
//     <InertiaApp
//       initialPage={JSON.parse(el.dataset.page)}
//       initialComponent={null}
//       resolveComponent={(name) => import(`./pages/${name}`).then((module) => module.default)}
//     />
//   </SocketContext.Provider>,
//   el
// )

import { createRoot } from 'react-dom/client'
const container = document.getElementById('app')

const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
  <SocketContext.Provider value={socket}>
    <InertiaApp
      initialPage={JSON.parse(el.dataset.page)}
      initialComponent={null}
      resolveComponent={(name) => import(`./pages/${name}`).then((module) => module.default)}
    />
  </SocketContext.Provider>
)
