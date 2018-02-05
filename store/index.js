// import VuexPersist from '~/assets/js/vuexPersist'
// const app = require('electron').remote.app
// const persist = new VuexPersist({
// 	path: app.getPath('userData'),
// 	reducer: (state) => {
// 		return {
// 			dummy: state.dummy
// 		}
// 	}
// })
// export const plugins = [persist.subscribe()]

// NOTE: Uncomment above code to persist state in file

export const state = () => ({
	dummy: null
})

export const mutations = {
	setDummy (state, val) {
		state.dummy = val
	}
}
