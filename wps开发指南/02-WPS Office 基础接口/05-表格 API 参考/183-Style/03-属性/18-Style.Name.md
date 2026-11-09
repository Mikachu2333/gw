# Style.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **Style** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*首先用宏语言，然后用用户语言显示活动工作簿中的第一种样式的名称。*/
function test() {
    let sty = Application.ActiveWorkbook.Styles.Item(1)
    alert("The name of the style: " + sty.Name)
    alert("The localized name of the style: " + sty.NameLocal)
}
```


```JavaScript
/*显示活动工作簿的 Sheet1 中的默认 ListObject 对象的名称。*/
function test() {
    let wrksht = Application.ActiveWorkbook.Worksheets.Item("Sheet1")
    let oListObj = wrksht.ListObjects.Item(1)
    alert(oListObj.Name)
}
```
