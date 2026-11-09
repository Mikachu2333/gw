# Border.Inside

如果指定对象可以使用内部边框，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**Inside**

express   一个代表 **Border** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断如果所选内容支持内部边框（即选定了多个段落或单元格），则为其设置单线型内部边框。*/
function test() {
    let borders = Application.Selection.Borders
    for (let i = 1; i <= borders.Count; i++) {
        if (borders.Item(i).Inside) {
            borders.Item(i).LineStyle = wdLineStyleSingle
        }
    }
}
```


```JavaScript
/*本示例显示活动文档上第一个段落的上边框是否可以使用内部边框。*/
function test() {
    let border = Application.ActiveDocument.Paragraphs.Item(1).Borders.Item(wdBorderBottom)
    alert(border.Inside)
}
```
