# TableStyleElement.Borders

返回一个代表表样式元素的边框的 **Borders** 集合。只读。



## 语法

express.**Borders**

express   一个代表 **TableStyleElement** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*本示例将表格的上边框设置为红色实线的细边框。*/
function test() {
    let border = Application.ActiveWorkbook.TableStyles.Item("Table Style 4").TableStyleElements.Item(xlWholeTable).Borders.Item(xlEdgeTop)
    border.Color = RGB(255, 0, 0)
    border.TintAndShade = 0
    border.Weight = xlThin
    border.LineStyle = xlContinuous
}
```


```JavaScript
/*本示例显示活动工作表上第一张列表中标题行样式元素的边框主题颜色是否为蓝色。*/
function test() {
    let listObj = ActiveSheet.ListObjects.Item(1)
    alert(listObj.TableStyle.TableStyleElements.Item(xlHeaderRow).Borders.ThemeColor == RGB(0, 0, 255))
}
```
