# Font.Name

返回或设置指定对象的名称。可读写。



## 语法

express.**Name**

express   一个代表 **Font** 对象的变量。

## 类型

string

## 说明


如果包含对象的集合的 **Item** 方法采用 **Variant** 参数，则将对象名称与 **Item** 方法结合使用，以返回对对象的引用。 例如，如果形状的 **Name** 属性值为 Rectangle 2， .Shapes("Rectangle 2") 则返回对该形状的引用。



## 示例


```JavaScript
/*本示例将选定内容设置为 Arial 字体的加粗格式。*/
function test() {
    ActiveWindow.Selection.TextRange.Font.Name = "Arial"
    ActiveWindow.Selection.TextRange.Font.Bold = msoTrue
}
```


```JavaScript
/*本示例显示第三个幻灯片中第一个占位符中的字体名称。*/
function test() {
    let shape = Application.ActivePresentation.Slides(3).Shapes.Placeholders.Item(1)
    alert(shape.TextFrame.TextRange.Font.Name)
}
```
