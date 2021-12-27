<template>
        <div class="q-gutter-y-md">
		<q-input
			filled
			v-model="inputDate"
			mask="##.##.####"
			class="full-width"
			clearable
		>
			<template v-slot:after>
				<q-btn
					label="Конвертувати"
					icon-right="send"
					no-caps
                    :disable="!inputDate"
					@click="onClick"
				/>
			</template>
		</q-input>

		<div class="full-width text-h5">
			Результат: {{ resDate }}
		</div>

        </div>
</template>
<script>
import {ref} from 'vue'
import {parseDate} from 'src/hooks/parseDate'
export default {
	setup() {
		const inputDate = ref(null);
		const resDate = ref("");
		const tab = ref("keyboard");

		const onClick = () => parseDate(inputDate, resDate)

		return { inputDate, resDate, tab, onClick };
	},
}
</script>
