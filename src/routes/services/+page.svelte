<script lang="ts">
	import Services from '$lib/components/Services.svelte';
	import Facilities from '$lib/components/Facilities.svelte';
</script>

<svelte:head>
	<title>Services & Facilities | Shifah Hospital</title>
	<meta name="description" content="Comprehensive medical services including dialysis, emergency care, maternity, laboratory, and more at Shifah Hospital in Kitale." />
</svelte:head>

<main class="pt-24 pb-20">
	<!-- Hero Section -->
	<section class="max-w-7xl mx-auto px-8 mb-20">
		<div class="relative rounded-xl overflow-hidden min-h-[400px] flex items-center p-12 bg-primary-container">
			<img 
				alt="Hospital Interior" 
				class="absolute inset-0 w-full h-full object-cover opacity-30" 
				src="/photos/hallway.jpeg"
			/>
			<div class="relative z-10 max-w-2xl">
				<span class="inline-block px-4 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold tracking-widest mb-6 font-label">
					LEVEL 4 PRIMARY CARE
				</span>
				<h1 class="text-5xl md:text-6xl font-headline font-extrabold text-white leading-tight mb-6">
					World-Class Care, <br/>
					<span class="text-primary-fixed">Closer to You.</span>
				</h1>
				<p class="text-lg text-on-primary-container leading-relaxed mb-8">
					Shifah Hospital and Dialysis Center provides 24-hour comprehensive medical excellence, specializing in renal health and emergency primary care.
				</p>
				<div class="flex flex-wrap gap-4">
					<div class="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
						<span class="material-symbols-outlined text-primary-fixed" style="font-variation-settings: 'FILL' 1;">verified</span>
						<span class="text-white font-medium">SHA Accredited</span>
					</div>
					<div class="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
						<span class="material-symbols-outlined text-primary-fixed" style="font-variation-settings: 'FILL' 1;">schedule</span>
						<span class="text-white font-medium">Open 24 Hours</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Services Bento Grid -->
	<Services />

	<!-- Bed Capacity & Facilities -->
	<Facilities />

	<!-- Floating Action for Mobile -->
	<div class="fixed bottom-8 right-8 z-40 lg:hidden">
		<a 
			href="#contact"
			class="w-14 h-14 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center transition-transform active:scale-90"
		>
			<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">add_call</span>
		</a>
	</div>
</main>
