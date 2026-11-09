# Application.OnRepeat

设置“重复”项以及在运行设置此属性的过程后选择“重复”命令时将运行的过程的名称。



## 语法

express.**OnRepeat(Text, Procedure)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Text | 必选 | string | 使用 **“重复”** 命令显示的文本。 |
| Procedure | 必选 | string | 使用 **“重复”** 命令时将运行的过程的名称。 |

## 返回值

void

## 说明


如果过程不使用 **OnRepeat** 方法，则 **“重复”** 命令将重复最近一次运行的过程。

过程必须在最后用 **OnRepeat** 方法和 **OnUndo** 方法，以免过程中的后续操作覆盖掉要重复和撤消的过程。



## 示例


```JavaScript
/*本示例对重复和撤消过程进行设置。*/
function test() {
    Application.OnRepeat("Repeat WPS Procedure", "example.xlsx!My_Repeat_Sub")
    Application.OnUndo("Undo WPS Procedure", "example.xlsx!My_Undo_Sub")
}
```


```JavaScript
/*本示例对重复过程进行设置。*/
function test() {
    Application.OnRepeat("example", "test1")
}
```
