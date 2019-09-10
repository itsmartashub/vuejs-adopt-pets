<template>
	<div class="home-view-container">
		<h1>Adopt a new best friend.</h1><br>

		{{ getAllCats.length }}
		{{ animalsCount }}

		<button @click="togglePetForm" class="btn btn-primary">Add New Pet</button>
		<br><br><hr><br>



		<b-form @submit.prevent="handleSubmit" v-if="showPetForm">
			<b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
				<b-form-input
					id="input-2"
					v-model="formData.name"
					required
					placeholder="Enter name"
				></b-form-input>
			</b-form-group>

			<b-form-group id="input-group-3" label="Species:" label-for="input-3">
				<b-form-select
					id="input-3"
					v-model="formData.species"
					:options="['cats', 'dogs']"
					required
				></b-form-select>
			</b-form-group>

			<b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
				<b-form-input
					id="input-2"
					type="number"
					v-model="formData.age"
					required
					placeholder="Enter age"
				></b-form-input>
			</b-form-group>

			<b-button type="submit" variant="primary">Submit</b-button>
			<b-button type="reset" variant="danger">Reset</b-button>
		</b-form>



	</div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
	name: 'home',

	data() {
		return {
			showPetForm: false,
			formData: {
				name: '',
				age: 0,
				species: null
			}
		}
	},

	computed: {
		...mapGetters([
			'animalsCount', // dakle ovo NIJE APDEJTOVALO state, vec samo povlacim sta imam u state i onda stavila u f-ji animalsCount u gettersima sta hocu sa tim state podatkom
			'getAllCats'
		])
	},

	methods: {
		//! razlog zasto smo onde jednom dodali mapStates() u computed property a ne u methods, jer za state zelimo da osluskujemo neku promenu, a to radimo sa computed je l, a mapActionbs su static metode cije promene ne treba da posmatramo/osluskujemo/watchujemo, tu su samo f-je koje zelimo da pozovemo da se state apdejtuje
		...mapActions([
			'addPet'
		]),

		togglePetForm() {
			this.showPetForm = !this.showPetForm
		},
		handleSubmit() {
			const { species, age, name } = this.formData

			const payload = {
				species,
				pet: {
					name,
					age
				}
			}

			this.addPet(payload)

			// reset the form after submit
			this.formData = {
				name: '',
				age: 0,
				species: null
			}
		}
	}
}
</script>
