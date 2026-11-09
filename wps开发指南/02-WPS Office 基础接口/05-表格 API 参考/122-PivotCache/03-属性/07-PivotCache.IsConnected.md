# PivotCache.IsConnected

如果 **MaintainConnection** 属性为 **True** ，并且数据透视表缓存当前与其源相连，则返回 **True** 。如果数据透视表缓存当前未与其源相连，则返回 **False** 。只读 **Boolean** 类型。



## 语法

express.**IsConnected**

express   一个代表 **PivotCache** 对象的变量。

## 类型

boolean

## 说明


 **IsConnected** 属性不检查是否建立了连接。即使该属性返回 **True** ，如果连接不再有效，则向提供程序发送命令将导致错误。

要求缓存的源类型是外部的，并且是一个 OLE DB 数据源。



## 示例


```JavaScript
/*本示例确定活动工作簿第一个数据透视缓存是否与其源相连，并通知用户。本示例假定数据透视表位于活动工作表上。*/
function test() {
    // Handle run-time error if external source is not OLE DB.
    try {
        // Check connection setting and notify the user accordingly.
        if (Application.ActiveWorkbook.PivotCaches().Item(1).IsConnected) {
            alert("The PivotCache is currently connected to its source.")
        } else {
            alert("The PivotCache is not currently connected to its source.")
        }
    } catch (exception) {
        alert("The data source is not an OLE DB data source.")
    }

}
```


```JavaScript
/*本示例显示活动工作表中第一个数据透视缓存是否与其源相连。*/
function test() {
    let pvtCache = ActiveSheet.Range("A1").PivotTable.PivotCache()
    alert(pvtCache.IsConnected)
}
```
