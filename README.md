# xfs5152ce
## 概述
提供用于操作科大讯飞xfs5152ce语音合成芯片的API接口

其他型号芯片如编码方式相同，也可直接使用。

## 安装
> npm i xfs5152ce

如遇安装失败，可能是由于serialport安装失败。

解决办法：
1. 先安装node-pre-gyp
> npm install node-pre-gyp --save

2. 然后再执行
> npm install xfs5152ce --save

## 使用
1. 引入本库 
> var xfs5152ce = require('xfs5152ce');

2. 打开端口 
> xfs5152ce.open('COM3', 'female');

3. 合成声音 
	```javascript
	setTimeout(
		function() {
			xfs5152ce.speak('1，2，3，一起走')
		}
	,1000);
	```
## 测试
> npm run test

## 特性
- 支持男女声设置；
- 代码简单，只依赖于serialport
- 默认波特率：9600
- 通讯方式：UART
- 编码方式：UNICODE

## 问题反馈
邮箱：mbigger@qq.com

## CHANGELOG

##### v0.2.1
1. doc目录下新增文档
2. 更新README.md

##### v0.2.0
1. 更新依赖库版本
  - `node-pre-gyp` -> `0.13.0`
  - `serialport` -> `7.1.5`
2. 相应的调整`xfs5152ce`调用方法
3. 程序入口由 `xfs5152ce.js` 改为 `index.js`
4. 增加测试命令 `npm run test`