# Shape.Height

返回或设置一个 **Single** 值，它代表对象的高度（以磅为单位）。



## 语法

express.**Height**

express   一个代表 **Shape** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示第一张工作表中第一个形状的高度。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(1)
    alert(shape.Height)
}
```


```JavaScript
/*本示例将活动工作表中第二个形状的高度缩小一半。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    shape.Height = shape.Height * 0.5
}
```
