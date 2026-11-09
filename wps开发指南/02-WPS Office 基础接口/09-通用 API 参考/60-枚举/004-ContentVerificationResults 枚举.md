# ContentVerificationResults 枚举

提供验证文档内容是否已更改的状态。

| 名称                       | 值 | 说明                 |
| ------------------------ | - | ------------------ |
| **contverresError**      | 0 | 验证导致了错误。           |
| **contverresModified**   | 4 | 文档内容自从经过数字签名之后已修改。 |
| **contverresUnverified** | 2 | 文档尚未验证。            |
| **contverresValid**      | 3 | 文档内容已验证且有效。        |
| **contverresVerifying**  | 1 | 文档内容当前正在验证。        |
