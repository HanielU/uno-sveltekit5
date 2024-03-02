<script>
	let scrollY = $state(0);
	let showHideNav = $derived(scrollY < 300 ? 'top-0' : '-top-20');
</script>

<svelte:window bind:scrollY />

<nav class="fixed {showHideNav} duration-1000 ease w-full">
	<ul>
		<li><a target="_self">home</a></li>
		<li><a target="_self">one</a></li>
		<li><a target="_self">two</a></li>
	</ul>
</nav>

<div class="py-30">
	<h1>
		scrollY: {scrollY}
	</h1>
</div>

<div class="py-300"></div>
