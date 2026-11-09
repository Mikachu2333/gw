# DocumentWindows.Count

返回指定集合中的对象数。只读。



## 语法

express.**Count**

express   一个代表 **DocumentWindows** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*以下示例关闭除当前窗口外的所有窗口*/
function test() {
    let windows = Application.Windows
    for (let i = windows.Count; i >= 2; i--) {
        windows.Item(i).Close()
    }
}
```
