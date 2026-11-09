# ShapeRange.Height

返回或设置一个 **Single** 值，它代表对象的高度（以磅为单位）。



## 语法

express.**Height**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例先在第一张工作表创建ShapeRange对象，再将其高度设置为200。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range(["矩形 1", "椭圆 2"])
    shpRange.Height = 200
}
```


```JavaScript
/*本示例显示新建的ShapeRange对象中第二个形状的高度。*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range(["矩形 1", "椭圆 2"])
    alert(shpRange.Item(2).Height)
}
```
