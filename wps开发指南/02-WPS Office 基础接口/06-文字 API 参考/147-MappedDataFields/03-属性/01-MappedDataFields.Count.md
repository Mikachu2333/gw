# MappedDataFields.Count

返回一个 **Long** 类型的值，该值代表集合中映射数据域的数目。只读。



## 语法

express.**Count**

express   一个代表 **MappedDataFields** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示WPS中所有可用的映射数据域的数量。*/
function test() {
    let dataFields = ActiveDocument.MailMerge.DataSource.MappedDataFields
    alert(dataFields.Count)
}
```
