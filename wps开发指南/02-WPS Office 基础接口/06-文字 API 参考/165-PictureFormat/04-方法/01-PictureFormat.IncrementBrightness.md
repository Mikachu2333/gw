# PictureFormat.IncrementBrightness

按指定数值改变图片亮度。



## 语法

express.**IncrementBrightness(Increment)**

express   一个代表 **PictureFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定图片的 **Brightness** 属性值的改变量。正值表示图片变亮，负值表示图片变暗。 |

## 返回值

void

## 说明


调整图片亮度不能超出 **Brightness** 属性的界限。例如，如果 **Brightness** 属性初始设为 0.9 并将 _Increment_ 参数指定为 0.3，则结果亮度为 1.0（ **Brightness** 属性的上限）而不是 1.2。

可用 **[Brightness](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PictureFormat/member/Brightness)** 属性设置图片的绝对亮度。



## 示例


```JavaScript
/*本示例在活动文档上创建第一个形状的副本，然后移动并变暗该副本。要执行本示例，第一个形状必须是图片或 OLE 对象。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1).Duplicate()
    shape.PictureFormat.IncrementBrightness(-0.2)
    shape.IncrementLeft(50)
    shape.IncrementTop(50)
}
```


```JavaScript
/*本示例使第一个文档上第一个内嵌的 OLE 对象变亮。*/
function test() {
    let pictureFormat = Documents.Item(1).InlineShapes.Item(1).PictureFormat
    pictureFormat.IncrementBrightness(0.3)
}
```
