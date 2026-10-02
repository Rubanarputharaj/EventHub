import { Tag } from "antd";
import { STATUS_CONFIG, DEFAULT_STATUS } from "./StatusColor";

export function StatusTag({ status }) {
  const config = STATUS_CONFIG[status] || {
    ...DEFAULT_STATUS,
    label: status,
  };

  return (
    <Tag
      className="status-tag"
      style={{
        backgroundColor: config.bg,
        color: config.text,
        borderColor: config.border,
        padding:"1px 9px",
      }}
    >
      {config.label}
    </Tag>
  );
}
