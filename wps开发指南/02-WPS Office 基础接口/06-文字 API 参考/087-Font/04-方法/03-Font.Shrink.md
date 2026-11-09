# Font.Shrink

将字号减小为下一个可用的字号。



## 语法

express.**Shrink()**

express   一个代表 **Font** 对象的变量。

## 返回值

void

## 说明


如果所选内容或范围中包括多种字号，则将每一个字号都减小为下一个可用的设置。



## 示例


```JavaScript
/*本示例在新文档中插入一行字号逐渐减小的字母 Z。*/
function test() {
    let range = Documents.Add().Content
    range.Font.Size = 45
    for (let i = 1; i <= 5; i++) {
        range.InsertAfter("Z")
        for (let r = 1; r <= 3; r++) {
            range.Characters.Item(i).Font.Shrink()
        }
    }
}
```


```JavaScript
/*本示例将所选内容的字体的字号减小为下一个可用的字号。*/
function test() {
    Selection.Font.Shrink()
}
```
