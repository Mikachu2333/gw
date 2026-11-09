# Characters.First

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表集合中的第一个字符。



## 语法

express.**First**

express   一个代表 **Characters** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示活动文档中第一个字符的文本内容。*/
function test() {
    alert(Application.ActiveDocument.Characters.First.Text)
}
```


```JavaScript
/*本示例选中活动文档中第一个字符。*/
function test() {
    Application.ActiveDocument.Characters.First.Select()
}
```
