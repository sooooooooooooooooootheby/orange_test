<template>
	<div class="w-full min-h-screen bg-gray-50 pattern-cross-dots-lg text-gray-200">
		<div class="max-w-2xl mx-auto py-24 text-gray-700">
			<div class="prose mb-8">
				<NuxtLink to="/" class="no-underline text-sm text-gray-700 flex items-center gap-1 mb-2">
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
