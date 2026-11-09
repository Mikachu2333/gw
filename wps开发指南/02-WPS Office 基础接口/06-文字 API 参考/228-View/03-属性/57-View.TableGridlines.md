# View.TableGridlines

如果显示表格虚框，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**TableGridlines**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动窗口中的表格虚框。*/
function test() {
    ActiveDocument.ActiveWindow.View.TableGridlines = true
}
```


```JavaScript
/*本示例显示与第一个窗口相关的各个窗格的表格虚框。*/
function test() {
    let panes = Windows.Item(1).Panes
    for (let i = 1; i <= panes.Count; i++) {
        panes.Item(i).View.TableGridlines = true
    }
}
```
