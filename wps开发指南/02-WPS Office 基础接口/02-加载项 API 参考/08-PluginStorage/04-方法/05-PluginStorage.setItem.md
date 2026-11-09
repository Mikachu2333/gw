# PluginStorage.setItem

向容器中添加键值对。

## 语法

express.setItem(key, value)

express   一个代表 PluginStorage 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| key | 必选 | 整数、字符串 | key的数据类型只能是简单类型，具体来说可以是整数或字符串，推荐使用具有命名意义的字符串作为key. |
| value | 必选 | Variant | \{description\} |

## 示例

```javascript
下列代码用于将key为"count"，值为5的键值对存入容器。
Application.PluginStorage.setItem("count", 5)
```
