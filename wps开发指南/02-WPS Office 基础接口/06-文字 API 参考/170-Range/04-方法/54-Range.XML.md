# Range.XML

返回一个 **String** 类型的值，该值代表指定对象中的 XML 文本。



## 语法

express.**XML(DataOnly)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| DataOnly | 可选 | boolean | 如果该属性值为 **True** ，则返回不带 WPS XML 标记的 XML 的文本。默认设置为 **False** 。 |

## 返回值

string

## 示例


```JavaScript
/*本示例显示所选区域中的 XML 文本。*/
function test() {
    alert(Selection.Range.XML())
}
```


```JavaScript
/*本示例将活动文档的主文章文档中的 XML 文本插入到新文档中。*/
function test() {
    let strXML = ActiveDocument.Content.XML(false)
    Documents.Add()
    Selection.TypeText(strXML)
}
```
