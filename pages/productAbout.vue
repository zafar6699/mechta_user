<template>
    <div>
        <Header />
        <div class="container-about">
            <h2 class="about-header">{{ $t("titleProductAbout") }}</h2>

            <div class="quotes">
                <div class="quot"></div>
                <div class="quot"></div>
                <div class="quot"></div>
            </div>
            <p>
                {{ $t("paragraph1") }}
            </p>

            <p>
                {{ $t("paragraph2") }}
            </p>

            <p>
                {{ $t("paragraph3") }}
            </p>

            <p>
                {{ $t("paragraph4") }}
            </p>

            <p>
                {{ $t("paragraph5") }}
            </p>

            <p>
                {{ $t("paragraph6") }}
            </p>

            <div class="about-img">
                <img src="@/assets/image/kazan-plov.256ebc91.jpg" alt="" />
            </div>
            <p>
                {{ $t("paragraph7") }}
            </p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Global styles

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}
li {
    list-style: none;
}
a {
    text-decoration: none;
}
.about-header {
    font-size: 2rem;
    font-weight: 700;
    color: #28a745;
    margin: 10px 0;
}
.quotes {
    display: block;
    .quot {
        width: 15px;
        height: 28px;
        background-color: green;
        display: inline-block;
        margin-right: 5px;
        transform: skew(-25deg);
    }
}

.container-about {
    width: 90%;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    color: rgba($color: #000000, $alpha: 0.7);
    p {
        font-size: 18px;
        text-align: justify;
        line-height: 30px;
        letter-spacing: 1px;
        margin: 5px 0;
    }
}

.about-img {
    img {
        width: 100%;
        height: 75vh;
    }
}
@media screen and (max-width: 1025px) {
    .container-about {
        margin: 79px auto 0 auto;
    }
}
@media screen and (max-width: 430px) {
    .container-about {
        p {
            font-size: 16px;
            line-height: 28px;
            letter-spacing: 0.7px;
            margin: 5px 0;
        }
    }
}
</style>
