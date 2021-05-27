<template>
    <div :class="{transition: isActive}">
        <!-- ================== Navbar Section =================== -->
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
        <!-- ========  Home section Slider Components  ================= -->
        <HomeSlider />
         <main :class="{allProduct: activeCategory}"> 
            <section id="2" class="new-product">
                <h2>{{ name }}</h2>
                <div class="new-product-in">
                    <div class="product-card" v-for="j of all" :key="j">
                        <div class="card-img"> 
                            <div class="card-img-in">
                                <nuxt-link
                                    :to="{
                                        name: 'product-id___ru',
                                        params: { id: j._id }
                                    }"
                                >
                                    <img
                                        :src="
                                            `http://server.mechta-posuda.uz:3000/${j.images[0].url}`
                                        "
                                    />
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="card-text">
                            <p class="info-pro">
                                {{ j.nameUz }}
                            </p>
                            <span>{{ $t("lan15") }}</span>
                            <div class="price-savat">
                                <p class="price">{{ j.price }} Сум</p>
                                <button type="button">{{ $t("savat") }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <!-- =========== New Product section ================ -->
        <main :class="{allProduct: activeAll}"> 
            <section class="new-product">
                <h2>{{ $t("lan14") }}</h2>
                <div class="new-product-in">
                    <div class="product-card" v-for="i of product" :key="i">
                        <div class="card-img">
                            <div class="card-img-in">
                                <nuxt-link
                                    :to="{
                                        name: 'product-id___uz',
                                        params: { id: i._id }
                                    }"
                                >
                                    <img
                                        :src="
                                            `http://server.mechta-posuda.uz:3000/${i.images[0].url}`
                                        "
                                    />
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="card-text">
                            <p class="info-pro">
                                {{ i.nameUz }}
                            </p>
                            <span>{{ $t("lan15") }}</span>
                            <div class="price-savat">
                                <p class="price">{{ i.price }} Сум</p>
                                <button type="button">{{ $t("savat") }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <!-- ============= Discount section ================ -->
        <Discount />
        <!-- ============= Video section ================ -->
        <Video />

        <!-- ============= Advantages section ================ -->
        <Advantages />
        <!-- Slider -->
        <Slider />
    </div>
</template>

<script>
export default {
    data(){
       return {
        // style 
           activeAll: false,
           activeCategory: true,
           isActive: false,

           categor: {},
           product: {},
           all: {},
           name: '',       
       }
    },
   methods: {
      changeCategory(categoryID, categoryName){
          this.activeAll = true;
          this.activeCategory = false;
          this.isActive = true;
          this.name = categoryName;
          this.all = this.product.filter(item => item.category === categoryID);
           console.log("Filter --->>",this.all);
      }
   },
    async mounted(){
        let catego = await this.$axios.$get(
            "http://mechta-posuda.uz:3000/api/category"
        );
        this.categor = catego;
         console.log(catego)

        let item = await this.$axios.$get(
            "http://mechta-posuda.uz:3000/api/product"
        );
        this.product = item;
    }
};
</script>

<style lang="scss">
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
.transition{
    transition: all 1s ease-in-out;
}
// center default | Don't delete.
main {
    width: 90%;
    margin: 0 auto;
}
// ================ NAvbar section =============
.navbar {
    background-color: #ffffff;
    margin-top: 79px;
}
.navbar-inner {
    width: 90%;
    height: 60px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .office-shop {
        display: none;
    }
    .contact-language {
        display: none;
    }
}
.category-select {
    display: flex;
    flex: 1 1 10rem;
    margin-right: 40px;
    font-family: "Roboto Bold", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #148e3c;
    position: relative;
    cursor: pointer;
    .drop-down {
        border-radius: 5px;
        position: absolute;
        top: 20px;
        left: 0;
        display: none;
        z-index: 10;
        background-color: rgba($color: #148e3c, $alpha: 0.7);
        li {
            padding: 4px 16px;
            border-bottom: 0.5px solid rgba($color: #000000, $alpha: 0.5);
            transition: all 0.5s ease-in-out;
            &:hover {
                background-color: rgba($color: #fff, $alpha: 0.9);
                .link {
                    color: #148e3c!important;
                }
            }
            &:last-child {
                border-bottom: none;
            }
            .link {
                display: block;
                width: 100%;
                height: 100%;
                color: #fff !important;
                font-size: 16px;
                font-weight: 400;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                    "Helvetica Neue", sans-serif;
            }
        }
    }
    &:hover {
        .drop-down {
            display: block;
        }
    }
}
.category-icon {
    margin-left: 10px;
    font-size: 20px;
}

.nav-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 5 1 100rem;

    li {
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 19px;
        a {
            color: #666666;
        }
    }
}

// ============= New Product section =================
.allProduct{
    display: none;
}
.new-product {
    margin: 20px 0;
    h2 {
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: calc(100% + 34px);
        line-height: 56px;
        color: #323232;
        margin-bottom: 40px;
    }
}

.new-product-in {
    display: flex;
    flex-wrap: wrap;
}

.product-card {
    flex: 1 1 15rem;
    background-color: #ffffff;
    margin: 12px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    position: relative;
    transition: all 0.5s ease;
    .card-img {
        .card-img-in {
            width: 199px;
            height: 199px;
            margin: 0 auto;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    &:hover {
        transform: translateY(-8px);
    }
}

.card-text {
    margin: 10px;
    .info-pro {
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        height: 58px;
        color: #323232;
        margin-bottom: 9px;
    }
    span {
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: #666666;
    }
    .price-savat {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
    }
    .price {
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #148e3c;
    }
    button {
        border: 2px solid #148e3c;
        color: #148e3c;
        outline: none;
        background: #fff;
        width: 99px;
        height: 32px;
        border-radius: 2px;
    }
}

.item-a {
    .product-card {
        width: 270px;
        padding: 2px;
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
    //================== Navbar Section ==============
    .nav-link li {
        font-size: 14px;
    }
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
    //================== Navbar Section ==============
    .nav-link li {
        font-size: 14px;
    }
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
