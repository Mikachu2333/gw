# ShapeRange.Connector

如果指定的形状是连接符，则此属性为 **True** 。 **MsoTriState** 类型，只读。



## 语法

express.**Connector**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例判断第一张工作表新建的shpRange对象是否是连接符。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([3])
    if (shpRange.Connector) {
        alert("是连接符")
    } else {
        alert("不是连接符")
    }
}
```


```JavaScript
/*本示例判断如果活动工作表新建的shpRange对象是连接符，则删除。*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range([3, 4])
    if (shpRange.Connector) {
        shpRange.Delete()
    }
}
```
