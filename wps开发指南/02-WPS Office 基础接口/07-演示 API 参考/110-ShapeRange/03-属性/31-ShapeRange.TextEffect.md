# ShapeRange.TextEffect

返回一个 **[TextEffectFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/obj)** 对象，该对象包含指定形状的文本效果格式属性。只读。



## 语法

express.**TextEffect**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

TextEffectFormat

## 说明


适用于代表艺术字的 **Shape** 或 **ShapeRange** 对象。



## 示例


```JavaScript
/*本示例判断如果活动演示文稿第一张幻灯片上第三个形状为艺术字，则将字体样式设置为粗体。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range(3)
    if (shapeRange.Type == msoTextEffect) {
        shapeRange.TextEffect.FontBold = msoTrue
    }
}
```


```JavaScript
/*本示例显示活动窗口上选中的艺术字的字体大小。*/
function test() {
    alert(ActiveWindow.Selection.ShapeRange.TextEffect.FontSize)
}
```
