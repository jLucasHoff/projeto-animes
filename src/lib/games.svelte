<script lang="ts">
    import { animes } from "$lib"
    import { onMount } from "svelte"

    let container: HTMLElement
    let activeIndex: number

    const openAnime = (i: number) => {
        alert(`Card ${i} clicado!`)
        console.log(`Card ${i} clicado!`)
    }

    const handleRodinha = (e: WheelEvent): void => {
        e.preventDefault();
        container.scrollBy({ 
            left: e.deltaY * 2, 
            behavior: "smooth" 
        });
    };

    const handleScroll = (): void => {
        const containerCenter: number = container.scrollLeft + (container.clientWidth / 2)
        let closestIndex: number = -1
        let minDistance: number = Infinity

        const cards: NodeListOf<HTMLDivElement> = container.querySelectorAll('.card')
        
        cards.forEach((card: HTMLDivElement, index: number) => {
            const cardMid: number = card.offsetLeft + (card.offsetWidth / 2)
            const distance: number = Math.abs(cardMid - containerCenter)
            
            if (distance < minDistance) {
                minDistance = distance
                closestIndex = index
            }
        });

        activeIndex = closestIndex
    };

    const handleClick = (event: MouseEvent) => {
        const card = event.currentTarget as HTMLElement
        const index = parseInt(card.dataset.index || '-1')
        
        if (index === activeIndex) {
            openAnime(index)
        } else {
            container.scrollTo({
                left: card.offsetLeft + (card.offsetWidth / 2) - (container.clientWidth / 2),
                behavior: 'smooth'
            });
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        e.preventDefault()
        switch (e.key) {
            case 'ArrowRight':
                container.scrollBy({
                    left: 300,
                    behavior: 'smooth'
                });
                break;
            
            case 'ArrowLeft':
                container.scrollBy({
                    left: -300,
                    behavior: 'smooth'
                });
                break;
            
            case ' ':
            case 'Enter':
                e.preventDefault();
                openAnime(activeIndex)
                break;
        }
    }

    onMount((): () => void => {
        container.addEventListener("wheel", handleRodinha, { passive: false })
        container.addEventListener("scroll", handleScroll)
        document.addEventListener("keydown", handleKeyDown)

        const card:HTMLElement = container.querySelectorAll('.card')[activeIndex || 0] as HTMLElement
        container.scrollTo({
            left: card.offsetLeft + (card.offsetWidth / 2) - (container.clientWidth / 2),
            behavior: 'smooth'
        });

        return () => {
            container.removeEventListener("wheel", handleRodinha)
            container.removeEventListener("scroll", handleScroll)
            document.removeEventListener("keydown", handleKeyDown)
        }
    })
</script>

<section bind:this={container}>
    <div class="spacer"></div>
    {#each animes as anime, i}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <div role="img" class="card" data-index={i} class:active={activeIndex === i} onclick={handleClick}>
            <img src={["/posters/",anime.code, ".webp"].join("") || "/placeholder.svg"} alt="" class="game_card--bright">
            <img src={["/posters/",anime.code, ".webp"].join("") || "/placeholder.svg"} alt="" class="game_card--poster">
        </div>
    {/each}
    <div id="ghost--card" class="card">
        <img alt="" class="game_card--bright">
        <img alt="" class="game_card--poster">
        <div class="game_card--fake_window">
            <div class="game_card--banner"></div>
        </div>
    </div>
    <div class="spacer"></div>
</section>

<style>
    section {
        display: flex;
        gap: 25px;
        padding: 100px 0;
        scroll-snap-type: x mandatory;
        scroll-behavior: auto;
        overflow-x: auto;
        z-index: 1;
        width: 100%;
        max-width: 100vw;
        box-sizing: border-box;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .spacer {
        flex: 0 0 calc(50% - 150px);
        min-width: 20px; 
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

        &:hover img.game_card--poster {
            filter: saturate(0.15);
        }

        &.active img.game_card--poster {
            filter: saturate(1) contrast(1);
        }

        &:hover img.game_card--bright,
        &.active img.game_card--bright {
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
        }

        & img.game_card--poster {
            z-index: 2;
            filter: saturate(0) contrast(0.85);
            transition: .3s filter, .3s transform;
        }

        & img.game_card--bright {
            z-index: 1;
            filter: blur(50px);
            transition: .3s opacity, .3s transform;
            opacity: 0;
        }
    }

    #ghost--card {
        z-index: 3;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 25px;
        overflow: hidden;
        pointer-events: none;

        &:hover .game_card--banner {
            transform: translateY(0%);
        }

        & .game_card--banner {
            display: block;
            width: 100%;
            height: 100%;
            background: red;
            transform: translateY(100%);
            transition: .3s transform;
        }
    }
</style>