# RecentFile.Index

返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **RecentFile** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示最近使用的最后一个文件的索引。*/
function test() {
    let count = Application.RecentFiles.Count
    alert(Application.RecentFiles.Item(count).Index)
}
```


```JavaScript
/*本示例判断如果最近使用的文件的名称为“example.docx”，则将该文件的索引添加到数组“arr”中，然后显示。*/
function test() {
    let arr = []
    for (let i = 1; i <= Application.RecentFiles.Count; i++) {
        let recentFile = Application.RecentFiles.Item(i)
        if (recentFile.Name == "example.docx") {
            arr.push(recentFile.Index)
        }
    }
    alert(arr.toString())
}
```
