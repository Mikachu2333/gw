# Application.Run

运行JS宏。



## 语法

express.**Run(MacroName, safeArrayOfParams)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| MacroName | 必选 | string | 要运行的宏的名称。该字符串可包含下列内容：后跟感叹号 (!) 的加载演示文稿或加载宏文件名、后跟句点 (.) 的有效模块名称以及宏名称。例如，“MyPres.ppt!Module1.Test”是一个有效的 MacroName 值。 |
| safeArrayOfParams | 必选 | any[] | 要传递给该过程的参数。可以为此参数指定对象。不能将命名参数用于此方法。参数必须按位置传递。 |

## 返回值

Variant

## 说明


宏可能包含病毒，因此在运行宏时要格外小心。请采用下列预防措施：在计算机上运行最新的防病毒软件；将宏安全级别设置为“高”；清除“信任所有安装的加载项和模板”复选框；使用数字签名；维护受信任的发布者的列表。



## 示例


```JavaScript
/*在本示例中，test 过程定义一个数组，然后运行宏 TestPass，将该数组作为参数传递。*/
function test() {
    let x = []
    x[0] = "hi"
    x[1] = 7
    Application.Run("TestPass", x)
}

function TestPass(...x) {
    alert(x[0])
    alert(x[1])
}
```


```JavaScript
/*在本示例中，活动窗口作为对象传递给过程 ShowSlideName。*/
function test() {
    let arr = [ActiveWindow.View.Slide]
    Application.Run("ShowSlideName", arr)
}

function ShowSlideName(oSld) {
    alert(oSld.Name)
}
```


```JavaScript
/*在本示例中，将多个参数传递给过程 ShowData。*/
function test() {
    let arr = [100, "my text", true]
    Application.Run("ShowData", arr)
}

function ShowData(i, t, b) {
    alert(i)
    alert(t)
    alert(b)
}
```
