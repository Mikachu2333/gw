# TabStop 对象

代表单个制表位。 **TabStop** 对象是 **[TabStops](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TabStops/obj)** 集合的成员。 **TabStops** 集合代表标尺上的所有制表位。

## 说明


使用 **TabStops** (_index_) 返回单个 **TabStop** 对象，其中 _index_ 是制表位索引号。


## 示例


```JavaScript
/*本示例清除活动演示文稿的第一张幻灯片的第一个形状中文本的第一个制表位。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let tabStops = shape.TextFrame.Ruler.TabStops
    tabStops.Item(1).Clear()
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

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TabStop/member/Clear) | 从标尺中清除指定的制表位并将其从 **TabStops** 集合中删除。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TabStop/member/Position) | 返回或设置指定制表位的位置（以磅为单位）。可读/写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TabStop/member/Type) | 代表制表位的格式。可读/写。 |