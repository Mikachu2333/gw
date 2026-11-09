# Shape.AutoShapeType

返回或设置指定的 **Shape** 对象的图形类型，该对象不是代表线条或任意多边形，而是代表自选图形。 **MsoAutoShapeType** 类型，可读写。



## 语法

express.**AutoShapeType**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoAutoShapeType

## 说明


改变一个形状的类型时，该形状保留其大小、颜色和其他属性。



## 示例


```JavaScript
/*本示例将活动文档中的所有 16 磅星形替换为 32 磅星形。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Shapes.Count; i++) {
        shape = ActiveDocument.Shapes.Item(i)
        if (shape.AutoShapeType == msoShape16pointStar) {
            shape.AutoShapeType = msoShape32pointStar
        }
    }
}
```


```JavaScript
/*本示例显示活动文档中 32 磅星形的数量。*/
function test() {
    let num = 0
    for (let i = 1; i <= ActiveDocument.Shapes.Count; i++) {
        let shape = ActiveDocument.Shapes.Item(i)
        if (shape.AutoShapeType == msoShape32pointStar) {
            num += 1
        }
    }
    alert(num)
}
```
