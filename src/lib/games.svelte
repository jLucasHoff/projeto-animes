<script lang="ts">
    import { animes } from "$lib";
    
    const inclineElement = (e:MouseEvent) => {
        const card = e.currentTarget as HTMLElement
        if (!card) return

        const { left, top, width, height } = card.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const posX = e.clientX - centerX;
        const posY = e.clientY - centerY;

        const rotateY = (posX / width) * 20;  // Inclinação horizontal
        const rotateX = (posY / height) * -10; // Inclinação vertical (negativo para direção natural)
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px) scale(1.02)`;
    }

    const resetIncline = (e: MouseEvent) => {
        const card = e.currentTarget as HTMLElement;
        card.style.transform = 'none';
    }

</script>
<section>
    {#each animes as anime}
        <div role="img" onmousemove={(e) => inclineElement(e)} onmouseleave={(e) => resetIncline(e)}>
            <img src={["/posters/",anime.code, ".webp"].join("")} alt="" class="game_card--bright">
            <img src={["/posters/",anime.code, ".webp"].join("")} alt="" class="game_card--poster">
        </div>
    {/each}
</section>

<style>
    section {
        display: flex;
        gap: 25px;
        width: 100vw;
        padding: 100px 0;
        scroll-snap-type: x mandatory;
        overflow: auto;
        z-index: 1;
        perspective: 1000px;

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
            cursor: pointer;
            transform-style: preserve-3d;

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
                    z-index: 2;
                    filter: saturate(0) contrast(0.85);
                    transition: .3s filter;
                }

                &:is(.game_card--bright) {
                    z-index: 1;
                    filter: blur(50px);
                    transition: .3s opacity;
                    opacity: 0;
                    will-change: transform, opacity;
                    backface-visibility: hidden;
                }
            }
        }
    }
</style>