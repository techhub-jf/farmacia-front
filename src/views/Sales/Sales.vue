<template>
	<div style="height:100%;overflow-y:auto">
		<div class="d-flex align-items-center mt-2">
			<span class="page-title">{{ props.title }}</span>
			<div class="ms-auto d-flex align-items-end">
				<Button title="Cadastrar venda" icon="las la-plus fa-lg" :outline="true" color="green" class="mr-2"></Button>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
	import Button from '@/components/Buttons/Button.vue'
const props = defineProps({
    title: String
});
</script>

<style>
	.item-sale >div>div>i{
		margin-right: 5px;
	}
	.list-content{
		overflow-y: revert;
		margin: 10px;
		border-radius: 15px;
		box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
	}
	.infinite-loading{
		padding: 10px;
	}
</style>