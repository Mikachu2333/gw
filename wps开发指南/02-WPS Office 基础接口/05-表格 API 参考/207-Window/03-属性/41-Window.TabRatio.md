# Window.TabRatio

返回或设置工作簿中工作表标签区域的宽度与窗口水平滚动条的宽度比例（可为 0 到 1 之间的数字；默认值为 0.6）。 **Double** 类型，可读写。



## 语法

express.**TabRatio**

express   一个代表 **Window** 对象的变量。

## 类型

number（double 精度）

## 说明


当 **[DisplayWorkbookTabs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/DisplayWorkbookTabs)** 设置为 **False** 时该属性无效（保留属性值，但不显示相应效果）。



## 示例


```JavaScript
/*本示例将工作簿标签区域设置为水平滚动条宽度的一半。*/
function test() {
    ActiveWindow.TabRatio = 0.5
}
```


```JavaScript
/*本示例显示现在第一个窗口工作簿标签区域与水平滚动条的宽度比例，再将第一个窗口工作簿标签区域设置为水平滚动条宽度的四分之一。*/
function test() {
    alert(`第一个窗口工作簿标签区域与水平滚动条的宽度比例为${Windows.Item(1).TabRatio}，弹框关闭后则设置为0.25`)
    Windows.Item(1).TabRatio = 0.25
}
```
