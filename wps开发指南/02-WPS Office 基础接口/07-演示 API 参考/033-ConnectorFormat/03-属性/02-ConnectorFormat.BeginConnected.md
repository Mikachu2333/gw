# ConnectorFormat.BeginConnected

决定指定连接符的始端是否与形状相连。只读。



## 语法

express.**BeginConnected**

express   一个代表 **ConnectorFormat** 对象的变量。

## 类型

MsoTriState

## 说明


 **BeginConnected** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明              |
| ------------ | --------------- |
| **msoFalse** | 指定连接符的始端与形状不相连。 |
| **msoTrue**  | 指定连接符的始端与形状相连。  |



## 示例


```JavaScript
/*本示例判断如果活动演示文稿第一张幻灯片的第三个形状作为连接符且其中一端与某个形状相连，则将连接点数目保存在变量 oldBeginConnSite 中，将对连接形状的引用保存在对象变量 oldBeginConnShape 中，然后断开该连接符与形状的连接。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.Item(3)
    if (shape.Connector) {
        let connectorFormat = shape.ConnectorFormat
        if (connectorFormat.BeginConnected) {
            let oldBeginConnSite = connectorFormat.BeginConnectionSite
            let oldBeginConnShape = connectorFormat.BeginConnectedShape
            connectorFormat.BeginDisconnect()
        }
    }
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个连接符的始端是否与形状相连。*/
function test() {
    let connectorFormat = ActiveWindow.Selection.ShapeRange.Item(1).ConnectorFormat
    alert(connectorFormat.BeginConnected == msoTrue)
}
```
