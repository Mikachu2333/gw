# ShadowFormat.IncrementOffsetX

按指定磅值更改阴影的水平偏移量。



## 语法

express.**IncrementOffsetX(Increment)**

express   一个代表 **ShadowFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定阴影的水平偏移量（以磅为单位）。正值表示阴影右移，负值表示阴影左移。 |

## 返回值

void

## 说明


可以使用 **[OffsetX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShadowFormat/member/OffsetX)** 属性设置阴影的绝对水平偏移量。



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片上第三个形状的阴影左移 3 磅。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Item(3).Shadow.IncrementOffsetX(-3)
}
```


```JavaScript
/*本示例向活动窗口选定的第一张幻灯片中添加一个菱形，并为其添加阴影格式，然后将阴影右移 5 磅。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let shadowFormat = slide.Shapes.AddShape(msoShapeDiamond, 20, 20, 80, 100).Shadow
    shadowFormat.Visible = msoTrue
    shadowFormat.Type = msoShadow18
    shadowFormat.IncrementOffsetX(5)
}
```
