# Application.DataEntryMode

返回或设置“数据输入”模式，如下表所示。处于“数据输入”模式时，仅可在当前选定区域的未锁定单元格中输入数据。 **Long** 类型，可读写。



## 语法

express.**DataEntryMode**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 说明


| 值            | 含义                                 |
| ------------ | ---------------------------------- |
| **xlOn**     | “数据输入”模式处于打开状态。                    |
| **xlOff**    | “数据输入”模式处于关闭状态。                    |
| **xlStrict** | “数据输入”模式处于打开状态，并且按 Esc 时不关闭数据输入模式。 |



## 示例


```JavaScript
/*本示例检查“数据输入”模式是否处于打开状态，如果是，则将其关闭。*/
function test() {
    if (Application.DataEntryMode == xlOn || Application.DataEntryMode == xlStrict) {
        Application.DataEntryMode = xlOff
    }
}
```


```JavaScript
/*本示例判断如果数据输入模式处于关闭状态，则将其打开，通知用户后将其关闭。*/
function test() {
    if (Application.DataEntryMode == xlOff) {
        Application.DataEntryMode = xlOn
        alert("“数据输入”模式处于打开状态。")
        Application.DataEntryMode = xlOff
    }
}
```
