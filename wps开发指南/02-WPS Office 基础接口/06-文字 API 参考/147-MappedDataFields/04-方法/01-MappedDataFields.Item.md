# MappedDataFields.Item

返回单个 **MappedDataField** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **MappedDataFields** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | WdMappedDataFields | 指定的映射数据域。 |

## 返回值

MappedDataField

## 示例


```JavaScript
/*本示例遍历所有映射数据域，如果数据域映射到的邮件合并数据源中的字段的名称不为空字符串，则显示该名称。*/
function test() {
    let dataFields = ActiveDocument.MailMerge.DataSource.MappedDataFields
    for (let i = 1; i <= dataFields.Count; i++) {
        let fieldName = dataFields.Item(i).DataFieldName
        if (fieldName !== "") {
            alert(fieldName)
        }
    }
}
```


```JavaScript
/*本示例显示WPS包含的 wdAddress1 映射数据域的名称。*/
function test() {
    let dataSource = ActiveDocument.MailMerge.DataSource
    alert(dataSource.MappedDataFields.Item(wdAddress1).Name)
}
```
