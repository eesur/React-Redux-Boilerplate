import React from 'react'
import {
  Provider,
  NavLink,
  Column,
  Row
} from 'rebass'

const renderList = (props) => {
  const list = props.users.map((user) => {
    return (
      <Provider key={user.id}>
        <Column mb={0}>
          <NavLink
            href='#!'
            onClick={() => props.selectUser(user)}
          >
            {user.id} {user.first}
          </NavLink>
        </Column>
      </Provider>
    )
  })
  return list
}

const UserList = (props) => {
  return (
    <Row pl={1} mb={2} bg='#e4e6dd'>
      {renderList(props)}
    </Row>
  )
}

export default UserList
