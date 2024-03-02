<script>
	let scrollY = $state(0);
	let showHideNav = $derived(scrollY < 300 ? 'top-0' : '-top-20');
</script>

<svelte:window bind:scrollY />

<nav class="fixed {showHideNav} duration-1000 ease w-full">
	<ul class="bg-#ff3e00 p-3 flex justify-end gap-2">
		<li><a target="_self">home</a></li>
		<li><a target="_self">one</a></li>
		<li><a target="_self">two</a></li>
	</ul>
</nav>

<div class="h-5000px"></div>
