# KeysBoundTo.Command

返回一个 **String** 类型的值，该值代表分配给指定组合键的命令。只读。



## 语法

express.**Command**

express   一个代表 **KeysBoundTo** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示分配给字体名称的按键的命令。如果尚未给字体分配按键，则显示一条消息。*/
function test() {
    let keysBoundTo = Application.KeysBoundTo(wdKeyCategoryFont, "Arial")
    if (keysBoundTo.Count == 0) {
        alert("Keys haven't been assigned to fonts")
    } else {
        alert(keysBoundTo.Command)
    }
}
```


```JavaScript
/*本示例显示分配给FileClose组合键的命令。*/
function test() {
    alert(Application.KeysBoundTo(wdKeyCategoryCommand, "FileClose").Command)
}
```
