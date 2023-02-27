import { defineStore } from 'pinia'
const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      counter: 10
    }
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    }
  },
  actions: {
    changeCounterAction(newCounter: number) {
      this.counter = newCounter
    }
  }
})

export default useCounterStore
