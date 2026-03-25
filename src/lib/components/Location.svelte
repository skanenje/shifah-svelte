<!-- Map & Contact Section -->
<section class="max-w-7xl mx-auto px-8 py-20">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
		<!-- Map Area (Bento Layout) -->
		<div class="lg:col-span-8 space-y-8">
			<div class="relative w-full aspect-[16/10] lg:aspect-auto lg:h-[600px] rounded-xl overflow-hidden bg-surface-container-low group">
				<img 
					class="w-full h-full object-cover map-grayscale transition-transform duration-700 group-hover:scale-105" 
					alt="Map of Kiminini showing hospital location"
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOFAWT5bSge5PW00PMBbzRARcAfnSZXcMqwaoCor76OnjeCw9J4DiBDqOAG56XaRnVfBbaJrNzVgL6w7pqO2BX-UeQIlnPqWNQ3YJ03OT1prElA5-JzmVv07sLQrj5GlMTYIoAmrqdeUB0LKhVZ1SFBqz-ZRHsWhLV95JDrIeBdcwzBhoW7OZbJvgWj2EyTKzjBj7eFRx74bfB1NUK63oPKk-KGKiEyHX27r1Mdvg2WB0bFDoH6IeQILDHdIjGE5KRA5of1P7lMKeB"
				/>
				
				<!-- Map Overlay Label -->
				<div class="absolute top-6 left-6 p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl max-w-xs">
					<h3 class="font-headline font-bold text-primary text-xl mb-2">Main Hospital</h3>
					<p class="text-sm text-on-surface-variant leading-relaxed">Opposite Makunga Sec School, Kitale-Kapenguria road</p>
					<div class="mt-4 flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all cursor-pointer">
						<span>Get directions</span>
						<span class="material-symbols-outlined text-sm">arrow_forward</span>
					</div>
				</div>
				
				<!-- Map Pin -->
				<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<div class="relative flex items-center justify-center">
						<div class="absolute w-12 h-12 bg-primary/20 rounded-full animate-ping"></div>
						<div class="w-8 h-8 bg-primary rounded-full border-4 border-white flex items-center justify-center shadow-xl">
							<span class="material-symbols-outlined text-white text-sm" style="font-variation-settings: 'FILL' 1;">local_hospital</span>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Operating Hours & Features -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="bg-surface-container-low p-8 rounded-xl">
					<span class="material-symbols-outlined text-primary mb-4" style="font-variation-settings: 'FILL' 1;">schedule</span>
					<h4 class="font-headline font-bold text-lg mb-2">Open 24/7</h4>
					<p class="text-sm text-on-surface-variant">Round-the-clock emergency care and dialysis services available every day.</p>
				</div>
				<div class="bg-surface-container-low p-8 rounded-xl">
					<span class="material-symbols-outlined text-primary mb-4" style="font-variation-settings: 'FILL' 1;">call</span>
					<h4 class="font-headline font-bold text-lg mb-2">Main Hospital</h4>
					<p class="text-sm text-on-surface-variant font-medium">0718 009 458</p>
					<p class="text-xs text-outline mt-1">24/7 Emergency & Dialysis</p>
				</div>
				<div class="bg-surface-container-low p-8 rounded-xl">
					<span class="material-symbols-outlined text-primary mb-4" style="font-variation-settings: 'FILL' 1;">call</span>
					<h4 class="font-headline font-bold text-lg mb-2">Town Clinic</h4>
					<p class="text-sm text-on-surface-variant font-medium">0792 327 495</p>
					<p class="text-xs text-outline mt-1">Outpatient Services</p>
				</div>
			</div>
		</div>
		
		<!-- Contact Form Sidebar -->
		<div class="lg:col-span-4">
			<div class="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(28,27,28,0.06)] sticky top-28">
				<h2 class="font-headline font-bold text-2xl text-primary mb-2">Send an Inquiry</h2>
				<p class="text-sm text-on-surface-variant mb-8">We aim to respond to all non-emergency messages within 2 hours.</p>
				
				<form class="space-y-6">
					<div class="space-y-1">
						<label for="contact-name" class="text-[10px] font-bold text-outline uppercase tracking-widest px-1">Full Name</label>
						<input 
							id="contact-name"
							name="name"
							class="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all outline-none" 
							placeholder="John Doe" 
							type="text"
						/>
					</div>
					
					<div class="space-y-1">
						<label for="contact-email" class="text-[10px] font-bold text-outline uppercase tracking-widest px-1">Email Address</label>
						<input 
							id="contact-email"
							name="email"
							class="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all outline-none" 
							placeholder="john@example.com" 
							type="email"
						/>
					</div>
					
					<div class="space-y-1">
						<label for="contact-subject" class="text-[10px] font-bold text-outline uppercase tracking-widest px-1">Subject</label>
						<select id="contact-subject" name="subject" class="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all outline-none">
							<option>General Inquiry</option>
							<option>Dialysis Services</option>
							<option>Laboratory Results</option>
							<option>Billing & Insurance</option>
						</select>
					</div>
					
					<div class="space-y-1">
						<label for="contact-message" class="text-[10px] font-bold text-outline uppercase tracking-widest px-1">Message</label>
						<textarea 
							id="contact-message"
							name="message"
							class="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all outline-none resize-none" 
							placeholder="How can we help you?" 
							rows="4"
						></textarea>
					</div>
					
					<button 
						class="w-full bg-primary text-white py-4 rounded-xl font-headline font-bold hover:bg-primary-container transition-all shadow-lg shadow-primary/20" 
						type="submit"
					>
						Submit Inquiry
					</button>
				</form>
				
				<div class="mt-8 pt-8 border-t border-outline-variant/15 text-center">
					<p class="text-xs text-outline font-medium mb-4">FOR EMERGENCIES CALL IMMEDIATELY</p>
					<a 
						class="text-xl font-headline font-extrabold text-primary flex items-center justify-center gap-2 mb-3" 
						href="tel:+254718009458"
					>
						<span class="material-symbols-outlined">emergency</span>
						0718 009 458
					</a>
					<p class="text-xs text-on-surface-variant">Main Hospital - 24/7 Service</p>
				</div>
			</div>
		</div>
	</div>
</section>
