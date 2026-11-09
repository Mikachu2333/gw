# DocumentFields.Add

新增公文域。



## 语法

express.**Add(Name, Range, Hidden, PrintOut, ReadOnly)**

express   一个代表 **DocumentFields** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 公文域名称。 |
| Range | 可选 | any | 公文域的范围。 |
| Hidden | 可选 | any | 是否隐藏公文域，默认值 **False** 。 |
| PrintOut | 可选 | any | 是否打印该公文域，默认值 **True** 。 |
| ReadOnly | 可选 | any | 该公文域是否为只读类型，默认值 **False** 。 |

## 返回值

DocumentField

## 示例


```JavaScript
/*本示例在活动文档上新增公文域。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    ActiveDocument.DocumentFields.Add("example_1", range, false, true, false)
}
```


```JavaScript
/*本示例在第一个文档上新建公文域，并显示该文档上公文域的数量。*/
function test() {
    let documentFields = Documents.Item(1).DocumentFields
    documentFields.Add("example_2", Selection.Range)
    alert(documentFields.Count)
}
```
