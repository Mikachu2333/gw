# Shapes.AddShape

创建一个自选形状。返回一个代表新自选形状的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。



## 语法

express.**AddShape(Type, Left, Top, Width, Height)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | MsoAutoShapeType | 指定要创建的自选形状的类型。 |
| Left | 必选 | number（float 精度） | 自选形状左边缘相对于幻灯片左边缘的位置（以磅为单位）。 |
| Top | 必选 | number（float 精度） | 自选形状上边缘相对于幻灯片上边缘的位置（以磅为单位）。 |
| Width | 必选 | number（float 精度） | 自选形状的宽度（以磅为单位）。 |
| Height | 必选 | number（float 精度） | 自选形状的高度（以磅为单位）。 |

## 返回值

Shape

## 说明


若要更改所添加的自选形状的类型，可设置其 **AutoShapeType** 属性。



## 示例


```JavaScript
/*本示例在活动演示文稿的第一张幻灯片中添加矩形。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.AddShape(msoShapeRectangle, 50, 50, 100, 200)
}
```


```JavaScript
/*本示例在第一个演示文稿的第二张幻灯片中添加一个等腰三角形,并显示其名称。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(2)
    let shape = slide.Shapes.AddShape(msoShapeIsoscelesTriangle, 100, 100, 100, 200)
    alert(shape.Name)
}
```
