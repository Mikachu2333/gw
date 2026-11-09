# GroupShapes.Range

返回一个 **ShapeRange** 对象。



## 语法

express.**Range(Index)**

express   一个代表 **GroupShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要包含在范围中的各个形状。可以是指定形状的索引号的 **Integer** 、指定形状名称的 **String** ，或者是包含整数或字符串的数组。如果省略此参数，则 **Range** 方法将返回指定集合中的所有对象。 |

## 返回值

ShapeRange

## 说明


虽然可以使用 **Range** 方法返回任意数目的形状或幻灯片，但如果只需要返回该集合的一个成员，则使用 **Item** 方法会更为简单。例如，`Shapes(1)` 比 `Shapes.Range(1)` 简单，`Slides(2)` 比 `Slides.Range(2)` 简单。

若要为 **Index** 指定一个整数或字符串数组，可以使用 **Array** 函数。例如，以下指令返回用名称指定的两个形状。

```JavaScript
let shapeArray = ["椭圆 4", "矩形 5"]
let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range(shapeArray)
```



## 示例


```JavaScript
/*本示例设置活动窗口所选形状组中第一个形状的前景填充色。*/
function test() {
    let groupShapes = ActiveWindow.Selection.ShapeRange.GroupItems
    groupShapes.Range(1).Fill.ForeColor.RGB = RGB(0, 255, 255)
}
```


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片的第一个形状组中第一个形状内的文本。*/
function test() {
    let groupShapes = ActivePresentation.Slides.Item(1).Shapes.Item(1).GroupItems
    groupShapes.Range(1).TextFrame2.TextRange.Text = "example"
}
```
