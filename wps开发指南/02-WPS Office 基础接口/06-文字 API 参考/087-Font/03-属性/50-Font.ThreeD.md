# Font.ThreeD

返回 **[ThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/obj)** 对象，该对象包含指定字体的三维效果格式属性。只读。



## 语法

express.**ThreeD**

express   一个代表 **Font** 对象的变量。

## 类型

ThreeDFormat

## 示例


```JavaScript
/*本示例设置活动文档的主文档文章的字体的三维格式的轮廓线的宽度和颜色。*/
function test() {
    let threeForamt = ActiveDocument.Content.Font.ThreeD
    threeForamt.ContourWidth = 1
    threeForamt.ContourColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例设置所选内容的字体的三维格式的延伸深度和延伸颜色。*/
function test() {
    let threeForamt = Selection.Font.ThreeD
    threeForamt.Depth = 30
    threeForamt.ExtrusionColor.RGB = RGB(255, 0, 0)
}
```
