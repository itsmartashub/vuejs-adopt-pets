<template>
	<div>
		<h1>Pets</h1>

		<!-- {{ $route.params.species }}
		{{ $route.params.id }} -->
		<!-- {{ pet().name }} -->
		<h1>{{ animal.name }} ({{ $route.params.species }})</h1>
		<p>Age: {{ animal.age }} years old</p>
		<p>Breed: {{ animal.breed }}</p>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {

	data() {
		return {
			animal: {}
		}
	},

	computed: {
		//? NACIN 1, kao redji
		// cats() {
		// 	return this.$store.state.arrCats
		// }

		//? NACIN 2, kao cesci
		...mapState({
			cats: 'arrCats',
			dogs: 'arrDogs'

		})
	},

	// ono sto zelim da uradim sad, jeste da otkrijem je l cat ili dog, i da prikazem tu informaciju u templejt
	// methods: {
	// 	//! OVO SAD PREMESTAMO TJ MALO DRUGACIJE PRAVIMO ALI U MOUNTED I TAKODJE PRAVIMO ANIMAL GORE ZA DATA()
	// 	pet() {
	// 		const animal = this[this.$route.params.species][this.$route.params.id] // ovo je iato i kao da pristupamo onom arrCats tj cats iz state, recimo this.arrCats tj this.cats (jer gore ga ucitah kao objekat cats: 'arrCats), a mozemo da prosledimo i kao varijablu: this['cats'], a ovo [this.$route.params.id] mu dodje onaj index, ovo mu sve dodje kao this[cats][0] sto je bitno da se podudara sa url-om tj cats/0
			
	// 		return animal
	// 	}
	// }

	mounted() {
		const animal = this[this.$route.params.species][this.$route.params.id]
		this.animal = animal
	}
}
</script>
