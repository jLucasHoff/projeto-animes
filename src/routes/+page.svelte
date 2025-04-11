<main>

</main>

<style>
@font-face {
    font-family: "PA Lexend";
    src: url("/Lexend.ttf");
}

@font-face {
    font-family: "PA NicoMoji";
    src: url("/NicoMoji-Regular.ttf");
}

:global(:root) {
    font-family: "PA Lexend";
    font-weight: 200;
}

:global(*) {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
    }

:global(body) {
    background: 
    radial-gradient(circle at center, #454545aa 0%, #45454522 60%, transparent 100%),
    linear-gradient(0deg, #1E1E1E 0%, #151515 50%, #101010 100%);
    min-width: 100vw;
    min-height: 100vh;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        backdrop-filter: blur(50px);
    }
}

main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>