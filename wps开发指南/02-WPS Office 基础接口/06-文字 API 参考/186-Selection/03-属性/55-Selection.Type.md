# Selection.Type

返回选择类型。 **[WdSelectionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSelectionType)** 类型，只读。



## 语法

express.**Type**

express   一个代表 **Selection** 对象的变量。

## 类型

WdSelectionType

## 示例


```JavaScript
/*本示例判断如果所选内容不是插入点，则将所选内容的格式设为阴文。*/
function test() {
    if (Selection.Type != wdSelectionIP) {
        Selection.Font.Engrave = msoTrue
    } else {
        alert("You need to select some text.")
    }
}
```


```JavaScript
/*本示例显示第一个窗口的选择类型是否为wdNoSelection。*/
function test() {
    alert(Windows.Item(1).Selection.Type == wdNoSelection)
}
```
