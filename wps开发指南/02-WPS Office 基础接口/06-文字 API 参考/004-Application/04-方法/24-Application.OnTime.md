# Application.OnTime

启动在指定的时间运行宏的后台计时器。



## 语法

express.**OnTime(When, Name, Tolerance)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| When | 必选 | any | 运行宏的时间。 |
| Name | 必选 | string | 要运行的宏的名称。 |
| Tolerance | 可选 | any | 表示未在 *When* 指定的时间运行的宏最多经过多长时间（单位为秒）被取消。宏不一定总在指定时间运行。例如，如果正在进行排序操作，或者正在显示某一对话框，则宏将延迟到 WPS 完成当前任务后才运行。如果该参数值为 0（零）或被省略，则不管距 *When* 指定的时间逾期多久，宏都将运行。 |

## 返回值

void

## 说明


*When* 参数可以是指定时间的字符串（如 `"4:30 pm"` 或 `"16:30"`），也可以包括日期（如 `"6/30 4:15 pm"`）。

对于 *Name* 参数，应使用完整的宏路径来确保运行正确的宏（如 `"Project.Module1.Macro1"`）。对于要运行的宏，文档或模板必须同时满足以下条件：既在 **OnTime** 指令运行时可用，又在到达 *When* 指定的时间时可用。因此，最好将宏存储在 Normal.dotm 或其他能够自动加载的共用模板上。

WPS 只能保留一个由 **OnTime** 设置的后台计时器。如果在现有计时器运行前启动另一个计时器，则将取消现有计时器。



## 示例


```JavaScript
/*本示例在 3:55 P.M 运行当前模块中名为“Macro1”的宏。*/
function test() {
    Application.OnTime("15:55:00", "Macro1")
}
```


```JavaScript
/*本示例在运行 15 秒后运行名为“Macro1”的宏。宏的名称包括项目名称和模块名称。*/
function test() {
    let data = new Date()
    let time = data.getTime()
    data.setTime(time + 1000 * 15)
    Application.OnTime(data.toLocaleString(), "Project.Module1.Macro1")
}
```


```JavaScript
/*本示例在 1:30 P.M 运行名为“Start”的宏。*/
function test() {
    Application.OnTime("1:30 pm", "JSProject.Module1.Start")
}
```
