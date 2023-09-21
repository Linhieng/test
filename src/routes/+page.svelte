<script>
    /**
     * @type {string}
     */
    let value
</script>

<svelte:head>
    <title>随心敲</title>
</svelte:head>

<h1>Welcome to My Blog</h1>
<div>
    <input type="text" bind:value />
    <p>{value}</p>
</div>
