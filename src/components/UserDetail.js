import React, {Component} from 'react'
import {
  Provider,
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
      <h2>{props.user.first} {props.user.last}</h2>
      <h3>Description: {props.user.description}</h3>
    </Provider>
  )
}

export default UserDetail
