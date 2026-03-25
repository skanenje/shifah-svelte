<script lang="ts">
	import Hero        from '$lib/components/Hero.svelte';
	import Partners    from '$lib/components/Partners.svelte';
	import About       from '$lib/components/About.svelte';
	import Services    from '$lib/components/Services.svelte';
	import Doctors     from '$lib/components/Doctors.svelte';
	import Appointment from '$lib/components/Appointment.svelte';
</script>

<svelte:head>
	<title>Shifah Hospital & Dialysis Center – Quality Healthcare in Kitale</title>
	<meta name="description" content="Premier healthcare facility in Kitale offering 24/7 emergency care, advanced dialysis services, maternity care, and comprehensive medical services." />
</svelte:head>

<!-- Hero: full-bleed image with CTA -->
<Hero />

<!-- Partners logo bar -->
<Partners />

<!-- About / legacy section -->
<About />

<!-- Services cards grid -->
<Services />

<!-- Doctors section -->
<Doctors />

<!-- Appointment booking form -->
<Appointment />
