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

<style lang="scss">
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
