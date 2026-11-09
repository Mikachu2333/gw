# TableStyle.TableStyleElements

返回 **TableStyleElements** 对象，只读。



## 语法

express.**TableStyleElements**

express   一个代表 **TableStyle** 对象的变量。

## 类型

TableStyleElements

## 示例


```JavaScript
/*本示例显示第一张工作表上第一张列表的表样式元素的数量。*/
function test() {
    let listObj = Application.Worksheets.Item(1).ListObjects.Item(1)
    alert(listObj.TableStyle.TableStyleElements.Count)
}
```


```JavaScript
/*本示例将活动工作簿上所有表样式中第一列的字体加粗。*/
function test() {
    let tableStyles = ActiveWorkbook.TableStyles
    for (let i = 1; i <= tableStyles.Count; i++) {
        tableStyles.Item(i).TableStyleElements.Item(xlFirstColumn).Font.Bold = true
    }
}
```
