# Font.NumberForm

返回或设置 OpenType 字体的数字形式设置。可读/写 **[WdNumberForm](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdNumberForm)** 类型。



## 语法

express.**NumberForm**

express   一个代表 **Font** 对象的变量。

## 类型

WdNumberForm

## 说明


可以通过一致的高度配合文本基线（称为“内衬”）来显示 OpenType 字体中的数字，也可以通过变动高度（称为“悬挂”或“旧样式”）来显示这些数字，其中数字显示在文本基线之上或之下。使用 **NumberForm** 属性可指定是使用内衬还是旧样式来显示数字。



## 示例


```JavaScript
/*本示例将活动文档中字体的数字形式设置为“旧样式”。*/
function test() {
    ActiveDocument.Range().Font.NumberForm = wdNumberFormOldStyle
}
```


```JavaScript
/*本示例显示所选内容的 OpenType 字体的数字形式是否为wdNumberFormDefault。*/
function test() {
    alert(Selection.Font.NumberForm == wdNumberFormDefault)
}
```
