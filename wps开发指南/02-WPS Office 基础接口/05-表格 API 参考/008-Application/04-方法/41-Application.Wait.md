# Application.Wait

暂停运行宏，直到一特定时间才可继续执行。如果到达指定时间，则该值为 **True** 。



## 语法

express.**Wait(Time)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Time | 必选 | any | 希望宏继续执行的时间（以 ET 日期格式表示）。 |

## 返回值

Boolean

## 说明


 **Wait** 方法暂停 ET 的所有操作，并且， **Wait** 起作用时可能禁止您对计算机做其他操作。不过，后台操作（如打印和重新计算）将继续进行。



## 示例


```JavaScript
/*本示例暂停一个正在执行的宏，到今天下午 6:23 时才可继续执行。*/
function test() {
    Application.Wait("18:23:00")
}
```


```JavaScript
/*本示例暂停正在运行的宏大约 10 秒钟。*/
function test() {
    let date = new Date()
    let hours = date.getHours().toString().padStart(2, '0')
    let minutes = date.getMinutes().toString().padStart(2, '0')
    let seconds = (date.getSeconds() + 10).toString().padStart(2, '0')
    let time = hours + ':' + minutes + ':' + seconds
    Application.Wait(time)
    alert(ActiveSheet.Name)
}
```


```JavaScript
/*本示例显示消息，指明是否已过了 10 秒。*/
function test() {
    let date = new Date()
    let hours = date.getHours().toString().padStart(2, '0')
    let minutes = date.getMinutes().toString().padStart(2, '0')
    let seconds = (date.getSeconds() + 10).toString().padStart(2, '0')
    let time = hours + ':' + minutes + ':' + seconds
    if (Application.Wait(time)) {
        alert("Time expired")
    }
}
```
