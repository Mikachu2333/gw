# ConnectorFormat.EndConnected

决定指定连接符的末端是否连接到形状。只读。



## 语法

express.**EndConnected**

express   一个代表 **ConnectorFormat** 对象的变量。

## 类型

MsoTriState

## 说明


 **EndConnected** 属性值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明               |
| ------------ | ---------------- |
| **msoFalse** | 指定的连接符的末端不连接到形状。 |
| **msoTrue**  | 指定的连接符的末端连接到形状。  |



## 示例


```JavaScript
/*本示例判断如果当前演示文稿中第一张幻灯片上第三个形状所表示的连接符的末端连接到一个形状，则将连接站点号存储在变量 oldEndConnSite中，将对连接形状的引用存储在对象变量 oldEndConnShape中，然后断开连接符的末尾与形状的连接。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.Item(3)
    if (shape.Connector) {
        let connectorFormat = shape.ConnectorFormat
        if (connectorFormat.EndConnected) {
            let oldEndConnSite = connectorFormat.EndConnectionSite
            let oldEndConnShape = connectorFormat.EndConnectedShape
            connectorFormat.EndDisconnect()
        }
    }
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个连接符的末端是否与形状相连。*/
function test() {
    let connectorFormat = ActiveWindow.Selection.ShapeRange.Item(1).ConnectorFormat
    alert(connectorFormat.EndConnected == msoTrue)
}
```
