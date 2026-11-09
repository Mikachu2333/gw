# Workbook.ReadOnlyRecommended

如果工作簿以建议只读方式保存，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**ReadOnlyRecommended**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 说明


当打开一个建议为只读的工作簿时，ET 将显示一条信息，建议以只读方式打开此工作簿。

使用 **[SaveAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/SaveAs)** 方法可更改该属性。



## 示例


```JavaScript
/*本示例检查当前工作簿是否以建议只读方式保存，如果是，则显示一条消息。*/
function test() {
    if (ActiveWorkbook.ReadOnlyRecommended) {
        MsgBox("This workbook is saved as read-only recommended")
    }
}
```


```JavaScript
/*本示例演示如果活动工作簿不是以建议只读方式保存，则将其另存为建议只读，并告知用户。*/
function test() {
    if (!ActiveWorkbook.ReadOnlyRecommended) {
        ActiveWorkbook.SaveAs(ActiveWorkbook.FullName, undefined, undefined, undefined, true)
        if (ActiveWorkbook.ReadOnlyRecommended) {
            alert("当前工作簿建议只读方式保存！")
        }
    }
}
```
