<template>
    <div>
       <nav class="navbar">
            <div class="navbar-inner">
                <div class="office-shop">
                    <p>
                        {{ $t("title1") }} <br />
                        {{ $t("title2") }}
                    </p>
                    <h3>{{ $t("slogan") }}</h3>
                </div>
                <p class="category-select">
                    <span>КАТЕГОРИИ</span>
                    <fa icon="angle-down" class="category-icon" />
                    <ul class="drop-down">
                        <li v-for="k in categor" :key="k"
                         @click="changeCategory(k._id, k.nameUz)"
                        >
                             <a href="#2" class="link">{{ k.nameUz }}</a>
                         </li>
                    </ul>
                </p>
                <div class="contact-language">
                    <img
                        class="header-phone-icon"
                        src="@/assets/image/phone.svg"
                        alt=""
                    />
                    <p class="head-phone-number">+998 (99) 329-14-04</p>
                    <div class="header-bag-icon">
                        <img src="@/assets/image/bag.svg" alt="" />
                        <div class="header-count">
                            <span>3</span>
                        </div>
                    </div>
                </div>
                <ul class="nav-link">
                    <li>
                        <nuxt-link to="/">{{ $t("lan1") }}</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/productAbout">{{
                            $t("lan2")
                        }}</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/about">{{ $t("lan3") }}</nuxt-link>
                    </li>
                    <li>
                        <a href="#">{{ $t("lan4") }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t("lan5") }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t("lan6") }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t("lan7") }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t("lan8") }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t("lan9") }}</a>
                    </li>
                    <li>
                        <a href="#">{{ $t("lan10") }}</a>
                    </li>
                </ul>
            </div>
        </nav>
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
                <b>{{ $t("posudaB") }}</b> {{ $t("we9") }}
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
export default {};
</script>

<style lang="scss">
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
@media screen and (max-width: 920px) {
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
