# Options.AllowClickAndTypeMouse

如果启用“即点即输”功能，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AllowClickAndTypeMouse**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


有关“即点即输”功能的详细信息，请参阅关于“即点即输”。



## 示例


```JavaScript
/*本示例检查并确认是否已启用“即点即输”功能。如果未启用该功能，则根据用户的选择来设置该功能。*/
function test() {
    if (!Options.AllowClickAndTypeMouse) {
        intResponse = MsgBox("Do you want to use Click and Type?", jsYesNo)
        if (intResponse == jsResultYes) {
            Options.AllowClickAndTypeMouse = true
            alert("Click and Type enabled!")
        }
    }
}
```


```JavaScript
/*本示例判断是否启用“即点即输”功能，并通知用户。*/
function test() {
    if (Application.Options.AllowClickAndTypeMouse) {
        alert("已启用“即点即输”功能")
    } else {
        alert("未启用“即点即输”功能")
    }
}
```
