<template>
	<div class="flex justify-center row items-center q-gutter-md">
		<q-date v-model="inputDate" mask="DD.MM.YYYY"/>

		<div class="text-center text-h5 q-gutter-y-md">
			<div>
				{{ inputDate ?? "00.00.0000" }}
			</div>
			<q-btn
				@click="onClick"
				label="Конвертувати"
				icon-right="send"
				:disable="!inputDate"
			/>
		</div>
	</div>

	<div class="full-width text-h5 q-pt-md">Результат: {{ resDate }}</div>
</template>

<script>
import { ref } from "vue";
import { parseDate } from "src/hooks/parseDate";
export default {
	name: "PageIndex",
	setup() {
		const inputDate = ref(null);
		const resDate = ref("");
		const tab = ref("keyboard");

		const onClick = () => parseDate(inputDate, resDate);

		return { inputDate, resDate, tab, onClick };
	},
};
</script>
