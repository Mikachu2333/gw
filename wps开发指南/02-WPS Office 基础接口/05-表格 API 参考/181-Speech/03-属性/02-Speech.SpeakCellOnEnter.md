# Speech.SpeakCellOnEnter

当按下 Enter 或完成了对活动单元格的编辑时，ET 支持朗读活动单元格的模式。如果 **SpeakCellOnEnter** 属性为 **True** ，则打开此模式。如果为 **False** ，则关闭此模式。 **Boolean** 类型，可读写。



## 语法

express.**SpeakCellOnEnter**

express   一个代表 **Speech** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例确定在按下 Enter 或完成了对活动单元格的编辑时，是否朗读活动单元格，并通知用户。*/
function test() {
    // Determine mode setting and notify user.
    if (Application.Speech.SpeakCellOnEnter) {
        alert("The Speak On Enter mode is turned on. The active cell will be spoken when the ENTER key is pressed or it is done being edited.")
    } else {
        alert("The Speaker On Enter mode is turned off.")
    }
}
```


```JavaScript
/*本示例将ET设置为在按下 Enter 键或编辑完活动单元格时朗读活动单元格。*/
function test() {
    Application.Speech.SpeakCellOnEnter = true
}
```
