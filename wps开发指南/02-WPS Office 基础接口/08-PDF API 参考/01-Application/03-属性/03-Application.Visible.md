# Application.Visible

获取或设置应用程序窗口的可见性。读取时返回 `-1`（可见）或 `0`（隐藏）；写入时传入 `-1` 显示窗口，传入 `0` 隐藏窗口。 **Number** 类型，可读写。

## 语法

express.**Visible**

express   一个代表 **Application** 对象的变量。

## 类型

number

## 示例

```JavaScript
// 显示窗口
app.Visible = -1;

// 隐藏窗口
app.Visible = 0;

// 判断当前是否可见
if (app.Visible !== 0) {
    console.log("应用程序窗口可见");
}
```
