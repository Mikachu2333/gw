# Application.CustomListCount

返回已定义的自定义序列的数目（包括内置序列）。 **Long** 类型，只读。



## 语法

express.**CustomListCount**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示当前已定义的自定义序列的数量。*/
function test() {
    MsgBox(`There are currently ${Application.CustomListCount} defined custom lists`)
}
```


```JavaScript
/*本示例判断是否存在已定义的自定义序列，在通知用户后，增加一个新的自定义序列。*/
function test() {
    if (Application.CustomListCount > 0) {
        alert("已定义的自定义序列的数目为：" + Application.CustomListCount)
    }
    Application.AddCustomList(["Year", "Month", "Day"])
    alert("已定义的自定义序列的数目为：" + Application.CustomListCount)
}
```
