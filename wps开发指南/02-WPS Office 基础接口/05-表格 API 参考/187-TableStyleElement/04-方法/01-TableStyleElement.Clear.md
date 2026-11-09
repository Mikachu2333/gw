# TableStyleElement.Clear

清除此元素的格式。



## 语法

express.**Clear()**

express   一个代表 **TableStyleElement** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例清除活动工作表上第一张列表的样式元素的格式。*/
function test() {
    let listObj = ActiveSheet.ListObjects.Item(1)
    listObj.TableStyle.TableStyleElements.Item(xlWholeTable).Clear()
}
```


```JavaScript
/*本示例清除第一张工作表上第一张列表中标题行样式元素的格式。*/
function test() {
    let listObj = Application.Worksheets.Item(1).ListObjects.Item(1)
    let tableStyleElement = listObj.TableStyle.TableStyleElements.Item(xlHeaderRow)
    tableStyleElement.Clear()
}
```
