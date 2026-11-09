# Documents.Item

返回集合中的单个 **[Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj)** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Documents** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值，也可以是代表文档名称的 **String** 类型。 |

## 返回值

Document

## 示例


```JavaScript
/*本示例显示第一个文档的名称。*/
function test() {
    if (Documents.Count >= 1) {
        alert(Documents.Item(1).Name)
    }
}
```


```JavaScript
/*本示例保存名为“example.docx”的文档。*/
function test() {
    Documents.Item("example.docx").Save()
}
```
