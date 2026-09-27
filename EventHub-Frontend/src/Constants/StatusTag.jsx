// import { Tag } from 'antd';
// import { STATUS_CONFIG, DEFAULT_STATUS } from './StatusColor';

// export function StatusTag({ status }) {
//   const config = STATUS_CONFIG[status] || { ...DEFAULT_STATUS, label: status };
//   return <Tag color={config.color}>{config.label}</Tag>;
// }



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


// import StatusTag from '../components/StatusTag';

// const columns = [


//   { title: 'Event Name', dataIndex: 'name', key: 'name' },
//   {
//     title: 'Status',
//     dataIndex: 'status',
//     key: 'status',
//     render: (status) => <StatusTag status={status} />,   // ← idhே ondrு varі, CSS venam
//   },
// ];

// <Table columns={columns} dataSource={events} />