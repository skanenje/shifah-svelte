<!-- Services Bento Grid -->
<section class="max-w-7xl mx-auto px-8 mb-32">
	<div class="mb-12">
		<h2 class="text-3xl font-headline font-bold text-on-background mb-2">Medical Services</h2>
		<p class="text-on-surface-variant max-w-xl">Comprehensive clinical solutions designed for patient comfort and recovery.</p>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<!-- Dialysis Unit - Featured -->
		<div class="md:col-span-2 row-span-2 group bg-surface-container-lowest rounded-xl overflow-hidden transition-all hover:bg-white">
			<div class="h-64 relative overflow-hidden">
				<img 
					alt="Shifah Hospital Renal Dialysis Unit" 
					class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
					src="/photos/renal-unit.jpeg"
					loading="lazy"
					width="800"
					height="256"
				/>
				<div class="absolute top-4 left-4">
					<span class="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold">CORE SPECIALTY</span>
				</div>
			</div>
			<div class="p-8">
				<h3 class="text-2xl font-headline font-bold mb-4">Dialysis Services</h3>
				<p class="text-on-surface-variant leading-relaxed mb-6">State-of-the-art renal unit at our Main Hospital providing comprehensive dialysis care with modern equipment and specialized medical staff.</p>
				<ul class="grid grid-cols-2 gap-3 text-sm font-medium">
					<li class="flex items-center gap-2">
						<span class="material-symbols-outlined text-primary text-sm">check_circle</span> In-patient Services
					</li>
					<li class="flex items-center gap-2">
						<span class="material-symbols-outlined text-primary text-sm">check_circle</span> Out-patient Services (OPD)
					</li>
					<li class="flex items-center gap-2">
						<span class="material-symbols-outlined text-primary text-sm">check_circle</span> 24/7 Emergency Support
					</li>
					<li class="flex items-center gap-2">
						<span class="material-symbols-outlined text-primary text-sm">check_circle</span> Specialized Renal Care
					</li>
				</ul>
			</div>
		</div>

		<!-- Maternity & MCH -->
		<div class="bg-primary text-white p-8 rounded-xl flex flex-col justify-between">
			<div>
				<span class="material-symbols-outlined text-4xl mb-6" style="font-variation-settings: 'FILL' 1;">child_care</span>
				<h3 class="text-xl font-headline font-bold mb-2">Maternity & MCH</h3>
				<p class="text-on-primary-container text-sm">Mother & Child Health services including prenatal, delivery, and postnatal care in a supportive environment.</p>
			</div>
			<button class="mt-8 text-primary-fixed font-bold flex items-center gap-2 group">
				Learn More <span class="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
			</button>
		</div>

		<!-- Surgery Services -->
		<div class="bg-surface-container-low p-8 rounded-xl">
			<span class="material-symbols-outlined text-primary text-4xl mb-6">surgical</span>
			<h3 class="text-xl font-headline font-bold mb-2">Theatre Services</h3>
			<p class="text-on-surface-variant text-sm mb-4">Minor surgery with modern surgical facilities and experienced surgical team.</p>
		</div>
	</div>

	<!-- Pharmacy Featured + Smaller Service Cards -->
	<div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
		<!-- Pharmacy - Featured with Image -->
		<div class="md:col-span-2 group bg-surface-container-lowest rounded-xl overflow-hidden transition-all hover:bg-white">
			<div class="grid grid-cols-1 sm:grid-cols-2 h-full">
				<div class="h-48 sm:h-full relative overflow-hidden">
					<img 
						alt="Shifah Hospital In-house Pharmacy" 
						class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
						src="/photos/pharmacy.jpeg"
						loading="lazy"
						width="400"
						height="256"
					/>
					<div class="absolute top-3 left-3">
						<span class="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">24/7</span>
					</div>
				</div>
				<div class="p-6 flex flex-col justify-center">
					<span class="material-symbols-outlined text-primary text-3xl mb-3" style="font-variation-settings: 'FILL' 1;">medication</span>
					<h4 class="font-headline font-bold text-lg mb-2">In-House Pharmacy</h4>
					<p class="text-sm text-on-surface-variant leading-relaxed mb-4">Round-the-clock pharmacy stocked with essential medications, prescription drugs, and pharmaceutical care services.</p>
					<ul class="space-y-1.5 text-xs font-medium">
						<li class="flex items-center gap-1.5">
							<span class="material-symbols-outlined text-primary" style="font-size: 14px;">check_circle</span> Prescription Filling
						</li>
						<li class="flex items-center gap-1.5">
							<span class="material-symbols-outlined text-primary" style="font-size: 14px;">check_circle</span> Essential Medicines
						</li>
						<li class="flex items-center gap-1.5">
							<span class="material-symbols-outlined text-primary" style="font-size: 14px;">check_circle</span> Patient Counselling
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Laboratory - Image Card -->
		<div class="relative rounded-xl overflow-hidden min-h-[200px] flex items-end group">
			<img
				alt="Shifah Hospital Laboratory"
				class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				src="/photos/lab-view1.jpeg"
				loading="lazy"
				width="400"
				height="200"
			/>
			<div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
			<div class="relative z-10 p-6 text-white">
				<span class="material-symbols-outlined mb-2 text-2xl" style="font-variation-settings: 'FILL' 1;">biotech</span>
				<h4 class="font-headline font-bold text-lg mb-1">Laboratory</h4>
				<p class="text-xs text-white/80">Comprehensive diagnostic and clinical lab testing services.</p>
			</div>
		</div>

		<!-- Imaging - Image Card -->
		<div class="relative rounded-xl overflow-hidden min-h-[200px] flex items-end group">
			<img
				alt="Shifah Hospital Imaging Department"
				class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				src="/photos/lab-view2.jpeg"
				loading="lazy"
				width="400"
				height="200"
			/>
			<div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
			<div class="relative z-10 p-6 text-white">
				<span class="material-symbols-outlined mb-2 text-2xl" style="font-variation-settings: 'FILL' 1;">radiology</span>
				<h4 class="font-headline font-bold text-lg mb-1">Imaging</h4>
				<p class="text-xs text-white/80">Ultrasound and diagnostic imaging services.</p>
			</div>
		</div>
	</div>

	<!-- Physiotherapy - Full-width Image Card -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
		<div class="md:col-span-2 relative rounded-xl overflow-hidden min-h-[220px] flex items-end group">
			<img
				alt="Shifah Hospital Physiotherapy Entrance"
				class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				src="/photos/physio-entrance.jpeg"
				loading="lazy"
				width="800"
				height="220"
			/>
			<div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
			<div class="relative z-10 p-8 text-white">
				<span class="material-symbols-outlined mb-2 text-3xl" style="font-variation-settings: 'FILL' 1;">self_improvement</span>
				<h4 class="font-headline font-bold text-xl mb-1">Physiotherapy & Rehabilitation</h4>
				<p class="text-sm text-white/80 max-w-md">Professional physical therapy, rehabilitation programs, and pain management services to support recovery and mobility.</p>
			</div>
		</div>
		<div class="relative rounded-xl overflow-hidden min-h-[220px] flex items-end group">
			<img
				alt="Shifah Hospital Triage"
				class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				src="/photos/triage-view2.jpeg"
				loading="lazy"
				width="400"
				height="220"
			/>
			<div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
			<div class="relative z-10 p-6 text-white">
				<span class="material-symbols-outlined mb-2 text-2xl" style="font-variation-settings: 'FILL' 1;">emergency</span>
				<h4 class="font-headline font-bold text-lg mb-1">Emergency & Triage</h4>
				<p class="text-xs text-white/80">24/7 emergency assessment and critical care response.</p>
			</div>
		</div>
	</div>
	
	<!-- Additional Services Grid -->
	<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
		<div class="bg-surface-container-low p-4 rounded-lg">
			<p class="text-sm font-medium">• Pain & Palliative Management</p>
		</div>
		<div class="bg-surface-container-low p-4 rounded-lg">
			<p class="text-sm font-medium">• Counselling & Wellness</p>
		</div>
		<div class="bg-surface-container-low p-4 rounded-lg">
			<p class="text-sm font-medium">• Nutrition Assessment</p>
		</div>
		<div class="bg-surface-container-low p-4 rounded-lg">
			<p class="text-sm font-medium">• ENT Services</p>
		</div>
		<div class="bg-surface-container-low p-4 rounded-lg">
			<p class="text-sm font-medium">• Circumcision</p>
		</div>
		<div class="bg-surface-container-low p-4 rounded-lg">
			<p class="text-sm font-medium">• Endoscopy</p>
		</div>
		<div class="bg-surface-container-low p-4 rounded-lg">
			<p class="text-sm font-medium">• Ambulance Services</p>
		</div>
		<div class="bg-surface-container-low p-4 rounded-lg">
			<p class="text-sm font-medium">• Well Baby Clinic</p>
		</div>
	</div>
</section>
