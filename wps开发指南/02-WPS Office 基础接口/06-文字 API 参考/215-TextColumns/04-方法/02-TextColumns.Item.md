# TextColumns.Item

返回集合中的单个 **TextColumn** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **TextColumns** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

TextColumn

## 示例


```JavaScript
/*本示例显示活动文档的第一节的第一个文本栏后面的间距。*/
function test() {
    let textColumn = ActiveDocument.Sections.Item(1).PageSetup.TextColumns.Item(1)
    alert(textColumn.SpaceAfter + " 磅")
}
```


```JavaScript
/*本示例设置活动文档的第二个文本栏的宽度。*/
function test() {
    let textColumn = ActiveDocument.PageSetup.TextColumns.Item(2)
    textColumn.Width = 175
}
```
