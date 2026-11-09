# OLEObject.Shadow

返回或设置一个 **Boolean** 值，它确定对象是否有阴影。



## 语法

express.**Shadow**

express   一个代表 **OLEObject** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例将第一张工作表中的第一个 OLE 对象设置为有阴影。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(1).Shadow = true
}
```


```JavaScript
/*此示例显示活动工作表中的第二个 OLE 对象是否有阴影。*/
function test() {
    alert(ActiveSheet.OLEObjects(2).Shadow)
}
```
