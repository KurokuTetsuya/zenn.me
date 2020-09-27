<script>
	import { get } from "superagent";
	async function getAvatar() {
		const { body } = await get("https://api.frutbits.xyz/fetchUser?id=725331428962992131");
		let ava = body.result.displayAvatarURL;
		// Try Gif
		try {
			await get(ava.replace(".webp", ".gif"));
			ava = ava.replace(".webp", ".gif")
		} catch {
			ava = body.result.displayAvatarURL;
		}
		return ava;
	}
	let avatar = getAvatar();
</script>
<svelte:head>
	<title>Home | Zen</title>
	<meta name="title" content="Home | Zen">
	{#await avatar}
	<!-- Nothing here -->
	{:then value}
	<meta property="og:image" content={value}>
	<link rel="shortcut icon" type="image/{value.endsWith(".gif") ? "gif" : "png"}" href={value}/>
	<link rel="icon" type="image/{value.endsWith(".gif") ? "gif" : "png"}" href={value}>
	{/await}
</svelte:head>

<div class="jumbotron" style="display: flex; align-items: center; min-height: 100%; min-height: 100vh;">
	<div class="container p-5 text-center">
		<div class="row ">
			<div class="d-flex justify-content-center align-items-center">
				{#if avatar === undefined}
					<img class="btn-rounded" src="logo-512.png" alt="zen logo" height="150px" width="150x">
				{:else}
					{#await avatar}
					<img class="btn-rounded" src="logo-512.png" alt="zen logo" height="150px" width="150x">
					{:then value}
					<img class="btn-rounded" src={value} alt="zen logo" height="150px" width="150x">
					{:catch error}
						{error.message}
					{/await}
				{/if}
			</div>
			<div class="d-flex justify-content-center align-items-center p-5 h-100">
				<div class="text-white">
					<h1 class="mb-3">ゼン茜 | Zen Akane</h1>
					<div class="flex-between">
						<a class="btn btn-outline-light btn-m" href="/sosmed">Contact Me</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>