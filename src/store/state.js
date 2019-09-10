import arrCats from '../data/cats'
import arrDogs from '../data/dogs'

export default {
	arrCats,
	arrDogs,
	arrPets: [...arrCats, ...arrDogs] // [[], []] ovo je lak nacin da stavimo arrCats i arrDogs u jedan niz
}