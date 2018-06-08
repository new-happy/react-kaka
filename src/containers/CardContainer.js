import React from 'react'
import { connect } from 'react-redux'
import Card from '../component/Card'

const CardContainer = props => <Card {...props} />

const mapStateToProps = state => ({
    cards:state.cards
})

export default connect(mapStateToProps)(CardContainer)