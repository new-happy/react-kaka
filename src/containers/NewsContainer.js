import React from 'react'
import { connect } from 'react-redux'
import News from '../component/News'

const NewsContainers = props => <News {...props} />

const mapStateToProps = state => ({
    news: state.news
})

export default connect(mapStateToProps)(NewsContainers)