# ShapeRange.Connector

确定指定的形状是否为连接符。只读。



## 语法

express.**Connector**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoTriState

## 说明


 **Connector** 属性的值可以是下列 **MsoTriState** 常量之一。

| 常量           | 说明          |
| ------------ | ----------- |
| **msoFalse** | 指定的形状不是连接符。 |
| **msoTrue**  | 指定的形状是连接符。  |



## 示例


```JavaScript
/*本示例删除活动演示文稿第一张幻灯片上所有的连接符。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    for (let i = shapes.Count; i >= 1; i--) {
        let shapeRange = shapes.Range(i)
        if (shapeRange.Connector == msoTrue) {
            shapeRange.Delete()
        }
    }
}
```


```JavaScript
/*本示例显示活动窗口上选中的形状是否为连接符。*/
function test() {
    alert(ActiveWindow.Selection.ShapeRange.Connector == msoTrue)
}
```
