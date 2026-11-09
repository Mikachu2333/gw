# Ruler.TabStops

返回一个 **[TabStops](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TabStops/obj)** 集合，该集合代表指定文本的指标位。只读。



## 语法

express.**TabStops**

express   一个代表 **Ruler** 对象的变量。

## 类型

TabStops

## 示例


```JavaScript
/*本示例将具有两个文本列的幻灯片添加到活动演示文稿中，为新幻灯片上的标题设置左对齐的制表位，将标题框左对齐，并使用刚刚创建的制表位分配标题文本。*/
function test() {
    let shapes = ActivePresentation.Slides.Add(2, ppLayoutTwoColumnText).Shapes
    let textFrame = shapes.Title.TextFrame
    textFrame.Ruler.Levels.Item(1).FirstMargin = 0
    textFrame.Ruler.TabStops.Add(ppTabStopLeft, 310)
    textFrame.TextRange.ParagraphFormat.Alignment = ppAlignLeft
    textFrame.TextRange.Text = "first column\tsecond column"
}
```


```JavaScript
/*本示例遍历活动窗口所选形状中文本的所有制表位，显示所有居中式制表位的位置。*/
function test() {
    let textFrame = ActiveWindow.Selection.ShapeRange.TextFrame
    let tabStops = textFrame.Ruler.TabStops
    for (let i = tabStops.Count; i >= 1; i--) {
        let tabStop = tabStops.Item(i)
        if (tabStop.Type == ppTabStopCenter) {
            alert(tabStops.Item(i).Position + " 磅")
        }
    }
}
```
