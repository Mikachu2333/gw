# TableStyleElement.Font

返回一个 **Font** 对象，它代表指定对象的字体。 只读。



## 语法

express.**Font**

express   一个代表 **TableStyleElement** 对象的变量。

## 类型

Font

## 示例


```JavaScript
/*本示例将第一张工作表上第一张列表中第一列样式元素的字体加粗。*/
function test() {
    let listObj = Application.Worksheets.Item(1).ListObjects.Item(1)
    let tableStyleElement = listObj.TableStyle.TableStyleElements.Item(xlFirstColumn)
    tableStyleElement.Font.Bold = true
}
```


```JavaScript
/*本示例显示活动工作表上第一张列表的样式元素的字体样式是否为斜体。*/
function test() {
    let listObj = ActiveSheet.ListObjects.Item(1)
    alert(listObj.TableStyle.TableStyleElements.Item(xlWholeTable).Font.FontStyle == "Italic")
}
```
