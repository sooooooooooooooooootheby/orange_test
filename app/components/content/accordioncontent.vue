<template>
	<div class="collapse bg-base-100 border border-base-300">
		<input type="radio" name="my-accordion-1" />
		<div class="collapse-title font-semibold"><slot name="title" mdc-unwrap="p" /></div>
		<div class="collapse-content text-sm">
			<slot name="content" mdc-unwrap="p" />
		</div>
	</div>
</template>
