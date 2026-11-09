# ListObjects.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **ListObjects** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

ListObject

## 示例


```JavaScript
/*本示例显示活动工作簿的 Sheet1 上的默认列表对象的名称。*/
function test() {
    let sheet = Application.ActiveWorkbook.Worksheets.Item("Sheet1")
    alert(sheet.ListObjects.Item(1).Name)
}
```


```JavaScript
/*本示例为工作表 Sheet1 上第一张列表添加新列，并设置该列表的表样式。*/
function test() {
    let listObj = Application.Worksheets.Item("Sheet1").ListObjects.Item(1)
    listObj.ListColumns.Add()
    listObj.TableStyle = "TableStylePreset2_Accent1"
}
```
