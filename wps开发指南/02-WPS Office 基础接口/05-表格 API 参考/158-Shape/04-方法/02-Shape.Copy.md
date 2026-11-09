# Shape.Copy

将对象复制到剪贴板。



## 语法

express.**Copy()**

express   一个代表 **Shape** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将第一张工作表中的第二个形状复制到剪贴板。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    shapes.Item(2).Copy()
}
```


```JavaScript
/*本示例判断如果活动工作表中第三个形状为平行四边形，则复制到剪贴板。*/
function test() {
    let shapes = ActiveSheet.Shapes
    if (shapes.Item(3).AutoShapeType == msoShapeParallelogram) {
        shapes.Item(3).Copy()
    }
}
```
