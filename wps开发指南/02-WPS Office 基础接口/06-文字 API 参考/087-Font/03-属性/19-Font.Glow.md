# Font.Glow

返回 **GlowFormat** 对象，该对象代表指定范围文本使用的字体的发光格式。只读。



## 语法

express.**Glow**

express   一个代表 **Font** 对象的变量。

## 类型

GlowFormat

## 示例


```JavaScript
/*本示例设置活动文档的主文档文章中字体的发光效果的颜色和辐射长度。*/
function test() {
    let glowFormat = ActiveDocument.Content.Font.Glow
    glowFormat.Color.RGB = RGB(255, 0, 0)
    glowFormat.Radius = 3
}
```


```JavaScript
/*本示例显示所选字体的发光效果的透明度。*/
function test() {
    alert(Selection.Font.Glow.Transparency)
}
```
