const { default: axios } = require("axios");
const {
  createSign,
  getTrade_no,
  getRandomStr,
  createOrder,
} = require("../utils");
const { appid, mch_id, notify_url, orderUrl } = require("../config/wx");
const QRCode = require("qrcode");
//微信下单
module.exports.order = async (ctx) => {
  //前端调用下单接口时传递的参数
  const { body, total_fee, spbill_create_ip, trade_type } = ctx.request.body;
  //下单的参数
  const params = {
    appid, // 公众账号ID
    mch_id, //商户号
    nonce_str: getRandomStr(), //32位以内的随机字符串
    // sign, //签名
    body, //商品描述
    out_trade_no: getTrade_no(), //商户订单号
    total_fee, //金额
    spbill_create_ip, //终端IP
    notify_url, //微信服务器回调地址
    trade_type, //交易类型
  };

  //生成签名  需要发送的参数生成
  const sign = createSign(params);
  //   console.log(sign);
  //请求参数 新增sign属性
  //   params.sign = sign;

  //微信下单请求参数
  let sendData = `
            <xml>
                <appid>${appid}</appid>
                <body>${body}</body>
                <mch_id>${mch_id}</mch_id>
                <nonce_str>${params.nonce_str}</nonce_str>
                <notify_url>${notify_url}</notify_url>
                <out_trade_no>${params.out_trade_no}</out_trade_no>
                <spbill_create_ip>${spbill_create_ip}</spbill_create_ip>
                <total_fee>${total_fee}</total_fee>
                <trade_type>${trade_type}</trade_type>
                <sign>${sign}</sign>
            </xml>
   `;

  const data = await createOrder(orderUrl, sendData);

  //下单成功
  const { return_code, return_msg, result_code, code_url } = data;
  if (
    return_code == "SUCCESS" &&
    result_code == "SUCCESS" &&
    return_msg == "OK"
  ) {
    data.payUrl = await QRCode.toDataURL(code_url);
  }
  ctx.body = {
    status: 200,
    data,
  };
};
