<script lang="ts">
	import Ball from '$lib/ball'

	$effect(() => {
		const canvas = document.getElementById('canvas') as HTMLCanvasElement
		const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

		const ball = new Ball(ctx)

		ball.drawBalls(10)
	})
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<canvas id="canvas" width="800" height="600"></canvas>
