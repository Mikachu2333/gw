# PictureFormat.IncrementContrast

按指定数值更改图片的对比度。



## 语法

express.**IncrementContrast(Increment)**

express   一个代表 **PictureFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定图片的 **Contrast** 属性值的改变量。正值表示对比度增大，负值表示对比度减小。 |

## 返回值

void

## 说明


可以使用 **[Contrast](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/Contrast)** 属性设置图片的绝对对比度。

图片的对比度调整不能超出 **Contrast** 属性的上下限。例如，如果将 **Contrast** 属性初始设为 0.9，并指定 **Increment** 参数为 0.3，则最后的对比度不是 1.2，而是 **Contrast** 属性的上限，即 1.0。



## 示例


```JavaScript
/*本示例对活动演示文稿第一张幻灯片上还没有设置为最大对比度的所有图片增加对比度。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    for (let i = 1; i <= slide.Shapes.Count; i++) {
        let shape = slide.Shapes.Item(i)
        if (shape.Type == msoPicture) {
            shape.PictureFormat.IncrementContrast(0.1)
        }
    }
}
```


```JavaScript
/*本示例设置活动窗口选定的图片对比度。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    shape.PictureFormat.IncrementContrast(-0.2)
}
```
