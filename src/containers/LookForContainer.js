import React from 'react'
import LookFor from '../component/LookFor'
import { connect } from 'react-redux'

const LookForContainers = props => <LookFor {...props} />

const mapStateToProps = state => ({
    lookfor:state.lookfor
})

export default connect(mapStateToProps)(LookForContainers)