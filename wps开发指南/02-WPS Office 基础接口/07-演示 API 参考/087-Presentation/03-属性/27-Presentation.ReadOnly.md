# Presentation.ReadOnly

返回指定的演示文稿是否为只读。 **MsoTriState** 类型，只读。



## 语法

express.**ReadOnly**

express   一个代表 **Presentation** 对象的变量。

## 类型

MsoTriState

## 说明


 **ReadOnly** 可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ---------------- | ------------------ |
| **msoFalse** | 指定演示文稿不是只读的。 |
| **msoTrue** | 指定演示文稿只读。 |



## 示例


```JavaScript
/*如果活动演示文稿为只读，本示例将另存到文件“Newfile.ppt”。*/
function test() {
    let presentation = Application.ActivePresentation
    if (presentation.ReadOnly == msoTrue) {
        presentation.SaveAs("D:\\Newfile.ppt")
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿是否为只读。*/
function test() {
    let readOnly = Application.Presentations.Item(1).ReadOnly
    if (readOnly == msoTrue) {
        alert("当前第一篇演示文稿是只读的。")
    } else {
        alert("当前第一篇演示文稿不是只读的。")
    }
}
```
