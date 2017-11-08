import React from 'react'
import UserList from '../containers/user-list'
import UserDetails from '../containers/user-detail'
import {
  Provider,
  Divider,
  Subhead
} from 'rebass'

const App = () => (
  <Provider>
    <Subhead
      color='#635045'
      is='h3'
      f={18}
      mb={2}
      children='User List:'
    />
    <UserList />
    <Subhead
      color='#635045'
      is='h3'
      f={18}
      mb={2}
      children='User Details:'
    />
    <UserDetails />
    <Divider
      py={2}
      w={1}
      color='#e4e6dd'
    />
  </Provider>
)

export default App
