# Application.TransitionMenuKeyAction

返回或设置按下 ET 菜单键后将执行的操作。可为 **xlExcelMenus** 或 **xlLotusHelp** 。 **Long** 类型，可读写。



## 语法

express.**TransitionMenuKeyAction**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设置按下 ET 菜单键后将运行“Lotus 1-2-3 帮助”。*/
function test() {
    Application.TransitionMenuKeyAction = xlLotusHelp
}
```


```JavaScript
/*本示例设置按下ET菜单键后运行ET菜单，并显示TransitionMenuKeyAction属性的枚举值。*/
function test() {
    Application.TransitionMenuKeyAction = xlExcelMenus
    if (Application.TransitionMenuKeyAction == xlExcelMenus) {
        alert("TransitionMenuKeyAction属性的枚举值为：xlExcelMenus")
    }
}
```
