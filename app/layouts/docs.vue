<template>
	<div class="drawer md:drawer-open max-w-360 w-full mx-auto">
		<input id="my-drawer-4" type="checkbox" class="drawer-toggle" checked />
		<div class="drawer-content py-16 max-md:pt-8 flex flex-col md:pl-16 max-md:px-4">
			<div class="pb-4 md:hidden">
				<label for="my-drawer-4" class="drawer-button flex items-center gap-1">
					<icon name="gravity-ui:layout-side-content" />
				</label>
			</div>
			<div class="breadcrumbs text-sm">
				<ul>
					<li><icon name="gravity-ui:folder" class="mr-1.5" />home</li>
					<li v-for="item in breadcrumbs">{{ item }}</li>
				</ul>
			</div>
			<slot />
		</div>

		<div class="drawer-side md:*:bg-transparent md:is-drawer-close:overflow-visible">
			<label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
			<div
				class="is-drawer-close:w-14 is-drawer-open:w-64 bg-base-200 flex flex-col items-start min-h-full is-drawer-open:p-2"
			>
				<div class="w-full p-2 flex flex-col justify-center gap-3 is-drawer-close:justify-center py-4">
					<div class="flex items-center gap-1 is-drawer-close:hidden">
						<img src="/logo.jpg" alt="logo" class="w-5" />
						<span class="font-bold text-gray-700">OrangeCraft</span>
					</div>
					<button class="btn btn-sm" @click="navigateTo('/')"><icon name="gravity-ui:house" />回到首页</button>
				</div>
				<ul class="menu w-full grow">
					<li v-for="item in appConfig.navigation" :key="item.title">
						<details open v-if="item.children">
							<summary>{{ item.title }}</summary>
							<ul>
								<li v-for="children in item.children">
									<NuxtLink
										:to="children.path"
										class="is-drawer-close:hidden"
										:class="{ 'menu-active': children.path === route.path }"
										>{{ children.title }}</NuxtLink
									>
								</li>
							</ul>
						</details>
						<button
							class="is-drawer-close:tooltip is-drawer-close:tooltip-right"
							:class="{ 'menu-active': item.path === route.path }"
							:data-tip="item.title"
							v-else
						>
							<icon :name="item.icon" class="inline-block size-4 my-1.5" />
							<NuxtLink :to="item.path" class="is-drawer-close:hidden">{{ item.title }}</NuxtLink>
						</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
const route = useRoute();

const breadcrumbs = computed<string[]>(() => {
	return route.path.split("/").filter(Boolean);
});
</script>
