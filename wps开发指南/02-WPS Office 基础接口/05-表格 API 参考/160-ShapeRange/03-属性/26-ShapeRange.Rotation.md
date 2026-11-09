# ShapeRange.Rotation

返回或设形状的旋转角度（以度为单位）。 **Single** 型，可读写。



## 语法

express.**Rotation**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（float 精度）

## 说明


旋转量始终四舍五入到最接近的整数。



## 示例


```JavaScript
/*本示例将第一张工作表中新建的ShapeRange对象的旋转角度设置为 30 度。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1, 2])
    shpRange.Rotation = 30
}
```


```JavaScript
/*本示例将活动工作表中新建的ShapeRange对象逆时针旋转 10 度。*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range([2, 3])
    shpRange.Rotation -= 10
}
```
