import VuexPersist from '~/assets/js/vuexPersist'
const app = require('electron').remote.app

const persist = new VuexPersist({
	path: app.getPath('userData'),
	reducer: (state) => {
		return {
			selected: state.selected
		}
	}
})

export const plugins = [persist.subscribe()]

export const state = () => ({
	selected: null,
	empty: null
})

export const mutations = {
	setSelected (state, val) {
		state.selected = val
	}
}
