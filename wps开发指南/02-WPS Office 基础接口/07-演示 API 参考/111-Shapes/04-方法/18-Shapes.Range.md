# Shapes.Range

返回一个代表 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/obj)** 集合中的形状子集的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象。



## 语法

express.**Range(Index)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 要包含在范围中的各个形状。可以是指定形状的索引号的 **Integer** 、指定形状名称的 **String** ，或者是包含整数或字符串的数组。如果省略此参数，则 **Range** 方法将返回指定集合中的所有对象。 |

## 返回值

ShapeRange

## 说明


虽然可以使用 **Range** 方法返回任意数目的形状或幻灯片，但如果只需要返回该集合的一个成员，则使用 **Item** 方法会更为简单。例如，`Shapes(1)` 比 `Shapes.Range(1)` 简单，`Slides(2)` 比 `Slides.Range(2)` 简单。

若要为 **Index** 指定一个整数或字符串数组，可以使用 JavaScript 数组。



## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片中第一个形状和第三个形状的填充图案。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Range([1, 3]).Fill.Patterned(msoPatternHorizontalBrick)
}
```


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片中名为 Oval 4 和 Rectangle 5 的形状的填充图案。*/
function test() {
    let array = ["Oval 4", "Rectangle 5"]
    let ShapeRange = ActivePresentation.Slides.Item(1).Shapes.Range(array)
    ShapeRange.Fill.Patterned(msoPatternHorizontalBrick)
}
```


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片中所有形状的填充图案。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Range().Fill.Patterned(msoPatternHorizontalBrick)
}
```


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片中第一个形状的填充图案。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shapeRange = slide.Shapes.Range(1)
    shapeRange.Fill.Patterned(msoPatternHorizontalBrick)
}
```


```JavaScript
/*本示例创建一个包含第一张幻灯片中所有自选图形的数组，并用它定义一个形状范围，然后在该范围内水平地分布所有这些形状。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    //Continues if there are shapes on the slide
    if (shapes.Count > 1) {
        let numAutoShapes = 0
        let autoShpArray = []
        for (let i = shapes.Count; i > 0; i--) {
            //Counts the number of AutoShapes on the Slide
            if (shapes.Item(i).Type === msoAutoShape) {
                numAutoShapes++
                autoShpArray.push(shapes.Item(i).Name)
            }
        }

        //Adds AutoShapes to ShapeRange
        if (numAutoShapes > 1) {
            let asRange = shapes.Range(autoShpArray)
            asRange.Distribute(msoDistributeHorizontally, false)
        }
    }
}
```
