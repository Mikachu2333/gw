# OLEObject.AutoLoad

如果打开包含指定 OLE 对象的工作簿时自动载入该 OLE 对象，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoLoad**

express   一个代表 **OLEObject** 对象的变量。

## 类型

boolean

## 说明


ActiveX 忽略此属性。打开一个工作簿时总会载入 ActiveX 控件。

对于大多数 OLE 对象类型，此属性不能设为 **True** 。对于新 OLE 对象，默认情况下其 **AutoLoad** 属性设为 **False** ；当 ET 载入工作簿时，设为“False”可节省时间和内存。自动载入 OLE 对象的好处在于，对于代表易变动的数据的对象，可立即重建到数据源的链接，而且，如果需要，可对这些对象进行重新映射。



## 示例


```JavaScript
/*此示例对活动工作表中第一个 OLE 对象的 AutoLoad 属性进行设置。*/
function test() {
    Application.ActiveSheet.OLEObjects(1).AutoLoad = false
}
```


```JavaScript
/*此示例显示第一张工作表中的第二个 OLE 对象的 AutoLoad 属性值。*/
function test() {
    alert(Worksheets.Item(1).OLEObjects(2).AutoLoad)
}
```
