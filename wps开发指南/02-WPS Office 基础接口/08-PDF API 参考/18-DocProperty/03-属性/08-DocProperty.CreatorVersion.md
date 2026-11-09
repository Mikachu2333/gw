# DocProperty.CreatorVersion

获取创建文档的应用程序版本。 **String** 类型，只读。

## 语法

express.**CreatorVersion**

express   一个代表 **DocProperty** 对象的变量。

## 类型

string


## 说明

返回格式固定为 `PDF X.Y`，例如 `PDF 1.7`。

## 示例

```JavaScript
console.log("创建版本: " + prop.CreatorVersion);
```
