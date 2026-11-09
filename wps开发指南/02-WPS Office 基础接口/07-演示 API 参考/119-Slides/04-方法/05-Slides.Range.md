# Slides.Range

返回一个代表 **[Slides](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slides/obj)** 集合中的幻灯片子集的 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj)** 对象。



## 语法

express.**Range(Index)**

express   一个代表 **Slides** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 要包含在范围内的各个幻灯片。可以是 **Integer** 类型的值（指定幻灯片的索引号）、 **String** 类型的值（指定幻灯片的名称），或者是包含整数或字符串的数组。如果省略此参数，则 **Range** 方法将返回指定集合中的所有对象。 |

## 返回值

SlideRange

## 说明


虽然可以使用 **Range** 方法返回任意数目的形状或幻灯片，但如果只需要返回该集合的一个成员，则使用 **Item** 方法会更为简单。例如，`Shapes(1)` 比 `Shapes.Range(1)` 简单，`Slides(2)` 比 `Slides.Range(2)` 简单。

若要指定 **Index** 的整数或字符串的数组，可以使用 JavaScript 数组。



## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片和第三张幻灯片的标题颜色。*/
function test() {
    let slideRange = ActivePresentation.Slides.Range([1,3])
    slideRange.ColorScheme.Colors(ppTitle).RGB = RGB(0, 255, 0)
}
```


```JavaScript
/*本示例设置活动演示文稿中所有幻灯片的标题颜色。*/
function test() {
    let slideRange = ActivePresentation.Slides.Range()
    slideRange.ColorScheme.Colors(ppTitle).RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例创建一个包含活动演示文稿中所有标题幻灯片的数组，并用它定义一个幻灯片范围，然后设置该范围内所有幻灯片的标题颜色。*/
function test() {
    let slides = ActivePresentation.Slides
    let titleArray = []
    for (let i = slides.Count; i > 0; i--) {
        let slide = slides.Item(i)
        if (slide.Layout == ppLayoutTitle) {
            titleArray.push(slide.SlideIndex)
        }
    }
    let slideRange = ActivePresentation.Slides.Range(titleArray)
    slideRange.ColorScheme.Colors(ppTitle).RGB = RGB(255, 123, 99)
}
```
