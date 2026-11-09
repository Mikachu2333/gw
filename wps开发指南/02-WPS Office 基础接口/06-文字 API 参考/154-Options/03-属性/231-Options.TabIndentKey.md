# Options.TabIndentKey

如果可分别使用 Tab 和 Backspace 键增加和减少段落的左缩进，并且可使用 Backspace 键将右对齐的段落更改为居中的段落而将居中的段落更改为左对齐的段落，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**TabIndentKey**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 使用 Tab 和 Backspace 键来设置段落的左缩进而不是插入和删除制表位。*/
function test() {
    Options.TabIndentKey = true
}
```


```JavaScript
/*本示例判断如果 WPS 使用 Tab 和 Backspace 键来设置段落的左缩进，则通知用户。*/
function test() {
    if (Application.Options.TabIndentKey) {
        alert("WPS 使用 Tab 和 Backspace 键来设置段落的左缩进")
    }
}
```
