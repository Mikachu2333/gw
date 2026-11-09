# AutoCorrect.DisplayAutoCorrectOptions

如果为 **True** ，则 WPS 显示 **“自动更正选项”** 按钮。 **Boolean** 类型，可读写。



## 语法

express.**DisplayAutoCorrectOptions**

express   一个代表 **AutoCorrect** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例禁止显示“自动更正选项”按钮。*/
function test() {
    Application.AutoCorrect.DisplayAutoCorrectOptions = false
}
```


```JavaScript
/*本示例确定是否显示“自动更正选项”按钮并通知用户。*/
function test() {
    if (Application.AutoCorrect.DisplayAutoCorrectOptions) {
        alert("已显示“自动更正选项”按钮。")
    } else {
        alert("禁止显示“自动更正选项”按钮。")
    }
}
```
