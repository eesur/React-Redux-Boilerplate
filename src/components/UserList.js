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
        <Column>
          <NavLink
            href='#!'
            onClick={() => props.selectUser(user)}
          >
            {user.first}
          </NavLink>
        </Column>
      </Provider>
    )
  })
  return list
}

const UserList = (props) => {
  return (
    <Row pl={2}>
      {renderList(props)}
    </Row>
  )
}

export default UserList
