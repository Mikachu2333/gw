# Hyperlink.Shape

返回一个指定超链接或图表顶点的 **Shape** 对象。



## 语法

express.**Shape**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

Shape

## 说明


如果超链接不是由形状表示的，则会产生错误。



## 示例


```JavaScript
/*本示例改变形状的填充颜色，该形状代表活动文档中的第三个超链接。为使本示例能运行，超链接必须由形状表示。*/
function test() {
    Application.ActiveDocument.Hyperlinks.Item(3).Shape.Fill.ForeColor.RGB = RGB(255, 255, 0)
}
```


```JavaScript
/*本示例显示形状的名称，该形状代表活动文档中的第四个超链接。*/
function test() {
    let hyperlink = Application.ActiveDocument.Hyperlinks.Item(4)
    alert(hyperlink.Shape.Name)
}
```
