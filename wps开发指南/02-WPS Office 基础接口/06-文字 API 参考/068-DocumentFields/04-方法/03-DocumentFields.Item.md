# DocumentFields.Item

返回一个 **[DocumentField](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentField/obj)** 对象，该对象通过索引或公文域名称来确定。



## 语法

express.**Item(Index)**

express   一个代表 **DocumentFields** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值，也可以是代表公文域名称的 **String** 类型。 |

## 返回值

DocumentField

## 示例


```JavaScript
/*本示例显示活动文档上第一个公文域的名称。*/
function test() {
    alert(ActiveDocument.DocumentFields.Item(1).Name)
}
```


```JavaScript
/*本示例显示所选内容中名为“example2”的公文域的文档部分的文本。*/
function test() {
    alert(Selection.DocumentFields.Item("example2").Range.Text)
}
```
