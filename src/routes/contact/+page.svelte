<script lang="ts">
	import Location from '$lib/components/Location.svelte';
</script>

<svelte:head>
	<title>Contact & Location | Shifah Hospital</title>
	<meta name="description" content="Visit Shifah Hospital in Kiminini, Kitale. Open 24/7 for emergency and dialysis services. Contact us at +254-20-2717077." />
</svelte:head>

<main class="pt-24 pb-20">
	<!-- Hero Section -->
	<header class="max-w-7xl mx-auto px-8 mb-16">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
			<div>
				<span class="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">
					Visit Us
				</span>
				<h1 class="text-5xl md:text-6xl font-extrabold tracking-tighter text-primary mb-6 leading-tight">
					Compassionate care,<br/>conveniently located.
				</h1>
				<p class="text-lg text-on-surface-variant max-w-lg leading-relaxed">
					Find us in the heart of Kitale Town. Our doors never close, ensuring you have access to specialized dialysis and emergency care whenever you need it.
				</p>
			</div>
			<div class="hidden lg:flex justify-end pb-4">
				<div class="flex space-x-12">
					<div>
						<p class="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Status</p>
						<div class="flex items-center gap-2">
							<span class="w-2 h-2 bg-tertiary rounded-full animate-pulse"></span>
							<span class="font-headline font-bold text-tertiary">Open 24/7</span>
						</div>
					</div>
					<div>
						<p class="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Response Time</p>
						<p class="font-headline font-bold text-primary">Immediate</p>
					</div>
				</div>
			</div>
		</div>
	</header>

	<!-- Main Content: Map & Info -->
	<Location />
</main>
