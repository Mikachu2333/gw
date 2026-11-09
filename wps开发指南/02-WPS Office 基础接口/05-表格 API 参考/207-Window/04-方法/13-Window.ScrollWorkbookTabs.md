# Window.ScrollWorkbookTabs

滚动工作簿窗口下方的工作表标签。本方法不改变该工作簿中的活动工作表。



## 语法

express.**ScrollWorkbookTabs(Sheets, Position)**

express   一个代表 **Window** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Sheets | 可选 | any | 要滚动的工作表的数目。如果为正数则向前滚动，为负数则向后滚动，为 0（零）则不滚动。如果未指定 _Position_ 参数，则必须指定 _Sheets_。 |
| Position | 可选 | any | 使用 **xlFirst** 可滚动到第一张工作表，使用 **xlLast** 可滚动到最后一张工作表。如果未指定 _Sheets_，则必须指定 _Position_。 |

## 返回值

Variant

## 示例


```JavaScript
/*此示例将当前窗口工作表标签滚动到工作簿的最后一张工作表。*/
function test() {
    ActiveWindow.ScrollWorkbookTabs(null, xlLast)
}
```


```JavaScript
/*此示例将第一个窗口工作表标签向前滚动一张工作表。*/
function test() {
    Windows.Item(1).ScrollWorkbookTabs(1)
}
```
