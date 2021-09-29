<template>
  <div id="header">
        <header>
            <div class="container">
                <div class="row">
                    <div class="img-logo col-1">
                        <router-link :to="{name: 'home'}"><img :src="imagesWeb.logo" alt="Loading"></router-link>
                    </div>
                    <div class="search-pro col-6">
                        <input type="text" placeholder="Từ khóa tìm kiếm">
                        <button type="submit">Tìm kiếm</button>
                    </div>
                    <div class="hot-line col-4">
                        <p>Hotline</p>
                        <p>0767.461.772 - 0969.006.472</p>
                    </div>
                    <div class="home-cart col-1">
                        <a href="#">
                            <img :src="imagesWeb.headerCart" alt="">
                            <span>{{ cartNumber }}</span>
                        </a>   
                    </div>
                </div>
            </div>
        </header>
		<div class="menu">
            <div class="menu-top container-fluid">
                <div class="container">
                    <div class="row">
                        <div class="menu-left col-3"><a>Danh mục sản phẩm</a>
                            <ul class="cap1">
                                <li v-for="(cap1,id) in danhMucSanPhams"
                                :key="id">
                                    <a href="#">{{ cap1.title }}</a>
                                    <ul class="cap2" :class="classEmpty(id)">
                                        <li v-for="(cap2,index) in danhMucSanPhams[id].children"
                                        :key="index"
                                        >
                                            <a href="#">{{ cap2 }}</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="menu-right col-4">
                            <ul>
                                <li><a href="#">Tin tức</a></li>
                                <li><a href="#">Khuyến mãi</a></li>
                                <li><a href="#">Liên hệ</a></li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu-under container">
                <div class="row">
                    <div class="quang-cao col-9 offset-3">
                        <a href="#">
                            <img :src="imagesWeb.imageAd " alt="">
                        </a>
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
    name: 'header-home',
    computed:{
        ...mapState(['listProducts', 'cartNumber','danhMucSanPhams','imagesWeb'])
    },
    methods: {
        classEmpty(id){
            return { 
                empty: this.danhMucSanPhams[id].children.length == 0
            }
        }
    }
}
</script>

<style>

header{
	height: 80px;
}

header .img-logo{
    margin-top: 10px;
	width: 100px;
	height: auto;
}
header .img-logo a img{
	max-width: 100%;
}

header input{
    margin-left: 60px;
    height: 40px;
    width: 550px;
    line-height: 35px;
    margin-top: 20px;
    border: 1px solid red;
    border-radius: 5px;
    color: gray;
    outline: none;
    padding-left: 10px;
    display: inline-block;
}

header .search-pro{
    position: relative;
}

header input:focus{
    box-shadow: 0px 0px 5px red;
}

header button{
    position: absolute;
    width: 40px;
    height: 40px;
    top: 20px;
    right: 40px;
    background: red url(../store/images/search_icon.png) no-repeat center;
    background-size: contain;
    text-indent: -9999px;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}
header .hot-line{
	margin-top: 17px;
}
.hot-line{
    display: flex;
    justify-content: space-between;
    height: 44px;
    background: url(../store/images/hotline1.png) no-repeat;
    background-size: contain;
    margin-left: 10px;
}
.hot-line p{
    line-height: 40px;
}
.hot-line p:first-child{
    color: red;
    margin-left: 10px;
}

.hot-line p:last-child{
    color: white;
    font-weight: bold;
    margin-right: 40px;
}

header .home-cart {
    margin-top: 20px;
	position: relative;
}
.home-cart a{
    display: block;
	width: 40px;
    height: 40px;
}

.home-cart a img{
    width: 100%;
}
.home-cart span{
    position: absolute;
    top: 20px;
    left: 35px;
    width: 16px;
    height: 16px;
    background-color: white;
    border: 1px solid black;
    border-radius: 50%;
    text-align: center;
    line-height: 16px;
}

.menu-top{
    height: 40px;
    background-color: #e60f1e;
    position: relative;
}

.menu-left ul li{
    list-style: none;
    width: 100%;
}

.menu-left>ul>li> a,
.menu-left >a{
    display: block;
    padding-left: 15px;
    background-color: #555;
    text-decoration: none;
    height: 60px;
    line-height: 60px;
    color: white !important;
    text-transform: uppercase;
    font-weight: bold;
    
}
.menu-left> a{
    background-color: rgba(30, 36, 36, 0.4);
    padding-left: 40px;
    height: 40px;
    line-height: 40px;
}
.menu-left> a::before{
    content: "";
    width: 40px;
    height: 40px;
    background: url(../store/images/list-icon.png) no-repeat center;
    position: absolute;
    left: 120px;
}
.menu-left> a:hover{
    cursor: pointer;
}
.cap1{
    position: absolute;
    width: 309px;
    padding-left: 0px;
    z-index: 1000000;
}

.cap1 >li a{
    border-bottom: 1px dashed gray;
}
.cap1 >li a:hover{
    background-color: rgb(216, 11, 11);
}
.cap1 li:hover .cap2{
    display: block;
}

.cap2{
    display: none;
    position: absolute;
    top: 0;
    left: 100%;
    width: 250px;
    height: 308px;
    background-color: white;
    z-index: 9999;
    box-shadow: 4px 2px 10px gray;
    padding-left: 0px;
}
.cap1 li .cap2.empty{
    display: none;
}

.cap2 li{
    height: 30px;
    line-height: 30px;
    list-style-type: circle;
}

.cap2 li a{
    display: block;
    text-decoration: none;
    border: none;
    padding-left: 10px;
    color: black;
    font-weight: normal;
}
.cap2 li a:hover{
    color: rgb(216, 11, 11);
    background-color: transparent;
}

.menu-right{
    margin-left: -49px;
}
.menu-right ul{
    height: 40px;
}

.menu-right ul li{
    list-style: none;
    display: inline-block;
}
.menu-right ul li a{
    display: block;
    text-decoration: none;
    height: 40px;
    line-height: 40px;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0px 15px;
    border-right: 1px solid white;
}
.menu-right ul li a:hover{
    background-color: rgba(30, 36, 36, 0.4);
    transition: all 0.3s ease-in;
}

.quang-cao a{
    display: block;
    width: 100%;
    height: 100%;
}
.quang-cao a img{
    cursor: pointer;
    width: 100%;
    height: auto;
}



</style>