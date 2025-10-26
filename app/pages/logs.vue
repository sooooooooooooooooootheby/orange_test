<template>
	<div class="w-full min-h-screen pattern-cross-dots-lg text-base-content/10">
		<div class="max-w-2xl mx-auto py-24 max-md:px-4">
			<div class="prose mb-8">
				<NuxtLink to="/" class="no-underline text-sm text-base-content/75 flex items-center gap-1 mb-2">
					<icon name="gravity-ui:arrow-uturn-ccw-left" />
					回到首页
				</NuxtLink>
				<h1 class="flex items-center gap-2"><icon name="gravity-ui:file-text" />服务器日志</h1>
				<p>在这里 你可以看到OrangeCraft如何从一无所有到现在的.</p>
			</div>
			<ContentRenderer v-if="data" :value="data" />
		</div>
	</div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData("logs", () => queryCollection("logs").first());
</script>
