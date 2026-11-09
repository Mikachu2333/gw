# Browser.Parent

父浏览器。

## 语法

express.**Parent**

express   一个代表 **Browser** 对象的变量。

## 类型

Browser | undefined，只读。

## 说明

如果此浏览器是由弹出窗口创建的子浏览器，返回打开它的父浏览器。顶层浏览器返回 `undefined`。
