const crypto = require("crypto");

//封装一个加密方法
// 对用户注册成功后的密码进行MD5加密生成密文后返回
//参数：用户注册的密码 拼接一个字符串 合并后的字符串
//返回值：返回一个MD5加密的密文
module.exports.cryptoPaddword = (password) => {
  return crypto.createHash("MD5").update(password).digest("hex");
};

//生成指定位数的随机正数
module.exports.getRandomByLength = (len) => {
  let code = "";
  for (let i = 0; i < len; i++) {
    //每次遍历都会拼接随机整数
    code += getRandom(0, 9);
  }
  //指定位数随机整数
  return code;
};

//生成一个从最小到最大的随机整数
module.exports.getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
