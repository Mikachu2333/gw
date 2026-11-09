# Application.RecordRelative

如果以相对引用录制宏，则该属性值为 **True** ；如果以绝对引用录制宏，则该属性值为 **False** 。 **Boolean** 类型，只读。



## 语法

express.**RecordRelative**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示 Sheet1 上活动单元格的地址，如果 RecordRelative 是 False，则以 A1 样式展示；否则以 R1C1 样式展示地址。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    if (!Application.RecordRelative) {
        alert(ActiveCell.Address(null, null, xlA1))
    } else {
        alert(ActiveCell.Address(null, null, xlR1C1))
    }

}
```


```JavaScript
/*本示例显示是否使用相对引用录制宏。*/
function test() {
    alert(Application.RecordRelative)
}
```
