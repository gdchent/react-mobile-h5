

export default {

    namespace: 'lottery',
    state: {
        selectIndex: 0,
    },
    reducers: {
        updateState(state, result) {
            const { payload } = result
            const obj = { ...state, ...payload }
            return obj
        },
    },
    effects: {

    }
}