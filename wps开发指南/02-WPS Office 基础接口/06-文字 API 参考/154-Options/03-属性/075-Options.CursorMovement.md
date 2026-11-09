# Options.CursorMovement

返回或设置在双向文字中插入点移动的方式。 **WdCursorMovement** 类型，可读写。



## 语法

express.**CursorMovement**

express   一个代表 **Options** 对象的变量。

## 类型

WdCursorMovement

## 示例


```JavaScript
/*当插入点在双向文字中移动时，本示例使其前进至下一个可见的邻近字符。*/
function test() {
    Options.CursorMovement = wdCursorMovementVisual
}
```


```JavaScript
/*本示例显示在双向文字中插入点移动的方式。*/
function test() {
    switch (Options.CursorMovement) {
        case wdCursorMovementLogical:
            alert("插入点根据 WPS 检测到的语言的方向前进。")
            break
        case wdCursorMovementVisual:
            alert("插入点前进至下一个可见的邻近字符。")
            break
    }
}
```
