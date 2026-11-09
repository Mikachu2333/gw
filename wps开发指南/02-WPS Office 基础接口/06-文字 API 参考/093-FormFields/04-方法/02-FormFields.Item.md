# FormFields.Item

返回集合中的单个 **FormField** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **FormFields** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 **String** 类型值。 |

## 返回值

FormField

## 示例


```JavaScript
/*本示例显示活动文档上第一个窗体域的名称。*/
function test() {
    alert(ActiveDocument.FormFields.Item(1).Name)
}
```


```JavaScript
/*本示例显示所选的第二个窗体域的类型是否为wdFieldFormCheckBox。*/
function test() {
    let formField = Selection.FormFields.Item(2)
    alert(formField.Type == wdFieldFormCheckBox)
}
```
