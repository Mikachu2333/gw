# Shape.Connector

如果指定的形状是连接符，则此属性为 **True** 。 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 类型，只读。



## 语法

express.**Connector**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例删除了活动工作表中所有的连接符。*/
function test() {
    let shapes = ActiveSheet.Shapes
    for (let i = shapes.Count; i >= 1; i--) {
        if (shapes.Item(i).Connector) {
            shapes.Item(i).Delete()
        }
    }
}
```


```JavaScript
/*本示例判断第一张工作表的第三个形状是否是连接符。*/
function test() {
    let shape = Application.Worksheets.Item(1).Shapes.Item(3)
    if (shape.Connector) {
        alert("是连接符")
    }else {
        alert("不是连接符")
    }
}
```
