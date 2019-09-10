<template>
	<div>

		<!-- PRE PetTable.vue komponente -->
		<!-- <h1>Dogs for Adoption</h1>
		<b-table striped hover :items="arrDogs">
			<template v-slot:cell(name)="data">
				<router-link :to="`/pets/dogs/${data.index}`">
					{{ data.value }}
				</router-link>
			</template>
		</b-table> -->

		<PetTable 
			species="dogs"
			:nizPets="arrDogs"
		/>
		
	</div>
</template>

<script>
// import dogs from '@/data/dogs'
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {

	components: { PetTable },

	data() {
		return {
			// arrDogs: dogs
		}
	},

	computed: {
		...mapState([
			'arrDogs'
		])
	}
}
</script>