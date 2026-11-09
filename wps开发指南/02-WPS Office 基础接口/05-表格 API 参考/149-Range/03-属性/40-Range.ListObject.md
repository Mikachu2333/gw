# Range.ListObject

为 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象返回一个 **[ListObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/obj)** 对象。 **ListObject** 对象，只读。



## 语法

express.**ListObject**

express   一个代表 **Range** 对象的变量。

## 类型

ListObject

## 示例


```JavaScript
/*本示例将 A1 单元格所在的表格区域调整为 A1:C5*/
function test() {
    Range("A1").ListObject.Resize(Range("A1:C5"))
}
```


```JavaScript
/*本示例将 A1 单元格所在表格删除*/
function test() {
    Range("A1").ListObject.Delete()
}
```
