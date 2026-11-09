# KeysBoundTo.Item

返回集合中的单个 **KeyBinding** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **KeysBoundTo** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

KeyBinding

## 示例


```JavaScript
/*本示例显示分配给FileClose组合键中第一个键绑定的命令。*/
function test() {
    let keyBinding = Application.KeysBoundTo(wdKeyCategoryCommand, "FileClose").Item(1)
    alert(keyBinding.Command)
}
```


```JavaScript
/*本示例将所选内容的文本替换为分配给FileClose组合键中第一个键绑定的组合键字符串。*/
function test() {
    let keyBinding = Application.KeysBoundTo(wdKeyCategoryCommand, "FileClose").Item(1)
    Selection.Range.Text = keyBinding.KeyString
}
```
