import history from '../utils/history'

export const goEvent = id => {
    history.push(`/content/${id}`)
    return { type: 'GO_EVENT' }
}