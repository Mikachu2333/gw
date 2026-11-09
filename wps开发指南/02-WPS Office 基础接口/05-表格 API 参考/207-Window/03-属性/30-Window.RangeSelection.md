# Window.RangeSelection

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示指定窗口中工作表上的选定单元格，即使工作表上一个图形对象是活动或选定的。只读。



## 语法

express.**RangeSelection**

express   一个代表 **Window** 对象的变量。

## 类型

Range

## 说明


当工作表中已选定一个图形对象， **Selection** 属性返回的是一个图形对象而不是一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象； **RangeSelection** 属性将返回在图形对象被选定之前选定的单元格区域。

当工作表中选定的是一个单元格区域时（不是一个图形对象），该属性和 **Selection** 属性将返回相同的值。

如果指定窗口中的活动表不是一个工作表，则该属性无效。



## 示例


```JavaScript
/*本示例显示在当前窗口的工作表中选定的单元格区域的地址。*/
function test() {
    alert(Application.ActiveWindow.RangeSelection.Address())
}
```


```JavaScript
/*本示例激活第一个窗口为活动窗口，并清除该窗口中选定区域中的内容和格式设置。*/
function test() {
    Application.Windows.Item(1).Activate()
    ActiveWindow.RangeSelection.Clear()
}
```
