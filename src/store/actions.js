export default {
	//? REDJE
	// addPet: (context, pet) => {
	// 	context.commit('appendPet', pet)
	// }

	//? CESCE
	// addPet: ({ commit }, { pet, species }) => { // ovo commit dolazi iz vuex-a, a ovo pet je custom parametar koji cemo prosledjivati u f-ju. Elem, sada ipak za custom parametar prosledjujemo objekat sa propertijima { pet, species }, medjutim, da bih ovo skratila, stavicemo da prosledjujemo payload
	addPet: ({ commit }, payload) => {
		commit('appendPet', payload)
	}
}