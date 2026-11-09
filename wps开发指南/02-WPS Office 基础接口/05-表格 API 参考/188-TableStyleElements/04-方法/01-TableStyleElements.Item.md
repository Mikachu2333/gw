# TableStyleElements.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **TableStyleElements** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | XlTableStyleElementType | 表样式元素。 |

## 返回值

TableStyleElement

## 示例


```JavaScript
/*本示例将第一张工作表上第一张列表的表样式中第一列的字体加粗。*/
function test() {
    let listObj = Application.Worksheets.Item(1).ListObjects.Item(1)
    let tableStyleElement = listObj.TableStyle.TableStyleElements.Item(xlFirstColumn)
    tableStyleElement.Font.Bold = true
}
```


```JavaScript
/*本示例显示活动工作表上第一张列表的表样式的标题行是否具有格式设置。*/
function test() {
    let listObj = ActiveSheet.ListObjects.Item(1)
    alert(listObj.TableStyle.TableStyleElements.Item(xlHeaderRow).HasFormat)
}
```
