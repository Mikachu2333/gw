# TableStyleElement.Interior

返回一个 **Interior** 对象，该对象代表指定对象的内部。 只读。



## 语法

express.**Interior**

express   一个代表 **TableStyleElement** 对象的变量。

## 类型

Interior

## 示例


```JavaScript
/*本示例将活动工作表上第一张列表的最后一列样式元素的内部设置为红色。*/
function test() {
    let listObj = ActiveSheet.ListObjects.Item(1)
    listObj.TableStyle.TableStyleElements.Item(xlLastColumn).Interior.ColorIndex = 3
}
```


```JavaScript
/*本示例显示第一张工作表上第一张列表中标题行样式元素内部图案是否为纯色。*/
function test() {
    let listObj = Application.Worksheets.Item(1).ListObjects.Item(1)
    alert(listObj.TableStyle.TableStyleElements.Item(xlHeaderRow).Interior.Pattern == xlPatternSolid)
}
```
