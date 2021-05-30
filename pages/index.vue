<template>
  <div>
    <!-- ================ Header section ================== -->
    <header>
      <nav class="header-nav">
        <div class="logo">
          <img src="@/assets/image/logo.svg" alt="" />
        </div>
        <div class="office-shop">
          <p>{{ $t("title") }}</p>
          <h3>{{ $t("slogan") }}</h3>
        </div>
        <div class="contact-language">
          <img
            class="header-phone-icon"
            src="@/assets/image/phone.svg"
            alt=""
          />
          <p class="head-phone-number">+998 (99) 329-14-04</p>

          <button @click="selectLan" class="select-language">
            <h6 v-if="$i18n.locale == 'uz'">uz</h6>
            <h6 v-if="$i18n.locale == 'ru'">ру</h6>
            <fa icon="angle-down" class="down-icon" />

            <ul v-if="classLan">
              <li>
                <a href="#" @click.prevent="$i18n.setLocale('uz')">UZ</a>
              </li>
              <li>
                <a href="#" @click.prevent="$i18n.setLocale('ru')">RU</a>
              </li>
            </ul>
          </button>
          <div class="header-bag-icon">
            <img src="@/assets/image/bag.svg" alt="" />
            <div class="header-count">
              <span>3</span>
            </div>
          </div>
        </div>
      </nav>
      <div class="burger" @click="navbarAdd()">
        <span class="line1"></span>
        <span class="line2"></span>
        <span class="line3"></span>
      </div>
      <!-- Header mobile select and burger end -->
    </header>
    <!-- ==================== Navbar section ===================== -->
    <nav :class="{ navbar: navActive, navOpen: isNavbar }">
      <div class="x-icon" @click="navbarRemove()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 460.775 460.775"
          style="enable-background: new 0 0 460.775 460.775"
          xml:space="preserve"
        >
          <path
            d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
          />
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
                          <a href="#2" class="link" @click="navbarRemove()">{{ k.nameUz }}</a>
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
          <li @click="navbarRemove()">
            <nuxt-link to="/">{{ $t("lan1") }}</nuxt-link>
          </li>
          <li @click="navbarRemove()">
            <nuxt-link to="/productAbout">{{ $t("lan2") }}</nuxt-link>
          </li>
          <li @click="navbarRemove()">
            <nuxt-link to="/about">{{ $t("lan3") }}</nuxt-link>
          </li>
          <li @click="navbarRemove()">
            <a href="#">{{ $t("lan4") }}</a>
          </li>
          <li @click="navbarRemove()">
            <a href="#">{{ $t("lan5") }}</a>
          </li>
          <li @click="navbarRemove()">
            <a href="#">{{ $t("lan6") }}</a>
          </li>
          <li @click="navbarRemove()">
            <a href="#">{{ $t("lan7") }}</a>
          </li>
          <li @click="navbarRemove()">
            <a href="#">{{ $t("lan8") }}</a>
          </li>
          <li @click="navbarRemove()">
            <a href="#">{{ $t("lan9") }}</a>
          </li>
          <li @click="navbarRemove()">
            <a href="#">{{ $t("lan10") }}</a>
          </li>
        </ul>
      </div>
    </nav>

    <!--================= Click video ================ -->
    <!-- <div class="click-video">
      <div class="removeVideo">
        <span></span>
        <span></span>
      </div>
      <video controls>
        <source src="@/assets/video/movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div> -->

    <!-- ========  Home section Slider  ================= -->

    <div class="slider">
      <div class="slides">
        <input class="input-slide" type="radio" name="radio-btn" id="radio1" />
        <input class="input-slide" type="radio" name="radio-btn" id="radio2" />
        <input class="input-slide" type="radio" name="radio-btn" id="radio3" />

        <div class="slide first">
          <span class="gradient"></span>
          <div class="slide-text">
            <h1>
              {{ $t("lan11") }} <br />
              {{ $t("lan12") }}
            </h1>
            <p>{{ $t("title") }}</p>
            <a href="/about" class="home-button"><span>{{ $t("lan13") }}</span></a>
          </div>
          <img src="@/assets/image/sasa.svg" alt="" />
        </div>

        <div class="slide">
          <span class="gradient"></span>
          <div class="slide-text">
            <h1>
              {{ $t("lan11") }} <br />
              {{ $t("lan12") }}
            </h1>
            <p>{{ $t("title") }}</p>
            <a href="/about" class="home-button"><span>{{ $t("lan13") }}</span></a>
          </div>
          <img src="@/assets/image/sasa.svg" alt="" />
        </div>

        <div class="slide">
          <span class="gradient"></span>
          <div class="slide-text">
            <h1>
               {{ $t("lan11") }} <br />
               {{ $t("lan12") }}
            </h1>
            <p>{{ $t("title") }}</p>
            <a href="/about" class="home-button"><span>{{ $t("lan13") }}</span></a>
          </div>
          <img src="@/assets/image/sasa.svg" alt="" />
        </div>
      </div>

      <div class="s-nagation-manual">
        <label for="radio1" id="btn1" :class="{sManualBtn: navActive, sClick: manualBtn1}" @click="manual1()"></label>
        <label for="radio2" id="btn2" :class="{sManualBtn: navActive, sClick: manualBtn2}" @click="manual2()"></label>
        <label for="radio3" id="btn3" :class="{sManualBtn: navActive, sClick: manualBtn3}" @click="manual3()"></label>
      </div>
    </div>

    <!-- =========== New Product section ================ -->
    <main :class="{allProduct: activeCategory}"> 
            <section  class="new-product">
                <h2 id="2">{{ name }}</h2>
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
                                        name: 'product-id___ru',
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

    <!-- ==================== Discount section ================= -->
    <Discount />
    <!-- ======================== Video section ================== -->
    <main>
      <section class="video-section">
        <h2 class="video-head">Видео обзоры</h2>
        <div class="video-inner">
          <div class="video-card">
            <span class="opacity-black"></span>
            <div class="video-play">
              <img class="paly-icon" src="@/assets/image/play.svg" alt="" />
            </div>
            <img class="video-card-img" src="@/assets/image/sasa.svg" alt="" />
          </div>
          <div class="video-card">
            <span class="opacity-black"></span>
            <div class="video-play">
              <img class="paly-icon" src="@/assets/image/play.svg" alt="" />
            </div>
            <img class="video-card-img" src="@/assets/image/sasa.svg" alt="" />
          </div>
        </div>
      </section>
    </main>

    <section class="our-advantages">
      <div class="advantages">
        <h2>Наши преимуществa</h2>
        <ul>
          <li>
            <img src="@/assets/image/clients.svg" alt="" />
            <span>Боле 3500 клиентов</span>
          </li>
          <li>
            <img src="@/assets/image/pay.svg" alt="" />
            <span>Форма оплата любоя</span>
          </li>
          <li>
            <img src="@/assets/image/shops.svg" alt="" />
            <span>Боле 3500 торговых</span>
          </li>
          <li>
            <img src="@/assets/image/trak.svg" alt="" />
            <span>Бесплатная доставка</span>
          </li>
          <li>
            <img src="@/assets/image/watch.svg" alt="" />
            <span>Ежедневное обслуживание</span>
          </li>
        </ul>
      </div>
      <div class="advantages-img">
        <img src="@/assets/image/sasa.svg" />
      </div>
    </section>

    <!-- ======================== Slider  Xit section ========================== -->
    <Slider />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // For style
      navActive: true,
      isNavbar: false,
      activeAll: false,
      activeCategory: true,
      isActive: false,
      manualBtn1: true,
      manualBtn2: false,
      manualBtn3: false,

      // language
      classLan: false,
      lan: "uz",
      // categor and Product from Server
      categor: {},
      product: {},
      all: {},
      name: "",
    };
  },
  methods: {
    navbarAdd() {
      this.isNavbar = true;
    },
    navbarRemove() {
      this.isNavbar = false;
    },
    selectLan() {
      this.classLan = !this.classLan;
    },
    manual1() {
      this.manualBtn1 = true;
      this.manualBtn2 = false;
      this.manualBtn3 = false;
    },
    manual2() {
      this.manualBtn1 = false;
      this.manualBtn2 = true;
      this.manualBtn3 = false;
    },
    manual3() {
      this.manualBtn1 = false;
      this.manualBtn2 = false;
      this.manualBtn3 = true;
    },
    changeCategory(categoryID, categoryName) {
      this.activeAll = true;
      this.activeCategory = false;
      this.isActive = true;
      this.name = categoryName;
      this.all = this.product.filter((item) => item.category === categoryID);
      console.log("Filter --->>", this.all);
    },
  },
  async mounted() {
    let catego = await this.$axios.$get(
      "http://mechta-posuda.uz:3000/api/category"
    );
    this.categor = catego;

    let item = await this.$axios.$get(
      "http://mechta-posuda.uz:3000/api/product"
    );
    this.product = item;
  },
};
</script>

<style lang="scss" scoped->
// =================== Fonts styles ====================

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

// ========== Header section ===========

header {
  background: #148e3c;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
}
.header-nav {
  width: 90%;
  height: 79px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border: 1px solid;
}
.logo {
  height: 60px;
}
.office-shop {
  // border: 1px solid;
  p {
    font-family: "Roboto", sans-serif;
    color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 110%;
  }
  h3 {
    font-family: "Lobster", cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    color: #e7ea09;
    text-align: center;
  }
}
.contact-language {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header-phone-icon {
    margin-right: 20px;
  }
  .head-phone-number {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    margin-right: 20px;
  }
  .header-bag-icon {
    position: relative;
    .header-count {
      position: absolute;
      top: 0;
      right: 0;
      width: 13px;
      height: 13px;
      border-radius: 15px;
      background: #f7fa00;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        display: block;
        color: black;
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
}
.burger {
  display: none;
  cursor: pointer;
}
// ==== Header change language button ====
button.select-language {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  margin-right: 10px;
  position: relative;
  color: #fff;
  font-size: 24px;
  letter-spacing: 1px;
  cursor: pointer;
  .down-icon {
    margin-left: 8px;
    color: #e7ea09;
  }
  ul {
    position: absolute;
    width: 60px;
    border-radius: 3px;
    list-style-type: none;
    left: 0;
    top: 25px;
    padding-left: 0px;
    margin-bottom: 0px;
    background-color: #fff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    li {
      padding: 5px 10px 5px 3px;
      transition: all 0.5s ease;
      a {
        color: rgb(85, 82, 82);
        font-size: 16px;
      }
      &:hover {
        background-color: #148e3c;
        a {
          color: #fff;
        }
      }
    }
  }
}
// ================ NAvbar section =============
.navbar {
  background-color: #ffffff;
  position: relative;
  margin-top: 79px;
}
.category-select {
  display: flex;
  flex: 1 1 10rem;
  margin-right: 40px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
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
          color: #148e3c !important;
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
        font-family: "Roboto", sans-serif;
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

.x-icon {
  position: absolute;
  top: 5%;
  height: 25px;
  right: 2%;
  width: 46px;
  svg {
    width: 100%;
    height: 100%;
  }
}
#Capa_1 {
  fill: #fff;
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
.nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 5 1 100rem;

  li {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    a {
      color: #666666;
    }
  }
}

// ============= Home section Slider galery =================

.slider {
  margin: 0 auto;
  width: 100%;
  height: 551px;
  overflow: hidden;
  position: relative;
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
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 67px;
    margin-bottom: 10px;
  }
  p {
    font-family: "Roboto", sans-serif;
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
    font-family: "Roboto", sans-serif;
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
  bottom: 8%;
  transform: translate(-50%, 0);
  z-index: 1;
}
.sManualBtn {
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: #fff;
  border-radius: 10px;
  cursor: pointer;
}
.sClick {
  background: #f7fa00;
}
.sManualBtn:not(:last-child) {
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

// center
main {
  width: 90%;
  margin: 0 auto;
}

// ============= New Product section =================
.allProduct {
  display: none;
}
.new-product {
  margin: 20px 0;
  h2 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
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

// =========== Product discount Slider section ===========
.discount {
  background-color: #148e3c;
  .discount-inner {
    display: flex;
    flex-direction: row;
  }
  .discount-slider {
    width: 75%;
  }
}
// Order card
.order-card {
  padding: 50px 16px;
  background-color: #fff;
  width: 274px;
  height: 354px;
  margin: 12px;
  .order-card-in {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px;
    h4 {
      font-family: "Roboto Bold", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 23px;
      text-align: center;
      color: #000000;
    }
    .logo {
      height: 60px;
    }
    p {
      font-family: "Roboto Bold", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #000000;
    }
    .input-order {
      width: 100%;
      height: 45px;
      padding: 0 15px;
      margin-bottom: 20px;
      outline: none;
      font-family: "Roboto Bold", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
      border-radius: 3px;
      border: 2px solid #148e3c;
      display: block;
    }
    button {
      width: 100%;
      height: 45px;
      outline: none;
      border: none;
      background-color: #148e3c;
      border-radius: 3px;
      color: #ffffff;
      font-family: "Roboto Bold", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
    }
  }
}

// ================= Click Video ==================
.click-video {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: rgba($color: #000000, $alpha: 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  transition: all 1s;
  video {
    outline: none;
    border: none;
    border-radius: 5px;
    width: 36%;
    .logo {
      height: 60px;
    }
    height: 350px;
  }
}
.videoNotSee {
  visibility: hidden;
}
.videoSee {
  visibility: unset;
}
.removeVideo {
  position: absolute;
  top: 5%;
  right: 5%;
  cursor: pointer;
  span {
    display: block;
    width: 36px;
    height: 5px;
    margin: 5px;
    border-radius: 3px;
    background-color: #ffffff;
  }
  span:nth-child(1) {
    transform: rotateZ(45deg) translateY(156%);
  }
  span:nth-child(2) {
    transform: rotateZ(-45deg) translateY(-144%);
  }
}
// ================= Video section ==================
.video-section {
  padding-top: 100px;
  padding-bottom: 79px;
  .video-head {
    font-family: "Roboto Bold", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    color: #323232;
    margin-bottom: 34px;
  }
}
.video-inner {
  display: flex;
  flex-wrap: wrap;
}

.video-card {
  flex: 1 1 30rem;
  position: relative;
  height: 347px;
  margin: 0 10px 10px 10px;

  .opacity-black {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba($color: #000000, $alpha: 0.3);
    z-index: 2;
  }
  .video-play {
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85px;
    height: 85px;
    border-radius: 50%;
    border: 3px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
  }
  .video-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

// ================ Our advantages section =============
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

// =================================================================================================
// responsive
@media (min-width: 1281px) {
}

@media (min-width: 1025px) and (max-width: 1280px) {
  // =============== header section ===================
  .header-nav {
    width: 95%;
  }
  .logo {
    height: 48px;
    img {
      width: 150px;
    }
  }
  .office-shop {
    p {
      font-size: 16px;
    }
    h3 {
      font-size: 22px;
    }
  }

  .contact-language {
    .header-phone-icon {
      width: 15px;
    }
    .head-phone-number {
      font-size: 16px;
    }
    select {
      font-size: 16px;
    }
    .header-bag-icon {
      img {
        width: 27px;
      }
    }
  }

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
  main {
    width: 95%;
  }
  // =============== width: 230px;header section ===================
  header {
    // position: relative;
    .office-shop {
      display: none;
    }
  }
  .header-nav {
    width: 95%;
  }
  .logo {
    height: 48px;
    img {
      width: 150px;
    }
  }
  .office-shop {
    margin-bottom: 15px;
    p {
      font-size: 16px;
    }
    h3 {
      font-size: 22px;
      text-align: left;
    }
  }

  .contact-language {
    margin-right: 66px;
    .header-phone-icon {
      width: 15px;
    }
    .head-phone-number {
      font-size: 16px;
    }
    select {
      font-size: 16px;
    }
    .header-bag-icon {
      img {
        width: 27px;
      }
    }
  }

  .burger {
    display: block;
    position: absolute;
    top: 37%;
    right: 5%;
    z-index: 14;
  }
  .burger span {
    padding: 1.5px 13px;
    background: #fff;
    margin: 3px 0px;
    border-radius: 5px;
    display: block;
    transition: all 0.5s ease;
  }
  .navbar {
    background: #148e3c;
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100vh;
    transition: transform 1s ease;
    z-index: 5;
    margin-top: 0px;
  }
  .navbar-inner {
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    .office-shop {
      display: block;
      p {
        line-height: 22px;
      }
    }
  }
  // ====== category ========
  .category-select {
    color: #fff;
    .drop-down {
      background-color: rgba($color: #fff, $alpha: 1);
      li {
        &:hover {
          background-color: rgba($color: #148e3c, $alpha: 0.9);
          .link {
            color: #fff !important;
          }
        }
        .link {
          color: #148e3c !important;
        }
      }
    }
  }
  // ====== category end ========
  .nav-link {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    li {
      width: 100%;
      height: 30px;
      border-bottom: 1px solid #077507;
      cursor: pointer;
      a {
        color: white;
        font-size: 18px;
      }
    }
    li:nth-child(1) a {
      color: #e7ea09;
    }
  }

  .nav-link a {
    color: white;
    font-size: 18px;
  }
  .navOpen {
    transform: translateX(-100%);
  }
  .toggle .line1 {
    transform: rotateZ(45deg) translateY(300%);
    background: #ffffff;
  }
  .toggle .line2 {
    opacity: 0;
  }
  .toggle .line3 {
    transform: rotateZ(-45deg) translateY(-300%);
    background: #ffffff;
  }

  //================== Navbar Section ==============
  .nav-link li {
    font-size: 14px;
  }
  // =============== home slider section ==================
  .slider {
    height: 437px;
    margin-top: 76px;
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
  // .s-nagation-manual {
  //   bottom: 13%;
  // }
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
  // =============== width: 230px;header section ===================
  header {
    // position: relative;
    .office-shop {
      display: none;
    }
  }
  .header-nav {
    width: 95%;
  }
  .logo {
    height: 48px;
    img {
      width: 137px;
    }
  }
  .office-shop {
    margin-bottom: 15px;
    p {
      font-size: 16px;
    }
    h3 {
      font-size: 22px;
      text-align: left;
    }
  }

  .contact-language {
    margin-right: 66px;
    .header-phone-icon {
      width: 12px;
      margin-right: 10px;
    }
    .head-phone-number {
      font-size: 12px;
      margin-right: 10px;
    }
    select {
      font-size: 12px;
      margin-right: 10px;
    }
    .header-bag-icon {
      img {
        width: 27px;
      }
    }
  }

  .burger {
    display: block;
    position: absolute;
    top: 37%;
    right: 5%;
    z-index: 14;
  }
  .burger span {
    padding: 1.5px 13px;
    background: #fff;
    margin: 3px 0px;
    border-radius: 5px;
    display: block;
    transition: all 0.5s ease;
  }
  .navbar {
    background: #148e3c;
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100vh;
    transition: transform 1s ease;
    z-index: 5;
    margin-top: 0px;
  }
  .x-icon {
    display: flex;
  }
  .navbar-inner {
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    .office-shop {
      display: block;
      p {
        line-height: 22px;
      }
    }
  }
  // ====== category ========
  .category-select {
    color: #fff;
    .drop-down {
      background-color: rgba($color: #fff, $alpha: 1);
      li {
        &:hover {
          background-color: rgba($color: #148e3c, $alpha: 0.9);
          .link {
            color: #fff !important;
          }
        }
        .link {
          color: #148e3c !important;
        }
      }
    }
  }
  // ====== category end ========
  .nav-link {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    li {
      width: 100%;
      height: 30px;
      border-bottom: 1px solid #077507;
      cursor: pointer;
      a {
        color: white;
        font-size: 18px;
      }
    }
    li:nth-child(1) a {
      color: #e7ea09;
    }
  }

  .nav-link a {
    color: white;
    font-size: 18px;
  }
  .navOpen {
    transform: translateX(-100%);
  }
  .toggle .line1 {
    transform: rotateZ(45deg) translateY(300%);
    background: #ffffff;
  }
  .toggle .line2 {
    opacity: 0;
  }
  .toggle .line3 {
    transform: rotateZ(-45deg) translateY(-300%);
    background: #ffffff;
  }

  //================== Navbar Section ==============
  .nav-link li {
    font-size: 14px;
  }
  // =============== home slider section ==================
  .slider {
    height: 296px;
    margin-top: 76px;
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
  // .s-nagation-manual {
  //   bottom: 37%;
  // }
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
  // =============== width: 230px;header section ===================
  header {
    // position: relative;
    .office-shop {
      display: none;
    }
    button.select-language {
      margin-right: -10px;
      z-index: 2;
    }
    .header-phone-icon,
    .head-phone-number,
    .header-bag-icon {
      display: none;
    }
  }
  .header-nav {
    width: 95%;
  }
  .logo {
    height: 48px;
    img {
      width: 137px;
    }
  }
  .office-shop {
    margin-bottom: 15px;
    p {
      font-size: 15px;
    }
    h3 {
      font-size: 22px;
      text-align: left;
    }
  }

  .contact-language {
    margin-right: 66px;
    .header-phone-icon {
      width: 12px;
      margin-right: 10px;
    }
    .head-phone-number {
      font-size: 12px;
      margin-right: 10px;
    }
    select {
      font-size: 12px;
      margin-right: 10px;
    }
    .header-bag-icon {
      img {
        width: 27px;
      }
    }
  }

  .burger {
    display: block;
    position: absolute;
    top: 37%;
    right: 5%;
    z-index: 4;
  }
  .burger span {
    padding: 1.5px 13px;
    background: #fff;
    margin: 3px 0px;
    border-radius: 5px;
    display: block;
    transition: all 0.5s ease;
  }
  .navbar {
    background: #148e3c;
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100vh;
    transition: transform 1s ease;
    z-index: 5;
    margin-top: 0px;
  }
  .navbar-inner {
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    .office-shop {
      display: block;
      p {
        line-height: 22px;
      }
    }
    .contact-language {
      display: flex;
    }
  }
  // ====== category ========
  .category-select {
    color: #fff;
    .drop-down {
      background-color: rgba($color: #fff, $alpha: 1);
      li {
        &:hover {
          background-color: rgba($color: #148e3c, $alpha: 0.9);
          .link {
            color: #fff !important;
          }
        }
        .link {
          color: #148e3c !important;
        }
      }
    }
  }
  // ====== category end ========
  .nav-link {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    li {
      width: 100%;
      height: 30px;
      border-bottom: 1px solid #077507;
      cursor: pointer;
      a {
        color: white;
        font-size: 18px;
      }
    }
    li:nth-child(1) a {
      color: #e7ea09;
    }
  }

  .nav-link a {
    color: white;
    font-size: 18px;
  }
  .navOpen {
    transform: translateX(-100%);
  }
  .toggle .line1 {
    transform: rotateZ(45deg) translateY(300%);
    background: #ffffff;
  }
  .toggle .line2 {
    opacity: 0;
  }
  .toggle .line3 {
    transform: rotateZ(-45deg) translateY(-300%);
    background: #ffffff;
  }

  //================== Navbar Section ==============
  .nav-link li {
    font-size: 14px;
  }
  // =============== home slider section ==================
  .slider {
    height: 201px;
    margin-top: 76px;
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
  // .s-nagation-manual {
  //   bottom: 53%;
  // }
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
}
</style>