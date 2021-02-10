<template>
	<div id="app">
		<SideBar></SideBar>

		<div class="app-container">
			<img alt="Vue logo" src="./assets/primevue-logo.png" />
			<form @submit.prevent="greet">
				<InputText v-model="text" type="text" />
				<Button type="submit" label="Submit" />
				<h3>{{ message }}</h3>
			</form>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from 'primevue/sidebar';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default defineComponent({
	name: 'App',
	components: {
		Sidebar,
		InputText,
		Button,
	},
});
</script>
