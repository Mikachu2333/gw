# PictureFormat.IncrementBrightness

按指定数值更改图片的亮度。



## 语法

express.**IncrementBrightness(Increment)**

express   一个代表 **PictureFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定图片 **Brightness** 属性值的改变量。正值增加图片亮度；负值降低图片亮度。 |

## 返回值

void

## 说明


可以使用 **[Brightness](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/Brightness)** 属性设置图片的绝对亮度。

图片的亮度调整不能超出 **Brightness** 属性的上下限。例如，如果将 **Brightness** 属性初始设为 0.9，并指定 **Increment** 参数为 0.3，则最后的亮度不是 1.2，而是 **Brightness** 属性的上限，即 1.0。



## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片上第一个形状的亮度，并移动该形状。要执行本示例，第一个形状必须是图片或 OLE 对象。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.PictureFormat.IncrementBrightness(-0.2)
    shape.IncrementLeft(50)
    shape.IncrementTop(50)
}
```


```JavaScript
/*本示例设置活动窗口选定的形状集合亮度。要执行本示例，选定的形状必须是图片或 OLE 对象。*/
function test() {
    let shapeRange = ActiveWindow.Selection.ShapeRange
    shapeRange.PictureFormat.IncrementBrightness(0.2)
}
```
