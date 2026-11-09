# Range.AutoComplete

从列表中返回一个记忆式键入匹配项。如果没有相应的记忆式键入匹配项，或者在列表中有不止一个与已键入字符串相匹配的项，此方法将返回一空字符串。



## 语法

express.**AutoComplete(String)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| String | 必选 | string | 要完成的字符串。 |

## 返回值

String

## 说明


即使禁止了记忆式键入功能，该方法仍能工作。



## 示例


```JavaScript
/*本示例返回与“Ap”子串相匹配的记忆式键入匹配项。如果单元格 A5 所在列中包含一个与正在键入的字符串相匹配的数据项，将把该数据项作为记忆式键入匹配项返回。*/
function test() {
    let s = Worksheets.Item(1).Range("A5").AutoComplete("Ap")
    if (s.length > 0) {
        MsgBox("Completes to " + s)
    } else {
        MsgBox("Has no completion")
    }
}
```


```JavaScript
/*本示例将 A1 单元格的值设置为金山办公，显示 A6 单元格中与“金山”相匹配的数据项*/
function test() {
    Range("A1").Value2 = "金山办公"
    alert(Range("A6").AutoComplete("金山"))
}
```
