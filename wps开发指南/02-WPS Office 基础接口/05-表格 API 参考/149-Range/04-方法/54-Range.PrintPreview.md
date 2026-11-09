# Range.PrintPreview

按对象打印后的外观效果显示对象的预览。

返回值类型为Variant。



## 语法

express.**PrintPreview(EnableChanges)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| EnableChanges | 可选 | any | 传递 Boolean 值，以指定用户是否可更改边距和打印预览中可用的其他页面设置选项。 |

## 返回值

any

## 示例


```JavaScript
/*此示例在打印预览中显示工作表 Sheet1。*/
function test() {
    Application.Worksheets.Item("Sheet1").PrintPreview()
}
```


```JavaScript
/*此示例在打印预览中显示工作表 Sheet1，且不可更改边距等页面设置选项*/
function test() {
    Application.Worksheets.Item("Sheet1").PrintPreview(false)
}
```
