# Options.StoreRSIDOnSave

如果为 **True** ，则 WPS 在每次保存文档时为文档中的变化指定一个随机数，以便比较与合并文档。 **Boolean** 类型，可读写。



## 语法

express.**StoreRSIDOnSave**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


WPS 将这些随机数保存在表格中并在每次保存后更新该表格。 **StoreRSIDOnSave** 属性的默认值为 **True** 。但是不保存有关 HTML 文档的 RSID 信息。

如果要删除文档中有关作者和审阅者的信息，可使用 **[RemovePersonalInformation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/RemovePersonalInformation)** 属性。



## 示例


```JavaScript
/*本示例在保存文档时关闭保存随机数功能。*/
function test() {
    Options.StoreRSIDOnSave = false
}
```


```JavaScript
/*本示例判断如果 WPS 在每次保存文档时为文档中的变化指定一个随机数，则通知用户。*/
function test() {
    if (Options.StoreRSIDOnSave) {
        alert("WPS 在每次保存文档时为文档中的变化指定一个随机数。")
    }
}
```
