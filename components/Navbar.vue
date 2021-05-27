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
                    <select name="#" id="#">
                        <option value="#">uz</option>
                        <option value="#">ру</option>
                    </select>
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
    </div>
</template>

<script>
export default {};
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
// ================== Responsive ========================

////// ================  header && navbar media ==============

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
        font-size: 12px;
    }
}

/*
      ##Device = Tablets, Ipads (portrait)
      ##Screen = B/w 768px to 1024px
    */

@media (min-width: 768px) and (max-width: 1024px) {
    // =============== width: 230px;header section ===================
    header {
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
        // display: none;
        p {
            font-size: 16px;
        }
        h3 {
            font-size: 22px;
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
    //================== Navbar Section ==============
    .nav-link li {
        font-size: 14px;
    }
    .navbar {
        background: #148e3c;
        position: fixed;
        top: 0;
        left: 100%;
        width: 100%;
        height: 100vh;
        transition: transform 1s ease;
        z-index: 3;
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
            display: block !important;
            p {
                line-height: 22px;
            }
        }
    }
    .category-select {
        color: #fff !important;
    }
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
    .nav-open {
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
    // =============== width: 230px;header section ===================
    header {
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
        // display: none;
        p {
            font-size: 16px;
        }
        h3 {
            font-size: 22px;
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
    //================== Navbar Section ==============
    .nav-link li {
        font-size: 14px;
    }
    .navbar {
        background: #148e3c;
        position: fixed;
        top: 0;
        left: 100%;
        width: 100%;
        height: 100vh;
        transition: transform 1s ease;
        z-index: 3;
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
            display: block !important;
            p {
                line-height: 22px;
            }
        }
    }
    .category-select {
        color: #fff !important;
    }
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
    .nav-open {
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
    // =============== width: 230px;header section ===================
    header {
        .office-shop {
            display: none;
        }
        .contact-language {
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
        p {
            font-size: 16px;
        }
        h3 {
            font-size: 22px;
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
    .mobile-select {
        display: block !important;
        position: absolute;
        top: 37%;
        right: 15%;
        z-index: 1;
        border: none;
        outline: none;
        background: transparent;
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        color: #ffffff;
        padding: 0 8px;
        option {
            color: #ffffff;
            background-color: #148e3c;
            border: none;
            outline: none;
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
        z-index: 3;
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
            display: block !important;
            p {
                line-height: 22px;
            }
        }
        .contact-language {
            display: flex;
        }
    }
    .category-select {
        color: #fff !important;
    }
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
                color: white !important;
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
    .nav-open {
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
        font-size: 13px;
    }
}
</style>
