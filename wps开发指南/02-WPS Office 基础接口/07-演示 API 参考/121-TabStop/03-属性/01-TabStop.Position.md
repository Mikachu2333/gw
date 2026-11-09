# TabStop.Position

返回或设置指定制表位的位置（以磅为单位）。可读/写。



## 语法

express.**Position**

express   一个代表 **TabStop** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例清除活动演示文稿的第一张幻灯片的第一个形状的文本中大于一英寸（72 磅）的所有制表位。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let tabStops = shape.TextFrame.Ruler.TabStops
    for (let i = tabStops.Count; i >= 1; i--) {
        let tabStop = tabStops.Item(i)
        if (tabStop.Position > 72) {
            tabStop.Clear()
        }
    }
}
```


```JavaScript
/*本示例显示活动窗口所选形状中文本的最后一个制表位的位置。*/
function test() {
    let textFrame = ActiveWindow.Selection.ShapeRange.TextFrame
    let tabStops = textFrame.Ruler.TabStops
    alert(tabStops.Item(tabStops.Count).Position + " 磅")
}
```
