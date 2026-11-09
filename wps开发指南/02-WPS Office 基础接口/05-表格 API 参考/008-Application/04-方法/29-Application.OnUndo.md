# Application.OnUndo

设置“撤消”命令的文本以及运行此属性的过程后选择“撤消”命令时运行的过程的名称。



## 语法

express.**OnUndo(Text, Procedure)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Text | 必选 | string | 使用 **“撤消”** 命令显示的文本。 |
| Procedure | 必选 | string | 选择 **“撤消”** 命令时运行的过程的名称。 |

## 返回值

void

## 说明


如果过程不使用 **OnUndo** 方法，将禁用 **“撤消”** 命令。

过程必须在最后用 **[OnRepeat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/OnRepeat)** 方法和 **OnUndo** 方法，以免过程中的后续操作覆盖掉要重复和撤消的过程。



## 示例


```JavaScript
/*本示例对重复和撤消过程进行设置。*/
function test() {
    Application.OnRepeat("Repeat WPS Procedure", "example.xlsx!My_Repeat_Sub")
    Application.OnUndo("Undo WPS Procedure", "example.xlsx!My_Undo_Sub")
}
```


```JavaScript
/*本示例对撤销过程进行设置。*/
function test() {
    Application.OnUndo("example", "test1")
}
```
