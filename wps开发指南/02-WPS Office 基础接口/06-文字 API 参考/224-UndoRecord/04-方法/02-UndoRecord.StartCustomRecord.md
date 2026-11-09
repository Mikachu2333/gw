# UndoRecord.StartCustomRecord

开始创建自定义撤消记录。



## 语法

express.**StartCustomRecord(Name)**

express   一个代表 **UndoRecord** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 可选 | string | 指定自定义撤消记录的名称。该字符串的长度不能超过 64 个字符。如果使用了更长的字符串，会将该字符串截断至 64 个字符。 |

## 返回值

void

## 说明


 **StartCustomRecord** 可开始创建自定义撤消记录，该方法在由 _Name_ 定义的记录下记录对活动应用程序执行的所有操作。

如果省略 _Name_ 参数或其为空字符串，WPS 将使用所执行的第一个命令作为撤消记录的名称。



## 示例


```JavaScript
/*本示例将创建自定义撤消记录。*/
function test() {
    Application.UndoRecord.StartCustomRecord("My Custom Undo")
    // Add some actions here
    Application.UndoRecord.EndCustomRecord()
}
```


```JavaScript
/*本示例创建自定义撤销记录，并将所选内容的文本替换为自定义撤销操作的名称。*/
function test() {
    Application.UndoRecord.StartCustomRecord("example")
    Selection.Range.Text = Application.UndoRecord.CustomRecordName
    Application.UndoRecord.EndCustomRecord()
}
```
