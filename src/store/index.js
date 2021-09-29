import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const storeData = {
  state:{
    selectedIdProduct: 2,
    cartNumber: 0,
    listProducts:[
      {
        category_id: 1,
        id: 'JNU32',
        title: 'QUẦN JEAN NỮ LƯNG CAO ĐÍNH 3 NÚT CÓ ĐƯỜNG KẺ CÁ TÍNH',
        buyQuantity: 1,
        material: 'Vải jean 100% dày dặn, không bao giãn',
        sizeProduct: null,
        sizes: [
          26,27,28,29,30,31,32
        ],
        colorProduct: null,
        chooseDetailProduct: 0,
        products:[
          {
          color: 'Xanh Jeans',
          image: require("./images/quan-jean-nu-lung-cao-dinh-3-nut-co-duong-ke-ca-tinh-900-1.jpg"),
          quantity: 10,
        }
        ],
        price: 235000,
        sale: 0.17,
        BST: 'QUẦN JEAN NỮ ĐẸP',
        type: 'Thời trang nữ'
      },
      {
        id: 'SJNUA1',
        title: 'QUẦN SHORT JEANS NỮ LƯNG CAO CÓ 2 TÚI CHẤT JEANS ĐẸP',
        buyQuantity: 1,
        material: 'Vải jean 100% không bao giãn',
        sizeProduct: null,
        sizes: [
          'S','M','L','XL'
        ],
        colorProduct: null,
        chooseDetailProduct: 0,
        products:[
          {
          color: 'XÁM',
          image: require("./images/quan-short-jeans-nu-lung-cao-co-2-tui-chat-jeans-dep-899-1.jpg"),
          quantity: 17,
          },
        ],
        price: 175000,
        sale: 0.06,
        BST: 'QUẦN ĐÙI JEAN NỮ NGẮN',
        type: 'Thời trang nữ'
      },
      {
        id: 'KNUA4',
        title: 'ÁO KHOÁC KAKI NỮ CÓ NÓN CHỐNG NẮNG PHỐI MÀU ĐẸP MẮT',
        buyQuantity: 1,
        material: 'Vải kaki 100% dày dặn, không nhăn',
        sizeProduct: null,
        sizes: [
          'M','L','XL'
        ],
        colorProduct: null,
        chooseDetailProduct: 0,
        products:[
          {
          color: 'VÀNG',
          image: require("./images/ao-khoac-kaki-nu-co-non-chong-nang-phoi-mau-dep-mat-898-2.jpg"),
          quantity: 15,
          },
          {
          color: 'ĐEN',
          image: require("./images/ao-khoac-kaki-nu-co-non-chong-nang-phoi-mau-dep-mat-898-4.jpg"),
          quantity: 0,
          },
          {
          color: 'TRẮNG',
          image: require("./images/ao-khoac-kaki-nu-co-non-chong-nang-phoi-mau-dep-mat-898-3.jpg"),
          quantity: 8,
          },

          {
          color: 'ĐEN-VÀNG',
          image: require("./images/ao-khoac-kaki-nu-co-non-chong-nang-phoi-mau-dep-mat-898-1.jpg"),
          quantity: 3,
          }
        ],
        price: 235000,
        sale: 0.17,
        BST: 'ÁO KHOÁC NỮ ĐẸP',
        type: 'Thời trang nữ'
      },
      {
        id: 'KQ05',
        title: 'ÁO KHOÁC KAKI NỮ HÀN QUỐC',
        buyQuantity: 1,
        material: 'VẢI KAKI NHẬP KHẨU',
        sizeProduct: null,
        sizes: [
          'FREE SIZE'
        ],
        colorProduct: null,
        chooseDetailProduct: 0,
        products:[
          {
          color: 'HỒNG',
          image: require("./images/ao-khoac-kaki-nu-han-quoc-888-1.jpg"),
          quantity: 35,
          },
          {
          color: 'VÀNG',
          image: require("./images/ao-khoac-kaki-nu-han-quoc-888-2.jpg"),
          quantity: 8,
          },
          {
          color: 'XÁM',
          image: require("./images/ao-khoac-kaki-nu-han-quoc-888-3.jpg"),
          quantity: 0,
          },
        ],
        price: 230000,
        sale: 0.2,
        BST: 'ÁO KHOÁC NỮ ĐẸP',
        type: 'Thời trang nữ'
      },
      {
        id: 'KNA21',
        title: 'ÁO KHOÁC NAM KAKI TÚI XÉO PHONG CÁCH HÀN QUỐC',
        buyQuantity: 1,
        material: 'Vải kaki không nhăn, không xù lông, không bay màu',
        sizeProduct: null,
        sizes: [
          'M','L','XL'
        ],
        colorProduct: null,
        chooseDetailProduct: 0,
        products:[
          {
          color: 'XANH NGỌC',
          image: require("./images/ao-khoac-nam-kaki-tui-xeo-phong-cach-han-quoc-943-1.jpg"),
          quantity: 35,
          },
          {
          color: 'XANH DA TRỜI',
          image: require("./images/ao-khoac-nam-kaki-tui-xeo-phong-cach-han-quoc-943-1.jpg"),
          quantity: 8,
          },
          {
          color: 'XANH RÊU',
          image: require("./images/ao-khoac-nam-kaki-tui-xeo-phong-cach-han-quoc-943-1.jpg"),
          quantity: 0,
          },
        ],
        price: 210000,
        sale: 0.17,
        BST: 'ÁO KHOÁC NAM ĐẸP',
        type: 'Thời trang nam'
      },
      {
        id: 'SMN24',
        title: 'ÁO SƠ MI NAM DÀI TAY IN HỌA TIẾT CHỮ TRẮNG ĐEN NỔI BẬT',
        buyQuantity: 1,
        material: 'Vải lụa không nhăn, mềm mượt, không xù lông',
        sizeProduct: null,
        sizes: [
          'M','L','XL'
        ],
        colorProduct: null,
        chooseDetailProduct: 0,
        products:[
          {
          color: 'ĐEN',
          image: require("./images/ao-so-mi-nam-dai-tay-in-hoa-tiet-chu-trang-den-noi-bat-942-1.jpg"),
          quantity: 35,
          },
        ],
        price: 225000,
        sale: 0.13,
        BST: 'ÁO SƠ MI NAM ĐẸP',
        type: 'Thời trang nam'
      },
      {
        id: 'JJG1',
        title: 'QUẦN KAKI NAM JOGGER CÁ TÍNH PHONG CÁCH MẠNH MẼ NAM TÍNH',
        buyQuantity: 1,
        material: 'Vải kaki không nhăn, không xù lông, không bay màu',
        sizeProduct: null,
        sizes: [
          'M','L','XL'
        ],
        colorProduct: null,
        chooseDetailProduct: 0,
        products:[
          {
            color: 'XÁM',
            image: require("./images/quan-kaki-nam-jogger-ca-tinh-phong-cach-manh-me-nam-tinh-941-1.jpg"),
            quantity: 35,
            },
          {
          color: 'ĐEN',
          image: require("./images/quan-kaki-nam-jogger-ca-tinh-phong-cach-manh-me-nam-tinh-941-1.jpg"),
          quantity: 35,
          },
        ],
        price: 225000,
        sale: 0.13,
        BST: 'ÁO SƠ MI NAM ĐẸP',
        type: 'Thời trang nam'
      },
      {
        id: 'SMN20',
        title: 'CHẤT LIỆU ĐŨI THÊU CHỮ ĐẸP MẮT',
        buyQuantity: 1,
        material: 'Vải đũi không nhăn, không xù lông',
        sizeProduct: null,
        sizes: [
          'M','L','XL'
        ],
        colorProduct: null,
        chooseDetailProduct: 0,
        products:[
          {
          color: 'XANH NGỌC',
          image: require("./images/ao-so-mi-nam-dai-tay-chat-lieu-dui-theu-chu-dep-mat-940-1.jpg"),
          quantity: 10,
          },
        ],
        price: 195000,
        sale: 0.05,
        BST: 'ÁO SƠ MI NAM ĐẸP',
        type: 'Thời trang nam'
      },
      {
        id: 'JJG1',
        title: 'QUẦN KAKI NAM JOGGER CÁ TÍNH PHONG CÁCH MẠNH MẼ NAM TÍNH',
        buyQuantity: 1,
        material: 'Vải kaki không nhăn, không xù lông, không bay màu',
        sizeProduct: null,
        sizes: [
          'M','L','XL'
        ],
        colorProduct: null,
        chooseDetailProduct: 0,
        products:[
          {
            color: 'XÁM',
            image: require("./images/quan-kaki-nam-jogger-ca-tinh-phong-cach-manh-me-nam-tinh-941-1.jpg"),
            quantity: 35,
            },
          {
          color: 'ĐEN',
          image: require("./images/quan-kaki-nam-jogger-ca-tinh-phong-cach-manh-me-nam-tinh-941-1.jpg"),
          quantity: 35,
          },
        ],
        price: 225000,
        sale: 0.13,
        BST: 'ÁO SƠ MI NAM ĐẸP',
        type: 'Thời trang nam'
      },
    ], 
    danhMucSanPhams:[
      {
        idCategory: 1,
        title: 'THỜI TRANG NỮ',
        children: [
          'Đầm váy nữ đẹp',
          'Quần đùi jean nữ ngắn',
          'Áo sơ mi nữ đẹp',
          'Áo khoác nữ đẹp',
          'Quần áo thể thao nữ',
          'Quần jean nữ đẹp',
          'Áo thun nữ đẹp',
          'Quần áo yếm jean nữ đẹp',
          'Đồ bộ nữ mặc nhà',
          'Áo dài cách tân đẹp',
        ]
      },
      {
        idCategory: 2,
        title: 'THỜI TRANG NAM',
        children: [
          'Áo khoác nam đẹp',
          'Áo sơ mi nam đẹp',
          'Áo thun nam đẹp',
          'Quần jean nam đẹp',
          'Quần đùi short jean nam ngắn',
          'Bộ quần áo nam - Đồ bộ nam',
        ]
      },
      {
        idCategory: 3,
        title: 'QUẦN ÁO CẶP ĐÔI',
        children: [
          'Áo khoác cặp đôi nam nữ',
          'Áo khoác cặp đôi nam nữ',
          'Áo sơ mi cặp đôi đẹp',
        ]
      },
      {
        idCategory: 4,
        title: 'GIÀY NỮ ĐẸP',
        children: [
          'Giày thể thao nữ đẹp',
          'Giày cao gót nữ đẹp',
          'Giày dép sandal nữ',
        ]
      },
      {
        title: 'TÚI XÁCH NỮ THỜI TRANG',
        children: []
      },
      {
        title: 'KÍNH MẮT THỜI TRANG NAM NỮ',
        children: []
      },
    ],
    imagesWeb: {
      imageAd: require("./images/quang-cao.png"),
      headerCart: require("./images/header-cart.png"),
      logo: require("./images/logo.png"),
      newIcon: require("./images/new-icon.png"),
    },
    
  },
  getters:{
    getProduct(state){
      let id = state.selectedIdProduct;
      return state.listProducts[id];
    },
  },
  mutations:{
    addToCart(state){
      state.cartNumber++;
    }
  }
}

const store = new Vuex.Store(storeData)

export default store