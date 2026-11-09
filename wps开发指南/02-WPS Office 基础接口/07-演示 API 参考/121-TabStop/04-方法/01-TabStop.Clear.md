# TabStop.Clear

从标尺中清除指定的制表位并将其从 **TabStops** 集合中删除。



## 语法

express.**Clear()**

express   一个代表 **TabStop** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例清除活动演示文稿的第一张幻灯片的第一个形状中文本的所有制表位。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let tabStops = shape.TextFrame.Ruler.TabStops
    for (let i = tabStops.Count; i >= 1; i--) {
        tabStops.Item(i).Clear()
    }
}
```


```JavaScript
/*本示例遍历活动窗口所选形状中文本的所有制表位，删除所有居中式制表位。*/
function test() {
    let textFrame = ActiveWindow.Selection.ShapeRange.TextFrame
    let tabStops = textFrame.Ruler.TabStops
    for (let i = tabStops.Count; i >= 1; i--) {
        let tabStop = tabStops.Item(i)
        if (tabStop.Type == ppTabStopCenter) {
            tabStops.Item(i).Clear()
        }
    }
}
```
