# ColorFormat.Type

返回或设置形状的颜色类型。 **[MsoColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoColorType)** 类型，只读。



## 语法

express.**Type**

express   一个代表 **ColorFormat** 对象的变量。

## 类型

MsoColorType

## 示例


```JavaScript
/*本示例显示第一个文档上第二个形状背景色的颜色类型是否为 msoColorTypeRGB。*/
function test() {
    let colorFormat = Documents.Item(1).Shapes.Item(2).Fill.BackColor
    alert(colorFormat.Type == msoColorTypeRGB)
}
```


```JavaScript
/*本示例判断活动文档中第一个形状前景色的颜色类型，并显示结果。*/
function test() {
    if (ActiveDocument.Shapes.Item(1).Fill.ForeColor.Type == msoColorTypeScheme) {
        alert("颜色由应用程序特定的方案定义。")
    } else {
        alert("其他类型")
    }
}
```
