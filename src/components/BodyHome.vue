<template>
    <div id="body-home">
        <div class="product-list container">
            <div class="title-pro row">
                <h2 class="col-2">{{ danhMucSanPhams[0].title }}</h2>
                <a href="#" class="col-2 offset-8">Xem tất cả &gt;&gt;</a>
            </div>
            <div class="products-info row justify-content-between">
                <ul class="col-2">
                    <li v-for="(cap2,index) in danhMucSanPhams[0].children"
                    :key="index">
                        <a href="#">{{ cap2 }}</a>
                    </li>
                </ul>
                
                <div class="product col-2">
                    <div class="new-item">
                        <img :src="imagesWeb.newIcon" alt="">
                    </div>
                    <div class="product-image">
                        <router-link :to="{name: 'buying'}"><img :src="listProducts[0].products[0].image" alt="Loading"></router-link>
                        <span>-{{ listProducts[0].sale*100 }}%</span>
                    </div>
                    <div class="product-content">
                        <p class="product-id">MÃ: {{ listProducts[0].id }}</p>
                        <hr>
                        <a class="product-name" href="#">{{ listProducts[0].title }}</a>
                        <div class="product-prices">
                            <p class="original-price">{{ listProducts[0].price  }}</p>
                            <p class="final-price">{{ listProducts[0].price - listProducts[0].price * listProducts[0].sale }}</p>
                        </div>
                    </div>
                </div>
                <div class="product col-2">
                    <div class="new-item">
                        <img :src="imagesWeb.newIcon" alt="">
                    </div>
                    <div class="product-image">
                        <router-link :to="{name: 'buying'}"><img :src="listProducts[1].products[0].image" alt="Loading"></router-link>
                        <span>-{{ listProducts[1].sale*100 }}%</span>
                    </div>
                    <div class="product-content">
                        <p class="product-id">MÃ: {{ listProducts[1].id }}</p>
                        <hr>
                        <a class="product-name" href="#">{{ listProducts[1].title }}</a>
                        <div class="product-prices">
                            <p class="original-price">{{ listProducts[1].price  }}</p>
                            <p class="final-price">{{ listProducts[1].price - listProducts[1].price * listProducts[1].sale }}</p>
                        </div>
                    </div>
                </div>
                <div class="product col-2">
                    <div class="new-item">
                        <img :src="imagesWeb.newIcon" alt="">
                    </div>
                    <div class="product-image">
                        <router-link :to="{name: 'buying'}"><img :src="listProducts[2].products[0].image" alt="Loading"></router-link>
                        <!-- <a href="#"><img :src="listProducts[2].products[0].image" alt="Loading"></a> -->
                        <span>-{{ listProducts[2].sale*100 }}%</span>
                    </div>
                    <div class="product-content">
                        <p class="product-id">MÃ: {{ listProducts[2].id }}</p>
                        <hr>
                        <a class="product-name" href="#">{{ listProducts[2].title }}</a>
                        <div class="product-prices">
                            <p class="original-price">{{ listProducts[2].price  }}</p>
                            <p class="final-price">{{ listProducts[2].price - listProducts[2].price * listProducts[2].sale }}</p>
                        </div>
                    </div>
                </div>
                <div class="product col-2">
                    <div class="new-item">
                        <img :src="imagesWeb.newIcon" alt="">
                    </div>
                    <div class="product-image">
                        <router-link :to="{name: 'buying'}"><img :src="listProducts[3].products[0].image" alt="Loading"></router-link>
                        <span>-{{ listProducts[3].sale*100 }}%</span>
                    </div>
                    <div class="product-content">
                        <p class="product-id">MÃ: {{ listProducts[3].id }}</p>
                        <hr>
                        <a class="product-name" href="#">{{ listProducts[3].title }}</a>
                        <div class="product-prices">
                            <p class="original-price">{{ listProducts[3].price  }}</p>
                            <p class="final-price">{{ listProducts[3].price - listProducts[3].price * listProducts[3].sale }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="product-list container">
            <div class="title-pro row">
                <h2 class="col-2">{{ danhMucSanPhams[1].title }}</h2>
                <a href="#" class="col-2 offset-8">Xem tất cả &gt;&gt;</a>
            </div>
            <div class="products-info row justify-content-between">
                <ul class="col-2">
                    <li v-for="(cap2,index) in danhMucSanPhams[1].children"
                    :key="index">
                        <a href="#">{{ cap2 }}</a>
                    </li>
                </ul>
                
                <div class="product col-2">
                    <div class="new-item">
                        <img :src="imagesWeb.newIcon" alt="">
                    </div>
                    <div class="product-image">
                        <!-- <router-link :to="{name: 'buying'}"><img :src="getDetailProduct.image" alt="Loading"></router-link> -->
                        <router-link :to="{name: 'buying'}"><img :src="listProducts[4].products[0].image" alt="Loading"></router-link>
                        <span>-{{ listProducts[4].sale*100 }}%</span>
                    </div>
                    <div class="product-content">
                        <p class="product-id">MÃ: {{ listProducts[4].id }}</p>
                        <hr>
                        <a class="product-name" href="#">{{ listProducts[4].title }}</a>
                        <div class="product-prices">
                            <p class="original-price">{{ listProducts[4].price  }}</p>
                            <p class="final-price">{{ listProducts[4].price - listProducts[4].price * listProducts[4].sale }}</p>
                        </div>
                    </div>
                </div>
                <div class="product col-2">
                    <div class="new-item">
                        <img :src="imagesWeb.newIcon" alt="">
                    </div>
                    <div class="product-image">
                        <router-link :to="{name: 'buying'}"><img :src="listProducts[5].products[0].image" alt="Loading"></router-link>
                        <span>-{{ listProducts[5].sale*100 }}%</span>
                    </div>
                    <div class="product-content">
                        <p class="product-id">MÃ: {{ listProducts[5].id }}</p>
                        <hr>
                        <a class="product-name" href="#">{{ listProducts[5].title }}</a>
                        <div class="product-prices">
                            <p class="original-price">{{ listProducts[5].price  }}</p>
                            <p class="final-price">{{ listProducts[5].price - listProducts[5].price * listProducts[5].sale }}</p>
                        </div>
                    </div>
                </div>
                <div class="product col-2">
                    <div class="new-item">
                        <img :src="imagesWeb.newIcon" alt="">
                    </div>
                    <div class="product-image">
                        <!-- <router-link :to="{name: 'buying'}"><img :src="getDetailProduct.image" alt="Loading"></router-link> -->
                        <a href="#"><img :src="listProducts[6].products[0].image" alt="Loading"></a>
                        <span>-{{ listProducts[6].sale*100 }}%</span>
                    </div>
                    <div class="product-content">
                        <p class="product-id">MÃ: {{ listProducts[6].id }}</p>
                        <hr>
                        <a class="product-name" href="#">{{ listProducts[6].title }}</a>
                        <div class="product-prices">
                            <p class="original-price">{{ listProducts[6].price  }}</p>
                            <p class="final-price">{{ listProducts[6].price - listProducts[6].price * listProducts[6].sale }}</p>
                        </div>
                    </div>
                </div>
                <div class="product col-2">
                    <div class="new-item">
                        <img :src="imagesWeb.newIcon" alt="">
                    </div>
                    <div class="product-image">
                        <!-- <router-link :to="{name: 'buying'}"><img :src="getDetailProduct.image" alt="Loading"></router-link> -->
                        <a href="#"><img :src="listProducts[7].products[0].image" alt="Loading"></a>
                        <span>-{{ listProducts[7].sale*100 }}%</span>
                    </div>
                    <div class="product-content">
                        <p class="product-id">MÃ: {{ listProducts[7].id }}</p>
                        <hr>
                        <a class="product-name" href="#">{{ listProducts[7].title }}</a>
                        <div class="product-prices">
                            <p class="original-price">{{ listProducts[7].price  }}</p>
                            <p class="final-price">{{ listProducts[7].price - listProducts[7].price * listProducts[7].sale }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="product-list container">
            <div class="title-pro row">
                <h2 class="col-2">{{ danhMucSanPhams[2].title }}</h2>
                <a href="#" class="col-2 offset-8">Xem tất cả &gt;&gt;</a>
            </div>
            <div class="products-info row justify-content-between">
                <ul class="col-2">
                    <li v-for="(cap2,index) in danhMucSanPhams[2].children"
                    :key="index">
                        <a href="#">{{ cap2 }}</a>
                    </li>
                </ul>
                
                <div class="product col-2">
                    <div class="new-item">
                        <img :src="imagesWeb.newIcon" alt="">
                    </div>
                    <div class="product-image">
                        <!-- <router-link :to="{name: 'buying'}"><img :src="getDetailProduct.image" alt="Loading"></router-link> -->
                        <a href="#"><img :src="listProducts[7].products[0].image" alt="Loading"></a>
                        <span>-{{ listProducts[7].sale*100 }}%</span>
                    </div>
                    <div class="product-content">
                        <p class="product-id">MÃ: {{ listProducts[7].id }}</p>
                        <hr>
                        <a class="product-name" href="#">{{ listProducts[7].title }}</a>
                        <div class="product-prices">
                            <p class="original-price">{{ listProducts[7].price  }}</p>
                            <p class="final-price">{{ listProducts[7].price - listProducts[7].price * listProducts[7].sale }}</p>
                        </div>
                    </div>
                </div>
                <div class="product col-2">
                    <div class="new-item">
                        <img :src="imagesWeb.newIcon" alt="">
                    </div>
                    <div class="product-image">
                        <!-- <router-link :to="{name: 'buying'}"><img :src="getDetailProduct.image" alt="Loading"></router-link> -->
                        <a href="#"><img :src="listProducts[7].products[0].image" alt="Loading"></a>
                        <span>-{{ listProducts[7].sale*100 }}%</span>
                    </div>
                    <div class="product-content">
                        <p class="product-id">MÃ: {{ listProducts[7].id }}</p>
                        <hr>
                        <a class="product-name" href="#">{{ listProducts[7].title }}</a>
                        <div class="product-prices">
                            <p class="original-price">{{ listProducts[7].price  }}</p>
                            <p class="final-price">{{ listProducts[7].price - listProducts[7].price * listProducts[7].sale }}</p>
                        </div>
                    </div>
                </div>
                <div class="product col-2">
                    <div class="new-item">
                        <img :src="imagesWeb.newIcon" alt="">
                    </div>
                    <div class="product-image">
                        <!-- <router-link :to="{name: 'buying'}"><img :src="getDetailProduct.image" alt="Loading"></router-link> -->
                        <a href="#"><img :src="listProducts[7].products[0].image" alt="Loading"></a>
                        <span>-{{ listProducts[7].sale*100 }}%</span>
                    </div>
                    <div class="product-content">
                        <p class="product-id">MÃ: {{ listProducts[7].id }}</p>
                        <hr>
                        <a class="product-name" href="#">{{ listProducts[7].title }}</a>
                        <div class="product-prices">
                            <p class="original-price">{{ listProducts[7].price  }}</p>
                            <p class="final-price">{{ listProducts[7].price - listProducts[7].price * listProducts[7].sale }}</p>
                        </div>
                    </div>
                </div>
                <div class="product col-2">
                    <div class="new-item">
                        <img :src="imagesWeb.newIcon" alt="">
                    </div>
                    <div class="product-image">
                        <!-- <router-link :to="{name: 'buying'}"><img :src="getDetailProduct.image" alt="Loading"></router-link> -->
                        <a href="#"><img :src="listProducts[7].products[0].image" alt="Loading"></a>
                        <span>-{{ listProducts[7].sale*100 }}%</span>
                    </div>
                    <div class="product-content">
                        <p class="product-id">MÃ: {{ listProducts[7].id }}</p>
                        <hr>
                        <a class="product-name" href="#">{{ listProducts[7].title }}</a>
                        <div class="product-prices">
                            <p class="original-price">{{ listProducts[7].price  }}</p>
                            <p class="final-price">{{ listProducts[7].price - listProducts[7].price * listProducts[7].sale }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import {  mapState } from 'vuex'
export default {
name: 'Body-home',
computed:{
    ...mapState(['imagesWeb','danhMucSanPhams','listProducts']),
},
methods:{
}
}
</script>

<style>

.product-list{
    padding-top: 30px;
}
.product-list .title-pro{
    height: 40px;
    margin-bottom: 15px;
    padding-bottom: 1px;
    border-bottom: 2px solid #e60f1e;
    background-color: #f1f1f1;
    box-sizing: unset;
}
.product-list .title-pro h2{
    background-color: #e60f1e;
    height: 40px;
    line-height: 40px;
    color: white;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0px 20px;
    position: relative;
}
.product-list .title-pro h2::before{
    content: "";
    width: 28px;
    height: 28px;
    background-color: #e60f1e;
    position: absolute;
    transform: rotate(45deg);
    top: 6px;
    right: -13px;
}

.product-list .title-pro a{
    color: red;
    text-decoration: none;
    line-height: 40px;
    text-align: right;
    display: inline-block;
}

.products-info{
    margin-top: 10px;
}

.products-info ul{
    display: block;
    background-color: #e3e3e3;
    height: 350px;
    padding-top: 10px;
}
.products-info ul li{
    list-style: none;
    height: auto;
}
.products-info ul li a{
    display: block;
    line-height: 30px;
    text-decoration: none;
    padding: 0px 10px;
    color: #333;
    text-transform: uppercase;
}
.products-info ul li a:hover{
    color:rgb(216, 11, 11);
}
.products-info .product{
    padding:0px;
    height: 365px;
    position: relative;
}
 .product .product-image{
    height: 250px;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
}

.product .new-item{
    position: absolute;
    width: 53px;
    height: 53px;
    z-index: 9999;
}

.product .product-image a img{
    width: auto;
    max-height: 230px;
}
.product .product-image span{
    background: #ec2917;
    position: absolute;
    top: 5px;
    right: 10px;
    z-index: 999;
    border-radius: 50%;
    color: #fff;
    padding: 9px 6px;
    border: 1px solid;
}

.product .product-image:hover img{
    transform:scale(1.1);
    transition: 0.5s ease;
}

.product-content{
    padding-top: 5px;
}
.product-content .product-id{
    font-weight: bold;
    text-transform: uppercase;
    line-height: 20px;
    font-size: 14px;
}

.product-content .product-name{
    text-transform: uppercase;
    line-height: 20px;
    text-decoration: none;
    color: #333;
}
.product-content .product-name:hover{
    color: red;
}
.product-prices{
    display: flex;
    position: absolute;
    bottom: -30px;
}
.product-prices .original-price{
    margin-left: 120px;
    font-size: 14px;
    color: #555;
    text-decoration: line-through;
    font-weight: bold;
}

.product-prices .final-price{
    margin-left: 10px;
    color: red;
    font-weight: bold;
}
</style>