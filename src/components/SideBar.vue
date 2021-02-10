<template>
	<Sidebar
		visible="isVisible"
		position="left"
		dimissable="false"
		show-close-icon="true"
		modal="false"
		class="p-sidebar-mask"
	>
		Content I
	</Sidebar>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Sidebar from 'primevue/sidebar';

@Options({
	props: {
		msg: String,
		isVisible: false,
	},
})
export default class SideBar extends Vue {
	msg!: string;
}
</script>
