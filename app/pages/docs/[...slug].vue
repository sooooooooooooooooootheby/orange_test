<template>
	<div class="flex w-full" v-if="content">
		<div class="md:pr-6 prose max-w-full w-full">
			<div class="pt-8 text-gray-700 border-b border-gray-200">
				<icon :name="content.icon" class="text-6xl mb-2" />
				<h1>{{ content.title }}</h1>
				<p class="text-gray-700/75">{{ content.introduction }}</p>
			</div>
			<div
				class="w-full text-gray-500 pt-12 md:hidden"
				v-if="content.body && content.body.toc && content.body.toc.links.length >= 2"
			>
				<div>
					<div class="flex items-center gap-1 mb-1">
						<icon name="gravity-ui:list-ul" />
						<span class="text-sm font-bold">On This Page</span>
					</div>
					<div class="text-sm flex">
						<div class="border-l-2 border-gray-200 mx-2"></div>
						<ul class="flex flex-col gap-2 list-none m-0! p-0">
							<li v-for="item in content.body.toc.links">
								<NuxtLink :to="`#${item.id}`" class="no-underline">{{ item.text }}</NuxtLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<ContentRenderer :value="content" class="max-w-full w-full" />
		</div>
		<div
			class="w-70 shrink-0 relative text-gray-500 pt-12 max-md:hidden"
			v-if="content.body && content.body.toc && content.body.toc.links.length >= 2"
		>
			<div class="fixed">
				<div class="flex items-center gap-1 mb-2">
					<icon name="gravity-ui:list-ul" />
					<p class="text-sm font-bold">On This Page</p>
				</div>
				<div class="text-sm flex">
					<div class="border-l-2 border-gray-200 mx-2"></div>
					<ul class="flex flex-col gap-2">
						<li v-for="item in content.body.toc.links">
							<NuxtLink :to="`#${item.id}`">{{ item.text }}</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const route = useRoute();

const { data: content } = await useAsyncData(route.path, () => queryCollection("docs").path(route.path).first());

definePageMeta({
	layout: "docs",
});

useSeoMeta({
	title: `${content.value?.title} | Orange Craft Mc`,
	ogTitle: `${content.value?.title} | Orange Craft Mc`,
});
</script>
