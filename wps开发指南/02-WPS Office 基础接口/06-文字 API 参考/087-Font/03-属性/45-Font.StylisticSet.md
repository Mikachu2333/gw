# Font.StylisticSet

指明指定字体的样式集。可读/写 **[WdStylisticSet](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdStylisticSet)** 类型。



## 语法

express.**StylisticSet**

express   一个代表 **Font** 对象的变量。

## 类型

WdStylisticSet

## 说明


一些 OpenType 字体提供了样式集。样式集定义字体内要一起使用的一组字符，通常是为了获得视觉上的协调性，例如用于标题中。



## 示例


```JavaScript
/*本示例将活动文档的字体设置为“Gabriola”，然后应用“Gabriola”字体提供的第六个样式集。*/
function test() {
    ActiveDocument.Range().Font.Name = "Gabriola"
    ActiveDocument.Range().Font.StylisticSet = wdStylisticSet06
}
```


```JavaScript
/*本示例显示所选内容的字体是否使用默认样式集。*/
function test() {
    alert(Selection.Font.StylisticSet == wdStylisticSetDefault)
}
```
