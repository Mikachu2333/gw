# Fields.Locked

如果 **Fields** 集合中的所有域都已被锁定，则该属性值为 **msoTrue** 。可读写 **Long** 类型。



## 语法

express.**Locked**

express   一个代表 **Fields** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （集合中的部分域已被锁定，而其他域未锁定）。



## 示例


```JavaScript
/*本示例锁定所选内容中的所有域。*/
function test() {
    Selection.Fields.Locked = msoTrue
}
```


```JavaScript
/*如果活动文档中的部分域已被锁定，则以下示例将显示一条消息。*/
function test() {
    let fields = ActiveDocument.Fields
    if (fields.Locked == wdUndefined) {
        MsgBox("Some fields are locked")
    } else if (fields.Locked == msoFalse) {
        MsgBox("No fields are locked")
    } else if (fields.Locked == msoTrue) {
        MsgBox("All fields are locked")
    }
}
```
