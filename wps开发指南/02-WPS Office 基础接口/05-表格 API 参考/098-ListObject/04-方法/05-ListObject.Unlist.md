# ListObject.Unlist

从 **ListObject** 对象删除列表功能。使用此方法后，组成列表的单元格区域将变为常规的数据区域。



## 语法

express.**Unlist()**

express   一个代表 **ListObject** 对象的变量。

## 返回值

void

## 说明


运行此方法可保留工作表中的单元格数据、格式和公式。 **“汇总行”** 也保留不变。此方法可删除 SharePoint Foundation 网站的所有链接。 **“自动筛选”** 也从列表中删除。



## 示例


```JavaScript
/*本示例将列表功能从活动工作簿上工作表 Sheet1 中第一个列表中删除。*/
function test() {
    let listObj = Application.ActiveWorkbook.Worksheets.Item("Sheet1").ListObjects.Item(1)
    listObj.Unlist()
}
```


```JavaScript
/*本示例判断如果第一张工作表上第一张列表展示“汇总”行，则删除该列表的列表功能。*/
function test() {
    let listObj = Worksheets.Item(1).ListObjects.Item(1)
    if (listObj.ShowTotals) {
        listObj.Unlist()
    }
}
```
