# Pane.Pages

返回一个 **[Pages](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pages/obj)** 集合，该集合代表文档中的页面。



## 语法

express.**Pages**

express   一个代表 **Pane** 对象的变量。

## 类型

Pages

## 示例


```JavaScript
/*本示例从活动文档左上角 0.5 英寸处穿过页面向页面右下角（距页面右边缘和下边缘 0.5 英寸处）创建一条线。*/
function test() {
    let page = ActiveDocument.ActiveWindow.Panes.Item(1).Pages.Item(1)
    //Add new line to document
    ActiveDocument.Shapes.AddLine(InchesToPoints(0.5), InchesToPoints(0.5), page.Width - InchesToPoints(0.5), page.Height - InchesToPoints(0.5))
}
```


```JavaScript
/*本示例显示活动窗格最后一页的宽度。*/
function test() {
    alert(ActiveWindow.ActivePane.Pages.Item(ActiveWindow.ActivePane.Pages.Count).Width)
}
```
