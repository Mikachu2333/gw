# Comment.Author

返回或设置一个 **String** 类型的值，该值代表某一批注的作者姓名。可读写。




## 语法

express.**Author**

express   一个代表 **Comment** 对象的变量。

## 类型

string

## 示例


```JavaScript
/* 本示例设置作者姓名，并且为活动文档的第一个批注设置作者姓名缩写。 */
function test() {
    if (Application.ActiveDocument.Comments.Count >= 1) {
        let rng = Application.ActiveDocument.Comments.Item(1)
        rng.Author = ("Joe Smith")
        rng.Initial = ("JAS")
    }
}

```
