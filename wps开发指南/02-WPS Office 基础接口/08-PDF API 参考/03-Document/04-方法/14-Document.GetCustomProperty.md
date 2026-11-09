# Document.GetCustomProperty

获取文档的自定义属性值。

## 语法

express.**GetCustomProperty**

express   一个代表 **Document** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| Name | string | 属性名，与 `SetCustomProperty` 中传入的 `Name` 一致 |
| TextType | string | 保留参数，传入任意字符串（如 `"text"` 或 `""`）均可；内部会读取存储的 TYPE 字段但不经由此参数返回，对查询结果无影响 |

## 返回值

`string` — 对应属性的值字符串；属性不存在时返回空字符串。

## 示例

```JavaScript
var value = app.ActiveDocument.GetCustomProperty("ProjectName", "text");
console.log("属性值: " + value);
```
