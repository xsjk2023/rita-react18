import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { Admin, Authenticated, Guest } from '../lib/authorization'
import useTitle from '../lib/use-title'
import { useDisclosure } from '@mantine/hooks'

const Index = () => {
  const {
    props: { user, authenticated },
  } = usePage()
  useTitle(authenticated ? user.name : useTitle('Home'))

  return (
    <div className="flex items-center justify-center h-full w-full px-5">
      <Guest>
        <div className="bg-white w-full max-w-sm p-5 rounded-lg">
          <Link className="button my-3" href="/auth/login">
            Login
          </Link>
          <Link className="button my-3" href="/auth/register">
            Register
          </Link>
        </div>
      </Guest>
      <Authenticated>
        <div className="bg-white w-full max-w-md p-5 rounded-lg">
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
            }}
          >
            {JSON.stringify(user, null, 2)}
          </pre>
          <div className="mt-4">
            <Admin>
              <Link className="button w-full mb-4" href="/admin">
                Admin
              </Link>
            </Admin>
            <Link className="button w-full" href="/auth/logout">
              Logout
            </Link>
          </div>
        </div>
      </Authenticated>
    </div>
  )
}

export default Index
