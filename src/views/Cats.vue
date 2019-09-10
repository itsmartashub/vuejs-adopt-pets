<template>
	<div>

		<!-- PRE PETTABLE.vue komponente -->
		<!-- <h1>Cats for Adoption</h1>
		<b-table striped hover :items="arrCats">
			 <template v-slot:cell(name)="data"> -->
				 
        <!-- `data.value` is the value after formatted by the Formatter -->
				<!-- <router-link :to="`/pets/cats/${data.index}`">
					{{ data.value }}
				</router-link> -->
				<!-- ovo data.index stavlja broj indexa u url: pets/0 -->
			<!-- </template>passing a template with a dynamic href -->
		<!--  </b-table> -->

		<!-- sta je u sustini ono v-slot -->
		<!-- <template>
			<div>
				<slot name="name"></slot>
			</div>
		</template> -->

		<!-- SA PETTABLE.vue komponentom -->
		<PetTable 
			species="cats"
			:nizPets="arrCats"
		/>
		<!-- za species ne koristimo ovde v-bind i on je staticas, dakle salljemo direkt ovo cats, a za :nizPets kor ovo v-binding i on je dinamicki i prosledjujemo mu onaj dole arrCats iz mapState -->
		<!-- ovo moze da se ucitava ili kao cebab case tj <pet-table/> ili kao <PetTable />  sto je i preporucljivije -->



	</div>
</template>

<script>
// import cats from '@/data/cats'
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {
	components: { PetTable },

	data() {
		return {
			// arrCats: cats
		}
	},

	computed: {
		...mapState([
			'arrCats'
		])
	}
}
</script>