# TextColumns.LineBetween

如果 **TextColumns** 集合中的所有栏之间显示垂直分隔线，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**LineBetween**

express   一个代表 **TextColumns** 对象的变量。

## 类型

number（int4 精度）

## 说明


 **LineBetween** 属性可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。



## 示例


```JavaScript
/*本示例遍历活动文档上所有节，判断如果节中的文本栏是用垂直分隔线分开的，则显示一个消息框。*/
function test() {
    let sections = ActiveDocument.Sections
    for (let i = 1; i <= sections.Count; i++) {
        if (sections.Item(i).PageSetup.TextColumns.LineBetween == msoTrue) {
            alert(`The columns in section ${i} contain lines.`)
        }
    }
}
```


```JavaScript
/*本示例将活动文档的所有栏之间的垂直分隔线设置为不可见。*/
function test() {
    let textColumns = ActiveDocument.PageSetup.TextColumns
    textColumns.LineBetween = msoFalse
}
```
