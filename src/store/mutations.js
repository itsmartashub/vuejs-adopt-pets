export default {
	appendPet: (state, { species, pet }) => { // payload iliti objekat sa { species, pet }
		species = `arr${species.charAt(0).toUpperCase() + species.slice(1)}` // sve ovo je jer je tamo za options ponudjeno cats i dogs, a to se ovde poziva za species, a species u state su arrCats i arrDogs stavljeni, tako da sam morala da prepravim da dodam arr na species i da potom prvo slovo stavim veliko. Elem: array.slice(start, end), The slice() method returns the selected elements in an array, as a new array object.

		state[species].push(pet)
	}
}