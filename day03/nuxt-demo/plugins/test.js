export default () => {
  let server = process.server ? "服务器" : "客户端";
  console.log(server);
};
