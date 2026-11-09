# PluginStorage.getItem

返回key对应的value。

## 语法

express.getItem(key)

express   一个代表 PluginStorage 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| key | 必选 | 整数、字符串 | key的数据类型只能是简单类型，具体来说可以是整数或字符串，推荐使用具有命名意义的字符串作为key. |

## 示例

```javascript
下列代码获取key为count的value并在控制台输出。
let value = Application.PluginStorage.getItem("count")
if (value){
	console.log(value)
}
```
