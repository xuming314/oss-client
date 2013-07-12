var ossApi = require('../index');
var option = {
  accessId: '',
  accessKey: ''
};

var oss = new ossApi.OssClient(option);

oss.putObject('', '', __dirname + '/index.js');
