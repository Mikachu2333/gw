# AllowEditRanges.Add

在受保护的工作表中添加可编辑的单元格区域。返回 [AllowEditRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AllowEditRange/obj)对象。



## 语法

express.**Add(Title, Range, Password)**

express   一个代表 **AllowEditRanges** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Title | 必选 | string | 单元格区域的标题。 |
| Range | 必选 | Range | Range 对象。允许编辑的单元格区域。 |
| Password | 可选 | any | 单元格区域的密码。 |

## 返回值

AllowEditRange

## 示例


```JavaScript
/*此示例在活动工作表上添加可编辑的单元格区域。*/
function test() {
    ActiveSheet.Protection.AllowEditRanges.Add("AllowEditRange3", Range("C1:C4"), "Y6dh!et5")
}
```


```JavaScript
/*本示例在第一张工作表上添加可编辑的单元格区域。*/
function test() {
    Worksheets.Item(1).Protection.AllowEditRanges.Add("AllowEditRange4", Range("D1:D4"))
}
```
