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
          <p class="head-phone-number"> <span>{{ $t("networkShop") }}</span>
             <span>+998 (99) 329-14-04</span></p>
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
    </header>
    <!-- ==================== Navbar section ===================== -->
    <nav :class="{ navbar: navActiveH, navOpen: isNavbarH }">
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
                  <ul class="drop-down1">
                    <li v-for="k in categorH" :key="k"
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
          <p class="head-phone-number"> <span>{{ $t("networkShop") }}</span>
             <span>+998 (99) 329-14-04</span></p>
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
              <nuxt-link to="/zoom">{{ $t("lan4") }}</nuxt-link>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      // For style
      navActiveH: true,
      isNavbarH: false,
      // language
      classLan: false,
      lan: "uz",
      // categor and Product from Server
      categorH: {},
    };
  },
  methods: {
    navbarAdd() {
      this.isNavbarH = true;
    },
    navbarRemove() {
      this.isNavbarH = false;
    },
    selectLan() {
      this.classLan = !this.classLan;
    },
  },
  async mounted() {
    let categor = await this.$axios.$get(
      "http://mechta-posuda.uz:3000/api/category"
    );
    this.categorH = categor;

    // const nav = document.querySelector(".navbar");
    // const burger = document.querySelector(".burger");
    // const links = nav.querySelectorAll("a");

    // burger.addEventListener("click", () => {
    //   nav.classList.toggle("nav-open");
    //   burger.classList.toggle("toggle");
    // });

    // links.forEach((link) => {
    //   link.addEventListener("click", () => {
    //     nav.classList.toggle("nav-open");
    //     burger.classList.toggle("toggle");
    //   });
    // });
  },
};
</script>

<style lang="scss" scoped>
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
    font-family: "Roboto Bold", sans-serif;
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
  .drop-down1 {
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
    .drop-down1 {
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

// responsive
/*
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  //  .container-pro{

  //  }
}

/*
      ##Device = Laptops, Desktops
      ##Screen = B/w 1025px to 1280px
    */

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
    .drop-down1 {
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
    .drop-down1 {
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
    .drop-down1 {
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
}
</style>