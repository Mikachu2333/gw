# DropCap.Clear

取消首字下沉格式。



## 语法

express.**Clear()**

express   一个代表 **DropCap** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*此示例取消活动文档上第一个段落中的首字下沉格式。*/
function test() {
    let dropCap = ActiveDocument.Paragraphs.Item(1).DropCap
    if (dropCap != null) {
        dropCap.Clear()
    }
}
```


```JavaScript
/*此示例取消所选内容中第一个段落的首字下沉格式。*/
function test() {
    Selection.Paragraphs.Item(1).DropCap.Clear()
}
```
