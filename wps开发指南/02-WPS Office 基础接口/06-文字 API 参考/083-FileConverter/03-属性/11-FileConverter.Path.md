# FileConverter.Path

返回指定对象的磁盘或 Web 路径。只读 **String** 类型。




## 语法

express.**Path**

express   一个代表 **FileConverter** 对象的变量。

## 类型

string

## 说明


该路径不包括尾部字符，例如，“C:\\WPSOffice”或“http\://MyServer”。使用 **PathSeparator** 属性可添加分隔文件夹与驱动器号的字符，使用 **Name** 属性可返回不带路径的文件名。您可以通过将 **Path** 、 **PathSeparator** 和 **Name** 属性连接在一起来创建文件转换器的完整名称。

