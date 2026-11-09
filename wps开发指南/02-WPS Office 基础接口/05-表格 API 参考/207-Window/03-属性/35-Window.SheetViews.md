# Window.SheetViews

返回指定窗口的 **[SheetViews](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/SheetViews)** 对象。只读。



## 语法

express.**SheetViews**

express   一个代表 **Window** 对象的变量。

## 类型

SheetViews

## 示例


```JavaScript
/*本示例显示当前窗口的视图数量。*/
function test() {
    alert(ActiveWindow.SheetViews.Count)
}
```


```JavaScript
/*本示例设置活动窗口的第一个视图的名称为 “MyView” ，并显示出来。*/
function test() {
    let sheetview = ActiveWindow.SheetViews.Item(1)
    sheetview.Name = "MyView"
    alert(sheetview.Name)
}
```
