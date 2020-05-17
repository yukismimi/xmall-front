import http from './public'
// 商品列表
export const getAllGoods = (params) => {
  return http.fetchGet('/product/all', params)
}
// 获取购物车列表
export const getCartList = () => {
  return http.fetchGet('/cart/all')
}
// 加入购物车
export const addCart = (params) => {
  return http.fetchPost('/cart/add', params)
}
// 删除购物车
export const delCart = (params) => {
  return http.fetchPost('/user/delCart', params)
}
// 删除购物车勾选商品
export const delCartChecked = (params) => {
  return http.fetchDelete('/cart/deleteChecked', params)
}
// 编辑购物车
export const cartEdit = (params) => {
  return http.fetchPut('/cart/modify', params)
}
// 全选
export const editCheckAll = (params) => {
  return http.fetchPut('/cart/editCheckAll', params)
}
// 删除整条购物车
export const cartDel = (params) => {
  return http.fetchDelete('/cart/delete', params)
}
// 获取用户地址
export const addressList = () => {
  return http.fetchGet('/address/all')
}
// 通过id获取地址
export const getAddress = (params) => {
  return http.fetchGet('/address/get', params)
}
// 修改收货地址
export const addressUpdate = (params) => {
  return http.fetchPut('/address/modify', params)
}
// 添加收货地址
export const addressAdd = (params) => {
  return http.fetchPost('/address/add', params)
}
// 删除收货地址
export const addressDel = (params) => {
  return http.fetchDelete('/address/delete', params)
}
// 生成订单
export const submitOrder = (params) => {
  return http.fetchPost('/order/add', params)
}
// 支付
export const payMent = (params) => {
  return http.fetchPost('/user/payOrder', params)
}
// 支付宝支付
export const pay = (params) => {
  return http.fetchGet('/alipay/pay', params)
}
// 支付宝支付成功
export const paySuccess = (params) => {
  return http.fetchPost('/order/paySuccess', params)
}
// 获取用户订单
export const orderList = (params) => {
  return http.fetchGet('/order/all', params)
}
// 获取单个订单详情
export const getOrderDet = (params) => {
  return http.fetchGet('/order/get', params)
}
// 取消订单
export const cancelOrder = (params) => {
  return http.fetchPost('/user/cancelOrder', params)
}
// 商品详情
export const productDet = (params) => {
  return http.fetchGet('/product/find', params)
}
// 删除订单
export const delOrder = (params) => {
  return http.fetchGet('/user/delOrder', params)
}
// 商品列表
export const getSearch = (params) => {
  return http.fetchGet('/goods/search', params)
}
// 快速搜索
export const getQuickSearch = (params) => {
  return http.fetchGet('/goods/quickSearch', params)
}
