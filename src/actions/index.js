import history from '../utils/history'

export const goEvent = id => {
    history.push(`/content/${id}`)
    return { type: 'GO_EVENT' }
}
export const addComment = comment => ({
  type:'ADD_COMMENT',
  comment
})

export const removeComment = id => ({
  type:'REMOVE_COMMENT',
  id
}) 