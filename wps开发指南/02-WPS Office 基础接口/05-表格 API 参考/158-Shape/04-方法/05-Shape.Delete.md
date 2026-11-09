# Shape.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Shape** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将第一张工作表中的所有椭圆删除。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).AutoShapeType == msoShapeOval) {
            shapes.Item(i).Delete()
        }
    }
}
```


```JavaScript
/*本示例判断如果活动工作表中第二个形状为矩形，则删除。*/
function test() {
    let shapes = ActiveSheet.Shapes
    if (shapes.Item(2).AutoShapeType == msoShapeRectangle) {
        shapes.Item(2).Delete()
    }
}
```
