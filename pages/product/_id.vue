<template>
    <div :class="{ body: isBody }">
        <!-- Full cover order click -->
        <div
            :class="{ fullCover: active, orderActive: orderIsActive }"
            @click="orderRemove()"
        ></div>
        <!-- ==================== Order window ============================== -->

        <div :class="{ orderWindow: active, orderActive: orderIsActive }">
            <div class="order-inner">
                <div class="order-inner-in">
                    <div class="order-header">
                        <img src="@/assets/image/logo_green.svg" alt="" />
                        <p>Xarid qilish</p>
                    </div>
                    <div class="order-inputs">
                        <div class="form-input">
                            <label for="#">F.I.O</label>
                            <input
                                type="text"
                                placeholder="To'liq ismni kiriting"
                            />
                        </div>
                        <div class="form-input form-number">
                            <label for="#">Telefon raqam</label>
                            <input type="number" placeholder="Telefon raqam" />
                            <span class="number">+998</span>
                        </div>

                        <div class="form-input">
                            <label for="#">Viloyat</label>
                            <v-container fluid>
                                <v-row align="center">
                                    <v-col class="d-flex" cols="12" sm="6">
                                        <v-select
                                            :items="items"
                                            label="Outlined style"
                                            outlined
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <!-- <div class="custom-select">
                                <select class="select">
                                    <option value="#">Toshkent shahar</option>
                                    <option value="#">Toshkent viloyati</option>
                                    <option value="#">Andijon viloyati</option>
                                    <option value="#">Buxoro viloyati</option>
                                    <option value="#"
                                        >Surxondaryo viloyati</option
                                    >
                                    <option value="#"
                                        >Qashqadaryo viloyati</option
                                    >
                                    <option value="#">Xorazm viloyati</option>
                                    <option value="#">Namangan viloyati</option>
                                    <option value="#">Farg'ona viloyati</option>
                                    <option value="#"
                                        >Samarqand viloyati</option
                                    >
                                    <option value="#">Navoiy viloyati</option>
                                    <option value="#">Jizzax viloyati</option>
                                    <option value="#">Sirdaryo viloyati</option>
                                    <option value="#"
                                        >Qoraqalpoq Respublikasi</option
                                    >
                                </select>
                                <span class="custom-arrow"></span>
                            </div> -->
                        </div>
                        <div class="form-input">
                            <label for="#">Manzil</label>
                            <input type="text" placeholder="Manzil" />
                        </div>

                        <div class="form-checkbox">
                            <input type="checkbox" />
                            <span>Men hamma shartlarga roziman</span>
                        </div>
                    </div>
                    <button type="submit" class="order-button">
                        Buyurtmani tekshirish
                    </button>
                </div>
            </div>
        </div>

        <!-- ==================== Order window end ========================== -->
        <section class="product-info">
            <!-- ========================= Products Image ============================ -->
            <div class="pro-img-price">
                <div class="pro-img">
                    <span class="pro-img-type">
                        <span v-for="i of image" :key="i">
                            <img
                                :src="
                                    `http://server.mechta-posuda.uz:3000/${i.url}`
                                "
                                v-on:click="changeImg(i.url)"
                            />
                        </span>
                    </span>

                    <div>
                        <img
                            v-if="mainImg != null"
                            :src="
                                `http://server.mechta-posuda.uz:3000/${mainImg}`
                            "
                            alt="qozon"
                        />
                    </div>
                </div>
                <!-- ========================= Products Price ================================= -->
                <div class="pro-price">
                    <div class="price-info">
                        <h3>
                            <span v-if="product != null">{{
                                product.nameUz
                            }}</span>
                        </h3>
                        <p>
                            Размер:<span class="size" v-if="product != null">{{
                                product.size
                            }}</span>
                        </p>
                        <p>
                            Диаметр:<span
                                class="diameter"
                                v-if="product != null"
                                >{{ product.diametr }}</span
                            >
                        </p>
                        <h3 class="price" v-if="price != null">
                            {{ price }}
                        </h3>
                    </div>
                    <!-- =================== Buy section ========================= -->
                    <div class="buy">
                        <div class="sum-color">
                            <div class="sum">
                                <span>Количество:</span>
                                <div class="sum-btn">
                                    <button type="button" @click="remove()">
                                        -
                                    </button>
                                    <div>
                                        <span>{{ sum }}</span>
                                    </div>
                                    <button type="button" @click="add()">
                                        +
                                    </button>
                                </div>
                            </div>
                            <!-- =================== Color section ========================= -->
                            <div class="color">
                                <span>цвет:</span>
                                <div class="color-btn">
                                    <div
                                        :class="{
                                            border: active,
                                            rotate: rotateActive == item.id
                                        }"
                                        v-for="item in color"
                                        :key="item"
                                        @click="changeColor(item.img, item.id)"
                                    >
                                        <img :src="item.url" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ================= Order section ======================= -->
                        <div class="buy-btn">
                            <button type="button">
                                <span></span> В Корзину
                            </button>
                            <button type="button" @click="orderAdd()">
                                <span></span> Заказать В Один Клик
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ==================================== Description and Note section ================================= -->
        <section class="description-vs-note">
            <div class="tab">
                <div class="tab-btn">
                    <div id="note" class="note btn-active">
                        <span>Izoh</span>
                    </div>
                    <div id="character" class="character">
                        <span>Xarakteristika</span>
                    </div>
                </div>
                <div class="tab-content">
                    <!-- description default none-->
                    <p id="content-desc" class="content-desc content-none">
                        <span v-if="product != null">{{
                            product.descriptionUz
                        }}</span>
                    </p>
                    <!-- izoh -->
                    <p id="content-note" class="content-note">
                        <span v-if="product != null">{{
                            product.xarakterUz
                        }}</span>
                    </p>
                </div>
            </div>
        </section>
        <!-- ===================================== Similar Products section =================================== -->
        <main>
            <section class="new-product">
                <div class="new-product-in">
                    <div
                        class="product-card"
                        v-for="item of similarProduct"
                        :key="item"
                    >
                        <div class="card-img">
                            <div class="card-img-in">
                                <a href="#">
                                    <img
                                        :src="
                                            `http://server.mechta-posuda.uz:3000/${item.images[0].url}`
                                        "
                                        alt="qozon"
                                    />
                                </a>
                            </div>
                        </div>
                        <div class="card-text">
                            <p class="info-pro">
                                {{ item.nameUz }}
                            </p>
                            <span>Seriya granit</span>
                            <div class="price-savat">
                                <p class="price">{{ item.price }} Сум</p>
                                <button type="button">В Корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // style
            items: ["Foo", "Bar", "Fizz", "Buzz"],
            active: true,
            rotateActive: 0,
            orderIsActive: false,
            isBody: true,
            // api dan kelayotgan ma'lumotlar
            product: null,
            similarProduct: null,
            image: null,
            mainImg: "",
            mainImg1: "",
            mainImg2: "",
            mainImg3: "",
            price: 0,
            staticPrice: 0,
            sum: 1,
            color: [
                {
                    id: 1,
                    img: "",
                    url:
                        "http://server.mechta-posuda.uz:3000/uploads/colors/1592845626501-granit.jpg"
                },
                {
                    id: 2,
                    img: "",
                    url:
                        "http://server.mechta-posuda.uz:3000/uploads/colors/1592825362765-granit_brown.jpg"
                },
                {
                    id: 3,
                    img: "",
                    url:
                        "http://server.mechta-posuda.uz:3000/uploads/colors/1592825694856-granit_ultra.jpg"
                }
            ]
        };
    },

    methods: {
        // OrderClick
        orderAdd() {
            this.orderIsActive = true;
        },
        orderRemove() {
            this.orderIsActive = false;
        },
        // change img
        changeImg(url) {
            this.mainImg = url;
        },
        changeColor(url, rotate) {
            this.mainImg = url;
            this.rotateActive = rotate;
        },
        // calculation product
        add() {
            this.price = this.price + this.staticPrice;
            this.sum++;
        },
        remove() {
            this.price = this.price - this.staticPrice;
            this.sum--;
        }
    },
    async mounted() {
        let response = await this.$axios.$get(
            `/product/` + this.$route.params.id
        );
        this.product = response.getProduct;
        this.similarProduct = response.similarProducts;
        this.image = response.getProduct.images;
        this.price = response.getProduct.price;
        this.staticPrice = response.getProduct.price;
        this.mainImg = this.image[0].url;
        this.mainImg1 = this.image[0].url;
        this.mainImg2 = this.image[1].url;
        this.mainImg3 = this.image[2].url;

        this.color[0].img = this.mainImg1;
        this.color[1].img = this.mainImg2;
        this.color[2].img = this.mainImg3;
        console.log("res images-->", this.image);
        console.log("res similar-->", this.similarProduct);

        // ============ Tab content ================

        const note = document.getElementById("note");
        const character = document.getElementById("character");
        const characterContent = document.getElementById("content-desc");
        const noteContent = document.getElementById("content-note");

        character.addEventListener("click", () => {
            character.classList.add("btn-active");
            note.classList.remove("btn-active");
            noteContent.classList.add("content-none");
            characterContent.classList.remove("content-none");
        });

        note.addEventListener("click", () => {
            character.classList.remove("btn-active");
            note.classList.add("btn-active");
            noteContent.classList.remove("content-none");
            characterContent.classList.add("content-none");
        });
    }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
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

// ----------------- Full cover --------------------
.fullCover {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    background-color: rgba($color: #148e3c, $alpha: 0.5);
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
}
// ================= Order Window ===================
.orderWindow {
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 70%;
    height: 75%;
    display: none;
}
.order-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.order-inner-in {
    width: 95%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.orderActive {
    display: block;
}
.order-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 28%;
    }
    p {
        font-size: 24px;
    }
}
.order-inputs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
}
.form-input {
    flex: 1 1 20rem;
    margin: 10px;
    ::placeholder {
        font-size: 15px;
        letter-spacing: 1px;
        color: rgba($color: #000000, $alpha: 0.3);
    }
    label {
        display: block;
        margin-bottom: 8px;
        color: rgba($color: #000000, $alpha: 0.5);
    }
    input,
    select {
        padding: 0 20px;
        border-radius: 5px;
        outline: none;
        border: 1px solid rgba($color: #000000, $alpha: 0.2);
        height: 55px;
        width: 100%;
        background-color: #fff;
    }
    .select {
        appearance: none;
        font-size: 15px;
        option {
            font-size: 20px;
            overflow-y: scroll;
            &:hover {
                background-color: blue;
            }
        }
    }
}
.form-number {
    position: relative;
    input {
        padding: 0 65px;
    }
    .number {
        display: block;
        position: absolute;
        top: 55%;
        left: 3%;
    }
}
// ================= Custom select ====================
.custom-select {
    position: relative;
}
.custom-arrow {
    position: absolute;
    top: 5%;
    right: 1%;
    font-size: 20px;
    display: block;
    background-color: #fff;
    height: 90%;
    width: 3rem;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    pointer-events: none;
}
.custom-arrow::before,
.custom-arrow::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;

    left: 50%;
    transform: translate(-50%, -50%);
}
.custom-arrow::after {
    border-left: 0.55em solid transparent;
    border-right: 0.55em solid transparent;
    border-top: 0.55em solid #000;

    top: 60%;
}
// ================= Custom select end ====================
.form-checkbox {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 10px;
    input {
        width: 18px;
        height: 16px;
    }
    span {
        margin-left: 5px;
        color: #0a8aad;
        font-size: 12px;
    }
}
.order-button {
    display: block;
    width: 50%;
    height: 60px;
    margin: 0 auto;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: #148e3c;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
} // -------- order window end ------------
// Product info img
.pro-img-price {
    display: flex;
}
.pro-img {
    flex: 1 1 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    div {
        width: 300px;
        height: 300px;
    }
    img {
        width: 100%;
        height: 100%;
    }
    .pro-img-type {
        position: absolute;
        top: 0;
        left: 5px;
        span {
            display: block;
            width: 56px;
            height: 56px;
            border: 1px solid #148e3c;
            margin: 3px;
        }
    }
}

// =============== Product info price ===================
.pro-price {
    flex: 2 1 35rem;
}
.pro-price {
    display: flex;
    flex-direction: column;
}
//======================== info small================================
.price-info {
    flex: 1 1 10rem;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h3 {
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }
    .price {
        color: #148e3c;
    }
    p {
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 16px;
        color: #666666;
    }

    .size {
        margin-left: 56px;
    }
    .diameter {
        margin-left: 30px;
    }
}
//========================== Buy section =============================================
.buy {
    flex: 1 1 10rem;
    border-top: 1px solid rgba($color: #000000, $alpha: 0.2);
}
.sum-color {
    display: flex;
}
.sum {
    margin-right: 20px;
    span {
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 16px;
        color: #666666;
    }
    .sum-btn {
        display: flex;
        align-items: center;
        div {
            width: 70px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 3px;
            border: 1px solid;
            margin: 0 5px;
        }
        button {
            border: none;
            outline: none;
            border-radius: 3px;
            background-color: #afafaf;
            width: 25px;
            height: 36px;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            font-family: "Roboto Bold", sans-serif;
        }
    }
}
.color {
    span {
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 16px;
        color: #666666;
    }

    .rotate {
        transform: rotate(90deg);
        border: 2px solid #148e3c;
        padding: 2px;
        width: 39px !important;
        height: 39px !important;
    }

    .color-btn {
        display: flex;
        .border {
            cursor: pointer;
            margin: 2px;
            width: 39px;
            height: 39px;
            transition: transform 0.8s ease-in-out;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}

.buy-btn {
    margin-top: 10px;
    button {
        border-radius: 2px;
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: #148e3c;
        background-color: #fff;
        border: none;
        outline: none;
        border: 2px solid #148e3c;
    }
    button:nth-child(1) {
        width: 132px;
        height: 38px;
        margin-right: 17px;
    }
    button:nth-child(2) {
        width: 232px;
        height: 38px;
    }
}

// =================== Tab section ======================
.description-vs-note {
    width: 88%;
    margin: 0 auto;
}
.tab {
    border: 1px solid #148e3c;
    border-radius: 5px;
}
.tab-btn {
    border-bottom: 1px solid #148e3c;
    height: 35px;
    display: flex;
    justify-content: flex-end;
    div {
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #148e3c;
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        cursor: pointer;
        transition: all 0.5s ease;
    }
    .note {
        width: 100px;
        border-left: 1px solid #148e3c;
    }
    .character {
        width: 200px;
        border-left: 1px solid #148e3c;
    }
}

.tab-content {
    min-height: 150px;
    padding: 10px;
    p {
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
    }
}

.btn-active {
    background-color: rgba($color: #148e3c, $alpha: 0.8);
    span {
        color: #fff;
    }
}

.content-none {
    display: none;
}
// center
main {
    width: 90%;
    margin: 0 auto;
}
// INfo cards
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
    // Product image price
    .pro-img div {
        width: 250px;
        height: 250px;
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
    // Product image price
    .pro-img div {
        width: 250px;
        height: 250px;
    }

    .pro-price {
        flex: 1 1 20rem;
    }

    .buy-btn {
        button:nth-child(1) {
            width: 112px;
            height: 36px;
        }
        button:nth-child(2) {
            width: 189px;
            height: 36px;
        }
    }
    // Order window
    .orderWindow {
        height: 95%;
    }
    .order-inner-in {
        height: 97%;
    }
    .form-input {
        margin: 7px;
        input,
        select {
            height: 46px;
        }
    }
    .order-button {
        width: 40%;
        height: 45px;
    }
}

@media (min-width: 481px) and (max-width: 767px) {
    // Product image price
    .pro-img-type {
        left: 27px;
    }
    .pro-img-price {
        flex-direction: column;
    }
    .pro-img div {
        width: 300px;
        height: 300px;
    }

    .pro-price {
        flex: 1 1 20rem;
        .price-info {
            padding: 0 30px;
        }
        .buy {
            padding: 0 30px;
        }
        .buy-btn {
            button:nth-child(1) {
                width: 112px;
                height: 36px;
            }
            button:nth-child(2) {
                width: 189px;
                height: 36px;
            }
        }
    }

    .product-card {
        flex: 1 1 12rem;
    }

    main {
        width: 98%;
        margin: 0 auto;
    }
    // Order window
    .orderWindow {
        height: 95%;
    }
    .order-inner-in {
        height: 97%;
        justify-content: space-around;
    }
    .order-header p {
        font-size: 18px;
    }
    .form-input {
        margin: 7px;
        input,
        select {
            height: 46px;
        }
    }
    .order-button {
        width: 40%;
        height: 45px;
        font-size: 16px;
    }
}

/*
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */
@media (min-width: 320px) and (max-width: 480px) {
    // Product image price
    .pro-img-type {
        left: 27px;
    }
    .pro-img-price {
        flex-direction: column;
    }
    .pro-img div {
        width: 215px;
        height: 215px;
    }

    .pro-price {
        flex: 1 1 20rem;
        .price-info {
            padding: 0 30px;
        }
        .buy {
            padding: 0 30px;
        }
        .buy-btn {
            button:nth-child(1) {
                width: 112px;
                height: 36px;
            }
            button:nth-child(2) {
                width: 189px;
                height: 36px;
            }
        }
    }

    .product-card {
        flex: 1 1 12rem;
    }

    main {
        width: 98%;
        margin: 0 auto;
    }
    // Order window
    .orderWindow {
        height: 95%;
    }
    .order-inner-in {
        height: 97%;
        justify-content: space-around;
    }
    .order-header p {
        font-size: 16px;
    }
    .form-input {
        margin: 7px;
        input,
        select {
            height: 39px;
        }
    }
    .order-button {
        width: 40%;
        height: 45px;
        font-size: 14px;
    }
}
</style>
