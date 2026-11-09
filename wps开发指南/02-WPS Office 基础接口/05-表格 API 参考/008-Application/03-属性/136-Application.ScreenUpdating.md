# Application.ScreenUpdating

如果启用屏幕更新，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ScreenUpdating**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


关闭屏幕更新可加快宏的执行速度。这样将看不到宏的执行过程，但宏的执行速度加快了。

当宏结束运行后，请记住将 **ScreenUpdating** 属性设置回 **True** 。



## 示例


```JavaScript
/*此案例关闭屏幕更新以提高代码运行速度。本示例先新增一张工作表，然后隐藏了第一张工作表和第二张工作表上的所有其他列，同时跟踪执行此操作所花费的时间。该示例隐藏第一张工作表的列时，屏幕更新处于打开状态；隐藏第二张工作表的列时，屏幕更新处于关闭状态。运行此示例时，您可以比较相应的运行时间，这些时间显示在消息框中。*/
function test() {
    Worksheets.Add(null, Worksheets.Item(1))
    let elapsedTimes = new Array(2)
    Application.ScreenUpdating = true
    for (let i = 1; i <= 2; i++) {
        Worksheets.Item(i).Activate()
        if (i == 2) {
            Application.ScreenUpdating = false
        }
        let startTime = Date.now()
        for (let j = 1; j <= ActiveSheet.Columns.Count; j++) {
            if (ActiveSheet.Columns.Item(j).Column % 2 == 0) {
                ActiveSheet.Columns.Item(j).Hidden = true
            }
        }
        let stopTime = Date.now()
        elapsedTimes[i - 1] = (stopTime - startTime) / 1000
    }
    Application.ScreenUpdating = true
    alert(`Elapsed time, screen updating on: ${elapsedTimes[0]} sec.\nElapsed time, screen updating off: ${elapsedTimes[1]} sec.`)
}
```


```JavaScript
/*本示例显示屏幕更新是否启用。*/
function test() {
    alert(Application.ScreenUpdating)
}
```
