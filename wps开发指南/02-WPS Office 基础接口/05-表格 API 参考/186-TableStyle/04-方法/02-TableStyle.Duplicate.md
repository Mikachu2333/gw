# TableStyle.Duplicate

复制 **TableStyle** 对象，并返回对新复制对象的引用。



## 语法

express.**Duplicate(NewTableStyleName)**

express   一个代表 **TableStyle** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NewTableStyleName | 可选 | any | 新表样式的名称。 |

## 返回值

TableStyle

## 说明


如果未指定名称，则 **Duplicate** 方法将使用与用户界面默认名称相同的默认名称。



## 示例


```JavaScript
/*本示例复制活动工作簿上的表格样式中的最后一个样式。*/
function test() {
    let tableStyles = ActiveWorkbook.TableStyles
    tableStyles.Item(tableStyles.Count).Duplicate("样式5")
}
```


```JavaScript
/*本示例复制第一张工作簿中指定索引的表格样式，并显示复制样式的名称。*/
function test() {
    let tableStyle = Workbooks.Item(1).TableStyles.Item(1).Duplicate("样式三")
    alert(tableStyle.Name)
}
```
