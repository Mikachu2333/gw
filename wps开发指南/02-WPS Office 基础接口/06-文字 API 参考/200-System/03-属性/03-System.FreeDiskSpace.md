# System.FreeDiskSpace

以字节为单位返回当前驱动器的可用磁盘空间。使用 ChDrive 语句可更改当前驱动器。 **Long** 类型，只读。



## 语法

express.**FreeDiskSpace**

express   一个代表 **System** 对象的变量。

## 类型

number（int4 精度）

## 说明


一千字节包含 1024 字节，一兆字节包含 1,048,576 字节。 **FreeDiskSpace** 属性返回的最大值为 2,147,483,647。因此，即使可用磁盘空间为 4 GB，该属性仍返回 2,147,483,647。



## 示例


```JavaScript
/*本示例检查可用磁盘空间的大小，如果可用空间小于 10 MB，则显示一条消息。*/
function test() {
    if (Application.System.FreeDiskSpace / 1048576 < 10) {
        alert("Low disk space")
    }
}
```


```JavaScript
/*本示例显示可用磁盘空间，单位MB。*/
function test() {
    alert(Application.System.FreeDiskSpace / (1024 * 1024) + " MB")
}
```
