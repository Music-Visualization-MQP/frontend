<script>
    import '$lib/assets/stylesheets/reset.css';
    import '$lib/assets/stylesheets/theme-dark.css';
    import '$lib/assets/stylesheets/global.css';

    import sample_collage from '$lib/assets/images/sample_collage.png'
</script>

<div class="content">
    <div class="left">
        <img src={sample_collage} alt="A sample album art collage.">
    </div>
    <div class="middle">
        <h1>one last thing...</h1>
        <button class="link_spotify">log in with Spotify</button>
        <div>
            <button class="submit">create account</button>
            <a href="/">cancel & delete account</a>
        </div>
    </div>
    <div class="right">
        <img src={sample_collage} alt="A second sample album art collage.">
    </div>
</div>

<style>
    .content {
        width: 100%;
        height: 100vh;
        display: flex;
        overflow: hidden;
    }

    .left {
        width: 30%;
        display: flex;
        justify-content: right;
        align-items: center;
    }

    .middle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40%;
        gap: 100px;
    }

    h1 {
        font-size: 30px;
    }

    .middle div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    button {
        border: none;
        cursor: pointer;
        color: var(--background);
        font-family: "Mattone", sans-serif;
        font-size: 15px;
    }

    .submit {
        height: 40px;
        width: 100%;
        border-radius: 20px;
        background-color: var(--accent);
    }

    .link_spotify {
        height: 50px;
        width: 300px;
        border-radius: 10px;
        background-color: #1DB954; /* spotify green */
    }

    .right {
        width: 30%;
        display: flex;
        justify-content: left;
        align-items: center;
    }

    img {
        height: 150%;
        transform: rotate(8deg);
        opacity: 0.5;
    }
</style>