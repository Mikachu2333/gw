# Pane.Zooms

返回一个 **[Zooms](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Zooms/obj)** 集合，该集合代表每个视图（如普通视图、大纲视图和页面视图）的缩放选项。



## 语法

express.**Zooms**

express   一个代表 **Pane** 对象的变量。

## 类型

Zooms

## 示例


```JavaScript
/*本示例将在页面视图中打开的所有窗口的显示比例设为 100%。*/
function test() {
    for (let i = 1; i <= Windows.Count; i++) {
        Windows.Item(i).ActivePane.Zooms.Item(wdPrintView).Percentage = 100
    }
}
```


```JavaScript
/*本示例设置页面视图的显示比例，使整个页面可见。*/
function test() {
    ActiveDocument.ActiveWindow.Panes.Item(1).Zooms.Item(wdPrintView).PageFit = wdPageFitFullPage
}
```
