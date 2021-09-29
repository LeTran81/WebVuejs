<template>
  <div id="contact-home">
        <div class="shop-info container-fluid">
            <div class="container">
                <div class="shop-links row justify-content-between">
                    <div class="col-2">
                        <h2><a href="#">Thời trang nữ</a></h2>
                        <ul>
                            <li><a href="#">Đầm váy nữ đẹp</a></li>
                            <li><a href="#">Quần đùi jean nữ ngắn</a></li>
                            <li><a href="#">Đồ bộ nữ mặc nhà</a></li>
                            <li><a href="#">Áo sơ mi nữ đẹp</a></li>
                            <li><a href="#">Quần jean nữ đẹp</a></li>
                            <li><a href="#">Áo khoác nữ đẹp</a></li>
                            <li><a href="#">Áo thun nữ đẹp</a></li>
                            <li><a href="#">Quần áo thể thao nữ</a></li>
                            <li><a href="#">Quần áo yếm jean nữ đẹp</a></li>
                            <li><a href="#">Áo dài cách tân đẹp</a></li>
                        </ul>
                    </div>
                    <div class="col-2">
                        <h2><a href="#">Thời trang nam</a></h2>
                        <ul>
                            <li><a href="#">Áo khoác nam đẹp</a></li>
                            <li><a href="#">Áo sơ mi nam đẹp</a></li>
                            <li><a href="#">Áo thun nam đẹp</a></li>
                            <li><a href="#">Quần jean nam đẹp</a></li>
                            <li><a href="#">Quần đùi short jean nam ngắn</a></li>
                            <li><a href="#">Bộ quần áo nam - Đồ bộ nam</a></li>
                        </ul>
                    </div>
                    <div class="col-2">
                        <h2><a href="#">Thời trang nam</a></h2>
                        <ul>
                            <li><a href="#">Áo khoác cặp đôi nam nữ</a></li>
                            <li><a href="#">Áo thun cặp đôi đẹp</a></li>
                            <li><a href="#">Áo sơ mi cặp đôi đẹp</a></li>
                        </ul>
                    </div>
                    <div class="col-2">
                        <h2><a href="#">Giày nữ đẹp</a></h2>
                        <ul>
                            <li><a href="#">Giày thể thao nữ đẹp</a></li>
                            <li><a href="#">Giày cao gót nữ đẹp</a></li>
                            <li><a href="#">Giày dép sandal nữ</a></li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <h2>Túi xách nữ thời trang</h2>
                        <h2>Kính mát thời trang nam nữ</h2>
                    </div>
                </div>
                <hr>
                <div class="shop-contact row">
                    <div class="diachi col-3">
                        <h2>Shop  Thời trang - Ngày Nay</h2>
                        <p><span>ĐC</span>: 9/1A Đăng Văn Bi, Phường Trường Thọ, Quận Thủ Đức, TP.HCM</p>
                        <p><span>Mobile:</span> 012.6746.1772 - 090.600.647</p>
                        <p class="email">Email: thoitrangngaynay@gmail.com</p>
                        <p class="zalo">Zalo: 01267461772</p>
                        <p>Thời gian làm việc:</p>
                        <pre>Thứ 2 - Chủ nhật:
                    Sáng: 08h - 12h
                    Chiều: 13h - 23h
                        </pre>
                    </div>
                    <div class="col-2">
                        <h2>HỖ TRỢ KHÁCH HÀNG</h2>
                        <ul>
                            <li><a href="#">Hướng dẫn mua hàng</a></li>
                            <li><a href="#">Thời trang quần áo giá sỉ rẻ</a></li>
                            <li><a href="#">Phương thức thanh toán</a></li>
                            <li><a href="#">Cách đo size sản phẩm</a></li>
                            <li><a href="#">Phí giao hàng</a></li>
                        </ul>
                    </div>
                    <div class="col-2">
                        <h2>Danh mục</h2>
                        <ul>
                            <li><a href="#">Trang chủ</a></li>
                            <li><a href="#">Tin tức</a></li>
                            <li><a href="#">Khuyến mãi</a></li>
                            <li><a href="#">Liên hệ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="contact-icon">
                <a href="#">chat Zalo</a>
            </div>
            <p>Thời trang nam nữ đẹp rẻ | Thời trang ngày nay</p>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.shop-info{
    background-color: #eee;
    margin-top: 40px;
}

.shop-links {
    margin-bottom: 10px;
}

.shop-links div h2{
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 40px;
    margin-top: 15px;
    
}
.shop-links div h2 a{
    text-decoration: none;
    color: #333;
}
.shop-links div ul{
    padding-left: 15px;
}
.shop-links div ul li a{
    text-decoration: none;
    font-size: 14px;
    line-height: 23px;
    color: #333;
}
.shop-links div ul li a:hover{
    color: red;
}
.shop-contact{
    margin-top: 15px;
    padding-bottom: 15px;
}
.shop-contact div{
    margin-left: 10px;
    height: auto;
}
.shop-contact div ul{
    padding-left: 0px;
}
.shop-contact div ul li{
    list-style: none;
}
.shop-contact div ul li a{
    text-decoration: none;
    color: #333;
    line-height: 30px;
    font-size: 14px;
}

.shop-contact div h2{
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
}

.diachi{
    height: auto;
    border-right: 1px solid grey;
    width: 300px;
}

.diachi h2{
    font-size: 14px;
    font-weight: bold;
}

.diachi p{
    font-size: 14px;
    line-height: 30px;
}
.diachi p span{
    text-decoration: underline;
}
.diachi p.email{
    color: rgb(47 23 170);
    font-weight: bold;
    font-size: 14px;
}

.diachi p.zalo {
    color: rgb(67 107 254);
    font-weight: bold;
    font-size: 14px;
}
.diachi p:nth-child(6){
    font-size: 14px;
    font-weight: bold;
}

.shop-contact div:nth-child(2){
    width: 220px;
    height: 200px;
    border-right: 1px solid grey;
}
.shop-contact div:nth-child(3){
    width: 150px;
    height: 170px;
    border-right: 1px solid grey;
}

footer {
    width: 100%;
    height: 40px;
    background-color: #ccc;
}
footer p{
    text-align: center;
    line-height: 40px;
    text-transform: capitalize;
}
footer .contact-icon{
    width: 75px;
    height: 35px;
    border-radius: 20px;
    background-color: red;
    position: fixed;
    bottom: 20px;
    left: 20px;
}
footer .contact-icon a{
    color: white;
    text-align: center;
    padding: 0px 5px;
    line-height: 35px;
    font-size: 14px;
    text-decoration: none;
    display: block;
}
</style>