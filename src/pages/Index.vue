<template>
	<q-page class="column items-center q-gutter-y-lg">
		<q-tabs
			v-model="tab"
			inline-label
			class="bg-primary text-white shadow-2 full-width"
		>
			<q-tab
				name="keyboard"
				icon="keyboard"
				label="Ввести дату"
			/>
			<q-tab
				name="colorize"
				icon="colorize"
				label="Обрати дату"
			/>
		</q-tabs>

		<q-tab-panels v-model="tab" animated class="full-width">
			<q-tab-panel name="keyboard">
				<keyboard />
			</q-tab-panel>
			<q-tab-panel name="colorize">
				<colorize />
			</q-tab-panel>
		</q-tab-panels>
	</q-page>
</template>

<script>
import Colorize from "src/components/Colorize.vue";
import Keyboard from "src/components/Keyboard.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
	components: { Keyboard, Colorize },
	setup() {
		const tab = ref("keyboard");
		return { tab };
	},
});
</script>
