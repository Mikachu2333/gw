# PictureFormat.IncrementContrast

按指定值改变图片的对比度。



## 语法

express.**IncrementContrast(Increment)**

express   一个代表 **PictureFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定图片 **Contrast** 属性的改变量。正值增加对比度，负值降低对比度。 |

## 返回值

void

## 说明


可用 **Contrast** 属性设置图片的绝对对比度。

调整图片的对比度不能超出 **Contrast** 属性的上下限。例如，如果 **Contrast** 属性初始设为 0.9 并将 _Increment_ 参数指定为 0.3，则结果对比度为 1.0（ **Contrast** 属性的上限）而不是 1.2。



## 示例


```JavaScript
/*本示例为活动文档中未设置为最大对比度的所有嵌入式 OLE 对象增加对比度。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Shapes.Count; i++) {
        let shape = ActiveDocument.Shapes.Item(i)
        if (shape.Type == msoEmbeddedOLEObject) {
            shape.PictureFormat.IncrementContrast(0.1)
        }
    }
}
```


```JavaScript
/*本示例降低第一个文档上第一个内嵌形状（图片或 OLE 对象）的对比度。*/
function test() {
    let pictureFormat = Documents.Item(1).InlineShapes.Item(1).PictureFormat
    pictureFormat.IncrementContrast(-0.3)
}
```
