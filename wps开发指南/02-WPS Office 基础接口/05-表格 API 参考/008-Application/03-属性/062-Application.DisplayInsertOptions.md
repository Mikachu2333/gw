# Application.DisplayInsertOptions

如果应显示 **“插入选项”** 按钮，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayInsertOptions**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*在本示例中，ET 将显示“插入选项”按钮的状态通知用户。*/
function test() {
    // Notify the user of the ability to display the Insert Options button.
    if (Application.DisplayInsertOptions) {
        MsgBox("The ability to display the Insert Options button is on.")
    } else {
        MsgBox("The ability to display the Insert Options button is off.")
    }
}
```


```JavaScript
/*本示例演示DisplayInsertOptions的数据类型，当提示框关闭后将DisplayInsertOptions属性设置为false。*/
function test() {
    alert("DisplayInsertOptions 属性的数据类型为：" + typeof Application.DisplayInsertOptions)
    Application.DisplayInsertOptions = false
}
```
