export const state = () => ({
  errors: {},
})

export const mutations = {
  SET_VALIDATION_ERRORS(state, errors) {
    state.errors = errors
  },
}


export const actions = {
  setErrors({commit}, errors) {
    commit('SET_VALIDATION_ERRORS', errors)
  },
  clearError({commit}, errors) {
    commit('SET_VALIDATION_ERRORS', {})
  }
}


export const getters = {
  errors: state => state.errors,

}

