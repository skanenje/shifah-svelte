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
	
	<!-- Preload critical images -->
	<link rel="preload" as="image" href="/photos/waiting-area-view2.jpeg" fetchpriority="high" />
	
	<!-- Theme Colors -->
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#0c6574" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#126877" />
</svelte:head>

<Header />

<main class="min-h-screen">
	{@render children()}
</main>

<Footer />
