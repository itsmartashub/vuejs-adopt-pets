// gettersi su kao neki computed propertiji ali za vuex store. Sta to znaci? Recimo zelimo da povucemo/pullujemo state u komponentu, ali zelimo da modifikujemo sta komponenta prima dok je puklujemo, dakle nece bas apdejtovati state, ali ce dohvatiti nesto sto mozda zelis iz state. Recimo mozemo da izbrojimo koliko zivotinja imamo u nasim arrCats i arrDogs nizovima, u getteru i onda pozovemo taj getter bilo gde gde zelimo broj zivotinja
export default {
	animalsCount: (state) => {
		return state.arrCats.length + state.arrDogs.length
	}, // i sada da bih koristila ovaj getter treba samo da ga pozovem u nekoj od nasih komponenti, zavisi gde zelim da vidim ukupan broj zivotinja. Recimo u Home.vue.
	//  dakle ovo NIJE APDEJTOVALO state, vec samo povlacim sta imam u state i onda stavila u f-ji animalsCount u gettersima sta hocu sa tim state podatkom

	// druga stvar za sta se moze koristiti getters jeste recimo za filtering:
	getAllCats: (state) => {
		return state.arrPets.filter( pet => { // filter metod prihvata f-ju koja nam daje svakog ljubimca i dozvoljava nam da vratimo samo ljubimca kojeg zelimo. Dakle lupujemo kroz arrPets i vracamo elemente samo tamo gde je species === cat, tj samo ljubimce koje su macke
			return pet.species === 'cat'
		}) 
		
		//! ELEM, MOZEMO DA ZOVEMO NOVI GETTER UNUTAR VEC NEKOG GETTERA, SMO PORED STATE, STAVIMO I GETTERS ARGUMENT: nekiGetter: (state, getters) => { .... }
	}
}