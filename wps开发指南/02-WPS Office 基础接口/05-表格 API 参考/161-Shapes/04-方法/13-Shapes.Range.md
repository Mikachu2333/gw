# Shapes.Range

返回一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象，它代表 **Shapes** 集合中形状的子集。



## 语法

express.**Range(Index)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 包含在该区域中的各单个形状。可以是指定形状索引号的整数、指定形状名称的字符串，也可以是包含整数或字符串的数组。 |

## 返回值

ShapeRange

## 说明


虽然使用 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 属性可返回任意数量的形状，但如果要返回集合中单个成员时，用 [ **Item** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/Item) 方法更加简单。例如，`Shapes(1)` 比 `Shapes.Range(1)` 简单。

可为 **Index** 指定整数或字符串数组。例如，以下指令返回用名称指定的两个形状。

```JavaScript
let arShapes = ["Oval 4", "Rectangle 5"]
let objRange = ActiveSheet.Shapes.Range(arShapes)
```

在 ET 中，不能用此属性返回包含工作表上的所有 [ **Shape** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj) 对象的 [ **ShapeRange** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj) 对象。如果要达到该目的，可用下列代码：

```JavaScript
Worksheets.Item(1).Shapes.SelectAll() //select all shapes 
let sr = Selection.ShapeRange //create ShapeRange
```



## 示例


```JavaScript
/*本示例设置第一张工作表中第一个形状和第三个形状的填充图案。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1, 3])
    shpRange.Fill.Patterned(msoPatternHorizontalBrick)
}
```


```JavaScript
/*本示例设置活动工作表中的第一个形状的填充颜色为红色。*/
function test() {
    let shapes = ActiveSheet.Shapes
    let range = shapes.Range(1)
    range.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```
