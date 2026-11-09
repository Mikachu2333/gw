# Windows.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **Windows** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*以下示例关闭除第一个窗口外的所有窗口。*/
function test() {
    let wins = Application.Windows
    for (let i = 2; i <= wins.Count; i++) {
        wins.Item(i).Close()
    }
}
```
