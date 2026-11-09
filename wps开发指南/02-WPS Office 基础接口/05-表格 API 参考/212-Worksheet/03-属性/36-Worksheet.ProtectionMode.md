# Worksheet.ProtectionMode

如果启用了用户界面专用保护，则为 **True** 。要打开用户界面保护，请使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Protect)** 方法，并将 _UserInterfaceOnly_ 参数设置为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**ProtectionMode**

express   一个代表 **Worksheet** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作表 ProtectionMode 属性的状态。*/
function test() {
    alert(ActiveSheet.ProtectionMode)
}
```


```JavaScript
/*本示例判断工作簿中每一张工作表是否启用了用户界面专用保护。*/
function test() {
    for (let i = 1; i <= Sheets.Count; i++) {
        let sheet = Application.Sheets.Item(i)
        if (sheet.ProtectionMode) {
            alert(`工作表 ${sheet.Name} 启用了用户界面专用保护`)
        } else {
            alert(`工作表 ${sheet.Name} 未启用了用户界面专用保护`)
        }
    }
}
```
