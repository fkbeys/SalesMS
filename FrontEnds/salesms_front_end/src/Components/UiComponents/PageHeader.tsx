import { Paper } from "@mui/material";
type Props = {
  title: string;
};
const PageHeader = ({ title }: Props) => {
  return (
    <Paper elevation={3} sx={{ backgroundColor: "#EAE8E8" }}>
      <h4 style={{ padding: 5 }}>{title}</h4>
    </Paper>
  );
};

export default PageHeader;
