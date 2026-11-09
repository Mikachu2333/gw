# MappedDataField.Name

返回指定对象的名称。 **String** 类型，只读。



## 语法

express.**Name**

express   一个代表 **MappedDataField** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示WPS包含的 wdAddress1 映射数据字段的名称。*/
function test() {
    let dataSource = ActiveDocument.MailMerge.DataSource
    alert(dataSource.MappedDataFields.Item(wdAddress1).Name)
}
```


```JavaScript
/*本示例将所选内容的文本替换为所有映射数据字段的名称。*/
function test() {
    let dataFields = ActiveDocument.MailMerge.DataSource.MappedDataFields
    let names = ""
    for (let i = 1; i <= dataFields.Count; i++) {
        names = names + dataFields.Item(i).Name + "\n"
    }
    Selection.Range.Text = names
}
```
