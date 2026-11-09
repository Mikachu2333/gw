# TabStops 对象

标尺上所有 **[TabStop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TabStop/obj)** 对象的集合。

## 说明


使用 [ **TabStops** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Ruler/member/TabStops) 属性返回 **TabStops** 集合。


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
使用 [ **Add** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TabStops/member/Add) 方法创建制表位并添加到 **TabStops** 集合。



```JavaScript
/*本示例向活动演示文稿的第一张幻灯片的第一个形状中的文本添加制表位。新的制表位将位于距标尺左边缘 2 英寸（144 磅）的位置，并将左对齐。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let tabStops = shape.TextFrame.Ruler.TabStops
    tabStops.Add(ppTabStopLeft, 144)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TabStops/member/Add) | 创建一个制表位并将其添加到 **TabStops** 集合中。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TabStops/member/Item) | 从指定的 **TabStops** 集合中返回单个制表位。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TabStops/member/Count) | 返回指定集合中的对象数。只读。 |
| [DefaultSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TabStops/member/DefaultSpacing) | 返回或设置指定文本的默认制表位间隔（以磅为单位）。可读/写。 |