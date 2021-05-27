<template>
    <div>
        <section class="our-advantages">
            <div class="advantages">
                <h2>{{ $t("advantages") }}</h2>
                <ul>
                    <li>
                        <img src="@/assets/image/clients.svg" />
                        <span>{{ $t("clients") }}</span>
                    </li>
                    <li>
                        <img src="@/assets/image/pay.svg" />
                        <span>{{ $t("pay") }}</span>
                    </li>
                    <li>
                        <img src="@/assets/image/shops.svg" />
                        <span>{{ $t("shops") }}</span>
                    </li>
                    <li>
                        <img src="@/assets/image/trak.svg" />
                        <span>{{ $t("trak") }}</span>
                    </li>
                    <li>
                        <img src="@/assets/image/watch.svg" />
                        <span>{{ $t("services") }}</span>
                    </li>
                </ul>
            </div>
            <div class="advantages-img">
                <img src="@/assets/image/sasa.svg" />
            </div>
        </section>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.our-advantages {
    width: 100%;
    display: flex;
    margin: 20px 0;
}
.advantages {
    flex: 1 1 30rem;
    height: 399px;
    background-color: #148e3c;
    padding: 30px 0 50px 135px;
    h2 {
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 39px;
        line-height: 56px;
        color: #ffffff;
        margin-bottom: 30px;
    }
    li {
        display: flex;
        align-items: center;
        span {
            margin-left: 20px;
            font-family: "Roboto Bold", sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 21px;
            text-align: center;
            color: #ffffff;
        }
    }
    li:not(:last-child) {
        margin-bottom: 20px;
    }
}
.advantages-img {
    flex: 1 1 30rem;
    height: 399px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
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
