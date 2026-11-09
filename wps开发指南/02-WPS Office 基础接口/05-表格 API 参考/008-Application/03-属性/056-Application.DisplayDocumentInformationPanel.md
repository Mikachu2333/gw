# Application.DisplayDocumentInformationPanel

返回或设置一个 **Boolean** 值，该值表示是否显示文档属性面板。可读/写 **Boolean** 类型。



## 语法

express.**DisplayDocumentInformationPanel**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例确定是否可以显示文档属性面板，并通知用户。*/
function test() {
    if (Application.DisplayDocumentInformationPanel) {
        alert("显示文档属性面板。")
    } else {
        alert("隐藏文档属性面板。")
    }
}
```


```JavaScript
/*本示例演示DisplayDocumentInformationPanel的数据类型，当提示框关闭后将DisplayDocumentInformationPanel属性设置为true。*/
function test() {
    alert("DisplayDocumentInformationPanel 属性的数据类型为：" + typeof Application.DisplayDocumentInformationPanel)
    Application.DisplayDocumentInformationPanel = true
}
```
