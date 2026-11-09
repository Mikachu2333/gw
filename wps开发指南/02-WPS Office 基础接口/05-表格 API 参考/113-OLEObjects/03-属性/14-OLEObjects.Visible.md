# OLEObjects.Visible

返回或设置一个 **Boolean** 值，它确定对象是否可见。可读写。



## 语法

express.**Visible**

express   一个代表 **OLEObjects** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例显示活动工作表中所有 OLE 对象是否可见。*/
function test() {
    alert(ActiveSheet.OLEObjects().Visible)
}
```


```JavaScript
/*下例在第一个工作表上隐藏所有 OLE 对象。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects().Visible = false
}
```
