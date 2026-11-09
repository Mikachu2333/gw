# Paragraphs.OpenUp

为指定段落设置 12 磅的段前间距。



## 语法

express.**OpenUp()**

express   一个代表 **Paragraphs** 对象的变量。

## 返回值

void

## 说明


您还可以使用 **[SpaceBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/SpaceBefore)** 属性设置段前间距。



## 示例


```JavaScript
/*本示例为活动文档所有段落设置 12 磅的段前间距。*/
function test() {
    ActiveDocument.Paragraphs.OpenUp()
}
```


```JavaScript
/*本示例为所选段落设置 12 磅的段前间距。*/
function test() {
    Selection.Paragraphs.OpenUp()
}
```
