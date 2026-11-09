# Document.CurrentRsid

返回一个 **Long** 类型的值，该值代表 WPS 为文档中的更改所分配的随机数。只读。



## 语法

express.**CurrentRsid**

express   一个代表 **Document** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果 **[StoreRSIDOnSave](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/StoreRSIDOnSave)** 属性为 **True** ，则每次保存文档时，WPS 生成一个随机数，应用程序使用该随机数来比较和合并文档。WPS 将这些随机数保存在表格中并在每次保存后更新该表格。 **CurrentRsid** 属性将返回 WPS 分配给文档的上一个数。



## 示例


```JavaScript
/*本示例显示 WPS 为活动文档中的更改所分配的随机数。*/
function test() {
    alert(ActiveDocument.CurrentRsid)
}
```


```JavaScript
/*本示例在光标处插入 WPS 为所有已打开的文档中的更改所分配的随机数。*/
function test() {
    for (let i = 1; i <= Documents.Count; i++) {
        Selection.TypeText(Documents.Item(1).CurrentRsid + "\n")
    }
}
```
