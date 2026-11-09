# ThreeDFormat.ContourWidth

返回或设置 **ThreeDFormat** 对象的轮廓线宽度。可读/写 **Single** 类型。



## 语法

express.**ContourWidth**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*此示例将第一张工作表上第一个形状的三维轮廓宽度设置成10磅。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(1)
    shape.ThreeD.ContourWidth = 10
}
```


```JavaScript
/*本示例显示活动工作表上第二个形状的三维轮廓宽度。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.ThreeD.ContourWidth)
}
```
