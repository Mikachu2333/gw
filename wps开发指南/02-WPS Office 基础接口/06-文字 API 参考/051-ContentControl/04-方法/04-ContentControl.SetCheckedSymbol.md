# ContentControl.SetCheckedSymbol

设置用于代表复选框内容控件的选中状态的符号。



## 语法

express.**SetCheckedSymbol(CharacterNumber, Font)**

express   一个代表 **ContentControl** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| CharacterNumber | 必选 | number（int4 精度） | 指定符号的 Unicode 字符编号。该值始终是 31（字体开始处的控件符号的数目）加上此符号在符号表中的位置（从左向右计算）相应的数字。例如，若要指定一个位于 Symbol 字体符号表中第 37 号位置的 delta 字符，请将 CharacterNumber 设置为 68。 |
| Font | 可选 | string | 包含符号的字体的名称。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将新建复选框内容控件的选中符号设置为“MS Gothic”字体“Ballot Box with X”符号。*/
function test() {
    let control = Application.ActiveDocument.ContentControls.Add(wdContentControlCheckBox)
    control.SetCheckedSymbol(0x2612, "MS Gothic")
}
```


```JavaScript
/*本示例设置所选内容中第四个（复选框）内容控件的选中状态的符号。*/
function test() {
    let control = Selection.ContentControls.Item(4)
    control.SetCheckedSymbol(0x2191, "黑体")
}
```
