# Worksheets.PrintPreview

按对象打印后的外观效果显示对象的预览。



## 语法

express.**PrintPreview(EnableChanges)**

express   一个代表 **Worksheets** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| EnableChanges | 可选 | any | 传递 Boolean 值，以指定用户是否可更改边距和打印预览中可用的其他页面设置选项。 |

## 返回值

void

## 示例


```JavaScript
/*此示例在打印预览中显示工作表，且允许更改页面设置选项。*/
function test() {
    Application.Worksheets.PrintPreview()
}
```


```JavaScript
/*本示例开启工作表的打印预览，且禁止更改页面设置选项。*/
function test() {
    Application.Worksheets.PrintPreview(false)
}
```
