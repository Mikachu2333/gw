# KeysBoundTo.KeyCategory

返回分配给指定组合键的项目的类型。只读 **WdKeyCategory** 类型。



## 语法

express.**KeyCategory**

express   一个代表 **KeysBoundTo** 对象的变量。

## 类型

WdKeyCategory

## 示例


```JavaScript
/*本示例显示分配给FileClose组合键的项目类型是否为wdKeyCategoryCommand。*/
function test() {
    let keysBoundTo = Application.KeysBoundTo(wdKeyCategoryCommand, "FileClose")
    alert(keysBoundTo.KeyCategory == wdKeyCategoryCommand)
}
```


```JavaScript
/*本示例判断如果分配给Arial组合键的项目类型为wdKeyCategoryFont，则通知用户。*/
function test() {
    let keysBoundTo = Application.KeysBoundTo(wdKeyCategoryFont, "Arial")
    if (keysBoundTo.KeyCategory == wdKeyCategoryFont) {
        alert("组合键的项目类型为wdKeyCategoryFont")
    }
}
```
