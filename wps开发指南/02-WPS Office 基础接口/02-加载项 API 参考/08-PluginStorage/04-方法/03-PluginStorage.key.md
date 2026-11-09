# PluginStorage.key

返回index对应的key。

## 语法

express.key(index)

express   一个代表 PluginStorage 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| index | 必选 | 整数 | index的起始值从0开始，常见的用法是先用length属性取到元素个数，然后用此方法来得到对应的key |

## 示例

```javascript
下列代码获取容器中第1个元素的key并在控制台输出。
let count = Application.PluginStorage.length
if (count > 0){
	let firstkey = Application.PluginStorage.key(0)
	console.log(firstkey)							
}
```
