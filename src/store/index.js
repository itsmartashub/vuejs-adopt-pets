import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})


//! DAKLE: RECIMO HOCEMO DA DODAMO NOVOG LJUBIMCA, TO ZNACI DA DODAJEMO NOVI ITEM U NIZ MACAKA/PASA, DAKLE UPDEJTUJEMO STATE (BILO TO ARRCATS ILI ARRDOGS), NIKAKO TO NE RADIMO DIREKT U STATE IL STA VEC, VEC SVAKA PROMENA/APDEJTOVANJE/MUTACIJA SE RADI SA MUTATIONS, A MUTATIONS SE POZIVAJU U ACTIONS, 
//! ACTIONS--> MUTATIONS--> STATE
//! TJ U ACTIONS POZIVAMO MUTATIONS KOJI APDEJTUJU STATE