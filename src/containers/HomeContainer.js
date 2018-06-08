import React from 'react'
import Home from '../component/Home'
import { connect } from 'react-redux'

const HomeContainer = props => <Home {...props} />

const mapStateToProps = state => ({
    home: state.home
})

export default connect(mapStateToProps)(HomeContainer)