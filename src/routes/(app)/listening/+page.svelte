<script lang="ts">
    import Song from './Song.svelte';
    let songs: {
        path: string
        title: string
        artist: string
        album: string
    }[] = []
</script>

<h1>Listening Data</h1>
<div class="songs">
    {#each songs as song}
        <Song {song} />
    {/each}
</div>