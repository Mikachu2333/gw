# Characters.Last

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表集合中的最后一个字符。



## 语法

express.**Last**

express   一个代表 **Characters** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示所选内容中最后一个字符的文本内容。*/
function test() {
    alert(Application.Selection.Characters.Last.Text)
}
```


```JavaScript
/*本示例删除所选内容的最后一个字符。*/
function test() {
    Application.Selection.Characters.Last.Delete()
}
```
