<script lang="ts">
    import { animes } from "$lib";
</script>

<section>
    <div class="spacer"></div>
    {#each animes as anime, i}
        <div role="img" class="card" data-index={i}>
            <img src={["/posters/",anime.code, ".webp"].join("") || "/placeholder.svg"} alt="" class="game_card--bright">
            <img src={["/posters/",anime.code, ".webp"].join("") || "/placeholder.svg"} alt="" class="game_card--poster">
        </div>
    {/each}
    <div class="spacer"></div>
</section>

<style>
    section {
        display: flex;
        gap: 25px;
        padding: 100px 0;
        scroll-snap-type: x mandatory;
        overflow-x: auto;
        z-index: 1;
        width: 100%;
        max-width: 100vw;
        /* Remove justify-content as it can interfere with scroll-snap */
        box-sizing: border-box;
        /* Hide scrollbar but keep functionality */
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    section::-webkit-scrollbar {
        display: none;
    }

    /* Spacers to allow first and last cards to center */
    .spacer {
        flex: 0 0 calc(50% - 150px); /* Half container width minus half card width */
        min-width: 20px; /* Ensure there's always some space */
    }

    .card {
        flex: 0 0 auto;
        scroll-snap-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        box-sizing: border-box;
        padding: 20px;
        aspect-ratio: 2/3;
        width: 300px;
        cursor: pointer;
    }

    .card:hover img {
        transform: scale(1.025);
    }

    .card:hover img.game_card--poster {
        filter: saturate(1) contrast(1);
    }

    .card:hover img.game_card--bright {
        opacity: 1;
    }

    .card img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 25px;
    }

    .card img.game_card--poster {
        z-index: 2;
        filter: saturate(0) contrast(0.85);
        transition: .3s filter, .3s transform;
    }

    .card img.game_card--bright {
        z-index: 1;
        filter: blur(35px);
        transition: .3s opacity, .3s transform;
        opacity: 0;
        will-change: transform, opacity;
        backface-visibility: hidden;
    }
</style>