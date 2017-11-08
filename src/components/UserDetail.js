import React, {Component} from 'react'
import {
  Provider,
  Measure,
  Lead,
  Image
} from 'rebass'

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

const UserDetail = (props) => {
  if (!props.user) {
    return (<div>Select a user...</div>)
  }
  return (
    <Provider>
      <Image src={props.user.thumbnail} />
      <Lead>
        {props.user.id} : {props.user.first} {props.user.last}
      </Lead>
      <Measure>
        Description: {props.user.description}
      </Measure>
    </Provider>
  )
}

export default UserDetail
