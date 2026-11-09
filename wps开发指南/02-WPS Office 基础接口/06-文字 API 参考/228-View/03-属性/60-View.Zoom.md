# View.Zoom

返回一个 **[Zoom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Zoom/obj)** 对象，该对象代表指定视图的显示比例。



## 语法

express.**Zoom**

express   一个代表 **View** 对象的变量。

## 类型

Zoom

## 示例


```JavaScript
/*本示例将所有打开窗口的显示比例更改为 125%*/
function test() {
    for (let i = 1; i <= Windows.Count; i++) {
        Windows.Item(i).View.Zoom.Percentage = 125
    }
}
```


```JavaScript
/*本示例改变活动窗口的显示比例，以显示文本的全部宽度。*/
function test() {
    ActiveDocument.ActiveWindow.View.Zoom.PageFit = wdPageFitBestFit
}
```
