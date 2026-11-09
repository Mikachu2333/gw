# Shape.Adjustments

返回一个 **[Adjustments](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Adjustments/obj)** 对象，它包括指定形状的所有调整操作的调整值。应用于任何代表自选图形、艺术字或连接符的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。



## 语法

express.**Adjustments**

express   一个代表 **Shape** 对象的变量。

## 类型

Adjustments

## 示例


```JavaScript
/*本示例将活动工作表上第一个形状的第一个调整值设置为 0.25。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(1)
    shape.Adjustments.Item(1, 0.25)
}
```


```JavaScript
/*本示例对活动工作表上第二个形状进行调整，并返回活动工作表上第二个形状的第二个调整值。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    shape.Adjustments.Item(1, 1.25)
    shape.Adjustments.Item(2, 2)
    alert(shape.Adjustments.Item(2))
}
```
