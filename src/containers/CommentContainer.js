import React from 'react'
import Comment from '../component/Comment'
import { connect } from 'react-redux'
import { addComment, removeComment } from '../actions'

const CommentContainer = props => <Comment {...props} />

const mapStateToProps = state => ({
    comment:state.comment
})

export default connect(mapStateToProps ,{
    addComment,
    removeComment
})(CommentContainer)