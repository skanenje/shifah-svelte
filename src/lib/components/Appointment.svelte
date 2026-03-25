<!-- Appointment Booking Section -->
<section class="bg-primary-container py-20 px-8 relative overflow-hidden">
	<div class="absolute inset-0 opacity-10">
		<img 
			class="w-full h-full object-cover"
			src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzNyBhYwwehtWYNDICC-81YsRrsE6mAxmwdOI32QURsiFYYYdYADwmel_oWS3xylwmG0R1fdwBpldrXkPBdKwmto3BhqJZzUu1oowaIBVuQ9MyERvUvJY90uEByFu-PPgI-mHsHg9Xz4B_JMaLgcvS2soB8DnvjeDJFpTE3PvdDNYtC_arnJm_4AwVSA1tYlEvqfMftD5dLM-9bEtqhxao8ofyoB1dEj4h6gsmIABFZXTnIW-E82sCAaXthO5RHYSLbjgyDzF_TOqj"
			alt="Medical technology background"
		/>
	</div>
	
	<div class="max-w-5xl mx-auto relative z-10">
		<div class="text-center mb-12">
			<h2 class="text-4xl md:text-5xl font-headline font-extrabold text-white mb-6">
				Ready to Prioritize Your Health?
			</h2>
			<p class="text-white/90 text-lg max-w-2xl mx-auto">
				Speak with our experienced medical team today. Whether it's a routine checkup or specialized care, we are here for you.
			</p>
		</div>
		
		<div class="bg-white/95 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl">
			<form class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="space-y-1">
					<label class="text-xs font-bold text-outline uppercase tracking-widest px-1">Full Name</label>
					<input 
						class="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/40 transition-all outline-none" 
						placeholder="John Doe" 
						type="text"
					/>
				</div>
				
				<div class="space-y-1">
					<label class="text-xs font-bold text-outline uppercase tracking-widest px-1">Phone Number</label>
					<input 
						class="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/40 transition-all outline-none" 
						placeholder="+254 700 000 000" 
						type="tel"
					/>
				</div>
				
				<div class="space-y-1">
					<label class="text-xs font-bold text-outline uppercase tracking-widest px-1">Email Address</label>
					<input 
						class="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/40 transition-all outline-none" 
						placeholder="john@example.com" 
						type="email"
					/>
				</div>
				
				<div class="space-y-1">
					<label class="text-xs font-bold text-outline uppercase tracking-widest px-1">Preferred Date</label>
					<input 
						class="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/40 transition-all outline-none" 
						type="date"
					/>
				</div>
				
				<div class="space-y-1 md:col-span-2">
					<label class="text-xs font-bold text-outline uppercase tracking-widest px-1">Service Required</label>
					<select class="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/40 transition-all outline-none">
						<option>General Consultation</option>
						<option>Dialysis Services</option>
						<option>Maternity Care</option>
						<option>Emergency Care</option>
						<option>Laboratory Tests</option>
						<option>Other</option>
					</select>
				</div>
				
				<div class="space-y-1 md:col-span-2">
					<label class="text-xs font-bold text-outline uppercase tracking-widest px-1">Additional Notes</label>
					<textarea 
						class="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/40 transition-all outline-none resize-none" 
						placeholder="Any specific concerns or requirements..." 
						rows="3"
					></textarea>
				</div>
				
				<div class="md:col-span-2">
					<button 
						class="w-full bg-primary text-white py-4 rounded-xl font-headline font-bold text-lg hover:bg-primary/90 transition-all shadow-lg active:scale-95" 
						type="submit"
					>
						Book Appointment
					</button>
				</div>
			</form>
		</div>
		
		<div class="mt-8 text-center">
			<p class="text-white/80 text-sm mb-2">For urgent matters, call us directly</p>
			<a href="tel:+254202717077" class="text-white font-headline font-bold text-2xl hover:text-primary-fixed transition-colors">
				+254-20-2717077
			</a>
		</div>
	</div>
</section>
