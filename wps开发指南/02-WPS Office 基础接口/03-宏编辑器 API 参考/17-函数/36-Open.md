# Open

打开文件以进行读写操作。

## 语法

```typescript
function Open(PathName: string, FileNumber: string, Mode?: number, Access?: number, Lock?: number, Len?: number): void
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PathName | 必选 | string | 文件路径。 |
| FileNumber | 必选 | string | 文件号字符串（如 `"#1"`）。 |
| Mode | 可选 | number | 打开模式枚举值，默认为随机存取（Random，5）。 |
| Access | 可选 | number | 访问权限枚举值，默认为只读（Read，1）。 |
| Lock | 可选 | number | 共享锁定模式枚举值，默认为共享（LockShared，4）。 |
| Len | 可选 | number | 记录长度（字节）。 |

## 说明

以指定模式打开文件并关联到一个文件号。打开后通过文件号进行后续的读写操作（[Input](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Input)、[Write](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Write)、[Get](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Get)、[Put](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Put) 等），完成后使用 [Close](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Close) 关闭。

**Mode** 参数控制打开方式，可选值如下：

| 设置 | 值 | 描述 |
| --- | --- | --- |
| Input | 1 | 顺序读取，文件必须已存在 |
| Output | 2 | 顺序写入，创建新文件或截断已有文件 |
| Append | 3 | 追加写入，不存在则创建 |
| Binary | 4 | 二进制读写模式（打开或创建） |
| Random | 5 | 随机读写（默认） |

**Access** 的可选值如下：

| 设置 | 值 | 描述 |
| --- | --- | --- |
| Read | 1 | 只读（默认） |
| Write | 2 | 只写 |
| ReadWrite | 3 | 读写 |

未传入 Access 时，默认使用只读访问（`GENERIC_READ`）。

**Lock** 的可选值如下：

| 设置 | 值 | 描述 |
| --- | --- | --- |
| LockRead | 1 | 其他进程不能读取该文件，但可以写入 |
| LockWrite | 2 | 其他进程不能写入该文件，但可以读取 |
| LockReadWrite | 3 | 其他进程不能读写该文件 |
| LockShared | 4 | 任何进程均可读写该文件（默认） |

未传入 Lock 时，默认为共享锁定（`FILE_SHARE_READ | FILE_SHARE_WRITE`）。

FileNumber 为字符串格式（如 `"#1"`），须为以 `#` 开头的数字字符串，有效范围为 1～511，不能与已打开的文件号重复。可用 [FreeFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/FreeFile) 获取可用文件号。
Len 指定记录长度（Random 模式默认 `126`，其他模式默认 `512`）。

## 示例

```javascript
/* 顺序读取文件 */
function test() {
  const fn = FreeFile()
  Open("C:\\data.txt", fn, JSOpenMode.Input)
  while (!EOF(fn)) {
    Debug.Print(LineInput(fn))
  }
  Close(fn)
}
```

```javascript
/* 写入文件 */
function test() {
  const fn = FreeFile()
  Open("C:\\output.txt", fn, JSOpenMode.Output)
  Write(fn, "Hello, World!")
  Close(fn)
}
```
