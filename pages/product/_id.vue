<template>
  <div :class="{ body: isBody }">
    <Header />
    <!-- Full cover order click -->
    <div
      :class="{ fullCover: active, orderActive: orderIsActive }"
      @click="orderRemove()"
    >
      <div class="x-icon-black" @click="orderRemove()">
        <span class="line line1"></span>
        <span class="line line2"></span>
      </div>
    </div>
    <!-- ==================== Order window ============================== -->

    <div :class="{ orderWindow: active, orderActive: orderIsActive }">
      <div :class="{ orderInner: active }">
        <div :class="{ orderSuccess: successOrder }">Zakaz junatildi</div>
        <div :class="{ orderInner: active, orderSend: orderInActive }">
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
                  v-model="form.name"
                  autofocus=""
                />
                <div class="form-error">
                  <span
                    v-if="!$v.form.name.required && $v.form.name.$dirty"
                    class="is-danger"
                    >Ism kirgizilmagan</span
                  >
                </div>
              </div>
              <div class="form-input form-number">
                <label for="#">Telefon raqam</label>
                <div class="form-num-in">
                  <span class="number">+998</span>
                  <input
                    type="number"
                    placeholder="Telefon raqam"
                    v-model="form.phone"
                    autofocus=""
                  />
                </div>
                <div class="form-error">
                  <span
                    v-if="!$v.form.phone.required && $v.form.phone.$dirty"
                    class="is-danger"
                    >Telefon raqam kirgizilmagan</span
                  >
                  <div class="is-danger" v-if="!$v.form.phone.minLength">
                    Telefon raqam to'liq emas.
                  </div>
                </div>
              </div>

              <div class="form-input">
                <label for="#">Viloyat</label>

                <div class="custom-select">
                  <select class="select" v-model="form.region" autofocus="">
                    <option value="Toshkent shahar">Toshkent shahar</option>
                    <option value="Toshkent viloyati">Toshkent viloyati</option>
                    <option value="Andijon viloyati">Andijon viloyati</option>
                    <option value="Buxoro viloyati">Buxoro viloyati</option>
                    <option value="Surxondaryo viloyati">
                      Surxondaryo viloyati
                    </option>
                    <option value="Qashqadaryo viloyati">
                      Qashqadaryo viloyati
                    </option>
                    <option value="Xorazm viloyati">Xorazm viloyati</option>
                    <option value="Namangan viloyati">Namangan viloyati</option>
                    <option value="Farg'ona viloyati">Farg'ona viloyati</option>
                    <option value="Samarqand viloyati">
                      Samarqand viloyati
                    </option>
                    <option value="Navoiy viloyati">Navoiy viloyati</option>
                    <option value="Jizzax viloyati">Jizzax viloyati</option>
                    <option value="Sirdaryo viloyati">Sirdaryo viloyati</option>
                    <option value="Qoraqalpoq Respublikasi">
                      Qoraqalpoq Respublikasi
                    </option>
                  </select>
                  <span class="custom-arrow"></span>
                </div>
                <div class="form-error">
                  <span
                    v-if="!$v.form.region.required && $v.form.region.$dirty"
                    class="is-danger"
                    >Viloyat yozilmagan</span
                  >
                </div>
              </div>
              <div class="form-input">
                <label for="#">Manzil</label>
                <input
                  type="text"
                  placeholder="Manzil"
                  v-model="form.address"
                  autofocus=""
                />
                <div class="form-error">
                  <span
                    v-if="!$v.form.address.required && $v.form.address.$dirty"
                    class="is-danger"
                    >Manzil kirgizilmagan</span
                  >
                </div>
              </div>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" />
              <span>Men hamma shartlarga roziman</span>
            </div>
            <button type="submit" class="order-button" @click.prevent="submit">
              Buyurtmani tekshirish
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ==================== Order window end ========================== -->

    <!-- =========================== Product info =============================== -->
    <section class="product-info">
      <!-- ========================= Products Image ============================ -->
      <div class="pro-img-price">
        <div class="product-img">
          <ul class="list">
            <li v-for="(image, i) in imgs" :key="i">
              <img
                :class="i == index ? 'current' : ''"
                @click="imgClick(image.url, i)"
                :src="`http://server.mechta-posuda.uz:3000/${image.url}`"
              />
            </li>
          </ul>
          <!-- list mobil left -->
          <ul class="list-mobil-left">
            <li v-for="(image, i) in mobilImgs1" :key="i">
              <img
                :class="i == indexleft ? 'current-left' : ''"
                @click="imgClickLeft(image.url, i)"
                :src="`http://server.mechta-posuda.uz:3000/${image.url}`"
              />
            </li>
          </ul>
          <div class="pic">
            <img
              ref="img"
              @mousemove="imgMove($event)"
              :src="`http://server.mechta-posuda.uz:3000/${img}`"
            />
            <div ref="cover" class="cover"></div>
            <div
              :style="{
                'background-position': details.backgroundPosition,
                'background-image': `url('http://server.mechta-posuda.uz:3000/${img}')`,
              }"
              class="detail"
            ></div>
            <!-- <div class="cursor"></div> -->
          </div>
          <ul class="list-mobil-right">
            <li v-for="(image, i) in mobilImgs2" :key="i">
              <img
                :class="i == index ? 'current-right' : ''"
                @click="imgClick(image.url, i)"
                :src="`http://server.mechta-posuda.uz:3000/${image.url}`"
              />
            </li>
          </ul>
        </div>
        <!-- ========================= Products Price ================================= -->
        <div class="pro-price">
          <div class="price-info">
            <h3>
              <span v-if="product != null">{{ product.nameUz }}</span>
            </h3>
            <p>
              {{ $t("size")
              }}<span class="size" v-if="product != null">{{
                product.size
              }}</span>
            </p>
            <p>
              {{ $t("diameter")
              }}<span class="diameter" v-if="product != null">{{
                product.diametr
              }}</span>
            </p>
            <h3 class="price" v-if="price != null">
              {{ price }}
            </h3>
          </div>
          <!-- =================== Buy section ========================= -->
          <div class="buy">
            <div class="sum-color">
              <div class="sum">
                <span>{{ $t("num") }}</span>
                <div class="sum-btn">
                  <button type="button" @click="remove()">-</button>
                  <div>
                    <span>{{ sum }}</span>
                  </div>
                  <button type="button" @click="add()">+</button>
                </div>
              </div>
              <!-- =================== Color section ========================= -->
              <div class="color">
                <span>{{ $t("color") }}</span>
                <div class="color-btn">
                  <div
                    :class="{
                      border: active,
                      rotate: rotateActive == item.id,
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
              <button type="button"><span></span>{{ $t("savat") }}</button>
              <button type="button" @click="orderAdd()">
                <span></span> {{ $t("oneBuy") }}
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
            <span>{{ $t("note") }}</span>
          </div>
          <div id="character" class="character">
            <span> {{ $t("description") }}</span>
          </div>
        </div>
        <div class="tab-content">
          <!-- description default none-->
          <p id="content-desc" class="content-desc content-none">
            <span v-if="product != null">{{ product.descriptionUz }}</span>
          </p>
          <!-- izoh -->
          <p id="content-note" class="content-note">
            <span v-if="product != null">{{ product.xarakterUz }}</span>
          </p>
        </div>
      </div>
    </section>
    <!-- ===================================== Similar Products section =================================== -->
    <main>
      <section class="new-product">
        <div class="new-product-in">
          <div class="product-card" v-for="item of similarProduct" :key="item">
            <div class="card-img">
              <div class="card-img-in">
                <a href="#">
                  <img
                    :src="`http://server.mechta-posuda.uz:3000/${item.images[0].url}`"
                    alt="qozon"
                  />
                </a>
              </div>
            </div>
            <div class="card-text">
              <p class="info-pro">
                {{ item.nameUz }}
              </p>
              <span>{{ $t("lan15") }}</span>
              <div class="price-savat">
                <p class="price">{{ item.price }} Сум</p>
                <button type="button">{{ $t("savat") }}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      index: 0,
      indexleft: 0,
      img: "",
      details: {
        backroundImage: "",
        backgroundPosition: "",
      },
      // order
      form: {
        name: "",
        phone: "",
        region: "",
        address: "",
      },
      data: [
        {
          region: "",
          address: "",
          phone: "",
          name: "",
          totalNum: 0,
          totalPrice: 0,
          products: "",
          status: true,
        },
      ],
      // style +998946589699 Ilhom aka Programmer
      active: true,
      rotateActive: 0,
      orderIsActive: false,
      isBody: true,
      orderInActive: false,
      successOrder: true,
      // api dan kelayotgan ma'lumotlar
      product: null,
      similarProduct: null,
      imgs: {},
      mobilImgs1: {},
      mobilImgs2: {},
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
          url: "http://server.mechta-posuda.uz:3000/uploads/colors/1592845626501-granit.jpg",
        },
        {
          id: 2,
          img: "",
          url: "http://server.mechta-posuda.uz:3000/uploads/colors/1592825362765-granit_brown.jpg",
        },
        {
          id: 3,
          img: "",
          url: "http://server.mechta-posuda.uz:3000/uploads/colors/1592825694856-granit_ultra.jpg",
        },
      ],
    };
  },
  validations: {
    form: {
      name: {
        required,
      },
      phone: {
        required,
        minLength: minLength(9),
      },
      region: {
        required,
      },
      address: {
        required,
      },
    },
  },
  methods: {
    async submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.data.region = this.form.region;
        this.data.address = this.form.address;
        this.data.phone = this.form.phone;
        this.data.name = this.form.name;
        this.data.totalNum = this.sum;
        this.data.totalPrice = this.price;
        this.data.products = this.product;
        await this.$axios
          .post("http://mechta-posuda.uz:3000/api/orders", this.data)
          .then((response) => {
            console.log(response, this.data);
          })
          .catch((err) => {
            console.log(err);
          });
        this.orderInActive = true;
        this.successOrder = false;
      }
      console.log("form", this.data);
    },
    // OrderClick
    orderAdd() {
      this.orderIsActive = true;
    },
    orderRemove() {
      this.orderIsActive = false;

      this.form.name = "";
      this.form.phone = "";
      this.form.region = "";
      this.form.address = "";
      //this.orderInActive = true;
      this.successOrder = true;
      this.orderInActive = false;
    },
    // change color
    changeColor(url, rotate) {
      this.img = url;
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
    },
    // img lupa
    imgClick(image, index) {
      this.img = image;
      this.index = index;
    },
    imgClickLeft(image, index) {
      this.img = image;
      this.indexleft = index;
    },
    imgMove(e) {
      var vm = this;
      var x = e.clientX;
      var y = e.clientY;
      console.log(x, y);
      /* The distance between the picture frame and the browser */
      var cx = vm.$refs.img.getBoundingClientRect().left;
      var cy = vm.$refs.img.getBoundingClientRect().top;
      var tx = x - cx - 3;
      var ty = y - cy - 3;
      if (tx < 0) {
        tx = 0;
      }
      if (ty < 0) {
        ty = 0;
      }
      /* Display picture width-width of shadow frame */
      if (tx > 300) {
        tx = 300;
      }
      /* Display picture height-shade frame height */
      if (ty > 400) {
        ty = 400;
      }
      vm.$refs.cover.style.left = tx + "px";
      vm.$refs.cover.style.top = ty + "px";
      /* According to the percentage of the moving distance of the shadow frame in the box ------ the percentage of the moving distance of the corresponding projection frame in the big picture */
      /* tx,ty/The limit range of the shade frame */
      vm.details.backgroundPosition =
        (tx / 300) * 100 + "%" + (ty / 400) * 100 + "%";
    },
  },
  async mounted() {
    let response = await this.$axios.$get(`/product/` + this.$route.params.id);
    this.product = response.getProduct;
    this.similarProduct = response.similarProducts;
    this.imgs = response.getProduct.images;
    this.mobilImgs1 = this.imgs.slice(0, 5);
    this.mobilImgs2 = this.imgs.slice(5, this.imgs.length);
    console.log("images Imgs--->>", this.mobilImgs1);
    console.log("images Imgs2--->>", this.mobilImgs2);
    this.price = response.getProduct.price;
    this.staticPrice = response.getProduct.price;
    this.img = this.imgs[0].url;
    this.mainImg1 = this.imgs[0].url;
    this.mainImg2 = this.imgs[1].url;
    this.mainImg3 = this.imgs[2].url;

    this.color[0].img = this.mainImg1;
    this.color[1].img = this.mainImg2;
    this.color[2].img = this.mainImg3;

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

    //      const cursor = document.querySelector('.cursor');
    //      const pic = document.querySelector('.pic');
    //   cursor.addEventListener('mousemove', e => {
    //       cursor.setAttribute("style", "top: "+e.pageY+"px; left: "+e.pageX+"px;")
    //   })
  },
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
  z-index: 11;
  background-color: rgba($color: #148e3c, $alpha: 0.5);
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  .x-icon-black {
    position: fixed;
    top: 5%;
    right: 5%;
    z-index: 11;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover {
      .line {
        background: #fff;
      }
    }
    .line {
      width: 35px;
      height: 5px;
      border-radius: 5px;
      display: block;
      background: black;
    }
    .line1 {
      transform: rotateZ(45deg) translateY(85%);
    }
    .line2 {
      transform: rotateZ(-45deg) translateY(-78%);
    }
  }
}
// ================= Order Window ===================
.orderWindow {
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 12;
  width: 70%;
  height: 75%;
  display: none;
}
.orderInner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.orderSuccess {
  display: block;
  display: none;
}
.orderSend {
  display: none;
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
    top: 33%;
    left: 3%;
  }
}
.form-num-in {
  position: relative;
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
}
.form-error {
  margin-top: 7px;
  margin-left: 3px;
}
.is-danger {
  font-size: 12px;
  letter-spacing: 1px;
  color: red;
}
// -------- order window end ------------
// ==================== Product info section ===================
.product-info {
  margin-bottom: 15px;
}
//===================== Product info img =======================
.pro-img-price {
  display: flex;
}
.product-img {
  flex: 1 1 25rem;
  display: flex;
  position: relative;
  .pic {
    width: 400px;
    height: 400px;
    margin-left: 88px;
    position: relative;
    cursor: zoom-in;
    .cursor {
      width: 50px;
      height: 30px;
      background-color: rgba($color: #000000, $alpha: 0.5);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
    }
    .detail {
      position: absolute;
      top: 0;
      left: 444px;
      width: 400px;
      box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
      height: 400px;
      background-size: 900px 1100px;
      display: none;
      z-index: 3;
    }
    &:hover {
      .detail {
        display: block;
      }
      .cursor {
        display: unset;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
  .cover {
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    height: 200px;
    opacity: 0.6;
    display: none;
  }
  .list {
    margin: 0 10px;
    position: absolute;
    z-index: 3;
    li {
      display: block;
      width: 56px;
      height: 56px;
      border: 1px solid #148e3c;
      margin: 5px 0;
    }
    .current {
      border: 3px solid #148e3c;
    }
  }
  .list-mobil-left {
    display: none;
  }
  .list-mobil-right {
    display: none;
  }
}
// =============== Product info price ===================
.pro-price {
  flex: 2 1 30rem;
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
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      color: #fff;
      background-color: #148e3c;
    }
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
  flex: 1 1 12rem;
  background-color: #ffffff;
  margin: 6px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: relative;
  transition: all 0.3s ease;
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
    height: 70px;
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
    font-size: 15px;
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
    transition: all 0.3s ease-in;
    cursor: pointer;
    &:hover {
      background-color: #148e3c;
      color: #fff;
    }
  }
}

// responsive
/*
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
}

/*
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
  */

@media (min-width: 1025px) and (max-width: 1280px) {
  // Product image price
  // .pro-img div {
  //     width: 250px;
  //     height: 250px;
  // }
  // Center Product
  main {
    width: 95%;
  }
}

/*
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */

@media (min-width: 807px) and (max-width: 1024px) {
  .body {
    margin-top: 90px;
  }

  // Product image price
  .product-img {
    .pic {
      width: 350px;
      height: 350px;
      margin: 0 auto;
      .detail {
        left: 371px;
        width: 100%;
        height: 100%;
      }
    }
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

@media (min-width: 481px) and (max-width: 806px) {
  .body {
    margin-top: 90px;
  }
  // Product image price

  .pro-img-price {
    flex-direction: column;
    justify-content: center;
  }
  .product-img {
    flex: 1 1 20rem;
    .pic {
      width: 350px;
      height: 350px;
      margin: 0 auto;
      .detail {
        top: unset;
        left: unset;
        width: 100%;
        height: 100%;
      }
    }
    .list {
      display: none;
    }
    .list-mobil-left {
      margin: 0 10px;
      position: absolute;
      z-index: 3;
      display: block;
      li {
        display: block;
        width: 56px;
        height: 56px;
        border: 1px solid #148e3c;
        margin: 5px 0;
      }
      .current-left {
        border: 3px solid #148e3c;
      }
    }
    .list-mobil-right {
      margin: 0 10px;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 3;
      display: block;
      li {
        display: block;
        width: 56px;
        height: 56px;
        border: 1px solid #148e3c;
        margin: 5px 0;
      }
      .current-right {
        border: 3px solid #148e3c;
      }
    }
  }

  .pro-price {
    flex: 1 1 20rem;
    margin-left: 56px;
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
  .order-header {
    img {
      width: 35%;
    }
    p {
      font-size: 18px;
    }
  }
  .order-header .form-input {
    margin: 7px;
    input,
    select {
      height: 46px;
    }
  }
  .order-button {
    width: 75%;
    height: 45px;
    font-size: 16px;
  }
}

/*
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */
@media (min-width: 320px) and (max-width: 480px) {
  .body {
    margin-top: 90px;
  }

  // Product image price
  .pro-img-price {
    flex-direction: column;
  }
  .product-img {
    flex: 1 1 16rem;
    .pic {
      width: 250px;
      height: 233px;
      margin: 0 auto;
      .detail {
        top: unset;
        left: -52px;
        width: 100vw;
        height: 50vh;
      }
    }
    .list {
      display: none;
    }
    .list-mobil-left {
      margin: 0 10px;
      position: absolute;
      z-index: 3;
      display: block;
      li {
        display: block;
        width: 45px;
        height: 45px;
        border: 1px solid #148e3c;
        margin: 5px 0;
      }
      .current-left {
        border: 3px solid #148e3c;
      }
    }
    .list-mobil-right {
      margin: 0 10px;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 3;
      display: block;
      li {
        display: block;
        width: 45px;
        height: 45px;
        border: 1px solid #148e3c;
        margin: 5px 0;
      }
      .current-right {
        border: 3px solid #148e3c;
      }
    }
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
      display: flex;
      button:nth-child(1) {
        width: 97px;
        height: 36px;
        margin-bottom: 5px;
        font-size: 13px;
      }
      button:nth-child(2) {
        width: 169px;
        height: 36px;
        font-size: 13px;
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
  .fullCover .x-icon-black {
    right: 3%;
  }
  .orderWindow {
    height: 95%;
  }
  .order-inner-in {
    height: 97%;
    justify-content: space-around;
  }
  .order-header {
    img {
      width: 54%;
    }
    p {
      font-size: 16px;
    }
  }
  .form-input {
    margin: 7px;
    input,
    select {
      height: 39px;
    }
  }
  .order-button {
    width: 75%;
    height: 45px;
    font-size: 14px;
  }
}
</style>
