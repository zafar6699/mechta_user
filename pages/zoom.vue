<template>
    <div id="app">
        <div class="product-img">
            <ul ref="list" class="list">
                <li v-for="(image, i) in imgs" :key="i">
                    <img
                        :class="i == index ? 'current' : ''"
                        @click="imgClick(image, i)"
                        :src="image"
                    />
                </li>
            </ul>
            <div class="pic">
                <img ref="img" @mousemove="imgMove($event)" :src="img" />
                <div ref="cover" class="cover"></div>
                <div
                    :style="{
                        'background-position': details.backgroundPosition,
                        'background-image': 'url(' + img + ')'
                    }"
                    class="detail"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            img: "",
            imgs: [
                "http://server.mechta-posuda.uz:3000/uploads/products/1619784157355-Сков. брил серый нес 1 .jpg",
                "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg",
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gardenia-royalty-free-image-1580854928.jpg",
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gardenia-royalty-free-image-1580854928.jpg",
                "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg"
            ],
            details: {
                backroundImage: "",
                backgroundPosition: ""
            }
        };
    },
    mounted() {
        if (!this.img) {
            this.img = this.imgs[0];
        }
    },
    methods: {
        imgClick(image, index) {
            this.index = index;
            this.img = image;
        },
        imgMove(e) {
            var vm = this;
            var x = e.clientX;
            var y = e.clientY;
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
        }
    }
};
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul {
    list-style: none;
}
// product img
.product-img {
    flex: 1 1 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .pic {
        width: 400px;
        height: 400px;
        cursor: zoom-in;
        position: relative;
        .detail {
            position: absolute;
            top: 0;
            left: 410px;
            width: 400px;
            height: 400px;
            background-size: 900px 1100px;
            display: none;
            z-index: 3;
        }
        &:hover {
            .detail {
                display: block;
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
    // product list
    .list {
        position: absolute;
        top: 0;
        left: 5px;
        li {
            display: block;
            width: 56px;
            height: 56px;
            border: 1px solid #148e3c;
            margin: 3px;
        }
        .current {
            border: 3px solid #148e3c;
        }
    }
}
</style>
