<script lang="ts">
	import { page } from '$app/state';

	let isOpen = $state(false);

	const navLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'Services', href: '/services#services' },
		{ label: 'Facilities', href: '/services#facilities' },
		{ label: 'Contact', href: '/contact#contact' },
		{ label: 'Location', href: '/contact#location' }
	];

	function isActive(href: string) {
		const currentPath = page.url.pathname;
		const currentHash = page.url.hash;
		
		// For home page
		if (href === '/') return currentPath === '/';
		
		// Split href into path and hash
		const [linkPath, linkHash] = href.split('#');
		
		// Check if we're on the same page
		if (currentPath !== linkPath) return false;
		
		// If link has a hash, check if it matches current hash
		if (linkHash) {
			return currentHash === `#${linkHash}`;
		}
		
		// If link has no hash, only active if current page also has no hash
		return !currentHash;
	}
</script>

<nav class="fixed top-0 w-full z-50 bg-surface/80 glass-nav border-b border-outline-variant/10">
	<div class="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-4">
		<!-- Logo -->
		<a href="/" class="text-2xl font-bold text-primary-container tracking-tighter font-headline">
			Shifah Hospital
		</a>

		<!-- Desktop Nav -->
		<div class="hidden md:flex items-center gap-8 font-headline font-semibold tracking-tight">
			{#each navLinks as link}
				<a
					href={link.href}
					class="transition-colors duration-200 pb-1 {isActive(link.href)
						? 'text-primary-container border-b-2 border-primary-container'
						: 'text-slate-600 hover:text-primary-container'}"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- CTA + Mobile Toggle -->
		<div class="flex items-center gap-4">
			<a
				href="/contact"
				class="bg-linear-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-xl font-headline font-bold text-sm hover:opacity-90 transition-all active:scale-95"
			>
				Book Appointment
			</a>
			<button
				class="md:hidden text-primary"
				onclick={() => (isOpen = !isOpen)}
				aria-label="Toggle menu"
			>
				<span class="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if isOpen}
		<div class="md:hidden bg-surface/95 px-6 pb-6 border-t border-outline-variant/10 space-y-4">
			{#each navLinks as link}
				<a
					href={link.href}
					onclick={() => (isOpen = false)}
					class="block font-headline font-semibold py-2 transition-colors {isActive(link.href)
						? 'text-primary-container'
						: 'text-slate-600 hover:text-primary-container'}"
				>
					{link.label}
				</a>
			{/each}
		</div>
	{/if}
</nav>
