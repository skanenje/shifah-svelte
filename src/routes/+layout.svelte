<script lang="ts">
	import { inject } from '@vercel/analytics';
	import { page } from '$app/state';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	// Inject analytics based on environment
	$effect(() => {
		inject({ mode: 'auto' });
	});

	let { children } = $props();
</script>

<svelte:head>
	<title>Shifah Hospital & Dialysis Center - Quality Healthcare in Kitale</title>
	<meta
		name="description"
		content="Premium healthcare services including dialysis, maternity, emergency care, and general outpatient services in Kitale, Kenya."
	/>
	<meta
		name="keywords"
		content="hospital, dialysis, healthcare, Kitale, Kenya, maternity, emergency"
	/>
	<meta name="generator" content="sveltekit" />
	
	<!-- Theme Colors -->
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="hsl(200, 100%, 45%)" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="hsl(200, 100%, 55%)" />

	<!-- Icons -->
	<link rel="icon" href="/icon-light-32x32.png" media="(prefers-color-scheme: light)" />
	<link rel="icon" href="/icon-dark-32x32.png" media="(prefers-color-scheme: dark)" />
	<link rel="icon" type="image/svg+xml" href="/icon.svg" />
	<link rel="apple-touch-icon" href="/apple-icon.png" />
</svelte:head>

<Header />

<main class="min-h-screen">
	{@render children()}
</main>

<Footer />
