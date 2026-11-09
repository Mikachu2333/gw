# Font.Reflection

返回一个 **[ReflectionFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ReflectionFormat/obj)** 对象，该对象代表形状的反射格式。只读。



## 语法

express.**Reflection**

express   一个代表 **Font** 对象的变量。

## 类型

ReflectionFormat

## 示例


```JavaScript
/*本示例设置选中内容的字体的反射图像的大小和类型。*/
function test() {
    let font = Selection.Font
    font.Reflection.Size = 30
    font.Reflection.Type = msoReflectionType6
}
```


```JavaScript
/*本示例设置活动文档的主文档文章的字体的反射图像的类型、透明度和与字体的分离量。*/
function test() {
    let font = ActiveDocument.Content.Font
    font.Reflection.Type = msoReflectionType2
    font.Reflection.Transparency = 0.2
    font.Reflection.Offset = 5
}
```
