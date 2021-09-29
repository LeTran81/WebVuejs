<template>
    <div class="buying">
        <div class="wrap">
            <div class="wrap-title">
                <div class="title">
                    <a href="#">Home</a>
                    <span>></span>
                    <a href="#">{{ getProduct.type }}</a>
                    <span>></span>
                    <a href="#">{{ getProduct.BST }}</a>
                </div>
            </div>
            <div class="buying-pro">
                <div class="pro-detail-buying">
                    <div class="image">
                        <img :src=" getDetailProduct.image " alt="">
                    </div>
                    <div class="pro-order">
                        <h2>{{ getProduct.title }}</h2>
                        <p>Mã hàng: <span>{{ getProduct.id }}</span></p>
                        <p>Trạng thái: <span>{{ getQuantity() }}</span></p>
                        <p><span>Chất liệu: </span>{{ getProduct.material}}</p>
                        <span>Kích thước: </span>
                        <ul class="size">
                            <li 
                            v-for="(size,index) in getProduct.sizes" :key="index"
                            @click="handleClickSize(index)"
                            :class="classClickedSize(index)" 
                            >{{ size }}</li>
                        </ul>
                        <span>Màu sắc : </span>
                        <ul class="color">
                            <li 
                            v-for="(item,index) in getProduct.products" :key="index"
                            @click="handleClickColor(index)"
                            :class="classClickedColor(index)"
                            >{{ item.color }}</li>
                        </ul>
                        <div class="price">
                            <p class="last-price">{{ formatPrice }}</p>
                            <p class="original-price">{{ formatFinalPrice }}</p>
                            <p class="sale-price">-{{ getProduct.sale *100 }}%</p>
                        </div>
                        <br>
                        <div class="soluongsp">
                            <input type="text" v-model=" getProduct.buyQuantity " >
                            <div class="up-quantity" @click="handleClickUpQuantity()">+</div>
                            <div class="down-quantity" @click="handleClickDownQuantity()">-</div>
                            <span>(Chọn số lượng)</span>
                        </div>
                        <div class="btn-buy">
                            <input type="submit" value="Mua ngay" id="buy-now">
                            <input type="submit" value="Thêm vào giỏ hàng" id="add-to-cart" 
                            @click="addToCart()">
                        </div>
                    </div>
                </div>
                <div class="hotro">
                    <p>Hỗ trợ trực tuyến</p>
                    <div class="contact-help">
                        <p>Bạn muốn hỏi về sản phẩm?</p>
                        <p>Zalo/Hotline: 0767.461.772</p>
                        <img src="../store/images/contact-help.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
export default {
    name: 'buying',
    computed: {
        ...mapState(['listProducts','danhMucSanPhams','cartNumber']),
        ...mapGetters(['getProduct','getDetailProduct']),
        getDetailProduct(){
            let id = this.getProduct.chooseDetailProduct;
            return this.getProduct.products[id];
        },
        formatPrice() {
            var price = this.getProduct.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(price);
        },
        formatFinalPrice() {
            var price = this.getProduct.price - this.getProduct.sale * this.getProduct.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(price);
        },
    },
    methods: {
        getQuantity(){
            if(this.getDetailProduct.quantity >= 1) 
                return "Còn hàng"
            else return "Hết hàng"
        },
        handleClickSize(index){
            this.getProduct.sizeProduct = index;
        },
        classClickedSize(index){
            return {
                clicked : this.getProduct.sizeProduct === index
            }
        },
        handleClickColor(index){
            this.getProduct.colorProduct = index;
            this.getProduct.chooseDetailProduct = index;
        },
        classClickedColor(index){
            return {
                clicked : this.getProduct.colorProduct === index
            }
        },
        handleClickUpQuantity(){
            if(this.getProduct.buyQuantity >= this.getDetailProduct.quantity){
                alert('Số lượng không đủ')
            }
            else this.getProduct.buyQuantity++
        },
        handleClickDownQuantity(){
            if(this.getProduct.buyQuantity == 1){
                alert('Đã đạt số lượng min')
            }
            else this.getProduct.buyQuantity--;
        },
        addToCart(){
            if(this.getProduct.sizeProduct== null || this.getProduct.colorProduct == null){
                alert('Vui lòng chọn màu và size sản phẩm')
            }
            else {
                alert('Sản phẩm đã được thêm vào giỏ hàng');
                this.$store.commit('addToCart');
            }
        },
    },
}
</script>
<style>

*{
    margin: 0;
    padding: 0;
    font-family: 'Roboto Condensed', sans-serif;
}
.menu-under{
    display: none;
}
.cap1 {
    display: none;
}
.menu-left:hover .cap1{
    display: block;
}

.wrap{
    width: 80%;
    margin: 0px auto;
}

.wrap-title {
    margin-top: 20px;
    border: 1px solid gray;
    margin-bottom: 15px;
}
.wrap-title .title{
    height: 40px;
    background-color: rgb(236, 233, 233);
    display: flex;
    padding: 0px 10px;
    border-bottom: 1px solid gray;
}
.wrap-title .title a{
    text-decoration: none;
    padding-right: 10px;
    line-height: 40px;
}
.wrap-title .title a:first-child{
    text-indent: -10000px;
    width: 20px;
    height: 20px;
    background: url(../store/images/home.png) no-repeat center;
    background-size: contain;
    margin-top: 10px;
}
.wrap-title .title span{
    margin-top: 12px;
    padding: 0px 5px;
}
.wrap-title .title a:last-child,
.wrap-title .title a:nth-child(3)
{
    color: black;
    text-transform: uppercase;
    line-height: 40px;
}
.wrap-title .title a:last-child:hover{
    text-decoration: underline;
}

.buying-pro {
    display: flex;
    justify-content: space-between;
}

.buying-pro .pro-detail-buying{
    width: 70%;
    display: flex;
}
.buying-pro .pro-detail-buying .image{
    border: 1px solid gray;
    border-radius: 5px;
    overflow: hidden;
    padding: 5px;
    height: 360px;
}
.buying-pro .pro-detail-buying .image img{
    width: 356px;
    max-height: 100%;
}

.pro-detail-buying .pro-order{
    width: 415px;
    padding-left: 20px;
}

.pro-detail-buying .pro-order h2{
    text-transform: uppercase;
    font-weight: normal;
    line-height: 35px;
}
.pro-detail-buying .pro-order p{
    font-size: 16px;
    line-height: 30px;
}

.pro-detail-buying .pro-order p span,
.pro-detail-buying .pro-order span{
    font-weight: bold;
}
.pro-detail-buying .pro-order ul li{
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid gray;
    margin: 5px 10px 5px 0px;
    cursor: pointer;
}
.pro-detail-buying .pro-order ul li:hover{
    border-color: red;
}

.pro-detail-buying .pro-order ul li.clicked{
    background: url(../store/images/ticked.png) no-repeat;
    background-position: bottom right;
}

.pro-detail-buying .pro-order .price .last-price{
    float: left;
    font-size: 22px;
    color: #d0021b;
    margin-bottom: 6px;
    font-weight: bold;
}

.pro-detail-buying .pro-order .price .original-price{
    float: left;
    font-size: 18px;
    margin-left: 10px;
    text-decoration: line-through;
    color: #666;
}
.pro-detail-buying .pro-order .price .sale-price{
    background: #d0021b;
    padding: 2px 7px;
    color: #fff;
    float: left;
    margin-left: 15px;
    border-radius: 5px;
    font-size: 13px;
}

.pro-detail-buying .pro-order .soluongsp{
    margin-top: 35px;
    padding-top: 20px;
    border-top: 1px dashed gray;
    display: flex;
}
.pro-detail-buying .pro-order .soluongsp input{
    text-align: center;
    width: 50px;
    padding: 4px 10px;
    border: 1px solid #dadada;
    border-radius: 4px;
    height: 35px;
}
.pro-detail-buying .pro-order .soluongsp .up-quantity,
.pro-detail-buying .pro-order .soluongsp .down-quantity
{
    width: 34px;
    padding: 5px 6px;
    line-height: 28px;
    border-radius: 4px;
    margin-right: 0px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    -webkit-appearance: none;
    border: 1px solid #dadada;
    margin-left: 5px;
    height: 35px;
}

.pro-detail-buying .pro-order .soluongsp span{
    font-style: italic;
    line-height: 40px;
    padding-left: 10px;
}

.pro-detail-buying .pro-order .btn-buy{
    margin-top: 20px;
}
.pro-detail-buying .pro-order .btn-buy #buy-now{
    width: 180px;
    overflow: hidden;
    padding: 9px 0;
    margin: 10px 10px 0 0px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    border: 1px solid #d97f00;
    border-radius: 4px;
    background: #f89406;
    cursor: pointer;
}
.pro-detail-buying .pro-order .btn-buy #buy-now:hover
{
    background: #ffb143;
}
.pro-detail-buying .pro-order .btn-buy #add-to-cart:hover{
    border-color: #f1c78c;
    color: #f1c78c;
}

.pro-detail-buying .pro-order .btn-buy #add-to-cart{
    width: 180px;
    overflow: hidden;
    padding: 9px 0;
    margin: 10px 0 0 0px;
    font-size: 16px;
    color: #d37e07;
    text-align: center;
    text-transform: uppercase;
    border: 1px solid #d37e07;
    border-radius: 4px;
    cursor: pointer;
    background: #fff;
}
.buying-pro .hotro >p{
    color: red;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10px;
}
.buying-pro .hotro .contact-help{
    border: 1px solid gainsboro;
    padding: 5px;
    border-top: 2px solid red;
}
.buying-pro .hotro .contact-help p{
    color: red;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
}

</style>