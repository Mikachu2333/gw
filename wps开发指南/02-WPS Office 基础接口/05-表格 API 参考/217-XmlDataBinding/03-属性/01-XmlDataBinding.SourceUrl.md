# XmlDataBinding.SourceUrl

返回一个 **String** 值，它代表为指定数据绑定提供源数据的 XML 数据文件或 Web 服务的路径。只读。



## 语法

express.**SourceUrl**

express   一个代表 **XmlDataBinding** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例显示活动工作簿中第一项XmlMap关联的数据绑定的路径。*/
function test() {
    let dataBinding = ActiveWorkbook.XmlMaps.Item(1).DataBinding
    alert(dataBinding.SourceUrl)
}
```


```JavaScript
/*此示例将第一张工作簿中所有XmlMap关联的数据绑定的路径赋值到单元格中。*/
function test() {
    let xmlMaps = Workbooks.Item(1).XmlMaps
    for (let i = 1; i <= xmlMaps.Count; i++) {
        let dataBinding = xmlMaps.Item(i).DataBinding
        ActiveSheet.Cells.Item(i, 9).Value2 = dataBinding.SourceUrl
    }
}
```
