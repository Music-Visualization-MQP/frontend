<script lang="ts">
    export let song: {
        path: string
        title: string
        artist: string
        album: string
    };
</script>

<div class="song">
    <img src={song.path} alt={`The album art for ${song.album}.`}>
    <p class="title">{song.title}</p>
    <p class="artist">{song.artist}</p>
    <p class="album">{song.album}</p>
</div>