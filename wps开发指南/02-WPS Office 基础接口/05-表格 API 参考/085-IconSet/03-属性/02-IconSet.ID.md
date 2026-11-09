# IconSet.ID

返回 **[XlIconSet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlIconSet)** 枚举的常量之一，该常量指定用于图标集条件格式规则的图标集的名称。



## 语法

express.**ID**

express   一个代表 **IconSet** 对象的变量。

## 类型

XlIconSet

## 示例


```JavaScript
/*本示例显示第一张工作表上区域 B1:B10 中第二个图标集条件格式的图标集的名称是否为三向箭头。*/
function test() {
    let iconSet = Application.Worksheets.Item(1).Range("B1:B10").FormatConditions.Item(2).IconSet
    alert(iconSet.ID == xl3Arrows)
}
```


```JavaScript
/*本示例判断活动工作表上区域 B1:B10 中第一个图标集条件格式的图标集的名称是否为三色旗，并通知用户。*/
function test() {
    let iconSet = ActiveSheet.Range("B1:B10").FormatConditions.Item(1).IconSet
    if (iconSet.ID == xl3Flags) {
        alert("图标集的名称为三色旗")
    } else {
        alert("图标集的名称不为三色旗")
    }
}
```
