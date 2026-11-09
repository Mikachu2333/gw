# Options.AutoFormatAsYouTypeInsertClosings

如果为 **True** ，则当用户输入备忘录标题时，WPS 会自动插入相应的备忘录结束语。可读写。



## 语法

express.**AutoFormatAsYouTypeInsertClosings**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 WPS 设置为在用户输入备忘录标题时自动插入相应的备忘录结束语。*/
function test() {
    Options.AutoFormatAsYouTypeInsertClosings = true
}
```


```JavaScript
/*本示例判断如果 WPS 在用户输入备忘录标题时自动插入相应的备忘录结束语，则通知用户。*/
function test() {
    if (Options.AutoFormatAsYouTypeInsertClosings) {
        alert("用户输入备忘录标题时自动插入相应的备忘录结束语。")
    }
}
```
