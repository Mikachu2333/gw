# Window.PrintPreview

按对象打印后的外观效果显示对象的预览。



## 语法

express.**PrintPreview(EnableChanges)**

express   一个代表 **Window** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| EnableChanges | 可选 | any | 传递 **Boolean** 值，以指定用户是否可更改边距和打印预览中可用的其他页面设置选项。 |

## 返回值

Variant

## 示例


```JavaScript
/*本示例在打印预览中显示第一个窗口。*/
function test() {
    Windows.Item(1).PrintPreview()
}
```


```JavaScript
/*本示例在活动窗口打开打印预览窗口，并指定用户不可更改边距和打印预览中可用的其他页面设置选项。*/
function test() {
    ActiveWindow.PrintPreview(false)
}
```
