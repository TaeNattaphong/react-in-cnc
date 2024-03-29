import { ADD_TASK, DEL_TASK, UP_TASK, DOWN_TASK } from './actionType'

const taskReducer = (state = [], action) => {
    const { type } = action
    const { payload } = action
    switch (type) {
        case ADD_TASK:
            const { payload } = action
            const task = {
                id: Number.parseInt(Math.random() * 10000, 10).toString(),
                task: payload
            }
            return state.concat(task)

        case DEL_TASK:

        break;

        case UP_TASK:

        break;

        case DOWN_TASK:

        break;

        default:
        return state
    }
}

export default taskReducer;