# Shape.Rotation

返回或设置形状的旋转角度（以度为单位）。 **Single** 型，可读写。



## 语法

express.**Rotation**

express   一个代表 **Shape** 对象的变量。

## 类型

number（float 精度）

## 说明


旋转量始终四舍五入到最接近的整数。



## 示例


```JavaScript
/*本示例将活动工作表的第二个形状的旋转角度设置为 30 度。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    shape.Rotation = 30
}
```


```JavaScript
/*本示例将第一个工作表的第一个形状逆时针旋转10度。*/
function test() {
    let shape = Application.Worksheets.Item(1).Shapes.Item(1)
    shape.Rotation = shape.Rotation - 10
}
```
