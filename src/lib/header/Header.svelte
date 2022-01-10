<script>
	import { page } from '$app/stores';
	import logo from './logo.svg';
</script>

<header>
	<h1>
		<svg
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 1080 1080"
			style="enable-background:new 0 0 1080 1080;"
			xml:space="preserve"
		>
			<style type="text/css">
				.st0 {
					fill: #f29e04;
				}
				.st1 {
					fill: #ffffff;
				}
			</style>
			<g>
				<path
					class="st0"
					d="M93,774c-5.5,0-10-4.5-10-10V649c0-5.5,4.5-10,10-10c54,0,98-44,98-98s-44-98-98-98c-5.5,0-10-4.5-10-10V317
		c0-5.5,4.5-10,10-10h894c5.5,0,10,4.5,10,10v115c0,5.5-4.5,10-10,10c-54,0-98,44-98,98s44,98,98,98c5.5,0,10,4.5,10,10v116
		c0,5.5-4.5,10-10,10H93z"
				/>
				<path
					class="st1"
					d="M987,317v115c-59.6,0-108,48.4-108,108c0,59.6,48.4,108,108,108v116H540H93V649c59.6,0,108-48.4,108-108
		c0-59.6-48.4-108-108-108V317h447H987 M987,297H540H93c-11,0-20,9-20,20v116c0,11,9,20,20,20c48.5,0,88,39.5,88,88s-39.5,88-88,88
		c-11,0-20,9-20,20v115c0,11,9,20,20,20h447h447c11,0,20-9,20-20V648c0-11-9-20-20-20c-48.5,0-88-39.5-88-88s39.5-88,88-88
		c11,0,20-9,20-20V317C1007,306,998,297,987,297L987,297z"
				/>
			</g>
			<path
				class="st1"
				d="M723,337c-5.5,0-10-4.5-10-10v-10c0-5.5,4.5-10,10-10s10,4.5,10,10v10C733,332.5,728.5,337,723,337z"
			/>
			<path
				class="st1"
				d="M723,708.3c-5.5,0-10-4.5-10-10v-18.6c0-5.5,4.5-10,10-10s10,4.5,10,10v18.6C733,703.8,728.5,708.3,723,708.3z"
			/>
			<path
				class="st1"
				d="M723,634c-5.5,0-10-4.5-10-10v-18.6c0-5.5,4.5-10,10-10s10,4.5,10,10V624C733,629.6,728.5,634,723,634z"
			/>
			<path
				class="st1"
				d="M723,559.8c-5.5,0-10-4.5-10-10v-18.6c0-5.5,4.5-10,10-10s10,4.5,10,10v18.6C733,555.3,728.5,559.8,723,559.8z"
			/>
			<path
				class="st1"
				d="M723,485.5c-5.5,0-10-4.5-10-10V457c0-5.5,4.5-10,10-10s10,4.5,10,10v18.6C733,481,728.5,485.5,723,485.5z"
			/>
			<path
				class="st1"
				d="M723,411.3c-5.5,0-10-4.5-10-10v-18.6c0-5.5,4.5-10,10-10s10,4.5,10,10v18.6C733,406.8,728.5,411.3,723,411.3z"
			/>
			<path
				class="st1"
				d="M723,774c-5.5,0-10-4.5-10-10v-10c0-5.5,4.5-10,10-10s10,4.5,10,10v10C733,769.5,728.5,774,723,774z"
			/>
		</svg>
		<span>The Rafflinator</span>
	</h1>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		padding: 1rem;
		background: var(--color-blue-mike);
	}
	header:hover svg {
		animation-iteration-count: infinite;
	}

	h1 {
		display: flex;
		margin: 0;
		gap: 1rem;
		user-select: none;
		justify-content: center;
		align-items: center;
	}

	svg {
		width: 1em;
		height: 1em;
		display: block;
		transform-origin: center center;
		transform: rotateZ(-45deg);
		animation: shakeRaffle 140ms ease-in-out 0;
	}

	@keyframes shakeRaffle {
		0% {
			transform: rotateZ(-60deg);
		}
		50% {
			transform: rotateZ(-30deg);
		}
		100% {
			transform: rotateZ(-45deg);
		}
	}
</style>
