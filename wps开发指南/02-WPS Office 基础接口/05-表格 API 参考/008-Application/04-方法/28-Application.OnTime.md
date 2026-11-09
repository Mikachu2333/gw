# Application.OnTime

安排一个过程在将来的特定时间运行（既可以是具体指定的某个时间，也可以是指定的一段时间之后）。



## 语法

express.**OnTime(EarliestTime, Procedure, LatestTime, Schedule)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| EarliestTime | 必选 | any | 希望此过程运行的时间。 |
| Procedure | 必选 | string | 要运行的过程名。 |
| LatestTime | 可选 | any | 过程开始运行的最晚时间。例如，如果 _LatestTime_ 参数设置为 _EarliestTime_ \+ 30，且当到达 _EarliestTime_ 时间时，由于其他过程处于运行状态而导致 ET 不能处于“就绪”、“复制”、“剪切”或“查找”模式，则 ET 将等待 30 秒让第一个过程先完成。如果 ET 不能在 30 秒内回到“就绪”模式，则不运行此过程。如果省略该参数，ET 将一直等待到可以运行该过程为止。 |
| Schedule | 可选 | any | 如果为 **True** ，则预定一个新的 OnTime 过程。如果为 **False** ，则清除先前设置的过程。默认值为 **True** 。 |

## 返回值

void

## 说明


_EarliestTime_ 的值舍入到最接近的秒。

将 “计划” 设置为 **False** ，以清除以前使用相同的 _Procedure_ 和 _EarliestTime_ 值设置的过程。

_Procedure_ 必须不带参数，并且不能在自定义类或表单中声明。



## 示例


```JavaScript
/*本示例设置从现在开始 15 秒后运行 example。*/
function test() {
    let date = new Date()
    let hours = date.getHours().toString().padStart(2, '0')
    let minutes = date.getMinutes().toString().padStart(2, '0')
    let seconds = (date.getSeconds() + 15).toString().padStart(2, '0')
    let time = hours + ':' + minutes + ':' + seconds
    Application.OnTime(time, "example")
}
```


```JavaScript
/*此示例在下午 5 点运行 example。*/
function test() {
    Application.OnTime("17:00:00", "example")
}
```


```JavaScript
/*本示例撤消前一个示例对 OnTime 的设置。*/
function test() {
    Application.OnTime("17:00:00", "example", null, false)
}
```
