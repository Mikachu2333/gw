# Styles.Merge

将另一张工作簿中的样式合并到 **Styles** 集合中。



## 语法

express.**Merge(Workbook)**

express   一个代表 **Styles** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Workbook | 必选 | any | 一个 Workbook 对象，它代表包含待合并样式的工作簿。 |

## 返回值

Variant

## 示例


```JavaScript
/*此示例将工作簿 Template.xls 中的样式合并到活动工作簿中。*/
function test() {
    Application.ActiveWorkbook.Styles.Merge(Workbooks.Item("Template.xls"))
}
```


```JavaScript
/*此示例判断工作簿 Template2.xls 中的第一个样式字体颜色为蓝色，则将 Template2.xls 的样式合并到活动工作簿中。*/
function test() {
    if (Workbooks.Item("Template2.xls").Styles.Item(1).Font.Color == RGB(0, 0, 255)) {
        ActiveWorkbook.Styles.Merge(Workbooks.Item("Template2.xls"))
    }
}
```
