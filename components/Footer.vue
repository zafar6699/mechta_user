<template>
    <footer>
        <span class="foot-cover">
            <nav class="footer-nav">
                <div class="foot-logo">
                    <img src="@/assets/image/foot-logo.svg" />
                    <p>
                        {{ $t("title1") }} <br />
                        {{ $t("title2") }}
                    </p>
                    <h3>{{ $t("slogan") }}</h3>
                </div>
                <div class="foot-info">
                    <h3>{{ $t("info") }}</h3>
                    <ul>
                        <li>
                            <img src="@/assets/image/location.svg" />
                            <span>{{ $t("city") }}</span>
                        </li>
                        <li>
                            <img src="@/assets/image/foot-phone.svg" />
                            <span>+998(99) 329-14-04</span>
                        </li>
                        <li>
                            <img src="@/assets/image/message.svg" />
                            <span>info@mechta.uz</span>
                        </li>
                        <li>
                            <img src="@/assets/image/foot-watch.svg" />
                            <span>{{ $t("work") }}</span>
                        </li>
                    </ul>
                </div>
                <div class="foot-contact">
                    <h3>{{ $t("messenger") }}</h3>
                    <ul>
                        <li>
                            <a href="#" class="messenger">
                                <div>
                                    <svg
                                        id="Bold"
                                        enable-background="new 0 0 24 24"
                                        height="512"
                                        viewBox="0 0 24 24"
                                        width="512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z"
                                        />
                                    </svg></div
                            ></a>
                        </li>

                        <li>
                            <a href="#" class="messenger">
                                <div>
                                    <svg
                                        version="1.1"
                                        id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px"
                                        y="0px"
                                        width="169.063px"
                                        height="169.063px"
                                        viewBox="0 0 169.063 169.063"
                                        style="enable-background: new 0 0 169.063 169.063"
                                        xml:space="preserve"
                                    >
                                        <g>
                                            <path
                                                d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
		c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
		c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
		c17.455,0,31.656,14.201,31.656,31.655V122.407z"
                                            />
                                            <path
                                                d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
		C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
		c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"
                                            />
                                            <path
                                                d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
		c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
		C135.661,29.421,132.821,28.251,129.921,28.251z"
                                            />
                                        </g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                    </svg>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="messenger">
                                <img src="@/assets/image/twit.svg" />
                            </a>
                        </li>

                        <li>
                            <a href="#" class="messenger">
                                <img src="@/assets/image/facebook.svg" />
                            </a>
                        </li>

                        <li>
                            <a href="#" class="messenger">
                                <img src="@/assets/image/youtube.svg" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </span>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
li {
    list-style-type: none;
}
a {
    text-decoration: none;
}
html,
body {
    overflow-x: hidden;
}
// ================= Footer section ============
footer {
    width: 100%;
    background-image: url("~assets/image/imgvideo.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .foot-cover {
        display: flex;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #009933, $alpha: 0.7);
    }
}
.footer-nav {
    width: 90%;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
}
.foot-logo {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p {
        font-family: "Roboto Bold", sans-serif;
        color: #fff;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 124%;
    }
    h3 {
        font-family: "Lobster", cursive;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;
        color: #e7ea09;
    }
}
.foot-info {
    margin-top: 38px;
    h3 {
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 33px;
        color: #ffffff;
        margin-bottom: 22px;
    }
    span {
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #ffffff;
    }
    li {
        display: flex;
        align-items: center;
        img {
            margin-right: 20px;
        }
    }
    li:not(:last-child) {
        margin-bottom: 15px;
    }
}
.foot-contact {
    margin-top: 38px;
    h3 {
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 33px;
        color: #ffffff;
        margin-bottom: 38px;
    }
    ul {
        display: flex;
        li:not(:last-child) {
            margin-right: 14.5px;
        }
    }
    li {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 2px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .messenger {
        div {
            width: 25px;
            height: 24px;
        }
        img {
            display: flex;
        }
    }
}
#Bold {
    fill: #fff;
}
#Layer_1 {
    fill: #fff;
}
svg {
    width: 100%;
    height: 100%;
}
// ================ Responsive Footer ===============
@media (min-width: 1281px) {
    //  .container-pro{
    //  }
}
/*
      ##Device = Laptops, Desktops
      ##Screen = B/w 1025px to 1280px
    */
@media (min-width: 1025px) and (max-width: 1280px) {
    // ============== Footer section ==============
    .footer-nav {
        width: 95%;
    }
    .foot-logo {
        height: 90%;
        img {
            width: 80%;
        }
        p {
            font-size: 16px;
        }
        h3 {
            font-size: 22px;
        }
    }
    .foot-info {
        img {
            width: 16px;
        }
        span {
            font-size: 16px;
        }
        li:not(:last-child) {
            margin-bottom: 10px;
        }
    }
    .foot-contact {
        .messenger {
            div {
                width: 22px;
                height: 20px;
            }
            img {
                width: 20px;
                height: 20px;
            }
        }
        li {
            width: 42px;
            height: 42px;
        }
    }
}
/*
      ##Device = Tablets, Ipads (portrait)
      ##Screen = B/w 768px to 1024px
    */
@media (min-width: 768px) and (max-width: 1024px) {
    // ============== Footer section ==============
    .footer-nav {
        width: 95%;
        padding: 30px 0;
    }
    .foot-logo {
        img {
            width: 80%;
        }
        p {
            font-size: 16px;
        }
        h3 {
            font-size: 22px;
        }
    }
    .foot-info {
        h3 {
            font-size: 24px;
        }
        img {
            width: 16px;
        }
        span {
            font-size: 16px;
        }
        li:not(:last-child) {
            margin-bottom: 10px;
        }
    }
    .foot-contact {
        height: 133px;
        h3 {
            font-size: 24px;
        }
        .messenger {
            div {
                width: 22px;
                height: 20px;
            }
            img {
                width: 20px;
                height: 20px;
            }
        }
        li {
            width: 37px;
            height: 37px;
        }
        ul li:not(:last-child) {
            margin-right: 10.5px;
        }
    }
}
@media (min-width: 481px) and (max-width: 767px) {
    // ============== Footer section ==============
    .footer-nav {
        width: 90%;
        padding: 30px 0;
        flex-wrap: wrap;
    }
    .foot-logo {
        height: auto;
        img {
            width: 80%;
            margin-bottom: 10px;
        }
        p {
            font-size: 16px;
            line-height: 21px;
        }
        h3 {
            font-size: 22px;
        }
    }
    .foot-info {
        h3 {
            font-size: 24px;
        }
        img {
            width: 16px;
        }
        span {
            font-size: 16px;
        }
        li:not(:last-child) {
            margin-bottom: 10px;
        }
    }
    .foot-contact {
        height: 133px;
        h3 {
            font-size: 24px;
        }
        .messenger {
            div {
                width: 22px;
                height: 20px;
            }
            img {
                width: 20px;
                height: 20px;
            }
        }
        li {
            width: 37px;
            height: 37px;
        }
        ul li:not(:last-child) {
            margin-right: 10.5px;
        }
    }
}
/*
      ##Device = Most of the Smartphones Mobiles (Portrait)
      ##Screen = B/w 320px to 479px
    */
@media (min-width: 320px) and (max-width: 480px) {
    // ============== Footer section ==============
    .footer-nav {
        width: 90%;
        padding: 30px 0;
        flex-wrap: wrap;
    }
    .foot-logo {
        height: auto;
        img {
            width: 80%;
            margin-bottom: 10px;
        }
        p {
            font-size: 16px;
            line-height: 21px;
        }
        h3 {
            font-size: 22px;
        }
    }
    .foot-info {
        h3 {
            font-size: 24px;
        }
        img {
            width: 16px;
        }
        span {
            font-size: 16px;
        }
        li:not(:last-child) {
            margin-bottom: 10px;
        }
    }
    .foot-contact {
        height: 133px;
        h3 {
            font-size: 24px;
        }
        .messenger {
            div {
                width: 22px;
                height: 20px;
            }
            img {
                width: 20px;
                height: 20px;
            }
        }
        li {
            width: 37px;
            height: 37px;
        }
        ul li:not(:last-child) {
            margin-right: 10.5px;
        }
    }
}
</style>
