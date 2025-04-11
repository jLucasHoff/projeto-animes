<script>
    import { animes } from "$lib";

</script>
<section>
    {#each animes as anime}
        <div>
            <img src={["/posters/",anime.code, ".webp"].join("")} alt="" class="game_card--bright">
            <img src={["/posters/",anime.code, ".webp"].join("")} alt="" class="game_card--poster">
        </div>
    {/each}
</section>

<style>
    section {
        display: flex;
        gap: 25px;
        width: 100%;
        scroll-snap-type: x mandatory;
        overflow:auto;

        & div {
            flex: 1 0 auto;
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
            z-index: 2;
            cursor: pointer;

            &:first-child, &:last-child {
                opacity: 0;
                pointer-events: none;
            }

            &:hover img:is(.game_card--poster) {
                filter: saturate(1) contrast(1);
            }

            &:hover img:is(.game_card--bright) {
                opacity: 1;
            }

            & img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 25px;

                &:is(.game_card--poster) {
                    z-index: -1;
                    filter: saturate(0) contrast(0.85);
                    transition: .3s filter;
                }

                &:is(.game_card--bright) {
                    z-index: -2;
                    filter: blur(50px);
                    transition: .3s opacity;
                    opacity: 0;
                }
            }
        }
    }
</style>