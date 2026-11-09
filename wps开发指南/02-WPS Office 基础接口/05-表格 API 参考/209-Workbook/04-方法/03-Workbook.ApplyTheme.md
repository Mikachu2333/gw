# Workbook.ApplyTheme

将指定的主题应用于当前工作簿。



## 语法

express.**ApplyTheme(Filename)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 必选 | string | 主题的名称。 |

## 返回值

void

## 示例


```JavaScript
/*此示例将指定的主题应用于活动工作簿。*/
function test() {
    ActiveWorkbook.ApplyTheme("D:\\示例\\主题1.thmx")
}
```


```JavaScript
/*本示例判断如果第一张工作簿的名称为“example.xlsx”，则激活该工作簿，然后将指定的主题应用于该工作簿。*/
function test() {
    if (Workbooks.Item(1).Name == "example.xlsx") {
        Workbooks.Item(1).Activate()
        ActiveWorkbook.ApplyTheme("D:\\示例\\主题1.thmx")
    }
}
```
