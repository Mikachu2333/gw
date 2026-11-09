# Selection.HomeKey

将选定内容移动或扩展至指定单位的开始。该方法返回表明选定内容实际移动的字符数的整数；如果移动不成功，则返回 0（零）。该方法相当于 **Home** 键的功能。



## 语法

express.**HomeKey(Unit, Extend)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 移动或扩展选定内容时基于的单位。默认值为 **wdLine** 。 |
| Extend | 可选 | any | 指定移动所选内容的方式。可以是 **WdMovementType** 常量之一。如果该参数值为 **wdMove** ，则所选内容折叠到一个插入点中并移至指定单位的开头。如果参数值为 **wdExtend** ，则所选内容的开头扩展到指定单位的开头。默认值为 **wdMove** 。 |

## 返回值

number（int4 精度）

## 示例


```JavaScript
/*本示例将所选内容移至当前文字部分的开头。如果所选内容位于文档正文部分，则本示例将所选内容移至文档的开头。*/
function test() {
    Selection.HomeKey(wdStory, wdMove)
}
```


```JavaScript
/*本示例将选定内容移到当前行首，将移动的字符数赋给变量 pos。*/
function test() {
    let pos = Selection.HomeKey(wdLine, wdMove)
    if (!pos) {
        let statusBar = "Selection was not moved"
    }
}
```
