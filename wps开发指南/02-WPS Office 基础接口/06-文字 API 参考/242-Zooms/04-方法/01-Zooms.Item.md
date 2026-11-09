# Zooms.Item

返回指定的 **Zoom** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Zooms** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | WdViewType | 指定的显示比例类型。 |

## 返回值

Zoom

## 示例


```JavaScript
/*本示例显示第一个窗口上活动窗格的页面视图中并排展示的页数。*/
function test() {
    let zoom = Windows.Item(1).ActivePane.Zooms.Item(wdPrintView)
    alert(zoom.PageColumns)
}
```


```JavaScript
/*本示例设置活动窗口中活动窗格的页面视图放大倍数。*/
function test() {
    ActiveDocument.ActiveWindow.ActivePane.Zooms.Item(wdPrintView).PageFit = wdPageFitFullPage
}
```
