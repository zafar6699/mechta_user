<template>
    <div>
        <Header />
        <div class="container-about">
            <h2 class="about-header">{{ $t("titleAbout") }}</h2>

            <div class="quotes">
                <div class="quot"></div>
                <div class="quot"></div>
                <div class="quot"></div>
            </div>
            <!--  =================== Video and Info text ================ -->
            <div class="video-vs-info">
                <div class="info">
                    <p>
                        {{ $t("we") }} <b> {{ $t("mechtaB") }}</b
                        >{{ $t("we2") }} <b>{{ $t("posudaB") }}</b>
                        {{ $t("we3") }} <b>{{ $t("linkB") }}</b> {{ $t("we4") }}
                    </p>
                </div>
                <div class="video">
                    <iframe
                        class="youtube-iframe"
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/jeBxS-eDL3M"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <!-- =============== Img left and info text =================== -->
            <div class="imgLeft-vs-info">
                <div class="info">
                    <p>
                        {{ $t("paragraph8") }}
                    </p>
                </div>
                <div class="img-left">
                    <img
                        class="shadow-left"
                        src="@/assets/image/iron.jpg"
                        alt=""
                    />
                </div>
            </div>

            <!-- =============== Img right and info text =================== -->
            <div class="imgRight-vs-info">
                <div class="info">
                    <p>
                        {{ $t("we5") }}
                        <nuxt-link to="/">
                            <b>
                                {{ $t("linkB") }}
                            </b>
                        </nuxt-link>
                        {{ $t("we6") }}
                    </p>
                </div>
                <div class="img-right">
                    <img
                        class="shadow-right"
                        src="@/assets/image/shop.jpg"
                        alt=""
                    />
                </div>
            </div>
            <p>
                {{ $t("we7") }}
                <b> {{ $t("linkB") }}</b> {{ $t("we8") }}
                <b>{{ $t("posudaB") }}</b>
                {{ $t("we9") }}
                <b>{{ $t("posudaB") }}</b>
                {{ $t("we10") }}
            </p>
            <p>
                {{ $t("paragraph9") }}
            </p>
            <h2 class="shop-team">
                {{ $t("teamTitle1") }} {{ $t("teamTitle2") }}
                <nuxt-link to="/">
                    <b>
                        {{ $t("linkB") }}
                    </b>
                </nuxt-link>
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // For style
            navActive: true,
            isNavbar: false
        };
    },
    methods: {
        navbarAdd() {
            this.isNavbar = true;
        },
        navbarRemove() {
            this.isNavbar = false;
        }
    }
};
</script>

<style lang="scss" scoped>
// Global styles
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
li {
    list-style: none;
}
a {
    text-decoration: none;
}

.about-header {
    font-size: 2rem;
    font-weight: 900;
    color: #28a745;
    margin: 10px 0;
    font-family: "Roboto", sans-serif;
    margin-left: 10px;
}
.quotes {
    display: block;
    margin-left: 10px;
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
    color: rgba($color: #000000, $alpha: 0.7);
    p {
        font-size: 20px;
        text-align: justify;
        line-height: 30px;
        letter-spacing: 1px;
        margin: 5px 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        b {
            color: #28a745;
            font-weight: 900;
        }
    }
}
// ========== Video and Info text ============
.video-vs-info {
    display: flex;
    div {
        flex: 1 1 30rem;
        margin: 10px;
    }
}
.youtube-iframe {
    height: "315px";
}
// ========== Img left and Info text ============
.imgLeft-vs-info {
    display: flex;
    flex-direction: row-reverse;
    div {
        flex: 1 1 30rem;
        margin: 10px;
    }
    .shadow-left {
        width: 100%;
        border-radius: 10px 10px 10px 100px;
        filter: drop-shadow(-20px 20px 0 rgb(46, 168, 46));
    }
}

// ========== Img right and Info text ============
.imgRight-vs-info {
    display: flex;
    div {
        flex: 1 1 30rem;
        margin: 10px;
    }
    .shadow-right {
        width: 100%;
        border-radius: 10px 10px 100px 10px;
        filter: drop-shadow(20px 20px 0 rgb(46, 168, 46));
    }
}

.shop-team {
    font-size: 24px;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    margin: 10px 0;
    text-align: right;
    b {
        color: #28a745;
        font-weight: 900;
    }
}
// =========== Responsive style ===========
@media screen and (max-width: 1025px) {
    .container-about {
        margin: 79px auto 0 auto;
    }
}
@media screen and (max-width: 920px) {
    .container-about {
        margin: 79px auto 0 auto;
    }
    // ========== Video and Info text ============
    .video-vs-info {
        display: flex;
        flex-direction: column;
        div {
            flex: 1 1 12rem;
            margin: 10px;
        }
    }
    // ========== Img left and Info text ============
    .imgLeft-vs-info {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        div {
            flex: 1 1 12rem;
            margin: 10px;
        }
        .shadow-left {
            width: 90%;
            height: 70vh;
            margin: 0 2.5rem;
            display: block;
        }
    }

    // ========== Img left and Info text ============
    .imgRight-vs-info {
        display: flex;
        flex-direction: column;
        margin: 15px 0;
        div {
            flex: 1 1 12rem;
            margin: 10px;
        }
        .shadow-right {
            width: 90%;
            height: 70vh;
            margin: 0 2.5rem;
            display: block;
        }
    }
    .shop-team {
        font-size: 20px;
    }
}
@media screen and (max-width: 550px) {
    .imgLeft-vs-info {
        .shadow-left {
            height: 55vh;
            margin: 0 1.5rem;
        }
    }
    .imgRight-vs-info {
        .shadow-right {
            height: 55vh;
            margin: 0 1.5rem;
        }
    }
    .shop-team {
        font-size: 18px;
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
    .imgLeft-vs-info {
        .shadow-left {
            height: 40vh;
            margin: 0 1rem;
        }
    }
    .imgRight-vs-info {
        .shadow-right {
            height: 40vh;
            margin: 0 1rem;
        }
    }
    .shop-team {
        font-size: 16px;
    }
}
</style>
