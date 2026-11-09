# Shape.Cut

将对象剪切到剪贴板。



## 语法

express.**Cut()**

express   一个代表 **Shape** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将第一张工作表中的第一个形状剪切到剪贴板。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    shapes.Item(1).Cut()
}
```


```JavaScript
/*本示例判断如果活动工作表中第二个形状为六角星，则剪切到剪贴板。*/
function test() {
    let shapes = ActiveSheet.Shapes
    if (shapes.Item(2).AutoShapeType == msoShape6pointStar) {
        shapes.Item(2).Cut()
    }
}
```
