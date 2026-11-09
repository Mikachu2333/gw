# Application.StatusBar

返回或设置状态栏中的文字。 **String** 类型，可读写。



## 语法

express.**StatusBar**

express   一个代表 **Application** 对象的变量。

## 类型

any

## 说明


如果 ET 控制状态栏，则本属性返回 **False** 。若要恢复默认的状态栏文字，可将本属性设为 **False** ，这在状态栏处于隐藏状态时也起作用。



## 示例


```JavaScript
/*本示例在打开 example.xlsx 工作簿之前将状态栏文字设为“Please be patient...”，然后将状态栏恢复为默认文字。*/
function test() {
    let oldStatusBar = Application.DisplayStatusBar
    Application.DisplayStatusBar = true
    Application.StatusBar = "Please be patient..."
    Application.Workbooks.Open("D:\\example.xlsx")
    Application.StatusBar = false
    Application.DisplayStatusBar = oldStatusBar
}
```


```JavaScript
/*本示例显示状态栏中的文字。*/
function test() {
    alert(`状态栏的文字：${Application.StatusBar}`)
}
```
