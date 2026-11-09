# Style.AutomaticallyUpdate

如果样式根据选定内容重新定义，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutomaticallyUpdate**

express   一个代表 **Style** 对象的变量。

## 类型

boolean

## 说明


如果将 **AutomaticallyUpdate** 属性设置为 **False** ，则 WPS 会在根据选定内容重新定义样式之前，提示确认。在将样式应用于具有相同样式、但手动格式设置不同的选定内容时，可以重新定义样式。AutomaticallyUpdate 属性仅适用于段落样式。



## 示例


```JavaScript
/*本示例创建名为“Style1”的样式，该样式不需进行确认即可重新定义。*/
function test() {
    let document = Documents.Add()
    let style = document.Styles.Add("Style1")
    style.BaseStyle = document.Styles.Item(wdStyleNormal)
    style.ParagraphFormat.LineSpacingRule = wdLineSpaceDouble
    style.AutomaticallyUpdate = true
}
```


```JavaScript
/*本示例显示所选区域的样式是否需要重新定义。*/
function test() {
    alert(Selection.Range.Style.AutomaticallyUpdate)
}
```
