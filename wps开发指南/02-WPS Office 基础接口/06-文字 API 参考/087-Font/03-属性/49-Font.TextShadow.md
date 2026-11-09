# Font.TextShadow

返回 **[ShadowFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/obj)** 对象,该对象指明指定字体的阴影格式。



## 语法

express.**TextShadow**

express   一个代表 **Font** 对象的变量。

## 类型

ShadowFormat

## 示例


```JavaScript
/*本示例设置所选内容的字体的阴影类型和宽度。*/
function test() {
    let shadowForamt = Application.Selection.Font.TextShadow
    shadowForamt.Type = msoShadow16
    shadowForamt.Size = 2
}
```


```JavaScript
/*本示例设置活动文档的主文档文章的字体的阴影类型和阴影前景色。*/
function test() {
    let shadowForamt = ActiveDocument.Content.Font.TextShadow
    shadowForamt.Type = msoShadow11
    shadowForamt.ForeColor.RGB = RGB(255, 0, 0)
}
```
