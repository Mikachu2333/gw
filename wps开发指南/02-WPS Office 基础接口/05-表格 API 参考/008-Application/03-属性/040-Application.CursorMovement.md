# Application.CursorMovement

返回或设置一个值，此值用于表明使用的是可见光标还是逻辑光标。可为以下常量之一： **xlVisualCursor** 或 **xlLogicalCursor** 。 **Long** 类型，可读写。



## 语法

express.**CursorMovement**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 说明


对于所选择或安装的不同语言支持（例如，英语（美国）），这些常量可能不可用。



## 示例


```JavaScript
/*本示例设置 ET 使用可见光标。*/
function test() {
    Application.CursorMovement = xlVisualCursor
}
```


```JavaScript
/*本示例判断如果是可见光标，将其设置为逻辑光标，并通知用户后设置为可见光标。*/
function test() {
    if (Application.CursorMovement == xlVisualCursor)  {
        Application.CursorMovement = xlLogicalCursor
        alert("已设置为逻辑光标")
        Application.CursorMovement = xlVisualCursor
    }
}
```
