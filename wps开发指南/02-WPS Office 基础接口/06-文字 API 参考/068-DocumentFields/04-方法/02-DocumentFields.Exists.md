# DocumentFields.Exists

判断指定的公文域是否存在。如果存在，则返回 **True** 。



## 语法

express.**Exists(Name)**

express   一个代表 **DocumentFields** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 公文域的名称。 |

## 返回值

boolean

## 示例


```JavaScript
/*本示例显示活动文档上是否存在名为“example1”的公文域。*/
function test() {
    alert(ActiveDocument.DocumentFields.Exists("example1"))
}
```


```JavaScript
/*本示例判断活动文档是否存在名为“example3”的公文域，如果存在，则显示公文域的数量；如果不存在，则添加名为“example3”的公文域。*/
function test() {
    let documentFields = ActiveDocument.DocumentFields
    if (documentFields.Exists("example3")) {
        alert(documentFields.Count)
    } else {
        let range = ActiveDocument.Paragraphs.Item(1).Range
        documentFields.Add("example3", range)
    }
}
```
