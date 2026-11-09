# Slicer.DisplayHeader

返回或设置显示切片器 **[Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/Caption)** 的页眉是否可见。可读/写。



## 语法

express.**DisplayHeader**

express   一个代表 **Slicer** 对象的变量。

## 类型

boolean

## 说明


如果页眉可见，则为 **True** ；否则为 **False** 。默认值为 **True** 。



## 示例


```JavaScript
/*本示例显示活动工作表上数据透视表的第三个切片器的标题页眉是否可见。*/
function test() {
    alert(ActiveSheet.Range("I1").PivotTable.Slicers.Item(3).DisplayHeader)
}
```


```JavaScript
/*本示例将活动工作簿中第三个切片器缓存中名为“id”的切片器的标题页眉设置为不可见。*/
function test() {
    let slicer = ActiveWorkbook.SlicerCaches(3).Slicers.Item("id")
    slicer.DisplayHeader = false
}
```
