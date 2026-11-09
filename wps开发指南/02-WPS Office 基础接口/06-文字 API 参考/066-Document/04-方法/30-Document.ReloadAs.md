# Document.ReloadAs

使用指定的编码重新加载一篇基于 HTML 文档的文档。



## 语法

express.**ReloadAs(Encoding)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Encoding | 必选 | MsoEncoding | 指定重新加载文档时使用的编码。 |

## 返回值

void

## 示例


```JavaScript
/*本示例用西里尔文编码重新加载当前文档。*/
function test() {
    Application.ActiveDocument.ReloadAs(msoEncodingCyrillic)
}
```


```JavaScript
/*本示例使用指定编码重新加载第一个文档。*/
function test() {
    Documents.Item(1).ReloadAs(msoEncodingHZGBSimplifiedChinese)
}
```
