# Dialogs.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **Dialogs** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | XlBuiltInDialog | Variant。对象的名称或索引号。 |

## 返回值

Dialog

## 示例


```JavaScript
/*此示例显示“打开文件”对话框，并选定“只读”选项。*/
function test() {
    Application.Dialogs.Item(xlDialogOpen).Show(null, null, true)
}
```


```JavaScript
/*本示例打开“图案”对话框，并显示用户的选择。*/
function test() {
    if (Application.Dialogs.Item(xlDialogPatterns).Show()) {
        alert(" 用户选择“确定” ")
    } else {
        alert(" 用户选择“取消” ")
    }
}
```
