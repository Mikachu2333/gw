# TableStyles.Add

创建新的 **TableStyle** 对象，并将其添加到集合中。



## 语法

express.**Add(TableStyleName)**

express   一个代表 **TableStyles** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| TableStyleName | 必选 | string | 表样式的名称。 |

## 返回值

TableStyle

## 示例


```JavaScript
/*本示例向活动工作簿的表格样式中添加“样式一”。*/
function test() {
    ActiveWorkbook.TableStyles.Add("样式一")
}
```


```JavaScript
/*本示例向第一张工作簿的表格样式中添加“TableStyle2”样式，并显示新添加样式的名称。*/
function test() {
    let tableStyle = Workbooks.Item(1).TableStyles.Add("TableStyle2")
    alert(tableStyle.Name)
}
```
