# Sheets.Select

选择对象。



## 语法

express.**Select(Replace)**

express   一个代表 **Sheets** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Replace | 可选 | any | （仅用于工作表）。如果为 True，则用指定的对象替换当前所选内容。如果为 False，则扩展当前所选内容以包括以前选择的对象和指定的对象。 |

## 返回值

void

## 示例


```JavaScript
/*此示例选中活动工作簿中名称为“Sheet1”和“Sheet2”的工作表。*/
function test() {
    let names = ["Sheet1", "Sheet2"]
    Application.ActiveWorkbook.Sheets.Item(names).Select()
}
```


```JavaScript
/*此示例选中所有的工作表。*/
function test() {
    Sheets.Select()
}
```
