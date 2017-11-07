// import React, {Component} from 'react'
import {connect} from 'react-redux'
import Bar from '../components/Bar'

// "state.activeUser" is set in reducers/index.js
function mapStateToProps (state) {
  console.log('state from bar container: ', state)
  return {
    x: state.x,
    y: state.y
  }
}

export default connect(mapStateToProps)(Bar)
