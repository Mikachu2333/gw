# PluginStorage.removeItem

删除容器中key对应的键值对。

## 语法

express.removeItem(key)

express   一个代表 PluginStorage 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| key | 必选 | 整数、字符串 | 如果容器中找不到key对应的键值对，则什么都不做 |

## 示例

```javascript
下列代码用于删除key为"count"的键值对。
Application.PluginStorage.removeItem("count")
```
