<template>
    <div>
        <div class="slider">
            <div class="slides">
                <input
                    class="input-slide"
                    type="radio"
                    name="radio-btn"
                    id="radio1"
                />
                <input
                    class="input-slide"
                    type="radio"
                    name="radio-btn"
                    id="radio2"
                />
                <input
                    class="input-slide"
                    type="radio"
                    name="radio-btn"
                    id="radio3"
                />

                <div class="slide first">
                    <span class="gradient"></span>
                    <div class="slide-text">
                        <h1>
                            {{ $t("lan11") }} <br />
                            {{ $t("lan12") }}
                        </h1>
                        <p>{{ $t("title") }}</p>
                        <a href="#" class="home-button"
                            ><span>{{ $t("lan13") }}</span></a
                        >
                    </div>
                    <img src="@/assets/image/sasa.svg" />
                </div>

                <div class="slide">
                    <span class="gradient"></span>
                    <div class="slide-text">
                        <h1>
                            {{ $t("lan11") }} <br />
                            {{ $t("lan12") }}
                        </h1>
                        <p>{{ $t("title") }}</p>
                        <a href="#" class="home-button"
                            ><span>{{ $t("lan13") }}</span></a
                        >
                    </div>
                    <img src="@/assets/image/sasa.svg" />
                </div>

                <div class="slide">
                    <span class="gradient"></span>
                    <div class="slide-text">
                        <h1>
                            {{ $t("lan11") }} <br />
                            {{ $t("lan12") }}
                        </h1>
                        <p>{{ $t("title") }}</p>
                        <a href="#" class="home-button"
                            ><span>{{ $t("lan13") }}</span></a
                        >
                    </div>
                    <img src="@/assets/image/sasa.svg" />
                </div>
            </div>

            <div class="s-nagation-manual">
                <label
                    for="radio1"
                    id="btn1"
                    class="s-manual-btn s-click"
                ></label>
                <label for="radio2" id="btn2" class="s-manual-btn"></label>
                <label for="radio3" id="btn3" class="s-manual-btn"></label>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
// ============= Home section Slider galery =================

.slider {
    margin: 0 auto;
    width: 100%;
    height: 551px;
    overflow: hidden;
}
.slides {
    width: 500%;
    display: flex;
    position: relative;
    .input-slide {
        display: none;
    }
    .slide {
        width: 20%;
        transition: 2s;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
.gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 0.29)),
        linear-gradient(
            90.64deg,
            rgba(20, 142, 60, 0.6) 16.29%,
            rgba(105, 149, 54, 0) 86.18%
        );
}
.slide-text {
    color: #fff;
    position: absolute;
    top: 31%;
    left: 10%;
    transform: translate(0, -43%);
    h1 {
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        line-height: 67px;
        margin-bottom: 10px;
    }
    p {
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        margin-bottom: 40px;
    }
    .home-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #fff;
        width: 120px;
        height: 40px;
        border-radius: 2px;
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #ffffff;
    }
}
svg {
    width: 100%;
    height: 100%;
}
.s-nagation-manual {
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0);
    z-index: 1;
}
.s-manual-btn {
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
}
.s-click {
    background: #f7fa00;
}
.s-manual-btn:not(:last-child) {
    margin-right: 15px;
}

#radio1:checked ~ .first {
    margin-left: 0;
}
#radio2:checked ~ .first {
    margin-left: -20%;
}
#radio3:checked ~ .first {
    margin-left: -40%;
}
// ================== Responsive ========================
@media (min-width: 1281px) {
    //  .container-pro{

    //  }
}

/*
      ##Device = Laptops, Desktops
      ##Screen = B/w 1025px to 1280px
    */

@media (min-width: 1025px) and (max-width: 1280px) {
    // =============== home slider section ==================
    .slider {
        height: 437px;
    }

    // ================ New Product section ================
    .new-product h2 {
        font-size: calc(100% + 23px);
    }
    // ================ Discount section ============
    .discount .discount-slider {
        width: 71%;
    }
    // =============== Video section ================
    .video-section {
        padding-top: 45px;
        padding-bottom: 40px;
        .video-head {
            font-size: calc(100% + 23px);
        }
        .video-card {
            flex: 1 1 25rem;
            height: 293px;
        }
    }
    // =============== Advantages section ================
    .advantages {
        padding: 10px 0 50px 36px;
    }

    // Center Product
    main {
        width: 95%;
    }
}

/*
      ##Device = Tablets, Ipads (portrait)
      ##Screen = B/w 768px to 1024px
    */

@media (min-width: 768px) and (max-width: 1024px) {
    main {
        width: 95%;
    }

    // =============== home slider section ==================
    .slider {
        height: 437px;
        margin-top: 79px;
    }
    .slide-text {
        h1 {
            font-size: 28px;
            line-height: 38px;
        }
        p {
            margin-bottom: 24px;
        }
    }
    .s-nagation-manual {
        bottom: 13%;
    }
    // ================ New Product section ================
    .new-product h2 {
        font-size: calc(100% + 23px);
    }
    // ================ Discount section ============
    .discount {
        .discount-inner {
            flex-direction: column;
        }
        .discount-slider {
            width: 100%;
        }
        .order-card {
            width: 100%;
            margin-bottom: 12px;
        }
    }
    // =============== Video section ================
    .video-section {
        padding-top: 45px;
        padding-bottom: 40px;
        .video-head {
            font-size: calc(100% + 23px);
        }
        .video-card {
            flex: 1 1 20rem;
            height: 240px;
        }
    }
    // =============== Advantages section ================
    .advantages {
        padding: 10px 0 50px 36px;
        height: 365px;
        h2 {
            font-size: 30px;
            line-height: 47px;
            margin-bottom: 10px;
        }
    }
    .advantages-img {
        height: 365px;
    }
}

@media (min-width: 481px) and (max-width: 767px) {
    main {
        width: 95%;
    }

    // =============== home slider section ==================
    .slider {
        height: 296px;
        margin-top: 79px;
    }
    .slide-text {
        top: 30%;
        left: 5%;
        h1 {
            font-size: 24px;
            line-height: 30px;
            margin-bottom: 4px;
        }
        p {
            font-size: 16px;
            margin-bottom: 14px;
        }
        .home-button {
            width: 94px;
            height: 33px;
        }
    }
    .s-nagation-manual {
        bottom: 37%;
    }
    // ================ New Product section ================
    .new-product h2 {
        font-size: calc(100% + 15px);
        margin-bottom: 0px;
    }
    // ================ Discount section ============
    .discount {
        .discount-inner {
            flex-direction: column;
        }
        .discount-slider {
            width: 98%;
        }
        .item-a .product-card {
            width: 230px;
        }
        .order-card {
            width: 96%;
            margin: 0 auto;
            margin-bottom: 12px !important;
        }
    }
    // =============== Video section ================
    .video-section {
        padding-top: 15px;
        padding-bottom: 40px;
        .video-head {
            font-size: calc(100% + 15px);
            margin-bottom: 12px;
        }
        .video-card {
            flex: 1 1 20rem;
            height: 240px;
        }
    }
    // =============== Advantages section ================
    .advantages {
        padding: 10px 0 50px 36px;
        height: 365px;
        h2 {
            font-size: 30px;
            line-height: 47px;
            margin-bottom: 10px;
        }
    }
    .advantages-img {
        height: 365px;
        display: none;
    }
    .item-a .product-card {
        width: 230px;
    }

    .product-card {
        flex: 1 1 12rem;
    }

    main {
        width: 98%;
        margin: 0 auto;
    }
}

/*
      ##Device = Most of the Smartphones Mobiles (Portrait)
      ##Screen = B/w 320px to 479px
    */
@media (min-width: 320px) and (max-width: 480px) {
    main {
        width: 95%;
    }

    // =============== home slider section ==================
    .slider {
        height: 201px;
        margin-top: 79px;
    }
    .slide-text {
        top: 30%;
        left: 5%;
        h1 {
            font-size: 15px;
            line-height: 20px;
            margin-bottom: 2px;
        }
        p {
            font-size: 12px;
            margin-bottom: 9px;
        }
        .home-button {
            width: 75px;
            height: 25px;
            font-size: 14px;
        }
    }
    .s-nagation-manual {
        bottom: 53%;
    }
    // ================ New Product section ================
    .new-product h2 {
        font-size: calc(100% + 15px);
        margin-bottom: 0px;
        text-align: center;
    }
    // ================ Discount section ============
    .discount {
        .discount-inner {
            flex-direction: column;
        }
        .discount-slider {
            width: 98%;
        }
        .item-a .product-card {
            width: 295px;
        }
        .order-card {
            width: 96%;
            margin: 0 auto;
            margin-bottom: 12px !important;
        }
    }
    // =============== Video section ================
    .video-section {
        padding-top: 15px;
        padding-bottom: 40px;
        .video-head {
            font-size: calc(100% + 15px);
            margin-bottom: 12px;
        }
        .video-card {
            flex: 1 1 20rem;
            height: 240px;
        }
    }
    // =============== Advantages section ================
    .advantages {
        padding: 10px 0 50px 36px;
        height: 365px;
        h2 {
            font-size: 26px;
            line-height: 41px;
            margin-bottom: 10px;
        }
        li span {
            margin-left: 20px;
            font-family: "Roboto Bold", sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 21px;
            text-align: center;
            color: #ffffff;
        }
    }
    .advantages-img {
        height: 365px;
        display: none;
    }
    .item-a .product-card {
        width: 295px;
    }

    .product-card {
        flex: 1 1 12rem;
    }

    main {
        width: 98%;
        margin: 0 auto;
    }
}
</style>
