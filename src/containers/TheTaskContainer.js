import React from 'react'
import TheTask from '../component/TheTask'
import { connect } from 'react-redux'

const TheTaskContainers = props => <TheTask {...props} />

const mapStateToProps = state => ({
    home: state.home
})

export default connect(mapStateToProps)(TheTaskContainers)