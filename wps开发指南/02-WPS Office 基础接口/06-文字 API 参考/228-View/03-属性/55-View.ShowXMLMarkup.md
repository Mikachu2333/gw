# View.ShowXMLMarkup

返回一个 **Long** 类型的值，该值表示是否在文档中显示 XML 标记。



## 语法

express.**ShowXMLMarkup**

express   一个代表 **View** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果为 **msoTrue** ，则表示显示标记。如果为 **msoFalse** ，则表示隐藏标记。使用 **wdToggle** ，可在显示和隐藏 XML 标记之间切换。



## 示例


```JavaScript
/*本示例在活动文档中切换显示和隐藏 XML 标记。*/
function test() {
    ActiveDocument.ActiveWindow.View.ShowXMLMarkup = wdToggle
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格是否展示 XML 标记。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ShowXMLMarkup === msoTrue)
}
```
